/*
Name: Components
Developer: Mehdi Maarefian
Version: 0.1
*/


if (typeof listComponent === 'undefined') {
    var listComponent = {
        ComponentTest:                       "component-test" ,                           //0

        ComponentMessages:                   "component-messages" ,                       //1
        ComponentLoading:                    "component-loading" ,                        //2
        Component404:                        "component-404" ,                            //3
        ComponentForm:                       "component-form" ,                           //4
        ComponentIsEmpty:                    "component-is-empty" ,                       //5
        ComponentHeader:                     "component-header" ,                         //6
        ComponentCollapse:                   "component-collapse" ,                       //7
        ComponentTable:                      "component-table" ,                          //8
        ComponentButton:                     "component-button" ,                         //9
        ComponentSelectOption:               "component-select-option" ,                  //10
        ComponentTabs:                       "component-tabs" ,                           //11
        ComponentOtp:                        "component-otp" ,                            //12
        ComponentWidget:                     "component-widget" ,                         //13
        ComponentInput:                      "component-input" ,                          //14
        ComponentInputPrice:                 "component-input-price" ,                    //15
        ComponentDate:                       "component-date" ,                           //16
        ComponentLabel:                      "component-label" ,                          //17
        ComponentIcon:                       "component-icon" ,                           //18
        ComponentPositionElement:            "component-position-element" ,               //19
        ComponentInfo:                       "component-info" ,                           //20
        ComponentBorder:                     "component-border" ,                         //21
        ComponentImage:                      "component-image" ,                          //22
        ComponentLink:                       "component-link" ,                           //23
        ComponentDescription:                "component-description" ,                    //24
        ComponentChart:                      "component-chart" ,                          //25
    }
}
if (typeof components === 'undefined') {
    var components = new WeakMap();
}





