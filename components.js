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
    var components = {}
}




/* -------------------------------------
 Component Make:
------------------------------------- */
class ComponentMaker {
    define(elId , props , componentName, templateFn , onCreate , onRender , parts , schema) {



        if (!customElements.get(componentName)) {

            customElements.define(
                componentName,
                class extends HTMLElement {
                    constructor() {
                        super();

                        this._observer = null;
                        this._randomId = Math.floor(Math.random() * 10000);

                        if (parts == null){
                            parts = {};
                        }

                        parts.component = this._getComponentProps()
                        this._data = parts;
                        this._script = `<script type='application/json'>${JSON.stringify(this._data)}</script>`;
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

                        return {
                            directionRtl , prop_show
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

    config = {}

    constructor(elId , config , componentName , methods , parts = null , schema=null) {

        this.elId = elId;
        this.componentName = componentName;

        this.parts = parts;
        this.schema = schema;

        this.config = this.readyStaticConfig(config);

        this.setMethods(methods);
    }

    getConfig(){
        return this.config;
    }




    readyStaticConfig(config){
        if (config != null){
            config.prop_show = config.hasOwnProperty("prop_show") ? config.prop_show : true
        }
        return config;
    }

    changeProperty(config){
        const newData = JSON.stringify(config);
        const el = document.getElementById(this.elId);
        el.setAttribute("data" , newData);
    }

    renderListClass(data){
        let classes = "";
        if (data != null){
            if (Array.isArray(data)){
                classes = data.join(" ");
            }
            if (typeof data == "string"){
                classes = data;
            }
        }
        return classes;
    }

    renderListStyle(data){
        let styles = "";
        if (data != null){
            if (typeof data == "object"){
                Object.keys(data).forEach((key)=> {
                    styles += key + ":" + data[key] + ";";
                })
            }
            if (typeof data == "string"){
                styles = data;
            }
        }

        return styles;
    }






    setMethods(methods){
        this.methods = {};
        if (methods != null && typeof methods == "object"){
            for (const keyMethod in methods) {
                const itemMethod = methods[keyMethod];
                if (itemMethod != null && itemMethod.hasOwnProperty("name") && itemMethod.hasOwnProperty("fn")){
                    window[itemMethod.name] = itemMethod.fn;
                    this.methods[keyMethod] = itemMethod.name;
                }
            }
        }
    }

    getMethod(data , methodName , args="()"){
        return  data.hasOwnProperty("methods") && data.methods.hasOwnProperty(methodName) ? ''+data.methods[methodName]+(args != null ? args : '') : `console.warn('not exist method ${methodName}');`
    }

    getMethodValue(methodName , args=[]){
        const methodNameReal = this.getMethod(this.config , methodName , null);
        return window[methodNameReal](...args)
    }


    readyAttrs(){

        const els = document.querySelectorAll(`#${this.elId}`);
        console.log(els)

        els.forEach(el => {



            if (!el) {
                console.warn(`Element with id '${this.elId}' not found`);
                return;
            }


            /*this.config.methods = this.methods;
            const newData = JSON.stringify(this.config);
            const currentData = el.getAttribute("data");

            if (currentData === newData) {
                return;
            }

            el.setAttribute("data", newData);*/


            if (this.config != null){
                /*const firstChild = el.querySelector('component-element-structure');
                console.log(el , firstChild)*/

                if (this.config.classList){
                    el.classList = this.renderListClass(this.config.classList);
                }

                if (this.config.styles) {
                    Object.entries(this.config.styles).forEach(([key, value]) => {
                        el.style[key] = value;
                    });
                }
            }
        });
    }

    render(props){
        this.readyAttrs();

        const maker = new ComponentMaker()
        /*setTimeout(()=>{

        }, 0)*/
        return maker.define(
            this.elId ,
            this.config ,
            this.componentName,
            typeof this.templateFn != "undifine" ? this.templateFn : (data ,slots , el) => {
                return "";
            },
            typeof this.onCreate != "undifine" ? this.onCreate : (data , el) => {
                this.el = el;
                console.info("element on create");
            },
            typeof this.onRender != "undifine" ? this.onRender : (data ,slots , el) => {
                console.info("element on render");
            } ,

            this.parts ,
            this.schema
        )
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

        let methods = {};
        super(
            elId ,
            config ,
            listComponent[ComponentTest.name] ,
            methods ,
            {
                part_a: {
                    prop_num:          config.hasOwnProperty("prop_num")          ?  config.prop_num          : 1 ,
                } ,
                part_b: {
                    prop_num:          config.hasOwnProperty("prop_num")          ?  config.prop_num          : 2 ,
                } ,
                part_c: {
                    prop_num:          config.hasOwnProperty("prop_num")          ?  config.prop_num          : 3 ,
                }
            } ,
            {
                part_a: {} ,
                part_b: {
                    part_c: {}
                } ,
            }
        );

        this.render()
    }




    templateFn= (partName , data , componentSlots , el) => {
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



    templateFn_render= (data , componentSlots , el) =>{
        return `
        ${this.templateFn_render_numA(data.part_a , componentSlots , el)} 
        ${this.templateFn_render_numB(data.part_b , componentSlots , el)} 
        `;
    }


    templateFn_render_numA= (data , componentSlots , el) =>{

        const prop_num = data != null &&   data.hasOwnProperty("prop_num")        ?  data.prop_num       : 1;
        return `
<section data-part-name="part_a">
${prop_num}
</section>
            `;
    }


    templateFn_render_numB= (data , componentSlots , el) =>{
        console.log(data)

        return `
<section data-part-name="part_b">
${this.templateFn_render_numC(data.part_c , componentSlots , el)}
</section>
            `;
    }

    templateFn_render_numC= (data , componentSlots , el) =>{



        const prop_num =    data != null &&    data.hasOwnProperty("prop_num")        ?  data.prop_num       : 3;

        return `
<section data-part-name="part_c">
${prop_num}
</section>
            `;
    }
}





/*-------------------------------------
 Component Header
-------------------------------------
@prop_icon

@prop_size
@prop_title
@prop_classList
-------------------------------------*/
window.ComponentHeader = class ComponentHeader extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        super(
            elId ,
            config ,
            listComponent[ComponentHeader.name] ,
            methods  ,
            {
                icon: {
                    prop_icon :         config.hasOwnProperty("prop_icon")        ?  config.prop_icon       : null ,
                } ,
                header: {
                    prop_size :         config.hasOwnProperty("prop_size")        ?  config.prop_size       : 5 ,
                    prop_title :        config.hasOwnProperty("prop_title")       ?  config.prop_title      : "",
                    prop_classList :    config.hasOwnProperty("prop_classList")   ?  config.prop_classList  : ["pb-0","px-2","mb-1","border-bottom"],
                } ,
            } ,
            {
                header : {} ,
                icon : {} ,
            }
        );

        this.render()
    }


    templateFn= (partName , data , componentSlots , el , var_randomId) => {
        switch (partName){
            case "header":
                return this.templateFn_render_header(data , componentSlots , el , var_randomId);
                break;
            case "icon":
                return this.templateFn_render_icon(data , componentSlots , el , var_randomId);
                break;
            default:
                return this.templateFn_render(data , componentSlots , el , var_randomId);
        }
    }

    templateFn_render= (data , componentSlots , el , var_randomId) =>{
        return `
        ${this.templateFn_render_icon(data != null && data.hasOwnProperty("icon") ? data.icon : null , componentSlots , el , var_randomId)} 
        ${this.templateFn_render_header(data != null && data.hasOwnProperty("header") ? data.header : null , componentSlots , el , var_randomId)} 
        `;
    }

    templateFn_render_icon= (data , componentSlots , el , var_randomId) =>{

        if (data != null){
            const prop_icon =      data.hasOwnProperty("prop_icon")        ?  data.prop_icon       : null;

            if (prop_icon){
                return `
<component-icon id="component-header-icon-${var_randomId}"></component-icon>
            `;

                new window.ComponentIcon(
                    `component-header-icon-${var_randomId}` ,
                    {
                        classList:[ "float-start"  ] ,

                        prop_icon        :  prop_icon,
                        prop_iconClass   :  ["me-2" , "d-inline-block"] ,
                        prop_iconStyles  :  {"line-height" : "25px" , "font-size" : "18pt"} ,
                    }
                )
            }

        }

        return ''

    }


    templateFn_render_header= (data , componentSlots , el , var_randomId) =>{

        if (data != null){
            const prop_size =      data.hasOwnProperty("prop_size")        ?  data.prop_size       : 5;
            const prop_title =     data.hasOwnProperty("prop_title")       ?  data.prop_title      : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
            const prop_classList = data.hasOwnProperty("prop_classList")   ?  data.prop_classList  : ["pb-0","px-2","mb-1","border-bottom"];

            return `
<section class="component-element-structure mb-2 ${super.renderListClass(prop_classList)}">
       <h${prop_size} id="component-header-text-${var_randomId}">${prop_title ?? ''}</h${prop_size}>
</section>
            `;
        }

        return ''

    }

}










/*-------------------------------------
 Component Icon
-------------------------------------
@prop_icon
@prop_isItalik

@prop_iconClass
@prop_iconStyles

@fn_callback
-------------------------------------*/
window.ComponentIcon  = class ComponentIcon extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        /*methods["onClickToIcon"] = {
            name: `onClickToIcon${config["var_randomId"]}`,
            fn: (event) => {

                const var_randomId    =  config.hasOwnProperty("var_randomId")      ?  config.var_randomId      :  0;
                if ( components.hasOwnProperty(var_randomId)) {
                    const componentData = components[var_randomId];

                    if (componentData.hasOwnProperty("fn_callback") && typeof componentData.fn_callback != null){
                        componentData.fn_callback();
                    }
                }
            }
        };*/

        super(
            elId ,
            config ,
            listComponent[ComponentIcon.name] ,
            methods  ,
            {
                icon: {
                    prop_icon :          config.hasOwnProperty("prop_icon")         ?  config.prop_icon          : "" ,
                    prop_isItalik :      config.hasOwnProperty("prop_isItalik")     ?  config.prop_isItalik     : false,
                    prop_iconClass :     config.hasOwnProperty("prop_iconClass")    ?  config.prop_iconClass    : [],
                    prop_iconStyles :    config.hasOwnProperty("prop_iconStyles")   ?  config.prop_iconStyles   : {},
                    fn_callback :        config.hasOwnProperty("fn_callback")       ?  config.fn_callback       : null,
                } ,
            } ,
            {
                icon : {}
            });

        this.render()
    }

    templateFn= (partName , data , componentSlots , el , var_randomId) => {
        switch (partName){
            case "icon":
                return this.templateFn_render_icon(data , componentSlots , el , var_randomId);
                break;
            default:
                return this.templateFn_render(data , componentSlots , el , var_randomId);
        }
    }

    templateFn_render= (data , componentSlots , el , var_randomId) =>{
        return `
        ${this.templateFn_render_icon(data != null && data.hasOwnProperty("icon") ? data.icon : null , componentSlots , el , var_randomId)} 
        `;
    }

    templateFn_render_icon= (data , componentSlots , el , var_randomId) =>{

        if (data != null){
            const prop_icon                =  data.hasOwnProperty("prop_icon")                       ?  data.prop_icon                                            :  "";
            const prop_isItalik            =  data.hasOwnProperty("prop_isItalik")                   ?  data.prop_isItalik                                        :  false;

            const prop_iconClass           =   data.hasOwnProperty("prop_iconClass")                 ?  data.prop_iconClass                                       :  [];
            const prop_iconStyles          =   data.hasOwnProperty("prop_iconStyles")                ?  data.prop_iconStyles                                      :  {};

            const onClickToIcon            =   super.getMethod(data , "onClickToIcon"   , "(event)" );

            return `
<style>
 #${el.id} .component-icon-${var_randomId}{
     ${super.renderListStyle(prop_iconStyles)}
 }
</style>
<section class="component-element-structure">
    <${prop_isItalik ? "i" : "span"} class="component-icon-${var_randomId} ${super.renderListClass(prop_iconClass)}" 
      onclick="${onClickToIcon}">
           ${prop_icon}
    </${prop_isItalik ? "i" : "span"}>
</section>
`;
        }

        return ''

    }


}