/* -------------------------------------
 Component Make:
------------------------------------- */
class ComponentMaker {
    define(elId , props , componentName, templateFn , onCreate , onRender , parts , schema) {

        console.log(document.getElementById(props))

        if (!customElements.get(componentName)) {

            customElements.define(
                componentName,
                class extends HTMLElement {
                    constructor() {
                        super();

                        this._observer = null;
                        this._randomId = Math.floor(Math.random() * 10000);

                        /*if (parts == null){
                            parts = {};
                        }*/

                        /*parts.component = this._getComponentProps()
                        this._data = parts;*/
                        const localProps = typeof props === "function" ? props() : {};
                        const localParts = typeof parts === "function" ? parts() : {};

                        this._data = {
                            ...localParts,
                            component: this._getComponentProps(localProps)
                        };
                        this._script = `<script type='application/json'>${JSON.stringify(this._data)}</script>`;

                       /* if (parts == null) {
                            parts = {};
                        }

                        const clonedParts = JSON.parse(JSON.stringify(parts));
                        clonedParts.component = this._getComponentProps();

                        this._data = clonedParts;
                        this._script = `<script type='application/json'>${JSON.stringify(this._data)}</script>`;*/
                    }



                    connectedCallback() {
                        this.setAttribute("data_random_id" , this._randomId)
                        if (typeof onCreate === 'function') {
                            onCreate(this._data, this);
                        }
                        this._renderMain();
                        this._initScriptData();
                    }



                    _getCompoents(){
                        let componentSlots = {};
                        const componentSlotNames = [...this.children].filter(
                            el => el.tagName.toLowerCase().startsWith('component-')
                        );

                        if (componentSlotNames != null && Array.isArray(componentSlotNames)){
                            for (const componentTag of componentSlotNames) {
                                componentSlots[componentTag.tagName.toLowerCase().replace(/^component-/, '')] = componentTag.innerHTML;
                            }
                        }
                        return componentSlots;
                    }



                    _findPart(obj , partName) {
                        for (const key in obj) {
                            if (key === partName) {
                                return obj[key]; // پیدا کردیم
                            }
                            if (typeof obj[key] === "object" && obj[key] !== null) {
                                const result = this._findPart(obj[key] , partName);
                                if (result !== undefined) return result;
                            }
                        }

                        return undefined;
                    }



                    _mergePartsFromSchema(schemaNode, parts) {
                        const result = {};

                        if (parts.hasOwnProperty(schemaNode.key)) {
                            Object.assign(result, parts[schemaNode.key]);
                        }

                        const children = schemaNode.value;
                        for (const key in children) {
                            result[key] = this._mergePartsFromSchema({ key: key, value: children[key] }, parts);
                        }

                        return result;
                    }



                    _findDifferences(oldData, newData) {
                        const changedKeys = [];

                        for (const key in newData) {
                            if (!oldData.hasOwnProperty(key)) {
                                changedKeys.push(key); // کلید جدید
                            } else {
                                const oldVal = JSON.stringify(oldData[key]);
                                const newVal = JSON.stringify(newData[key]);
                                if (oldVal !== newVal) {
                                    changedKeys.push(key); // مقدار تغییر کرده
                                }
                            }
                        }

                        for (const key in oldData) {
                            if (!newData.hasOwnProperty(key)) {
                                changedKeys.push(key); // کلید حذف‌شده
                            }
                        }

                        return changedKeys;
                    }


                    _initScriptData() {
                        const script = this.querySelector('script[type="application/json"]');



                        if (script) {

                            if (this._observer) {
                                this._observer.disconnect();
                                this._observer = null;
                            }

                            try {
                                this._data = JSON.parse(script.textContent || '{}');
                            } catch (e) {
                                console.warn('Invalid JSON in script', e);
                                this._data = {};
                            }


                            this._observer = new MutationObserver(() => {

                                let newData;
                                try {
                                    newData = JSON.parse(script.textContent || '{}');
                                } catch (e) {
                                    console.warn('Invalid JSON on mutation', e);
                                    return;
                                }

                                const changes = this._findDifferences(this._data, newData);



                                this._data = newData;

                                if (changes.length > 0) {
                                    for (let i = 0; i < changes.length; i++) {
                                        const itemPart = changes[i];

                                        this._renderMain(itemPart);
                                    }
                                }

                                this._initScriptData();
                            });

                            this._observer.observe(script, {
                                childList: true,
                                characterData: true,
                                subtree: true
                            });

                        }
                    }



                    _renderMain(partName=null){
                        const data = this._data || {};
                        const componentProps = this._getComponentProps();

                        if (partName == "component"){
                            partName = null;
                        }


                        if (componentProps.hasOwnProperty("classList")){
                            this.classList = tools_public.renderListClass(componentProps.classList);
                        }
                        if (componentProps.hasOwnProperty("styles")){
                            Object.entries(componentProps.styles).forEach(([key, value]) => {
                                this.style[key] = value;
                            });
                        }



                        let elContent = this.getElementsByTagName('content');
                        if (elContent.length == 0) {
                            this.innerHTML = `<content></content>` + this._script;
                        }
                        elContent = this.getElementsByTagName('content')[0];


                        if (componentProps.prop_show){

                            let partMap = schema;
                            if (partName != null){
                                partMap = this._findPart(schema , partName);
                            }

                            let dataSelected = this._mergePartsFromSchema({ key: partName, value: partMap } , data);

                            const html = templateFn(partName , dataSelected, this._getCompoents() , this , this.getAttribute("data_random_id") );

                            if (partName != null){
                                let elementSelected = elContent.querySelector(`[data-part-name="${partName}"]`);

                                const template = document.createElement('template');
                                template.innerHTML = html;
                                const newEl = template.content.firstElementChild;

                                if (elementSelected && newEl) {
                                    elementSelected.replaceWith(newEl);
                                }
                            }
                            else {
                                elContent.innerHTML = html;
                                if (typeof elContent.style != "undefined"){
                                    const directionRtl = componentProps.directionRtl;
                                    elContent.style.setProperty('direction', directionRtl ? 'rtl' : 'ltr' , 'important');
                                    elContent.style.setProperty('text-align', directionRtl ? 'right' : 'left' , 'important');
                                }
                            }

                        }
                        else {
                            elContent.innerHTML = "<!--hidden-component-->"
                        }
                    }



                    _getComponentProps() {
                        const data = this._data || {};

                        const componentProps =  data != null && data.hasOwnProperty("component") ? data.component : null;
                        const directionRtl = componentProps != null && componentProps.hasOwnProperty("directionRtl") ? componentProps.directionRtl : (component_props != null && component_props.hasOwnProperty("directionRtl") ? component_props.directionRtl : false)
                        const prop_show    = componentProps != null && componentProps.hasOwnProperty("prop_show")    ? componentProps.prop_show    : true
                        const classList    = componentProps != null && componentProps.hasOwnProperty("classList")    ? componentProps.classList    : (props.hasOwnProperty("classList") ? props.classList : [])
                        const styles       = componentProps != null && componentProps.hasOwnProperty("styles")       ? componentProps.styles       : (props.hasOwnProperty("styles") ? props.styles : {})

                        return {
                            directionRtl , prop_show , classList , styles
                        }
                    }



                    disconnectedCallback() {
                        if (this._observer) {
                            this._observer.disconnect();
                        }
                    }
                }
            );
        }
    }
}





/* -------------------------------------
 Component Base:
------------------------------------- */
class ComponentBase{

    _COMPONENT_ELEMENT = null;
    _COMPONENT_PROPS = null;
    _COMPONENT_PROPS_LAST = null;
    _COMPONENT_CONFIG = null;
    _COMPONENT_SCHEMA = null;

    _COMPONENT_OBSERVER = null;

    constructor(elId , config , props , schema) {

        this._COMPONENT_ELEMENT = document.querySelector(listComponent[ComponentTest.name]+"#"+elId);
        if (this._COMPONENT_ELEMENT != null){
            components.set(this._COMPONENT_ELEMENT , this);

            this._COMPONENT_PROPS = props;
            this._COMPONENT_CONFIG = config;
            this._COMPONENT_SCHEMA = schema;

            this._COMPONENT_PROPS_LAST = this.setConfigToPart(this._COMPONENT_CONFIG);
            console.log(this._COMPONENT_PROPS_LAST)


            this.setContent();


          //  this._COMPONENT_OBSERVER = this._observe(this._COMPONENT_PROPS);
        }
    }

    // _observe(obj) {
    //     return new Proxy(obj, {
    //         set: (target, prop, value) => {
    //             console.log(`Property '${prop}' changed from ${target[prop]} to ${value}`);
    //             target[prop] = value;
    //
    //             console.log(`Reacting to ${prop} change`);
    //
    //             return true;
    //         }
    //     });
    // }





    //--------------------------------------------------
    // Set Prop
    //--------------------------------------------------
    setConfigToPart(config){
        let resultExp = {};

        if (config != null){
            Object.keys(this._COMPONENT_PROPS).forEach((part)=>{

                const partProps = this._COMPONENT_PROPS[part];
                resultExp[part] = {};

                for (const indexProppp in partProps) {
                    const itemProp = partProps[indexProppp];
                    if (itemProp.hasOwnProperty("prop")){
                        const propName = itemProp.prop;
                        let propValue = itemProp.hasOwnProperty("default") ? itemProp.default : null;

                        Object.keys(config).forEach((configKey) => {
                            if (propName == configKey){
                                propValue = config[configKey];
                            }
                        });

                        resultExp[part][propName] = propValue;
                    }
                }

            })
        }
        else {
            resultExp = this._COMPONENT_PROPS;
        }

        return resultExp;
    }

    findDifferences(oldData, newData) {
        const changedKeys = [];

        for (const key in newData) {
            if (!oldData.hasOwnProperty(key)) {
                changedKeys.push(key); // کلید جدید
            } else {
                const oldVal = JSON.stringify(oldData[key]);
                const newVal = JSON.stringify(newData[key]);
                if (oldVal !== newVal) {
                    changedKeys.push(key); // مقدار تغییر کرده
                }
            }
        }

        for (const key in oldData) {
            if (!newData.hasOwnProperty(key)) {
                changedKeys.push(key); // کلید حذف‌شده
            }
        }

        return changedKeys;
    }





    //--------------------------------------------------
    // find and merage componentData
    //--------------------------------------------------
    findPartAndMerge(partName = null){
        let partMap = this._COMPONENT_SCHEMA;
        if (partName != null){
            partMap = this.findPart(this._COMPONENT_SCHEMA , partName);
        }
        return this.mergePartsFromSchema({ key: partName, value: partMap } ,  this._COMPONENT_PROPS_LAST );
    }

    findPart(obj , partName) {
        for (const key in obj) {
            if (key === partName) {
                return obj[key];
            }
            if (typeof obj[key] === "object" && obj[key] !== null) {
                const result = this.findPart(obj[key] , partName);
                if (result !== undefined) return result;
            }
        }

        return undefined;
    }

    mergePartsFromSchema(schemaNode, parts) {
        const result = {};

        if (parts.hasOwnProperty(schemaNode.key)) {
            Object.assign(result, parts[schemaNode.key]);
        }

        const children = schemaNode.value;
        for (const key in children) {
            result[key] = this.mergePartsFromSchema({ key: key, value: children[key] }, parts);
        }

        return result;
    }





    //--------------------------------------------------
    // find and merage componentData
    //--------------------------------------------------





    //--------------------------------------------------
    // content for templates
    //--------------------------------------------------
    setContent(partName = null){

        let el = this._COMPONENT_ELEMENT;
        if (partName != null){
            el = this._COMPONENT_ELEMENT.querySelector(`[data-part-name="${partName}"]`);
        }

        console.log(el)

        if (el != null){
            if (typeof this.templateFn !== "undefined"){

                let dataSelected = this.findPartAndMerge(partName);
                console.log(dataSelected)

                el.innerHTML =  this.templateFn(partName , dataSelected , null , el);
            }
        }

    }




    set(key , value){
        let lastConfig =  this._COMPONENT_CONFIG;
        if (lastConfig != null && lastConfig.hasOwnProperty(key)){
            lastConfig[key] = value;
            //console.log(lastConfig)

            const props = this.setConfigToPart(lastConfig);
            const changes = this.findDifferences(this._COMPONENT_PROPS_LAST, props);
            this._COMPONENT_PROPS_LAST = props;



            for (const partIndex in changes) {
                this.setContent(changes[partIndex])
            }
            //this._COMPONENT_PROPS[key] = value;
        }
    }


}






/*-------------------------------------
 Component Header
-------------------------------------
@prop_size
@prop_title
@prop_icon
@prop_classList
-------------------------------------*/
window.ComponentTest = class ComponentTest extends ComponentBase{

    constructor(elId , config) {
        super(
            elId ,
            config ,
            {
                part_a: [
                    {prop : "prop_numA"  , default: 1}
                ] ,
                part_b: [
                    {prop : "prop_numB" , default: 2}
                ] ,
                part_c: [
                    {prop : "prop_numC" , default: 3}
                ]
            },
            {
                part_a: {} ,
                part_b: {
                    part_c: {}
                } ,
            }
        );

    }



    templateFn(partName = null , data , componentSlots , el){
        switch (partName){
            case "part_a":
                return this.templateFn_render_numA(data , componentSlots , el);
                break;
            case "part_b":
                return this.templateFn_render_numB(data  , componentSlots , el);
                break;
            case "part_c":
                return this.templateFn_render_numC(data  , componentSlots , el);
                break;
            default:
                return this.templateFn_render(data , componentSlots , el);
        }
    }



    templateFn_render(data , componentSlots , el) {

        return `
        ${this.templateFn_render_numA(data.part_a , componentSlots , el)} 
        ${this.templateFn_render_numB(data.part_b , componentSlots , el)} 
        `;

    }


    templateFn_render_numA(data , componentSlots , el) {

        const prop_numA = data != null &&   data.hasOwnProperty("prop_numA")        ?  data.prop_numA       : 1;
        return `
<section data-part-name="part_a">
${prop_numA}
</section>
            `;
    }


    templateFn_render_numB (data , componentSlots , el) {
        console.log(data)

        return `
<section data-part-name="part_b">
${this.templateFn_render_numC(data.part_c , componentSlots , el)}
</section>
            `;
    }


    templateFn_render_numC(data , componentSlots , el) {

        const prop_numC =    data != null &&    data.hasOwnProperty("prop_numC")        ?  data.prop_numC       : 3;

        return `
<section data-part-name="part_c">
${prop_numC}
</section>
            `;
    }

}






