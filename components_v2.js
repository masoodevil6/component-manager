/*
Name: Components
Developer: Mehdi Maarefian
Version: 0.2
*/


if (typeof listComponent === 'undefined') {
    var listComponent = {

        // [01] text


        // [02] Fetch


        // [03] Button and Inputs


        // [04] Table and Tabs


        // [99] Others

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
        ComponentBorder:                     "component-border" ,                         //20
        ComponentImage:                      "component-image" ,                          //21
        ComponentLink:                       "component-link" ,                           //22
        ComponentDescription:                "component-description" ,                    //23
        ComponentChart:                      "component-chart" ,                          //24
    }
}
if (typeof components === 'undefined') {
   // var components = new WeakMap();
    var components = {};
}






/* -------------------------------------
 Component Base:
------------------------------------- */
class ComponentBase{

    _COMPONENT_RANDOM_ID = 0;
    _COMPONENT_ID = null;
    _COMPONENT_NAME = null;
    _COMPONENT_SELECTOR = null;
    _COMPONENT_ELEMENT = null;
    _COMPONENT_CONTENT = "";
    _COMPONENT_SLOTS = [];

    _COMPONENT_PROPS = null;
    _COMPONENT_PROPS_LAST = null;
    _COMPONENT_CONFIG = null;
    _COMPONENT_SCHEMA = null;

    constructor(componentName , elId) {
        this._COMPONENT_RANDOM_ID = this.setComponentRandomId();
        this._COMPONENT_NAME = componentName;
        this._COMPONENT_ID = elId;
        this._COMPONENT_SELECTOR = this._COMPONENT_NAME+"#"+this._COMPONENT_ID;
    }


    onCreate( config , props, schema){
        if (props != null && props.hasOwnProperty("part_structure")){

            if (props.hasOwnProperty("part_structure")){
                if (!props.part_structure.hasOwnProperty("prop_show")){
                    props["part_structure"].push( {prop: "prop_show"           , default: true});
                }
                if (!props.part_structure.hasOwnProperty("prop_structureClass")){
                    props["part_structure"].push( {prop: "prop_structureClass" , default: []});
                }
                if (!props.part_structure.hasOwnProperty("prop_structureStyles")){
                    props["part_structure"].push( {prop: "prop_structureStyles", default: {}});
                }
            }
        }

        this.readyConfigBasic(config , props);

        this.readyPropAndSchemaBasic(props , schema);

        this.getAllComponentSluts();

        this._COMPONENT_ELEMENT = document.createElement("template");
        this._COMPONENT_CONTENT = this.setContent();
    }


    onTemplateComplete(){
        this._COMPONENT_ELEMENT = this.getComponentElement();

        if (this._COMPONENT_ELEMENT != null){
            this._COMPONENT_ELEMENT.innerHTML  =  this._COMPONENT_CONTENT;
            this.setComponentData();
        }
    }


    onRegister(){
        //components.set(this._COMPONENT_ELEMENT , this);
        components[this._COMPONENT_RANDOM_ID] = this;

        this.setComponents();
    }




    //--------------------------------------------------
    // ready properties
    //--------------------------------------------------

    setComponentRandomId(){
        let randomSelected = Math.floor(Math.random() * 10000);
        if (typeof components[randomSelected] != "undefined"){
            randomSelected = this.setComponentRandomId()
        }
        return randomSelected;
    }



    readyConfigBasic(config , props){
        /// config default
        this._COMPONENT_CONFIG = config;

        /// config public component
        const mainProps = this.getComponentProps();
        Object.keys(mainProps).forEach(key => {
            this._COMPONENT_CONFIG[key] = mainProps[key];
        })

        /// config other exist
        if (props != null){
            Object.keys(props).forEach(keyPart => {
                const itemPart = props[keyPart];

                if (itemPart != null && Array.isArray(itemPart)){
                    for (const indexProp in itemPart) {
                        const itemProp = itemPart[indexProp];

                        if (itemProp.hasOwnProperty("prop")){
                            const propKey = itemProp.prop;
                            const propValue = itemProp.hasOwnProperty("default") ? itemProp.default : null;
                            let propExist = false;

                            Object.keys(this._COMPONENT_CONFIG).forEach(configKey => {
                                if (propKey == configKey){
                                    propExist = true;
                                }
                            });

                            if (!propExist){
                                this._COMPONENT_CONFIG[propKey] = propValue
                            }
                        }
                    }
                }
            });
        }
    }



    readyPropAndSchemaBasic(props , schema){
        this._COMPONENT_PROPS = props;
        this._COMPONENT_SCHEMA = schema;
        this._COMPONENT_PROPS_LAST = this.setConfigToPart(this._COMPONENT_CONFIG);

    }



    getAllComponentSluts(){
        const component = this.getComponentElement();

        if (component != null){
            /*for (const itemChild of component.children) {
                const slotName = itemChild.getAttribute("name");
                const slotContent = itemChild.innerHTML;

                this._COMPONENT_SLOTS[slotName ?? "body"] = slotContent;
            }*/

            const componentSlotNames = [...component.children].filter(
                el => el.tagName.toLowerCase().startsWith('component-')
            );

            if (componentSlotNames != null && Array.isArray(componentSlotNames)){
                for (const componentTag of componentSlotNames) {
                    this._COMPONENT_SLOTS[componentTag.tagName.toLowerCase().replace(/^component-/, '')] = componentTag.innerHTML;
                }
            }
        }
    }




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
    // content for templates
    //--------------------------------------------------
    setContent(partName = null){
        let html;
        this._COMPONENT_ELEMENT = this.getComponentElement();

        let el = this._COMPONENT_ELEMENT;
        let isMain = true;
        if (partName != null){
            el = this._COMPONENT_ELEMENT.querySelector(`[data-part-name="${partName}"]`);
            isMain = false;
        }

        if (typeof this.templateFn !== "undefined"){
            html = this.templateFn(partName  , this._COMPONENT_SLOTS  , this._COMPONENT_RANDOM_ID);

            if (el != null && html != null){
                if (isMain){
                    el.innerHTML = html;
                }
                else{
                    el.outerHTML = html;
                }
            }
        }

        return html;
    }

    setComponentData(){
        this._COMPONENT_ELEMENT = this.getComponentElement();

        const mainProps = this.getComponentProps();

        this._COMPONENT_ELEMENT.style.display = ""

        const directionRtl = mainProps.directionRtl;
        this._COMPONENT_ELEMENT.style.setProperty('direction', directionRtl ? 'rtl' : 'ltr' , 'important');
        this._COMPONENT_ELEMENT.style.setProperty('text-align', directionRtl ? 'right' : 'left' , 'important');

        this._COMPONENT_ELEMENT.classList = tools_public.renderListClass(mainProps.classList);

        Object.entries(mainProps.styles).forEach(([key, value]) => {
            this._COMPONENT_ELEMENT.style[key] = value;
        });


        this._COMPONENT_ELEMENT.setAttribute("data-component-id" , this._COMPONENT_RANDOM_ID);

        /*if (mainProps.prop_show){

        }
        else{
            this._COMPONENT_ELEMENT.style.display = "none"
        }*/






    }

    setComponents(){
        if (typeof this.componentFn !== "undefined"){
            this.componentFn(this._COMPONENT_SLOTS , this._COMPONENT_RANDOM_ID);
        }
    }



    //--------------------------------------------------
    // content for templates
    //--------------------------------------------------
    getComponentProps() {
        const data = this._COMPONENT_CONFIG || {};

        const directionRtl = data.hasOwnProperty("directionRtl") ? data.directionRtl : (component_props != null && component_props.hasOwnProperty("directionRtl") ? component_props.directionRtl : false)
        //const prop_show    = data.hasOwnProperty("prop_show")    ? data.prop_show    : true
        const classList    = data.hasOwnProperty("classList")    ? data.classList    : []
        const styles       = data.hasOwnProperty("styles")       ? data.styles       : {}

        return {
            directionRtl , classList , styles,
            //prop_show
        }
    }




    //--------------------------------------------------
    // SETTER AND GETTER
    //--------------------------------------------------

    getComponentElement(){
        return document.querySelector(this._COMPONENT_SELECTOR);
    }

    getPartProps(partName){
        let resultExp = null
        if (this._COMPONENT_PROPS_LAST != null){
            Object.keys(this._COMPONENT_PROPS_LAST).forEach(key => {
                if (key == partName){
                    resultExp = this._COMPONENT_PROPS_LAST[key];
                }
            })
        }
        return resultExp;
    }

    get(key , defaultValue=null){
        let lastConfig =  this._COMPONENT_CONFIG;
        if (lastConfig != null && lastConfig.hasOwnProperty(key)){
            return lastConfig[key];
        }
        return defaultValue;
    }

    set(key , value){
        let lastConfig =  this._COMPONENT_CONFIG;
        if (lastConfig != null && lastConfig.hasOwnProperty(key)){
            lastConfig[key] = value;

            const props = this.setConfigToPart(lastConfig);
            const changes = this.findDifferences(this._COMPONENT_PROPS_LAST, props);
            this._COMPONENT_PROPS_LAST = props;

            for (const partIndex in changes) {
                this.setContent(changes[partIndex])
            }

            this.setComponentData();
        }
    }

    getFn(methodName , ...methodArgs ){
       // return `components.get(document.querySelector('${this._COMPONENT_SELECTOR}')).${methodName}(${methodArgs})`;
        return `components[${this._COMPONENT_RANDOM_ID}].${methodName}(${methodArgs})`;
    }

    runFn(methodName , ...methodArgs ){
        const fn = this.getFn(methodName , ... methodArgs);
        if (typeof fn != "undefined"){
            return eval(fn)
        }
        return null;
    }






    //--------------------------------------------------
    // Template Reader
    //--------------------------------------------------
    templateBasic_render() {
        return `
<section class="component-element-structure mb-2">
   ${this.templateFn("part_structure") ?? ""}
</section>
        `;
    }

    templateBasic_render_structure(content , moreClass="") {
        const partName = "part_structure";
        const data = this.getPartProps(partName);

        if (data != null){
            const prop_show             =   data.hasOwnProperty("prop_show")                ?  data.prop_show               : true;
            const prop_structureClass   =   data.hasOwnProperty("prop_structureClass")      ?  data.prop_structureClass     : [];
            const prop_structureStyles  =   data.hasOwnProperty("prop_structureStyles")     ? data.prop_structureStyles     : {};

            if (prop_show){
                return `
<section  data-part-name="${partName}" 
          id="component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}"
          class=" ${tools_public.renderListClass(prop_structureClass)} ${tools_public.renderListClass(moreClass)}">

    <style>
        #${this._COMPONENT_ID} #component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}{
           ${tools_public.renderListStyle(prop_structureStyles)}
        }
    </style>
    
    ${content}
   
</section>
        `;
            }
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

}





/*-------------------------------------
 1) Component Messages
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type                            // success[default] | error | warning | null
@prop_background
@prop_color
@prop_messages
-------------------------------------*/
window.ComponentMessages = class ComponentMessages extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_message: [
            {prop : "prop_type"                 , default: "success"} ,  // success  //error //warning //null
            {prop : "prop_msgBackgroundColor"   , default: null} ,
            {prop : "prop_msgColor"             , default: null} ,
            {prop : "prop_messages"             , default: null} ,
        ] ,
        part_icon: [
            {prop : "prop_messages"             , default: null} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_message: {} ,
            part_icon: {}
        }
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentMessages.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }




    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn(  "part_icon" );
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_message":
                return this.template_render_message(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            default:
                return this.templateBasic_render();
        }
    }



    template_render_structure(partName) {
        const content = `
                    ${this.templateFn("part_message") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_message(partName) {
         const data = this.getPartProps(partName)

         if (data != null){

             let html = "";
             if (data.hasOwnProperty("prop_messages")  ){
                 const prop_messages  =   data.prop_messages;

                 const prop_type                =   data.hasOwnProperty("prop_type")                 ?  data.prop_type               :  null;
                 let msgBackgroundColor =  null;
                 let msgColor =            null;

                 switch (prop_type){
                     case "success" :
                         msgBackgroundColor       =  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("message") &&  tools_const.styles.message.hasOwnProperty("success") &&  tools_const.styles.message.success.hasOwnProperty("backgroundColor") ? tools_const.styles.message.success.backgroundColor : "" ;
                         msgColor                 =  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("message") &&  tools_const.styles.message.hasOwnProperty("success") &&  tools_const.styles.message.success.hasOwnProperty("color")           ? tools_const.styles.message.success.color : "" ;
                         break;
                     case "error" :
                         msgBackgroundColor       =  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("message") &&  tools_const.styles.message.hasOwnProperty("error") &&  tools_const.styles.message.error.hasOwnProperty("backgroundColor")     ? tools_const.styles.message.error.backgroundColor : "" ;
                         msgColor                 =  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("message") &&  tools_const.styles.message.hasOwnProperty("error") &&  tools_const.styles.message.error.hasOwnProperty("color")               ? tools_const.styles.message.error.color : "" ;
                         break;
                     case "warning" :
                         msgBackgroundColor       =  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("message") &&  tools_const.styles.message.hasOwnProperty("warning") &&  tools_const.styles.message.warning.hasOwnProperty("backgroundColor") ? tools_const.styles.message.warning.backgroundColor : "" ;
                         msgColor                 =  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("message") &&  tools_const.styles.message.hasOwnProperty("warning") &&  tools_const.styles.message.warning.hasOwnProperty("color")           ? tools_const.styles.message.warning.color : "" ;
                         break;
                     default:
                         msgBackgroundColor       =  data.hasOwnProperty("prop_msgBackgroundColor") ?  data.prop_msgBackgroundColor  : "";
                         msgColor                 =  data.hasOwnProperty("prop_msgColor")           ?  data.prop_msgColor            : "" ;
                         break;
                 }

                 for (const indexMessage in prop_messages) {
                     const itemMessage = prop_messages[indexMessage];

                     html += `
<section id="component-messages-item-${this._COMPONENT_RANDOM_ID}-${indexMessage}">
    <style>
         #${this._COMPONENT_ID} #text-message-${this._COMPONENT_RANDOM_ID}{
             background-color: ${msgBackgroundColor};
             color: ${msgColor};
         }
    </style>
    
    <div  class="component-element-structure mb-2  mt-2 rounded shadow-sm" role="alert">
         <div id="text-message-${this._COMPONENT_RANDOM_ID}" class=" alert shadow-sm">
              ${itemMessage}
              <component-icon id="component-messages-icon-close-${this._COMPONENT_RANDOM_ID}-${indexMessage}"></component-icon>
         </div>
    </div>
</section>
                     `;

                 }

                 return html;
             }
         }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_icon (partName) {
        const data = this.getPartProps(partName)
        if (data != null){
            const directionRtl =   this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl : false

            if (data.hasOwnProperty("prop_messages")  ) {

                for (const indexMessage in data.prop_messages) {
                    new window.ComponentIcon(
                        `component-messages-icon-close-${this._COMPONENT_RANDOM_ID}-${indexMessage}`  ,
                        {
                            classList:     [ directionRtl ? "float-start" :  "float-end" ] ,
                            prop_icon:     "&#10005"  ,

                            prop_iconClass : ["mx-2" ] ,
                            prop_iconStyles : {
                                "cursor" : "pointer"
                            } ,

                            fn_callback: () =>{
                                this.runFn('fn_onCLickIconClose' , "event" , indexMessage);
                            }
                        }
                    )
                }


            }

        }
    }


    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickIconClose(event  , indexMessage){
        this.getComponentElement().querySelector(`#component-messages-item-${this._COMPONENT_RANDOM_ID}-${indexMessage}`).remove()
    }
}





/*-------------------------------------
 2) Component Loading
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type                       // circle[default] | null
@prop_background_loading
@prop_background_shadow
-------------------------------------*/
window.ComponentLoading = class ComponentLoading extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_loading: [
            {prop : "prop_type"                            , default: "circle"  } ,  // circle  //null
            {prop : "prop_background_loading"              , default: null} ,
            {prop : "prop_background_shadow"               , default: true} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_loading: {} ,
        },
    }




    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentLoading.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){

    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName)
            case "part_loading":
                return this.template_render_loading(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
                    ${this.templateFn("part_loading") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_loading(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            const prop_type               =   data.hasOwnProperty("prop_type")                                                           ?  data.prop_type                 : "circle";
            const prop_background_loading =   data.hasOwnProperty("prop_background_loading")   && data.prop_background_loading != null   ? data.prop_background_loading    : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("loading") &&  tools_const.styles.loading.hasOwnProperty("backgroundColor_shadow") ? tools_const.styles.loading.backgroundColor_shadow : "";
            const prop_background_shadow  =   data.hasOwnProperty("prop_background_shadow")    && data.prop_background_shadow != null    ? data.prop_background_shadow     : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("loading") &&  tools_const.styles.loading.hasOwnProperty("backgroundColor_loading") ? tools_const.styles.loading.backgroundColor_loading : "";

            if (prop_type == "circle"){
                return `
<section data-part-name="${partName}">

   <style>
      #${this._COMPONENT_ID} .form-loading-${this._COMPONENT_RANDOM_ID}{
           left: 0;
           top: 0;
           z-index: 5000;
           background-color: ${prop_background_loading};
      }

      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} {
          z-index: 12;
          color: ${prop_background_shadow};
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
      }
      
      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID},
      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} div {
          box-sizing: border-box;
      }
      
      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
      }

      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 64px;
          height: 64px;
          margin: 8px;
          border: 8px solid currentColor;
          border-radius: 50%;
          animation: lds-ring-${this._COMPONENT_RANDOM_ID} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: currentColor transparent transparent transparent;
      }
      
      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} div:nth-child(1) {
          animation-delay: -0.45s;
      }
      
      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} div:nth-child(2) {
         animation-delay: -0.3s;
      }
      
      #${this._COMPONENT_ID} .lds-ring-${this._COMPONENT_RANDOM_ID} div:nth-child(3) {
         animation-delay: -0.15s;
      }
      
      @keyframes lds-ring-${this._COMPONENT_RANDOM_ID} {
         0% {
            transform: rotate(0deg);
         }
         100% {
            transform: rotate(360deg);
         }
      }
   </style>

   <section class="component-element-structure form-loading-${this._COMPONENT_RANDOM_ID} position-absolute  w-100 h-100" >
       <div class="lds-ring-${this._COMPONENT_RANDOM_ID} position-absolute"><div></div><div></div><div></div><div></div></div>
   </section>

</section>
            `
            }

        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

}






/*-------------------------------------
 3) Component 404
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type            'simple_animation'
@prop_width
@prop_height

@prop_btnRetry        {prop_type: "submit"  , prop_title: "Retry" , prop_btnClass: ["w-100"]}

@fn_callback
-------------------------------------*/
window.Component404 = class Component404 extends ComponentBase{

    /* ---------------------------------------------
  PROPERTYs
  --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_404: [
            {prop : "prop_type"                            , default: "simple_animation"  } ,     // simple_animation  //null
            {prop : "prop_width"                           , default: 250                 } ,
            {prop : "prop_height"                          , default: 100                 } ,
        ] ,
        part_button_retry: [
            {prop : "prop_btnRetry"                        , default: {prop_type: "submit"  , prop_title: "Retry" , prop_btnClass: ["w-100"]}      } ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_404: {} ,
            part_button_retry: {} ,
        }
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[Component404.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_button_retry");
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_404":
                return this.template_render_404(partName);
            case "part_button_retry":
                return this.componentFn_render_btnRetry(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
        ${this.templateFn("part_404") ?? ""}
   
        <section class="d-block mx-5 h-100 position-relative">
            <component-button id="component-btn-retry-in-component-404-${this._COMPONENT_RANDOM_ID}" ></component-button>
        </section>
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_404(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            const prop_type   =   data.hasOwnProperty("prop_type")      ?  data.prop_type     : "simple_animation";
            const prop_width  =   data.hasOwnProperty("prop_width")     ? data.prop_width     : 250;
            const prop_height =   data.hasOwnProperty("prop_height")    ? data.prop_height    : 100;

            if (prop_type == "simple_animation"){

                return `
<section data-part-name="${partName}">

   <style>
        #${this._COMPONENT_ID} #component-form-404-${this._COMPONENT_RANDOM_ID}{
           top: 0;
           left: 0;
           position: absolute;
           background-color: ${tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("state404") &&  tools_const.styles.state404.hasOwnProperty("backgroundColor_shadow") ? tools_const.styles.state404.backgroundColor_shadow : ""};
       }

       #${this._COMPONENT_ID} #svgWrap_1,
       #${this._COMPONENT_ID} #svgWrap_2{
          position: absolute;
          height: auto;
          width: ${prop_width}px;
          max-width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -75%);
       }

       #${this._COMPONENT_ID} #svgWrap_0{
          height: ${prop_height}px;
       }

       #${this._COMPONENT_ID} #svgWrap_1,
       #${this._COMPONENT_ID} #svgWrap_2,
       #${this._COMPONENT_ID} #id1_1,
       #${this._COMPONENT_ID} #id2_1,
       #${this._COMPONENT_ID} #id3_1{
          stroke: #11539c;
          stroke-width: 3px;
          fill: transparent;
          filter: url(#glow);
       }

       #${this._COMPONENT_ID} #id1_2,
       #${this._COMPONENT_ID} #id2_2,
       #${this._COMPONENT_ID} #id3_2{
           stroke-width: 3px;
           fill: transparent;
           filter: url(#glow);
       }

       #${this._COMPONENT_ID} #id3_1{
           stroke-dasharray: 940px;
           stroke-dashoffset: -940px;
           animation: drawLine3 2.5s ease-in-out 0s forwards, flicker3 4s linear 4s infinite;
       }

       #${this._COMPONENT_ID} #id2_1{
           stroke-dasharray: 735px;
           stroke-dashoffset: -735px;
           animation: drawLine2 2.5s ease-in-out 0.5s forwards, flicker2 4s linear 4.5s infinite;
       }

       #${this._COMPONENT_ID} #id1_1{
           stroke-dasharray: 940px;
           stroke-dashoffset: -940px;
           animation: drawLine1 2.5s ease-in-out 1s forwards, flicker1 4s linear 5s infinite;
       }

       @keyframes drawLine1 {
           0%  {stroke-dashoffset: -940px;}
          100%{stroke-dashoffset: 0px;}
       }

       @keyframes drawLine2 {
           0%  {stroke-dashoffset: -735px;}
          100%{stroke-dashoffset: 0px;}
       }

       @keyframes drawLine3 {
           0%  {stroke-dashoffset: -940px;}
           100%{stroke-dashoffset: 0px;}
       }

       @keyframes flicker1{
           0%  {stroke: #0c407a;}
           1%  {stroke: transparent;}
           3%  {stroke: transparent;}
           4%  {stroke: #0c407a;}
           6%  {stroke: #0c407a;}
           7%  {stroke: transparent;}
           13% {stroke: transparent;}
           14% {stroke: #0c407a;}
           100%{stroke: #0c407a;}
}

       @keyframes flicker2{
           0%  {stroke: #0c407a;}
           50% {stroke: #0c407a;}
           51% {stroke: transparent;}
           61% {stroke: transparent;}
           62% {stroke: #0c407a;}
           100%{stroke: #0c407a;}
       }

       @keyframes flicker3{
           0%  {stroke: #0c407a;}
           1%  {stroke: transparent;}
           10% {stroke: transparent;}
           11% {stroke: #0c407a;}
           40% {stroke: #0c407a;}
           41% {stroke: transparent;}
           45% {stroke: transparent;}
           46% {stroke: #0c407a;}
           100%{stroke: #0c407a;}
       }

       @keyframes flicker4{
           0%  {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           30% {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           31% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
           32% {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           36% {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           37% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
           41% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
           42% {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           85% {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           86% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
           95% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
           96% {color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
           100%{color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
       }

       @keyframes fadeInText{
           1%  {color: #12000a;text-shadow:0px 0px 4px #12000a;}
           70% {color: #0c407a;text-shadow:0px 0px 14px #0c407a;}
           100%{color: #0c407a;text-shadow:0px 0px 4px #0c407a;}
       }

       @keyframes hueRotate{
           0%  {
               filter: hue-rotate(0deg);
           }
           50%  {
               filter: hue-rotate(-120deg);
           }
           100%  {
               filter: hue-rotate(0deg);
           }
       }
   </style>

   <section id="component-form-404-${this._COMPONENT_RANDOM_ID}" class="mb-2 w-100 h-100  ">

        <svg id="svgWrap_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 700 250">
            <g>
                <path id="id3_2" d="M195.7 232.67h-37.1V149.7H27.76c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98H158.6V29.62h37.1v203.05z"/>
                <path id="id2_2" d="M470.69 147.71c0 8.31-1.06 16.17-3.19 23.58-2.12 7.41-5.12 14.28-8.99 20.6-3.87 6.33-8.45 11.99-13.74 16.99-5.29 5-11.07 9.28-17.35 12.81a85.146 85.146 0 0 1-20.04 8.14 83.637 83.637 0 0 1-21.67 2.83H319.3c-7.46 0-14.73-.94-21.81-2.83-7.08-1.89-13.76-4.6-20.04-8.14a88.292 88.292 0 0 1-17.35-12.81c-5.29-5-9.84-10.67-13.66-16.99-3.82-6.32-6.8-13.19-8.92-20.6-2.12-7.41-3.19-15.27-3.19-23.58v-33.13c0-12.46 2.34-23.88 7.01-34.27 4.67-10.38 10.92-19.33 18.76-26.83 7.83-7.5 16.87-13.36 27.12-17.56 10.24-4.2 20.93-6.3 32.07-6.3h66.41c7.36 0 14.58.94 21.67 2.83 7.08 1.89 13.76 4.6 20.04 8.14a88.292 88.292 0 0 1 17.35 12.81c5.29 5 9.86 10.67 13.74 16.99 3.87 6.33 6.87 13.19 8.99 20.6 2.13 7.41 3.19 15.27 3.19 23.58v33.14zm-37.1-33.13c0-7.27-1.32-13.88-3.96-19.82-2.64-5.95-6.16-11.04-10.55-15.29-4.39-4.25-9.46-7.5-15.22-9.77-5.76-2.27-11.8-3.35-18.13-3.26h-66.41c-6.14-.09-12.11.97-17.91 3.19-5.81 2.22-10.95 5.43-15.44 9.63-4.48 4.2-8.07 9.3-10.76 15.29-2.69 6-4.04 12.67-4.04 20.04v33.13c0 7.36 1.32 14.02 3.96 19.97 2.64 5.95 6.18 11.02 10.62 15.22 4.44 4.2 9.56 7.43 15.36 9.7 5.8 2.27 11.87 3.35 18.2 3.26h66.41c7.27 0 13.85-1.2 19.75-3.61s10.93-5.73 15.08-9.98 7.36-9.32 9.63-15.22c2.27-5.9 3.4-12.34 3.4-19.33v-33.15zm-16-26.91a17.89 17.89 0 0 1 2.83 6.73c.47 2.41.47 4.77 0 7.08-.47 2.31-1.39 4.48-2.76 6.51-1.37 2.03-3.14 3.75-5.31 5.17l-99.4 66.41c-1.61 1.23-3.26 2.08-4.96 2.55-1.7.47-3.45.71-5.24.71-3.02 0-5.9-.71-8.64-2.12-2.74-1.42-4.96-3.44-6.66-6.09a17.89 17.89 0 0 1-2.83-6.73c-.47-2.41-.5-4.77-.07-7.08.43-2.31 1.3-4.48 2.62-6.51 1.32-2.03 3.07-3.75 5.24-5.17l99.69-66.41a17.89 17.89 0 0 1 6.73-2.83c2.41-.47 4.77-.47 7.08 0 2.31.47 4.48 1.37 6.51 2.69 2.03 1.32 3.75 3.02 5.17 5.09z"/>
                <path id="id1_2" d="M688.33 232.67h-37.1V149.7H520.39c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98h112.57V29.62h37.1v203.05z"/>
            </g>
        </svg>
        <svg id="svgWrap_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 700 250">
            <g>
                <path id="id3_1" d="M195.7 232.67h-37.1V149.7H27.76c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98H158.6V29.62h37.1v203.05z"/>
                <path id="id2_1" d="M470.69 147.71c0 8.31-1.06 16.17-3.19 23.58-2.12 7.41-5.12 14.28-8.99 20.6-3.87 6.33-8.45 11.99-13.74 16.99-5.29 5-11.07 9.28-17.35 12.81a85.146 85.146 0 0 1-20.04 8.14 83.637 83.637 0 0 1-21.67 2.83H319.3c-7.46 0-14.73-.94-21.81-2.83-7.08-1.89-13.76-4.6-20.04-8.14a88.292 88.292 0 0 1-17.35-12.81c-5.29-5-9.84-10.67-13.66-16.99-3.82-6.32-6.8-13.19-8.92-20.6-2.12-7.41-3.19-15.27-3.19-23.58v-33.13c0-12.46 2.34-23.88 7.01-34.27 4.67-10.38 10.92-19.33 18.76-26.83 7.83-7.5 16.87-13.36 27.12-17.56 10.24-4.2 20.93-6.3 32.07-6.3h66.41c7.36 0 14.58.94 21.67 2.83 7.08 1.89 13.76 4.6 20.04 8.14a88.292 88.292 0 0 1 17.35 12.81c5.29 5 9.86 10.67 13.74 16.99 3.87 6.33 6.87 13.19 8.99 20.6 2.13 7.41 3.19 15.27 3.19 23.58v33.14zm-37.1-33.13c0-7.27-1.32-13.88-3.96-19.82-2.64-5.95-6.16-11.04-10.55-15.29-4.39-4.25-9.46-7.5-15.22-9.77-5.76-2.27-11.8-3.35-18.13-3.26h-66.41c-6.14-.09-12.11.97-17.91 3.19-5.81 2.22-10.95 5.43-15.44 9.63-4.48 4.2-8.07 9.3-10.76 15.29-2.69 6-4.04 12.67-4.04 20.04v33.13c0 7.36 1.32 14.02 3.96 19.97 2.64 5.95 6.18 11.02 10.62 15.22 4.44 4.2 9.56 7.43 15.36 9.7 5.8 2.27 11.87 3.35 18.2 3.26h66.41c7.27 0 13.85-1.2 19.75-3.61s10.93-5.73 15.08-9.98 7.36-9.32 9.63-15.22c2.27-5.9 3.4-12.34 3.4-19.33v-33.15zm-16-26.91a17.89 17.89 0 0 1 2.83 6.73c.47 2.41.47 4.77 0 7.08-.47 2.31-1.39 4.48-2.76 6.51-1.37 2.03-3.14 3.75-5.31 5.17l-99.4 66.41c-1.61 1.23-3.26 2.08-4.96 2.55-1.7.47-3.45.71-5.24.71-3.02 0-5.9-.71-8.64-2.12-2.74-1.42-4.96-3.44-6.66-6.09a17.89 17.89 0 0 1-2.83-6.73c-.47-2.41-.5-4.77-.07-7.08.43-2.31 1.3-4.48 2.62-6.51 1.32-2.03 3.07-3.75 5.24-5.17l99.69-66.41a17.89 17.89 0 0 1 6.73-2.83c2.41-.47 4.77-.47 7.08 0 2.31.47 4.48 1.37 6.51 2.69 2.03 1.32 3.75 3.02 5.17 5.09z"/>
                <path id="id1_1" d="M688.33 232.67h-37.1V149.7H520.39c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98h112.57V29.62h37.1v203.05z"/>
            </g>
        </svg>
        <svg id="svgWrap_0">
            <defs>
                <filter id="glow">
                    <fegaussianblur class="blur" result="coloredBlur" stddeviation="4"></fegaussianblur>
                    <femerge>
                        <femergenode in="coloredBlur"></femergenode>
                        <femergenode in="SourceGraphic"></femergenode>
                    </femerge>
                </filter>
            </defs>
        </svg>
        
   </section>


</section>
                `
            }

        }
        return `
<section data-part-name="${partName}"></section>
        `;
    }


    componentFn_render_btnRetry (partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnRetry   =  data.hasOwnProperty("prop_btnRetry")       ?  data.prop_btnRetry      : {};

            const prop_type       =  prop_btnRetry.hasOwnProperty("prop_type")          ?  prop_btnRetry.prop_type         : "submit";
            const prop_title      =  prop_btnRetry.hasOwnProperty("prop_title")         ?  prop_btnRetry.prop_title        : "Retry";
            const prop_btnClass   =  prop_btnRetry.hasOwnProperty("prop_btnClass")      ?  prop_btnRetry.prop_btnClass     : [];

            new window.ComponentButton(
                `component-btn-retry-in-component-404-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: ["position-absolute" , "w-100"] ,
                    styles:{
                        "bottom" : "10%"
                    },

                    prop_type ,
                    prop_title ,
                    prop_btnClass ,


                    fn_callback: (event) => {
                        this.fn_onCLickBtnRetry(event);
                    }
                }

            )
        }
    }





    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickBtnRetry(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }

}






/*-------------------------------------
 4) Component Form
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_formClass
@prop_formStyles

@prop_btnSubmit    {prop_type , prop_title , prop_btnClass}

@prop_forms
@prop_url
@prop_data
-------------------------------------*/
window.ComponentForm = class ComponentForm extends ComponentBase{

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_formClass"      , default: ["border" , "shadow-sm" , "p-2" ]} ,
            {prop : "prop_formStyles"     , default: {}} ,
        ] ,
        part_loading: [

        ] ,
        part_form: [
            {prop : "prop_forms"          , default: null } ,
            {prop : "prop_url"            , default: "" } ,
            {prop : "prop_data"           , default: [] } ,
        ] ,
        part_404: [

        ] ,
        part_button_submit: [
            {prop : "prop_btnSubmit"      , default: {prop_type: "submit"  , prop_title: "Submit" , prop_btnClass: ["w-100"]}      } ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_loading: {} ,
                part_form: {} ,
                part_404: {} ,
                part_button_submit: {} ,
            }
        }
    }




    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentForm.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn( componentSlots , var_randomId){
        this.templateFn(  "part_border");
        this.templateFn(  "part_button_submit");
    }

    templateFn(partName = null  , componentSlots  , var_randomId){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_form":
                return this.template_render_form( partName);
            case "part_button_submit":
                return this.componentFn_render_buttonSubmit( partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
           <component-border id="component-form-border-${this._COMPONENT_RANDOM_ID}">
               <component-body>
               
                    <section id="component-form-messages-${this._COMPONENT_RANDOM_ID}"></section>
         
                    ${this.templateFn("part_form") ?? ""}
         
                    <section class="d-block border-top pt-2 px-1">
                        <component-button id="component-form-button-submit-${this._COMPONENT_RANDOM_ID}"></component-button>
                    </section>
         
                    <component-404 id="component-form-404-${this._COMPONENT_RANDOM_ID}"></component-404>
         
                    <component-loading id="component-form-loading-${this._COMPONENT_RANDOM_ID}"></component-loading>
                    
               </component-body>
          </component-border> 
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
    }

    template_render_form(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_forms =     data.hasOwnProperty("prop_forms") && data.prop_forms != null      ? data.prop_forms           : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            return `
<section data-part-name="${partName}">
    <style>
        #${this._COMPONENT_ID} #component-form-forms-${this._COMPONENT_RANDOM_ID}{
            min-height: 60%;
        }
    </style>
    <form id="component-form-forms-${this._COMPONENT_RANDOM_ID}" class="m-2" >
         
         ${prop_forms}

    </form>
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_border(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_formClass =      data.hasOwnProperty("prop_formClass")     ? data.prop_formClass    : null;
            const prop_formStyles =     data.hasOwnProperty("prop_formStyles")    ? data.prop_formStyles   : null;

            new window.ComponentBorder(
                `component-form-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_btnMore_show: false ,

                    prop_structureClass: prop_formClass ,
                    prop_structureStyles: prop_formStyles ,
                }
            )
        }
    }

    componentFn_render_buttonSubmit(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnSubmit   =  data.hasOwnProperty("prop_btnSubmit")             ?  data.prop_btnSubmit      : {};

            const prop_type       =  prop_btnSubmit.hasOwnProperty("prop_type")         ?  prop_btnSubmit.prop_type         : "submit";
            const prop_title      =  prop_btnSubmit.hasOwnProperty("prop_title")        ?  prop_btnSubmit.prop_title        : "submit";
            const prop_btnClass   =  prop_btnSubmit.hasOwnProperty("prop_btnClass")     ?  prop_btnSubmit.prop_btnClass     : [  "float-start"  ];
            const prop_btnStyles  =  prop_btnSubmit.hasOwnProperty("prop_btnStyles")    ?  prop_btnSubmit.prop_btnStyles    : {
                "width" : "200px!important"
            } ;

            new window.ComponentButton(
                `component-form-button-submit-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: [ "d-block" , "mx-2" ] ,
                    styles:{

                    },

                    prop_type ,
                    prop_title ,
                    prop_btnClass ,
                    prop_btnStyles ,

                    fn_callback: () => {
                        this.runFn('fn_onCLickBtnSubmit' , "event")
                    }
                }

            )
        }
    }


    /* ---------------------------------------------
           FUNCTIONs
        --------------------------------------------- */
    fn_onCLickBtnSubmit(event){
        const data = this._COMPONENT_CONFIG;

        if (data.hasOwnProperty("prop_url")){

            const formData =  this.getComponentElement().querySelector("#component-form-forms-" + this._COMPONENT_RANDOM_ID);

            tools_submit.fetcth(
                data.prop_url,
                {
                    data: {
                        formData: formData,
                        data: data.hasOwnProperty("prop_data") ? data.prop_data : []
                    },
                    componentMessagesData: {elId: `component-form-messages-${this._COMPONENT_RANDOM_ID}`},
                    componentLoadingData:  {elId: `component-form-loading-${this._COMPONENT_RANDOM_ID}`},
                    component404Data: {
                        elId: `component-form-404-${this._COMPONENT_RANDOM_ID}`,
                        fn_callback: () => {
                            this.runFn('fn_onCLickBtnSubmit' , "event")
                        }
                    },
                });

        }
    }
}






/*-------------------------------------
 5) Component Is Empty
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_iconClass
@prop_iconStyles

@prop_title

@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddTitle
@prop_btnAddClass

@fn_callback
-------------------------------------*/
window.ComponentIsEmpty = class ComponentIsEmpty extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
  --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_borderClass"    , default: ["border" , "border-danger" , "rounded" , "shadow-sm"]} ,
            {prop : "prop_borderStyles"   , default: {}} ,
        ] ,
        part_icon: [
            {prop : "prop_icon"           , default: "&#9888;"} ,
            {prop : "prop_iconClass"      , default: ["font-30pt" , "text-danger"]} ,
            {prop : "prop_iconStyles"     , default: { "font-size" : "30px" , "display" : "block" ,  "text-align" : "center" , }} ,
        ] ,
        part_title: [
            {prop : "prop_title"          , default: null} ,

        ] ,
        part_btn_retry: [
            {prop : "prop_btnAddStatus"   , default: false} ,
            {prop : "prop_btnAddClass"    , default: [ "mx-auto"]} ,
            {prop : "prop_btnAddStyles"   , default:  {"cursor" : "pointer" , "width" : "100%" , "height" : "32px" , "text-align" : "center!important" ,}} ,
            {prop : "prop_btnAddIcon"     , default: "&#10082;"} ,
            {prop : "prop_btnAddTitle"    , default: "add item"} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_icon: {} ,
                part_title: {} ,
                part_btn_retry: {} ,
            }
        }
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentIsEmpty.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
      TEMPLATEs
     --------------------------------------------- */
    componentFn(){
        this.templateFn(  "part_border");
        this.templateFn(  "part_icon");
        this.templateFn(  "part_btn_retry");
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_title":
                return this.template_render_title(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_btn_retry":
                return this.componentFn_render_button(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
           <component-border id="component-is-empty-border-${this._COMPONENT_RANDOM_ID}">
               <component-body>
               
                    <component-icon id="component-is-empty-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>
         
                    ${this.templateFn("part_title") ?? ""}
         
                    <div class="d-block mx-auto">
                        <component-button id="component-is-empty-button-${this._COMPONENT_RANDOM_ID}"></component-button>
                    </div>
                    
               </component-body>
          </component-border> 
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_title(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_title =     data.hasOwnProperty("prop_title")    ?  data.prop_title     : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');

            return `
<section data-part-name="${partName}" 
         id="component-is-empty-title-${this._COMPONENT_RANDOM_ID}" 
         class="">
    <style>
        #${this._COMPONENT_ID} #component-is-empty-title-${this._COMPONENT_RANDOM_ID}{
             text-align: center!important;
       }
    </style>
    <p>
         <b>
            ${prop_title} 
         </b>
    </p>
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_border(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_borderClass =      data.hasOwnProperty("prop_borderClass")     ? data.prop_borderClass    : null;
            const prop_borderStyles =     data.hasOwnProperty("prop_borderStyles")    ? data.prop_borderStyles   : null;

            new window.ComponentBorder(
                `component-is-empty-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_btnMore_show: false ,

                    prop_structureClass: prop_borderClass ,
                    prop_structureStyles: prop_borderStyles ,
                }
            )
        }
    }

    componentFn_render_icon(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_icon        =  data.hasOwnProperty("prop_icon")       ?  data.prop_icon         : "&#9888;";
            const prop_iconClass   =  data.hasOwnProperty("prop_iconClass")  ?  data.prop_iconClass    : [  "mx-3"];
            const prop_iconStyles  =  data.hasOwnProperty("prop_iconStyles")  ?  data.prop_iconStyles  : {
                "font-size" : "30px" ,
                "width" : "100%" ,
                "display" : "block" ,
                "text-align" : "center" ,
            };

            new window.ComponentIcon(
                `component-is-empty-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_iconClass: prop_iconClass ,
                    prop_iconStyles: prop_iconStyles ,
                    prop_icon: prop_icon ,
                }
            )
        }
    }

    componentFn_render_button(partName) {
        const data = this.getPartProps(partName)

        if (data != null && data.hasOwnProperty("prop_btnAddStatus") && data.prop_btnAddStatus){

            const prop_btnAddClass   =      data.hasOwnProperty("prop_btnAddClass")             ?  data.prop_btnAddClass            :  [];
            const prop_btnAddStyles  =      data.hasOwnProperty("prop_btnAddStyles")            ?  data.prop_btnAddStyles           :  {
                "cursor" : "pointer" ,
                "height" : "32px" ,
                "text-align" : "center!important" ,
            };
            const prop_btnAddIcon    =      data.hasOwnProperty("prop_btnAddIcon")              ?  data.prop_btnAddIcon             :  "&#10082;";
            const prop_btnAddTitle   =      data.hasOwnProperty("prop_btnAddTitle")             ?  data.prop_btnAddTitle            :  "add item";

            new window.ComponentButton(
                `component-is-empty-button-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: ["d-block" , "m-auto" , "mb-2"] ,
                    styles: {
                        "width" : "200px"
                    },


                    prop_btnClass: prop_btnAddClass ,
                    prop_btnStyles: prop_btnAddStyles ,
                    prop_title: `
<span class="mx-1">
      ${prop_btnAddIcon}
</span>
<span class="d-none d-md-inline">
      ${prop_btnAddTitle}
</span>
                    ` ,

                    fn_callback: (event)=>{
                        this.fn_onCLickRetry(event)
                    }

                }
            )
        }
    }





    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickRetry(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }


}







/*-------------------------------------
 6) Component Header
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_classList

@prop_icon

@prop_size
@prop_title
-------------------------------------*/
window.ComponentHeader = class ComponentHeader extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_borderClass"   , default: ["pb-0","px-2","mb-1","border-bottom"]} ,
            {prop : "prop_borderStyles"  , default: {}} ,
        ] ,
        part_header: [
            {prop : "prop_size"          , default: 5} ,
            {prop : "prop_title"         , default: ""} ,
        ] ,
        part_icon: [
            {prop : "prop_icon" , default: null}
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_header: {} ,
                part_icon: {} ,
            }
        }
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentHeader.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();

    }




    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn(  "part_border");
        this.templateFn(  "part_icon");
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_header":
                return this.template_render_header(partName);
            default:
                return this.templateBasic_render();
        }
    }


    template_render_structure(partName) {

        const content = `
           <component-border id="component-header-border-${this._COMPONENT_RANDOM_ID}">
               <component-body>
               
                     <component-icon id="component-header-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>
                     
                     ${this.templateFn("part_header") ?? ""}
                    
               </component-body>
          </component-border> 
                `;
        return this.templateBasic_render_structure(content);

    }

    template_render_header(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_size =      data.hasOwnProperty("prop_size")        ?  data.prop_size       : 5;
            const prop_title =     data.hasOwnProperty("prop_title")       ?  data.prop_title      : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            return `
<section data-part-name="${partName}" 
         id="component-header-text-${this._COMPONENT_RANDOM_ID}">
   <h${prop_size}>${prop_title ?? ''}</h${prop_size}>
</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_border(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_borderClass =      data.hasOwnProperty("prop_borderClass")     ? data.prop_borderClass    : null;
            const prop_borderStyles =     data.hasOwnProperty("prop_borderStyles")    ? data.prop_borderStyles   : null;

            console.log(data)

            new window.ComponentBorder(
                `component-header-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_btnMore_show: false ,

                    prop_structureClass: prop_borderClass ,
                    prop_structureStyles: prop_borderStyles ,
                }
            )
        }
    }

    componentFn_render_icon (partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_icon   =  data.hasOwnProperty("prop_icon")       ?  data.prop_icon      : null;

            new window.ComponentIcon(
                `component-header-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList:[
                        (this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") && this._COMPONENT_CONFIG.directionRtl) ? "float-end" : "float-start" ,
                        (this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") && this._COMPONENT_CONFIG.directionRtl) ? "ps-2" : "pe-2" ,
                    ] ,

                    prop_icon: prop_icon ,
                }
            )
        }
    }

}





/*-------------------------------------
 7) Component Collapse
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_title

@prop_bodyBackgroundColor
@prop_body
@prop_bodyShow
-------------------------------------*/
window.ComponentCollapse = class ComponentCollapse extends ComponentBase{

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_collapse_header: [
            {prop : "prop_title"                          , default: "---"} ,
        ] ,
        part_collapse_header_title: [

        ] ,
        part_collapse_header_icon: [
            {prop : "prop_bodyShow"                       , default: false} ,
        ] ,
        part_collapse_body: [
            {prop : "prop_bodyBackgroundColor"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("collapse") && tools_const.styles.collapse.hasOwnProperty("backgroundColor")   ? tools_const.styles.collapse.backgroundColor : ""} ,
            {prop : "prop_body"                           , default: null} ,
            {prop : "prop_bodyShow"                       , default: false} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_collapse_header: {
                part_collapse_header_title: {},
                part_collapse_header_icon: {},
            } ,
            part_collapse_body: {} ,
        }
    }





    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentCollapse.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }






    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn( componentSlots , var_randomId){
        this.templateFn("part_collapse_header_title")
        this.templateFn("part_collapse_header_icon")
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_collapse_header":
                return this.template_render_collapseHeader(partName);
            case "part_collapse_header_title":
                return this.componentFn_render_label(partName);
            case "part_collapse_header_icon":
                return this.componentFn_render_icon(partName);
            case "part_collapse_body":
                return this.template_render_collapseBody(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
         ${this.templateFn("part_collapse_header") ?? ""}
         
         ${this.templateFn("part_collapse_body") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_collapseHeader(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_title  = data.hasOwnProperty("prop_title")     ?  data.prop_title     :  "---";

            return `
<section data-part-name="${partName}" id="component-collapse-header-${this._COMPONENT_RANDOM_ID}" class="" >
    <style>
        #${this._COMPONENT_ID} #component-collapse-header-${this._COMPONENT_RANDOM_ID}{
            
       }
    </style>
    <component-label id="component-collapse-header-label-${this._COMPONENT_RANDOM_ID}">
             <component-body>
                 <div>
                     ${prop_title}
                     <component-icon id="component-collapse-header-label-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>
                 </div>
             </component-body>
    </component-label>
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_collapseBody(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_bodyBackgroundColor  = data.hasOwnProperty("prop_bodyBackgroundColor")                     ?  data.prop_bodyBackgroundColor  : "";
            const prop_bodyShow             = data.hasOwnProperty("prop_bodyShow")                                ?  data.prop_bodyShow             : false;
            const prop_body                 = data.hasOwnProperty("prop_body") && data.prop_body != null          ?  data.prop_body                 :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');


            return `
<section data-part-name="${partName}"  
         id="component-collapse-body-${this._COMPONENT_RANDOM_ID}" 
         class="shadow-sm p-2 border">
    <style>
        #${this._COMPONENT_ID} #component-collapse-body-${this._COMPONENT_RANDOM_ID}{
            background-color: ${prop_bodyBackgroundColor};
            display: ${prop_bodyShow ? '' : 'none'};
       }
    </style>
    
    ${prop_body}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label (partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            new window.ComponentLabel(
                "component-collapse-header-label-"+  this._COMPONENT_RANDOM_ID ,
                {
                    fn_callback: (event)=>{
                        this.fn_onCLickHeaderCollapse(event)
                    }
                }
            )
        }
    }

    componentFn_render_icon (partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_bodyShow             = data.hasOwnProperty("prop_bodyShow")                                ?  data.prop_bodyShow             : false;

            new window.ComponentIcon(
                `component-collapse-header-label-icon-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: [ (this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") && this._COMPONENT_CONFIG.directionRtl) ? "float-start" : "float-end"] ,

                    prop_icon : prop_bodyShow  ? "&#129171;" : "&#129169" ,
                    prop_iconClass : [] ,
                    prop_iconStyles : {
                        "font-size" : "20pt",
                        "margin" : "0 10px",
                        "color" : "#000000",
                        "line-height" :prop_bodyShow  ? "" : "0",
                        "padding-top" :prop_bodyShow  ? "15px" : "0px"
                    } ,
                }
            )
        }
    }




    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickHeaderCollapse(event){
        let prop_bodyShow = this.get("prop_bodyShow");
        if (prop_bodyShow == null){
            prop_bodyShow = false;
        }
        this.set("prop_bodyShow" , !prop_bodyShow);
    }

}








/*-------------------------------------
 8) Component Table
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_tableClass
@prop_tableStyles
@prop_tableType                      // 1) table-dark  |  2) table-primary  | 3) table-secondary  | 4) table-success  | 5) table-danger  | 6) table-warning  | 7) table-info  | 8) table-light  | 0(default)
@prop_tableBordered                  // 1) border-dark |  2) border-primary | 3) border-secondary | 4) border-success | 5) border-danger | 6) border-warning | 7) border-info | 8) border-light | 0(default)

@prop_tableStriped
@prop_tableHover
@prop_tableBorderless
@prop_order
@prop_data
@prop_header
-------------------------------------*/
window.ComponentTable = class ComponentTable extends ComponentBase{

    TYPE_SELECTED_NONE = 0;
    TYPE_SELECTED_ROW  = 1;
    TYPE_SELECTED_COL  = 2;
    TYPE_SELECTED_BOTH = 3;


    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_table: [
            {prop : "prop_tableClass"                  , default: [ "table" ]} ,
            {prop : "prop_tableStyles"                 , default: {}} ,

            {prop : "prop_tableType"                   , default: 0} ,
            {prop : "prop_tableBordered"               , default: 0} ,

            {prop : "prop_tableStriped"                , default: false} ,
            {prop : "prop_tableHover"                  , default: false} ,
            {prop : "prop_tableBorderless"             , default: false} ,
        ] ,
        part_table_header: [
            {prop : "prop_tableHeadClass"              , default: []} ,
            {prop : "prop_tableHeadStyles"             , default: {} } ,
            {prop : "prop_tableItemHeadClass"          , default: []} ,
            {prop : "prop_tableItemHeadStyles"         , default: {} } ,

            {prop : "prop_order"                       , default: {} } ,
            {prop : "prop_header"                      , default: {} } ,
        ] ,
        part_table_body: [
            {prop : "prop_tableBodyClass"              , default: []} ,
            {prop : "prop_tableBodyStyles"             , default: {}} ,
            {prop : "prop_tableItemBodyClass"          , default: []} ,
            {prop : "prop_tableItemBodyStyles"         , default: {} } ,
            {prop : "prop_tableItemBodyHoverStyles"    , default: {} } ,
            {prop : "prop_order"                       , default: {} } ,
            {prop : "prop_header"                      , default: {} } ,
            {prop : "prop_data"                        , default: {} } ,

            {prop : "prop_valueType"                   , default: 0 } ,
            {prop : "prop_valueRow_backgroundColor"    , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("table") &&  tools_const.styles.table.hasOwnProperty("backgroundColor_rowSelected") ? tools_const.styles.table.backgroundColor_rowSelected : "" } ,
            {prop : "prop_valueCol_backgroundColor"    , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("table") &&  tools_const.styles.table.hasOwnProperty("backgroundColor_columnSelected") ? tools_const.styles.table.backgroundColor_columnSelected : "" } ,
            {prop : "prop_valueCol_textColor"          , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("table") &&  tools_const.styles.table.hasOwnProperty("backgroundColor_textSelected")   ? tools_const.styles.table.backgroundColor_textSelected : "" } ,

            {prop : "prop_order"                       , default: {} } ,
            {prop : "prop_header"                      , default: {} } ,
            {prop : "prop_data"                        , default: [] } ,

            {prop : "prop_valueRow"                    , default: null } ,
            {prop : "prop_valueCol"                    , default: null } ,
        ] ,
        part_table_footer: [

        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_table : {
                part_table_header: {},
                part_table_columns: {},
            }
        }
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentTable.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){

    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_table":
                return this.template_render_table(partName);
            case "part_table_header":
                return this.template_render_tableHeader(partName);
            case "part_table_body":
                return this.template_render_tableBody(partName);
            case "part_table_footer":
                return this.template_render_tableFooter(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {

        const content = `
            ${this.templateFn("part_table") ?? ""}
                `;
        return this.templateBasic_render_structure(content);

    }


    template_render_table(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {
            const prop_tableClass          = data.hasOwnProperty("prop_tableClass")           ?  data.prop_tableClass                  : [ "table" ];
            const prop_tableStyles         = data.hasOwnProperty("prop_tableStyles")          ?  data.prop_tableStyles                 : {};

            const prop_tableType           = data.hasOwnProperty("prop_tableType")            ? data.prop_tableType                    : 0;
            const prop_tableBordered       = data.hasOwnProperty("prop_tableBordered")        ? data.prop_tableBordered                : 0;

            const prop_tableStriped        =   data.hasOwnProperty("prop_tableStriped")       ?  data.prop_tableStriped                : false;
            const prop_tableHover          =   data.hasOwnProperty("prop_tableHover")         ?  data.prop_tableHover                  : false;
            const prop_tableBorderless     =   data.hasOwnProperty("prop_tableBorderless")    ?  data.prop_tableBorderless             : false;

            let tableType = "";
            switch (prop_tableType){
                case 1: tableType = "table-dark"; break;
                case 2: tableType = "table-primary"; break;
                case 3: tableType = "table-secondary"; break;
                case 4: tableType = "table-success"; break;
                case 5: tableType = "table-danger"; break;
                case 6: tableType = "table-warning"; break;
                case 7: tableType = "table-info"; break;
                case 8: tableType = "table-light"; break;
            }

            let tableBordered = "";
            switch (prop_tableBordered){
                case 1: tableBordered += "table-bordered  border-dark"; break;
                case 2: tableBordered += "table-bordered  border-primary"; break;
                case 3: tableBordered += "table-bordered  border-secondary"; break;
                case 4: tableBordered += "table-bordered  border-success"; break;
                case 5: tableBordered += "table-bordered  border-danger"; break;
                case 6: tableBordered += "table-bordered  border-warning"; break;
                case 7: tableBordered += "table-bordered  border-info"; break;
                case 8: tableBordered += "table-bordered  border-light"; break;
            }


            return `
<section data-part-name="${partName}" class="row">
    <style>
       #${this._COMPONENT_ID} .icon-false-table{
           font-size: 15pt;
       }
       #${this._COMPONENT_ID} .icon-true-table{
           font-size: 10pt;
       }
    
        #${this._COMPONENT_ID} #component-table-table-${this._COMPONENT_RANDOM_ID}{
            ${tools_public.renderListStyle(prop_tableStyles)}
       }
    </style>
    <table id="component-table-table-${this._COMPONENT_RANDOM_ID}"
           class=" ${tableType}  ${tableBordered} ${tools_public.renderListClass(prop_tableClass)}
                   ${ prop_tableStriped ?    'table-striped'    : ''}
                   ${ prop_tableHover ?      'table-hover'      : ''} 
                   ${ prop_tableBorderless ? 'table-borderless' : ''}
           ">
        ${this.templateFn("part_table_header") ?? ""}
         
         ${this.templateFn("part_table_body") ?? ""}
         
         ${this.templateFn("part_table_footer") ?? ""}
    </table>
</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_tableHeader(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_tableHeadClass             =   data.hasOwnProperty("prop_tableHeadClass")             ?  data.prop_tableHeadClass              : [];
            const prop_tableHeadStyles            =   data.hasOwnProperty("prop_tableHeadStyles")            ?  data.prop_tableHeadStyles             : null;

            const prop_tableItemHeadClass         =   data.hasOwnProperty("prop_tableItemHeadClass")         ?  data.prop_tableItemHeadClass           : [];
            const prop_tableItemHeadStyles        =   data.hasOwnProperty("prop_tableItemHeadStyles")        ?  data.prop_tableItemHeadStyles          : null;

            const prop_order                      =   data.hasOwnProperty("prop_order")                      ?  data.prop_order                       : [];
            const prop_header                     =   data.hasOwnProperty("prop_header")                     ?  data.prop_header                      : [];

            const htmlHeader = this.fn_onGetHtmlHeader(prop_order , prop_header , prop_tableItemHeadClass)

            return `

<thead data-part-name="${partName}"  
       id="component-table-header-${this._COMPONENT_RANDOM_ID}" 
       class=" ${tools_public.renderListClass(prop_tableHeadClass)}">
     <style>
         #${this._COMPONENT_ID} #component-table-header-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_tableHeadStyles)}
         }
         #${this._COMPONENT_ID}.component-table-header-item-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_tableItemHeadStyles)}
         }
     </style>
    <tr>
        ${htmlHeader}
    </tr>
</thead>
            `;
        }

        return `
<thead data-part-name="${partName}"></thead>
        `;
    }

    template_render_tableBody(partName) {

        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_tableBodyClass             =   data.hasOwnProperty("prop_tableBodyClass")             ?  data.prop_tableBodyClass              : [];
            const prop_tableBodyStyles            =   data.hasOwnProperty("prop_tableBodyStyles")            ?  data.prop_tableBodyStyles             : null;

            const prop_tableItemBodyClass         =   data.hasOwnProperty("prop_tableItemBodyClass")         ?  data.prop_tableItemBodyClass           : [];
            const prop_tableItemBodyStyles        =   data.hasOwnProperty("prop_tableItemBodyStyles")        ?  data.prop_tableItemBodyStyles          : null;
            const prop_tableItemBodyHoverStyles   =   data.hasOwnProperty("prop_tableItemBodyHoverStyles")   ?  data.prop_tableItemBodyHoverStyles     : null;

            const prop_valueType                  =   data.hasOwnProperty("prop_valueType")                  ?  data.prop_valueType                    : this.TYPE_SELECTED_NONE;
            const prop_valueRow_backgroundColor   =   data.hasOwnProperty("prop_valueRow_backgroundColor")   ?  data.prop_valueRow_backgroundColor     : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("table") &&  tools_const.styles.table.hasOwnProperty("backgroundColor_rowSelected") ? tools_const.styles.table.backgroundColor_rowSelected : "" ;
            const prop_valueCol_backgroundColor   =   data.hasOwnProperty("prop_valueCol_backgroundColor")   ?  data.prop_valueCol_backgroundColor     : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("table") &&  tools_const.styles.table.hasOwnProperty("backgroundColor_columnSelected") ? tools_const.styles.table.backgroundColor_columnSelected : "" ;
            const prop_valueCol_textColor         =   data.hasOwnProperty("prop_valueCol_textColor")         ?  data.prop_valueCol_textColor           : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("table") &&  tools_const.styles.table.hasOwnProperty("backgroundColor_textSelected")   ? tools_const.styles.table.backgroundColor_textSelected : ""  ;

            const prop_data                       =   data.hasOwnProperty("prop_data")                       ?  data.prop_data                        : [];
            const prop_order                      =   data.hasOwnProperty("prop_order")                      ?  data.prop_order                       : [];
            const prop_header                     =   data.hasOwnProperty("prop_header")                     ?  data.prop_header                      : [];

            let   prop_valueRow                   =   data.hasOwnProperty("prop_valueRow")                   ?  data.prop_valueRow                    :  null;
            let   prop_valueCol                   =   data.hasOwnProperty("prop_valueCol")                   ?  data.prop_valueCol                    :  null;

            const htmlBody = this.fn_onGetHtmlBody(prop_order , prop_header  , prop_data , prop_valueType  , prop_valueRow , prop_valueCol , prop_tableItemBodyClass );

            return `
<tbody data-part-name="${partName}" 
       id="component-table-body-${this._COMPONENT_RANDOM_ID}" 
       class=" ${tools_public.renderListClass(prop_tableBodyClass)}">
       
     <style>
         #${this._COMPONENT_ID} #component-table-body-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_tableBodyStyles)}
         }
         #${this._COMPONENT_ID} .component-table-body-item-${this._COMPONENT_RANDOM_ID} span{
             cursor: pointer;
             ${tools_public.renderListStyle(prop_tableItemBodyStyles)}
         }
         #${this._COMPONENT_ID} .component-table-body-item-${this._COMPONENT_RANDOM_ID}:hover span{
             ${tools_public.renderListStyle(prop_tableItemBodyHoverStyles)}
         }
         
         #${this._COMPONENT_ID} .selected_table_row{
             background-color: ${prop_valueRow_backgroundColor}!important;
          }
         #${this._COMPONENT_ID} .selected_table_col{
             background-color: ${prop_valueCol_backgroundColor}!important;
             color: ${prop_valueCol_textColor}!important;
         }
     </style>
    <tr>
        ${htmlBody}
    </tr>
</tbody>

            `;
        }

        return `
<thead data-part-name="${partName}"></thead>
        `;
    }

    template_render_tableFooter(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            return `
              
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */

    fn_onGetHtmlHeader(prop_order , prop_header , prop_tableItemHeadClass){
        let htmlHeader = "";
        if (prop_header != null && Array.isArray(prop_header)){
            let orderHedar = [];
            for (const orderIndex in prop_order) {
                const orderKey = prop_order[orderIndex]
                for (const headerIndex in prop_header) {
                    const itemHeader = prop_header[headerIndex];
                    if (itemHeader != null && itemHeader.hasOwnProperty("id") && orderKey == itemHeader.id ){
                        orderHedar.push(itemHeader)
                    }
                }
            }
            for (const headerIndex in orderHedar) {
                const itemHeader = orderHedar[headerIndex];
                htmlHeader += `
<th class="element-item-header-table ${tools_public.renderListClass(prop_tableItemHeadClass)}" 
   scope="col">
     ${itemHeader.hasOwnProperty("content") ? itemHeader.content : '#'}
</th>`
            }
        }

        return htmlHeader;
    }

    fn_onGetHtmlBody(prop_order , prop_header  , prop_data , prop_valueType , prop_valueRow , prop_valueCol  , prop_tableItemBodyClass){

        let htmlBody = "";

        const tableDataOreder = [];
        if (prop_data != null){
            for (const tableDataKey in prop_data) {
                const itemData = prop_data[tableDataKey];
                const itemDataOrder = {};
                for (const tableHeaderKey in prop_header) {
                    const itemHeader = prop_header[tableHeaderKey]
                    if (itemHeader.hasOwnProperty("id") && itemData.hasOwnProperty(itemHeader.id)){
                        const value = itemData[itemHeader.id];


                        if (value != null){
                            if (value.hasOwnProperty("content") ){
                                if (typeof value.content == "boolean"){
                                    if (value.content){
                                        itemDataOrder[itemHeader.id] = {content: '<span class="icon-true-table">&#9745;</span>' };
                                    }
                                    else {
                                        itemDataOrder[itemHeader.id] = {content: '<span class="icon-false-table">&#9744;</span>' };
                                    }
                                }
                                else {
                                    itemDataOrder[itemHeader.id] = value;
                                }
                            }
                            else {
                                if (typeof value == "boolean"){
                                    if (value){
                                        itemDataOrder[itemHeader.id] = {content: '<span class="icon-true-table">&#9745;</span>' };
                                    }
                                    else {
                                        itemDataOrder[itemHeader.id] = {content: '<span class="icon-false-table">&#9744;</span>' };
                                    }
                                }
                                else{
                                    itemDataOrder[itemHeader.id] = {content: value };
                                }
                            }
                        }
                        else {
                            itemDataOrder[itemHeader.id] = {content: "" };
                        }
                    }
                }
                tableDataOreder.push(itemDataOrder)
            }
        }

        if (prop_header != null && Array.isArray(prop_header)){
            let orderHedar = [];
            for (const orderIndex in prop_order) {
                const orderKey = prop_order[orderIndex]
                for (const headerIndex in prop_header) {
                    const itemHeader = prop_header[headerIndex];
                    if (itemHeader != null && itemHeader.hasOwnProperty("id") && orderKey == itemHeader.id ){
                        orderHedar.push(itemHeader)
                    }
                }
            }

            if (tableDataOreder != null && Array.isArray(tableDataOreder)){
                for (const bodyIndex in tableDataOreder) {
                    const itemBody = tableDataOreder[bodyIndex];

                    let classSelected = "";
                    if (prop_valueRow == bodyIndex &&  (prop_valueType == this.TYPE_SELECTED_ROW || prop_valueType == this.TYPE_SELECTED_BOTH)){
                        classSelected = "selected_table_row"
                    }

                    htmlBody += `<tr class="${classSelected} rounded">`
                    for (const headerIndex in orderHedar) {
                        const itemHeader = orderHedar[headerIndex];
                        if (itemHeader != null && itemHeader.hasOwnProperty("id") && itemBody.hasOwnProperty(itemHeader.id) && itemBody[itemHeader.id].hasOwnProperty("content")){

                            let colClassSelected = "";
                            if (prop_valueRow == bodyIndex && prop_valueCol == headerIndex && (prop_valueType == this.TYPE_SELECTED_COL || prop_valueType == this.TYPE_SELECTED_BOTH)){
                                colClassSelected = "selected_table_col"
                            }


                            htmlBody += `
<td class="element-item-body-table " >
    <span class="${colClassSelected} ${tools_public.renderListClass(prop_tableItemBodyClass)}" onclick="${this.getFn('fn_onSelectCol' , "event" , `'${itemHeader.id }'`,  headerIndex , bodyIndex)}">
        ${itemBody[itemHeader.id].content}
    </span>
</td>
`;
                        }
                    }
                    htmlBody += `</tr>`

                }
            }
        }

        return htmlBody;
    }

    fn_onSelectCol(event , key  , colIndex, rowIndex){
        const data = this._COMPONENT_CONFIG;

        const el = event.target;
        const value = el.innerHTML.trim();

        this.set("prop_valueRow" , rowIndex);
        this.set("prop_valueCol" , colIndex);

        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(value , key , colIndex , rowIndex);
        }
    }


}







/*-------------------------------------
 9) Component Button
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type
@prop_title

@prop_btnClass
@prop_btnStyles
@prop_btnHoverStyles

@prop_btnBackgroundColor
@prop_btnBackgroundColor_hover
@prop_btnColor

@fn_callback
-------------------------------------*/
window.ComponentButton = class ComponentButton extends ComponentBase{


    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_button: [
            {prop : "prop_type"                         , default: "submit"  } ,  // error  //submit //null
            {prop : "prop_title"                        , default: "BTN"     } ,
            {prop : "prop_btnClass"                     , default: ["w-100"] } ,
            {prop : "prop_btnStyles"                    , default: {}        } ,
            {prop : "prop_btnHoverStyles"               , default: {}        } ,
            {prop : "prop_btnBackgroundColor"           , default: null      } ,
            {prop : "prop_btnBackgroundColor_hover"     , default: null      } ,
            {prop : "prop_btnColor"                     , default: null      } ,
            {prop : "fn_callback"                       , default: null      } ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_button: {} ,
        }
    }




    /* ---------------------------------------------
        SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentButton.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }





    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    templateFn(partName = null  , componentSlots  , var_randomId){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_button":
                return this.template_render_button( partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
            ${this.templateFn("part_button") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_button(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_type             =   data.hasOwnProperty("prop_type")                 ?  data.prop_type               :  null;
            const prop_title            =   data.hasOwnProperty("prop_title")                ?  data.prop_title              :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            const prop_btnClass         =   data.hasOwnProperty("prop_btnClass")             ?  data.prop_btnClass           : "w-100"
            const prop_btnStyles        =   data.hasOwnProperty("prop_btnStyles")            ?  data.prop_btnStyles          : null;
            const prop_btnHoverStyles   =   data.hasOwnProperty("prop_btnHoverStyles")       ?  data.prop_btnHoverStyles     : null;

            let btnBackgroundColor =  null;
            let btnBackgroundColor_hover =  null;
            let btnColor =            null;

            switch (prop_type){
                case "cancel" :
                    btnBackgroundColor       = tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("button") && tools_const.styles.button.hasOwnProperty("error") && tools_const.styles.button.error.hasOwnProperty("backgroundColor")        ? tools_const.styles.button.error.backgroundColor : "" ;
                    btnBackgroundColor_hover = tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("button") && tools_const.styles.button.hasOwnProperty("error") && tools_const.styles.button.error.hasOwnProperty("backgroundColorHover")   ? tools_const.styles.button.error.backgroundColorHover : "" ;
                    btnColor                 = tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("button") && tools_const.styles.button.hasOwnProperty("error") && tools_const.styles.button.error.hasOwnProperty("color")                  ? tools_const.styles.button.error.color : ""  ;
                    break;
                case "submit" :
                    btnBackgroundColor       = tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("button") && tools_const.styles.button.hasOwnProperty("default") && tools_const.styles.button.default.hasOwnProperty("backgroundColor")        ? tools_const.styles.button.default.backgroundColor : "" ;
                    btnBackgroundColor_hover = tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("button") && tools_const.styles.button.hasOwnProperty("default") && tools_const.styles.button.default.hasOwnProperty("backgroundColorHover")   ? tools_const.styles.button.default.backgroundColorHover : "" ;
                    btnColor                 = tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("button") && tools_const.styles.button.hasOwnProperty("default") && tools_const.styles.button.default.hasOwnProperty("color")                  ? tools_const.styles.button.default.color : ""  ;
                    break;
                default:
                    btnBackgroundColor       = data.hasOwnProperty("prop_btnBackgroundColor")         ?  data.prop_btnBackgroundColor          : "";
                    btnBackgroundColor_hover = data.hasOwnProperty("prop_btnBackgroundColor_hover")   ?  data.prop_btnBackgroundColor_hover    : "" ;
                    btnColor                 = data.hasOwnProperty("prop_btnColor")                   ?  data.prop_btnColor                    : "" ;
                    break;
            }


            return `
<section data-part-name="${partName}">

   <style>
      #${this._COMPONENT_ID} #component-button-${this._COMPONENT_RANDOM_ID}{
          background-color: ${btnBackgroundColor};
          color:            ${btnColor};
          ${tools_public.renderListStyle(prop_btnStyles)}
     }
      #${this._COMPONENT_ID} #component-button-${this._COMPONENT_RANDOM_ID}:hover{
          transition: background-color 200ms ease;
          background-color: ${btnBackgroundColor_hover};
          ${tools_public.renderListStyle(prop_btnHoverStyles)}
     }
   </style>

   <button id="component-button-${this._COMPONENT_RANDOM_ID}" class=" ${tools_public.renderListClass(prop_btnClass)}  shadow-sm border-0 px-2 py-1 rounded "
            onclick="${this.getFn('fn_onCLickBtn' , "event")}">
      ${prop_title}
   </button>

</section>
            `
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickBtn(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }

}






/*-------------------------------------
 10) Component Select Option
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_name
@prop_itemSelected

@prop_title
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_titleClass
@prop_titleStyles

@prop_icon

@prop_options
@prop_placeholder

@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddClass
@prop_btnAddTitle

@prop_optionHeight
@prop_optionWidth
@prop_optionStyles

@prop_options
@prop_optionStyles
@prop_optionWidth
@prop_optionItemNotSelectedBackground
@prop_optionItemHoverBackground
@prop_optionItemSelectedBackground

@fn_callback
@fn_clickBtnTools
-------------------------------------*/
window.ComponentSelectOption = class ComponentSelectOption extends ComponentBase {

    var_showFormSelectOption = false;

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_value: [
            {prop : "prop_name"                              , default:  ""} ,
            {prop : "prop_itemSelected"                      , default:  null} ,
        ] ,
        part_label: [
            {prop : "prop_title"                             , default:  "title"} ,
            {prop : "prop_labelClass"                        , default:  ["shadow-sm" , "px-2" ,"py-1" , "d-block "]} ,
            {prop : "prop_labelStyles"                       , default:  {}} ,
            {prop : "prop_labelHoverStyles"                  , default:  {}} ,
        ] ,
        part_header: [
            {prop : "prop_titleClass"                        , default:  ["  form-control " , " px-2"]} ,
            {prop : "prop_titleStyles"                       , default:  {}} ,
        ] ,
        part_header_icon: [
            {prop : "prop_icon"                              , default: null} ,
        ] ,
        part_header_title: [
            {prop : "prop_options"                           , default:  []} ,
            {prop : "prop_itemSelected"                      , default:  null} ,
            {prop : "prop_btnAddStatus"                      , default:  false} ,
            {prop : "prop_placeholder"                       , default:  null} ,
        ] ,
        part_header_button: [
            {prop : "prop_btnAddStatus"                       , default: false} ,
            {prop : "prop_btnAddIcon"                         , default: "&plus;"} ,
            {prop : "prop_btnAddTitle"                        , default: "add item"} ,
            {prop : "prop_btnAddClass"                        , default: []} ,
        ] ,
        part_header_arrow_icon: [
            {prop : "prop_btnAddStatus"                       , default:  false} ,
            {prop : "var_showFormSelectOption"                , default:  false} ,
        ] ,
        part_body: [
            {prop : "prop_optionHeight"                       , default:  200} ,
            {prop : "prop_optionWidth"                        , default:  "100%"} ,
            {prop : "prop_optionStyles"                       , default:  {}} ,
        ] ,
        part_body_searcher: [

        ] ,
        part_body_options: [
            {prop : "prop_itemSelected"                       , default:  null} ,
            {prop : "prop_options"                            , default:  []} ,
            {prop : "prop_optionItemNotSelectedBackground"    , default:  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemNotSelected")  ? tools_const.styles.selectOption.backgroundColor_itemNotSelected : "" } ,
            {prop : "prop_optionItemHoverBackground"          , default:  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemHover")  ? tools_const.styles.selectOption.backgroundColor_itemHover : "" } ,
            {prop : "prop_optionItemSelectedBackground"       , default:  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemSelected")  ? tools_const.styles.selectOption.backgroundColor_itemSelected : "" } ,
            {prop : "var_searcherSelectOption"                , default:  ""} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_value: {} ,
            part_label: {} ,
            part_header: {
                part_header_icon: {} ,
                part_header_title: {} ,
                part_header_arrow_icon: {} ,
                part_header_button: {} ,
            } ,
            part_body: {
                part_body_searcher:{} ,
                part_body_options:{} ,
            }
        } ,
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentSelectOption.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }




    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_label");
        this.templateFn("part_header_icon");
        this.templateFn("part_header_arrow_icon");
        this.templateFn("part_header_button");
        this.templateFn("part_body");
        this.templateFn("part_body_searcher");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_value":
                return this.template_render_value(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_header":
                return this.template_render_header(partName);
            case "part_header_icon":
                return this.componentFn_render_headerIcon(partName);
            case "part_header_arrow_icon":
                return this.componentFn_render_headerArrowIcon(partName);
            case "part_header_button":
                return this.componentFn_render_headerButton(partName);
            case "part_header_title":
                return this.template_render_headerTitle(partName);
            case "part_body":
                return this.componentFn_render_body(partName);
            case "part_body_searcher":
                return this.componentFn_render_bodySearcher(partName);
            case "part_body_options":
                return this.template_render_bodyOptions(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
      <component-label id="component-select-option-label-${ this._COMPONENT_RANDOM_ID}"></component-label>
     
      ${this.templateFn("part_value") ?? ""}
      
      ${this.templateFn("part_header") ?? ""}
      
      <div class="position-relative">
          <component-position-element id="component-select-option-position-element-${ this._COMPONENT_RANDOM_ID}">
                <component-body>
                
                    <component-input id="component-select-option-body-searcher-${ this._COMPONENT_RANDOM_ID}"></component-input>    
                    
                    ${this.templateFn("part_body_options") ?? ""}
                    
                 </component-body>
          </component-position-element>
      </div>
                `;
        return this.templateBasic_render_structure(content);
    }


    template_render_value(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_name               =   data.hasOwnProperty("prop_name")                ?  data.prop_name                 :  "";
            const prop_itemSelected       =   data.hasOwnProperty("prop_itemSelected")        ?  data.prop_itemSelected         : null;

            return `
<section data-part-name="${partName}" 
         id="component-select-option-value-${ this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-select-option-value-${ this._COMPONENT_RANDOM_ID}{
             
         }
     </style>
     
      <input name="${prop_name}"  value="${prop_itemSelected != null ? prop_itemSelected : '' }" type="hidden"/>
       
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_header(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_titleClass           =  data.hasOwnProperty("prop_titleClass")                ?  data.prop_titleClass                    :  ["  form-control " , " px-2" ];
            const prop_titleStyles          =  data.hasOwnProperty("prop_titleStyles")               ?  data.prop_titleStyles                   :  {};

            return `
<section data-part-name="${partName}" 
         id="component-select-option-header-${ this._COMPONENT_RANDOM_ID}" 
         class="${tools_public.renderListClass(prop_titleClass)} position-relative p-0"  
         onclick="${this.getFn('fn_showListOptions' , 'event')}">
     <style>
         #${this._COMPONENT_ID} #component-select-option-header-${ this._COMPONENT_RANDOM_ID}{
               ${tools_public.renderListStyle(prop_titleStyles)}
               cursor: pointer;
         }
     </style>
     
           ${this.templateFn("part_header_title") ?? ""}
           
           <component-icon id="component-select-option-header-icon-arrow-${ this._COMPONENT_RANDOM_ID}"></component-icon>
           
           <component-icon id="component-select-option-header-icon-${this._COMPONENT_RANDOM_ID}" ></component-icon>
           
           <component-button id="component-select-option-header-button-${ this._COMPONENT_RANDOM_ID}"></component-button>
     
</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_headerTitle(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_options              =  data.hasOwnProperty("prop_options")                   ?  data.prop_options                       : [];
            const prop_itemSelected         =  data.hasOwnProperty("prop_itemSelected")              ?  data.prop_itemSelected                  : [];
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;
            const prop_placeholder          =  data.hasOwnProperty("prop_placeholder")               ?  data.prop_placeholder                   : null;
            const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

            const var_itemSelectedTitle =this.fn_getItemSelectedTitle(prop_options , prop_itemSelected , prop_placeholder)

            return `
<section data-part-name="${partName}"
         id="component-select-option-header-title-${ this._COMPONENT_RANDOM_ID}"
         class=" d-block" >
     <style>
         #${this._COMPONENT_ID} #component-select-option-header-title-${ this._COMPONENT_RANDOM_ID}{
            ${directionRtl ? "padding-left" : "padding-right"} : ${prop_btnAddStatus ? "180px" : "20"};
            ${directionRtl ? "padding-right" : "padding-left"} : 30px;
            background-color: white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 28px;
            line-height: 35px;
         }
     </style>

     <b class="select-title-${ this._COMPONENT_RANDOM_ID}  w-100 d-block position-relative ">

        ${var_itemSelectedTitle}

     </b>

</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyOptions(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_options                           =  data.hasOwnProperty("prop_options")                              ?  data.prop_options                              :  [];
            const prop_itemSelected                      =  data.hasOwnProperty("prop_itemSelected")                         ?  data.prop_itemSelected                         :   null;
            const prop_optionItemNotSelectedBackground   =  data.hasOwnProperty("prop_optionItemNotSelectedBackground")      ?  data.prop_optionItemNotSelectedBackground      :   tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemNotSelected")  ? tools_const.styles.selectOption.backgroundColor_itemNotSelected : "";
            const prop_optionItemHoverBackground         =  data.hasOwnProperty("prop_optionItemHoverBackground")            ?  data.prop_optionItemHoverBackground            :   tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemHover")  ? tools_const.styles.selectOption.backgroundColor_itemHover : "";
            const prop_optionItemSelectedBackground      =  data.hasOwnProperty("prop_optionItemSelectedBackground")         ?  data.prop_optionItemSelectedBackground         :   tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemSelected")  ? tools_const.styles.selectOption.backgroundColor_itemSelected : "";
            const var_searcherSelectOption               =  data.hasOwnProperty("var_searcherSelectOption")                  ?  data.var_searcherSelectOption                  :   "";

            const optionHtml = this.fn_onGetBodyOptions(prop_options , prop_itemSelected , var_searcherSelectOption);

            return `
<section data-part-name="${partName}" 
         id="component-select-option-body-options-${ this._COMPONENT_RANDOM_ID}" 
         class=" d-block" >
     <style>
         #${this._COMPONENT_ID} #component-select-option-body-options-${ this._COMPONENT_RANDOM_ID}{
              
         }
         #${this._COMPONENT_ID} #component-select-option-body-options-element-${ this._COMPONENT_RANDOM_ID}{
              height: calc(100% - 45px);
         }
         #${this._COMPONENT_ID} .component-select-option-body-options-item-${this._COMPONENT_RANDOM_ID}{
             background-color: ${prop_optionItemNotSelectedBackground};
             padding: 0 10px !important;
         }
         #${this._COMPONENT_ID} .component-select-option-body-options-item-${this._COMPONENT_RANDOM_ID}:hover{
             background-color: ${prop_optionItemHoverBackground};
             color: white;
             cursor: pointer;
         }
         #${this._COMPONENT_ID} .component-select-option-body-options-item-selected-${this._COMPONENT_RANDOM_ID}{
             background-color: ${prop_optionItemSelectedBackground};
         }
     </style>
       
     <div id="component-select-option-body-options-element-${ this._COMPONENT_RANDOM_ID}"
          class="overflow-auto">
         ${optionHtml}
     </div>
       
</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_title            = data.hasOwnProperty("prop_title")            ? data.prop_title            : "title";

            const prop_labelClass       = data.hasOwnProperty("prop_labelClass")       ? data.prop_labelClass       : ["shadow-sm" , "px-2" ,"py-1" , "d-block "];
            const prop_labelStyles      = data.hasOwnProperty("prop_labelStyles")      ? data.prop_labelStyles      : {};
            const prop_labelHoverStyles = data.hasOwnProperty("prop_labelHoverStyles") ? data.prop_labelHoverStyles : {};

            new window.ComponentLabel(
                `component-select-option-label-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_title:  prop_title ,
                    prop_for  :  `component-select-option-header-${ this._COMPONENT_RANDOM_ID}` ,

                    prop_labelClass:       prop_labelClass ,
                    prop_labelStyles:      prop_labelStyles ,
                    prop_labelHoverStyles: prop_labelHoverStyles ,

                    fn_callback: ()=>{
                        this.runFn("fn_showListOptions" , "event" )
                    }

                }
            )
        }
    }

    componentFn_render_headerIcon(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;

            let styles = {
                "z-index" : "10",
                "margin" : "0 5px",
                "width" : "30px",
                "line-height" :   "35px",
                "cursor" : "pointer",
                "font-size" : "20pt;",
                "top" : "0" ,
            }
            if (directionRtl){
                styles["right"]= "0"
            }
            else {
                styles["left"]= "0"
            }


            new window.ComponentIcon(
                `component-select-option-header-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_icon: prop_icon ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,
                }
            )

        }
    }

    componentFn_render_headerArrowIcon(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;
            const var_showFormSelectOption  =  data.hasOwnProperty("var_showFormSelectOption")           ?  data.var_showFormSelectOption        : false;

            let styles = {
                "font-size" : "20pt",
                "height" : "34px",
                "margin" : "0 10px",
                "top" : "0px",
            }
            if (directionRtl){
                styles["left"]= prop_btnAddStatus ? "165px" : "0px";
            }
            else {
                styles["right"]= prop_btnAddStatus ? "165px" : "0px";
            }

            if (var_showFormSelectOption){
                styles["line-height"]= "10pt";
            }
            else{
                styles["line-height"]= "40pt";
            }

            new window.ComponentIcon(
                `component-select-option-header-icon-arrow-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_icon: var_showFormSelectOption ? "&#129169" : "&#129171" ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,
                }
            )

        }
    }

    componentFn_render_headerButton(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;

            if (prop_btnAddStatus){
                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
                const prop_btnAddIcon           =  data.hasOwnProperty("prop_btnAddIcon")                 ?  data.prop_btnAddIcon                    : "&plus;";
                const prop_btnAddTitle          =  data.hasOwnProperty("prop_btnAddTitle")                ?  data.prop_btnAddTitle                   : "add item";
                const prop_btnAddClass          =  data.hasOwnProperty("prop_btnAddClass")                ?  data.prop_btnAddClass                   : [];

                let styles =  {
                    "z-index" : "10" ,
                    "top" : "-1px" ,
                    "cursor" : "pointer" ,
                    "width" : "160px" ,
                    "height" : "38px" ,
                    "line-height" : "25px" ,
                };
                if (directionRtl){
                    styles["left"] = "0";
                }
                else {
                    styles["right"] = "0";
                }

                new window.ComponentButton(
                    `component-select-option-header-button-${ this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                        prop_btnStyles: styles ,
                        prop_title: `
<span class="mx-3">
    ${prop_btnAddIcon}
</span>
<span class="d-none d-md-inline">
    ${prop_btnAddTitle}
</span>
                    `,

                        fn_callback: (event)=>{
                            this.runFn("fn_clickBtnTools" , "event")
                        }
                    }
                )
            }

        }
    }

    componentFn_render_body(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_optionStyles         =  data.hasOwnProperty("prop_optionStyles")             ?  data.prop_optionStyles           :  {};
            const prop_optionHeight         =  data.hasOwnProperty("prop_optionHeight")             ?  data.prop_optionHeight           :  130;
            const prop_optionWidth          =  data.hasOwnProperty("prop_optionWidth")              ?  data.prop_optionWidth            :  "100%";


            new window.ComponentPositionElement(
                `component-select-option-position-element-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "d-none" ,

                    prop_elementClass: ["form-control" , "custom-select" , "rounded" , "px-2"] ,
                    prop_elementStyles: prop_optionStyles ,
                    prop_width: prop_optionWidth,
                    prop_height: prop_optionHeight,
                }
            )
        }
    }

    componentFn_render_bodySearcher(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            new window.ComponentInput(
                `component-select-option-body-searcher-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_show_label: false ,
                    prop_icon: "&#x2315;" ,

                    fn_oninput: (event , value) => {
                        this.set("var_searcherSelectOption" , value)
                    } ,
                }
            )
        }
    }



    /* ---------------------------------------------
      FUNCTIONs
     --------------------------------------------- */
    fn_clickBtnTools(event){
        event.stopPropagation();
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_clickBtnTools") && typeof data.fn_clickBtnTools != null){
            data.fn_clickBtnTools(event , data.hasOwnProperty("prop_itemSelected") ? data.prop_itemSelected : null);
        }
        this.fn_showListOptions(event , false);
    }

    fn_onSelectItemSelectOption(event , itemIdSelected){
        const data = this._COMPONENT_CONFIG;
        const prop_options      = data != null && data.hasOwnProperty("prop_options")      ? data.prop_options      : [];

        if (prop_options != null && Array.isArray(prop_options)){
            for (const itemOption of prop_options) {
                if (itemOption.hasOwnProperty("id") && itemOption.hasOwnProperty("name") && itemOption.id == itemIdSelected){
                    this.set("prop_itemSelected" , itemOption.id)
                    break;
                }
            }
        }
        this.fn_showListOptions(event , false);

        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event , data.hasOwnProperty("prop_itemSelected") ? data.prop_itemSelected : null);
        }
    }

    fn_getItemSelectedTitle(prop_options , prop_itemSelected , prop_placeholder){
        let resultExp = prop_placeholder != null ? prop_placeholder : "---";

        if (prop_itemSelected != null && prop_options != null && Array.isArray(prop_options)){
            for (const itemOption of prop_options) {
                if (itemOption.hasOwnProperty("id") && itemOption.hasOwnProperty("name") && itemOption.id == prop_itemSelected){
                    resultExp = itemOption.name;
                    break;
                }
            }
        }

        return resultExp;
    }

    fn_showListOptions(event , status=null){
        const var_showFormSelectOption =  status == null ? !this.get("var_showFormSelectOption") : status;
        this.set("var_showFormSelectOption" ,  var_showFormSelectOption);

        const body = document.querySelector(`#component-select-option-position-element-${ this._COMPONENT_RANDOM_ID}`);
        if (var_showFormSelectOption){
            body.classList.remove("d-none")
        }
        else {
            body.classList.add("d-none")
        }
    }

    fn_onGetBodyOptions(prop_options  , prop_itemSelected , var_searcherSelectOption){
        let optionsStr = "";

        if (prop_options != null && Array.isArray(prop_options)){
            for (let i=0; i < prop_options.length; i++){
                const item = prop_options[i];

                if (item.hasOwnProperty("name")){
                    let value = item.hasOwnProperty('id') ? item.id : 0;
                    if (typeof item.name.includes == "undefined" || item.name.includes(var_searcherSelectOption)){

                        optionsStr += `
<div class="component-select-option-body-options-item-${this._COMPONENT_RANDOM_ID} rounded my-1 ${prop_itemSelected != null && value == prop_itemSelected ? `component-select-option-body-options-item-selected-${this._COMPONENT_RANDOM_ID}` : ''}"
   onclick="${this.getFn("fn_onSelectItemSelectOption" , "event" , item.id)}"> 
   ${item.name} 
</div>
                `;

                    }
                }
            }
        }

        return optionsStr;
    }

}






/*-------------------------------------
 11) Component Tabs
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type           0 | 1
@prop_tabs           {id  name  icon}
@prop_tabSelected

@prop_firstCallBack

@fn_callback
-------------------------------------*/
window.ComponentTabs = class ComponentTabs extends ComponentBase{


    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_tabs: [
            {prop : "prop_type"                           , default:  0 } ,
            {prop : "prop_tabs"                           , default:  [] } ,
            {prop : "prop_tabSelected"                    , default:  null } ,
            {prop : "prop_firstCallBack"                  , default:  true } ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_tabs: {} ,
        } ,
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentTabs.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }






    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_firstCallBack") && data.prop_firstCallBack){
            this.fn_onSelectTab(event , data.hasOwnProperty("prop_tabSelected") ? data.prop_tabSelected : null , false)
        }
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_tabs":
                return this.template_render_tabs(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
      ${this.templateFn("part_tabs") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_tabs(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_type             =   data.hasOwnProperty("prop_type")             ?  data.prop_type             :  0;
            const prop_tabs             =   data.hasOwnProperty("prop_tabs")             ?  data.prop_tabs             :  [];
            const prop_tabSelected      =   data.hasOwnProperty("prop_tabSelected")      ?  data.prop_tabSelected      :  null;
            const prop_firstCallBack    =   data.hasOwnProperty("prop_firstCallBack")    ?  data.prop_firstCallBack    :  true;

            let tabHtml = "";
            let tabClass = "";
            let tabStyle = "";
            if (prop_type == 0){
                tabClass = "row m-0 mb-2";
                tabStyle = "height: 60px;"
                if (prop_tabs != null){
                    let tabClassCol = "";
                    switch (prop_tabs.length){
                        case 4:
                            tabClassCol = "col-md-3";
                            break;
                        case 3:
                            tabClassCol = "col-md-4";
                            break;
                        case 2:
                            tabClassCol ="col-md-6";
                            break;
                        case 1:
                            tabClassCol = "col-md-12";
                            break;
                    }

                    for (let i = 0; i < prop_tabs.length; i++) {
                        const itemTab = prop_tabs[i];
                        if (itemTab.hasOwnProperty("title")){
                            let icon = itemTab.hasOwnProperty("icon") ? `<img src="${itemTab.icon}" alt=" ">` : ``;
                            const tabId =  itemTab.hasOwnProperty("id")  ?  itemTab.id  :  i;
                            let classActive = prop_tabSelected != null && prop_tabSelected == tabId ? 'btn-tab-types-active' : '';

                            tabHtml += `
                      <div class="${tabClassCol} px-1 col-12 position-relative">
                          <button type="button"
                                onclick="${this.getFn("fn_onSelectTab" , "event" , tabId)}"
                                class="${classActive} btn-tab-types btn btn-light w-100 border shadow-sm line-height-30px">
                            ${icon}
                            ${itemTab.title}
                         </button>
                     </div>
                `;
                        }

                    }

                }

            }
            else if (prop_type == 1){
                tabClass = "border rounded p-1";
                tabStyle = "display: flow-root; maargin-bottom: 3px;";
                if (prop_tabs != null){
                    let tabClassCol = "float-start";

                    for (let i = 0; i < prop_tabs.length; i++) {
                        const itemTab = prop_tabs[i];
                        if (itemTab.hasOwnProperty("title")){
                            let icon = itemTab.hasOwnProperty("icon") ? itemTab.icon : ``;
                            const tabId =  itemTab.hasOwnProperty("id")  ?  itemTab.id  :  i;
                            let classActive = prop_tabSelected != null && prop_tabSelected == tabId ? 'btn-tab-types-active' : '';

                            tabHtml += `
                      <div class="${tabClassCol} px-1  position-relative">
                          <button type="button"
                                onclick="${this.getFn("fn_onSelectTab" , "event" , tabId)}"
                                class="${classActive} btn-tab-types btn btn-light w-100 border shadow-sm line-height-30px" 
                                title="${itemTab.title}">
                            ${icon}
                            ${itemTab.title}
                         </button>
                     </div>
                `;
                        }

                    }

                }

            }



            return `
<section data-part-name="${partName}" 
         id="component-tabs-tabs-${ this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-tabs-tabs-${ this._COMPONENT_RANDOM_ID}{
         
         }
         
         
         #${this._COMPONENT_ID} #component-tabs-tabs-${ this._COMPONENT_RANDOM_ID} .btn-tab-types{
               background-color: #c7c7c7;
         }
         #${this._COMPONENT_ID} #component-tabs-tabs-${ this._COMPONENT_RANDOM_ID} .btn-tab-types:before{
               content: "";
               width: 100%;
               height: 115%;
               display: block;
               position: absolute;
               top: 0;
               left: 0;
               background-color: #ffffff29;
               clip-path: ellipse(100% 50% at 50% 0);
         }
         #${this._COMPONENT_ID} #component-tabs-tabs-${ this._COMPONENT_RANDOM_ID} .btn-tab-types-active{
               background-color:#0A1225 !important;
               color :#ffffff !important;
         }
     </style>
     
     <section class="${tabClass}" style="${tabStyle}">
         ${tabHtml}
     </section>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }


    
    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onSelectTab(event , tabId , setTabId = true){
        if (setTabId){
            this.set("prop_tabSelected" , tabId)
        }
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event , tabId);
        }
    }


}





/*-------------------------------------
 12) Component OTP
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_name
@prop_length
@prop_input
@prop_langs

@fn_onGetNewToken

//call_startCountdown
-------------------------------------*/
window.ComponentOtp = class ComponentOtp extends ComponentBase{

    _TIME_CURRENT = null;
    _TIME_INTRVAl = null;

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_value: [
            {prop : "var_value"                           , default:  null} ,
        ] ,
        part_elements: [

        ] ,
        part_label: [
            {prop : "prop_name"                           , default:  "otp"} ,
            {prop : "prop_input"                          , default:  null} ,
            {prop : "prop_langs"                          , default:   {
                    _title_otp_description : "کد برای شماره/ایمیل زیر ارسال شد" ,
                    _text_timer_after_active_otp : "تا ارسال مجدد کد" ,
                    _text_timer_after_di_active_otp : "کد منقضی شده است" ,
                    _text_get_new_otp : "کد جدید" ,
                }} ,
        ] ,
        part_inputs: [
            {prop : "prop_name"                           , default:  "otp"} ,
            {prop : "prop_length"                         , default:  6} ,
        ] ,
        part_description: [
            {prop : "prop_langs"                          , default:   {
                    _title_otp_description : "کد برای شماره/ایمیل زیر ارسال شد" ,
                    _text_timer_after_active_otp : "تا ارسال مجدد کد" ,
                    _text_timer_after_di_active_otp : "کد منقضی شده است" ,
                    _text_get_new_otp : "کد جدید" ,
                }} ,
            {prop : "var_countdown_text"                   , default:  "00:00"} ,
            {prop : "var_activeForm_class"                 , default:  ""} ,
            {prop : "var_diActiveForm_class"               , default:  "d-none"} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_value: {} ,
            part_elements: {
                part_label: {} ,
                part_inputs: {} ,
                part_description: {} ,
            } ,
        } ,
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentOtp.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
     TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_label");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_value":
                return this.template_render_value(partName);
            case "part_elements":
                return this.template_render_elements(partName);
            case "part_inputs":
                return this.template_render_inputs(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_description":
                return this.template_render_description(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
      ${this.templateFn("part_value") ?? ""}
      
      ${this.templateFn("part_elements") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }


    template_render_value(partName) {

        const data = this.getPartProps(partName)
        if (data != null){

            const var_value             =   data.hasOwnProperty("var_value")             ?  data.var_value             :  null;

            return `
<section data-part-name="${partName}" 
         id="component-tabs-value-${ this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-tabs-value-${ this._COMPONENT_RANDOM_ID}{
         
         }
     </style>
     
     <input type="hidden" name="otp_value_${ this._COMPONENT_RANDOM_ID}" value="${var_value || ""}"/>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;

    }

    template_render_elements(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section data-part-name="${partName}" 
         id="component-otp-elements-${ this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-otp-elements-${ this._COMPONENT_RANDOM_ID}{
         
         }
     </style>
     
     <section class="component-element-structure mb-2">
     
          <component-label id="component-otp-label-${ this._COMPONENT_RANDOM_ID}"></component-label>

          ${this.templateFn("part_inputs") ?? ""}
          
          ${this.templateFn("part_description") ?? ""}
          
     </section>
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_inputs(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name             =   data.hasOwnProperty("prop_name")             ?  data.prop_name             :  "otp";
            const prop_length           =   data.hasOwnProperty("prop_length")           ?  data.prop_length           :  6;
            const prop_langs            =   data.hasOwnProperty("prop_langs")            ?  data.prop_langs            : {};

            let inputHtmls = "";
            for (let num=0; num<prop_length; num++){

                inputHtmls += `
<input  id="component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}${num}" 
        oninput="${this.getFn("fn_onMoveToNext" , "event" , (num < prop_length-1 ? `'component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}${num+1}'` : null) )}" 
        onkeydown="${num > 0 ?  this.getFn("fn_onMoveToPrev" , "event" , `'component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}${num-1}'`)  : ''}" 
        onfocus="${this.getFn("fn_onFocus" , "event" , `'component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}${num}'`)}"
        type="text"  maxlength="1"
        class="input-otp my-1 mx-2 text-center  form-control rounded line-height-35px border rounded shadow-sm font-10pt"  />
`;
            }

            return `
<section data-part-name="${partName}" 
         id="component-otp-inputs-${ this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-otp-inputs-${ this._COMPONENT_RANDOM_ID} .form-otp{
             direction: ltr !important;
          }
     </style>
     
     <div class="form-otp inputs d-flex flex-row justify-content-center">
         ${inputHtmls}
     </div>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_description(partName){

        const data = this.getPartProps(partName)
        if (data != null){

            const prop_langs                 =   data.hasOwnProperty("prop_langs")                ?  data.prop_langs               : {};
            const var_countdown_text         =   data.hasOwnProperty("var_countdown_text")        ?  data.var_countdown_text       : "00:00";
            const var_activeForm_class       =   data.hasOwnProperty("var_activeForm_class")      ?  data.var_activeForm_class     : "";
            const var_diActiveForm_class     =   data.hasOwnProperty("var_diActiveForm_class")    ?  data.var_diActiveForm_class   : "d-none";

            return `
<section data-part-name="${partName}" 
         id="component-tabs-description-${ this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-tabs-description-${ this._COMPONENT_RANDOM_ID}{
         
         }
         #${this._COMPONENT_ID} #component-tabs-description-${ this._COMPONENT_RANDOM_ID} .btn-get-new-token{
             cursor: pointer;
         }
     </style>
     
     <div class="mt-1  text-center">
         <p  id="form-timer-otp"  class="d-inline-block">
                 <span  class="countdown bg-secondary rounded text-white px-2 mx-2">
                     ${var_countdown_text}
                 </span>

                 <div class="pass_active_code_otp d-inline-block ${var_activeForm_class}">
                     <span>
                         ${prop_langs.hasOwnProperty("_text_timer_after_active_otp") ? prop_langs._text_timer_after_active_otp : ""}
                     </span>
                 </div>

                 <div class="pass_di_active_code_otp d-inline-block ${var_diActiveForm_class}">
                     <span class="">
                         ${prop_langs.hasOwnProperty("_text_timer_after_di_active_otp") ? prop_langs._text_timer_after_di_active_otp : ""}
                     </span>
                     <span class="mx-1">
                         |
                     </span>
                     <span class="btn-get-new-token mx-1 text-info cursor-pointer" onclick="${this.getFn("fn_onGetNewToken")}">
                         ${prop_langs.hasOwnProperty("_text_get_new_otp") ? prop_langs._text_get_new_otp : ""}
                     </span>
                 </div>
          </p>
     </div>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;

    }

    componentFn_render_label(partName){

        const data = this.getPartProps(partName)
        if (data != null){

            const prop_name             =   data.hasOwnProperty("prop_name")             ?  data.prop_name             :  "otp";
            const prop_langs            =   data.hasOwnProperty("prop_langs")            ?  data.prop_langs            : {};
            const prop_input            =   data.hasOwnProperty("prop_input")            ?  data.prop_input            :  null;

            new window.ComponentLabel(
                `component-otp-label-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_title:  `
<p class="title-otp text-center  mb-0 px-2 ">
    ${prop_langs.hasOwnProperty("_title_otp_description") ? prop_langs._title_otp_description : ""}
    <b style="display:block; direction: ltr">
       ${prop_input}
    </b>
</p>
                    ` ,

                    prop_for  :  `component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}0` ,

                }
            )
        }
    }



    /* ---------------------------------------------
      FUNCTIONs
     --------------------------------------------- */
    fn_onGetValue(){
        let resultExp = "";

        const data = this._COMPONENT_CONFIG;

        if ( data.hasOwnProperty("prop_length") && data.hasOwnProperty("prop_name") ){
            const prop_length  = data.prop_length;
            const prop_name    = data.prop_name;

            for (let i=0 ; i<prop_length; i++){
                const partEl = document.querySelector(`input#component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}${i}`);
                const partValue = partEl.value;
                resultExp += partValue;
            }
        }

        this.set("var_value" , resultExp);
        return resultExp;
    }

    fn_onGetNewToken(){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onGetNewToken") && typeof data.fn_onGetNewToken != null){
            data.fn_onGetNewToken();
        }
    }

    fn_onMoveToNext(event , nextFieldID){
        if (event.key !== 'Backspace' && event.target.value !== '') {
            if (nextFieldID !== '') {
                const el = document.getElementById(nextFieldID);
                if (el != null){
                    el.focus();
                }
            }
        }
        this.fn_onGetValue();
    }

    fn_onMoveToPrev(event , prevFieldID){
        if (event.key === 'Backspace' && event.target.value === '') {
            if (prevFieldID !== '') {
                const el = document.getElementById(prevFieldID);
                if (el != null){
                    el.focus();
                }
            }
        }
        this.fn_onGetValue();
    }

    fn_onFocus(event , myElId){
        const el = document.getElementById(myElId);
        if (el != null){
            el.value = "";
        }
        this.fn_onGetValue();
    }

    fn_setTimeCurrent(){
        this._TIME_CURRENT = new Date().getTime() ;
    }

    fn_calculateTimer(durationForEnd){
        const timeCurrent =   this._TIME_CURRENT != null   ?    this._TIME_CURRENT  :  0;

        const now = new Date().getTime();
        return (timeCurrent + durationForEnd*60*1000) - now;
    }

    call_startCountdown(durationForEnd){
        this.fn_setTimeCurrent();

        this.set("var_activeForm_class" , "");
        this.set("var_diActiveForm_class" , "d-none");

        this._TIME_INTRVAl = setInterval(() => {
            const distance = this.fn_calculateTimer(durationForEnd);

            if (distance < 0) {
                clearInterval(this._TIME_INTRVAl);
                this.set("var_countdown_text" , "00:00");
                this.set("var_activeForm_class" , "d-none");
                this.set("var_diActiveForm_class" , "");
                return;
            }

            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            minutes = minutes < 10 ? "0"+minutes : minutes;
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            seconds = seconds < 10 ? "0"+seconds : seconds;
            this.set("var_countdown_text" , `${minutes}:${seconds}`);
        }, 1000);
    }
}






/*-------------------------------------
 13) Component Widget
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_widgetClass
@prop_widgetStyles
@prop_widgetMinHeight

@prop_btnMore_icon
@prop_btnMore_show
@prop_btnMore_link

@prop_error404   type   width   height
@prop_fetch      url    data
-------------------------------------*/
window.ComponentWidget = class ComponentWidget extends ComponentBase{

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_widgetClass"                    , default:  ["border" , "shadow-sm" , "rounded" , "p-1"]} ,
            {prop : "prop_widgetStyles"                   , default:  {"min-height" : "120px"}} ,
            {prop : "prop_widgetMinHeight"                , default:  null} ,
            {prop : "prop_btnMore_icon"                   , default:  ""} ,
            {prop : "prop_btnMore_show"                   , default:  false} ,
            {prop : "prop_btnMore_link"                   , default:  null} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border:{}
        } ,
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config)
    {
        super(
            listComponent[ComponentWidget.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
    TEMPLATEs
   --------------------------------------------- */
    componentFn(){
        this.templateFn("part_border")
        this.fn_onFetchWidget()
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            default:
                return this.templateBasic_render();
        }
    }


    template_render_structure(partName) {
        const content = `
   <component-border id="border-widget-component-${this._COMPONENT_RANDOM_ID}">
       <component-body>
             <section id="response-widget-component-${this._COMPONENT_RANDOM_ID}"></section>
    
             <component-404 id="widget-component-404-${this._COMPONENT_RANDOM_ID}"></component-404>

             <component-loading id="widget-component-loading-${this._COMPONENT_RANDOM_ID}"></component-loading>
       </component-body>
   </component-border>
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
    }


    componentFn_render_border(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_widgetClass     = data.hasOwnProperty("prop_widgetClass")      ? data.prop_widgetClass                   : ["border" , "shadow-sm" , "rounded" , "p-1"];
            const prop_widgetStyles    = data.hasOwnProperty("prop_widgetStyles")     ? data.prop_widgetStyles                  : {"min-height" : "120px"};
            const prop_widgetMinHeight = data.hasOwnProperty("prop_widgetMinHeight")  ? data.prop_widgetMinHeight               : null;

            const prop_btnMore_icon    = data.hasOwnProperty("prop_btnMore_icon")     ? data.prop_btnMore_icon                  : "";
            const prop_btnMore_show    = data.hasOwnProperty("prop_btnMore_show")     ? data.prop_btnMore_show                  : false;
            const prop_btnMore_link    = data.hasOwnProperty("prop_btnMore_link")     ? data.prop_btnMore_link                  : null;

            //---------------
            if (prop_widgetMinHeight != null){
                prop_widgetStyles["min-height"] = prop_widgetMinHeight;
            }

            new window.ComponentBorder(
                `border-widget-component-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass: prop_widgetClass ,
                    prop_structureStyles: prop_widgetStyles ,

                    prop_btnMore_icon: prop_btnMore_icon ,
                    prop_btnMore_show: prop_btnMore_show ,
                    prop_btnMore_link: prop_btnMore_link ,
                }
            )
        }

    }



    /* ---------------------------------------------
      FUNCTIONs
     --------------------------------------------- */
    fn_retry404(){
        this.fn_onFetchWidget();

        tools_component.control(
            "Component404" ,
            {
                elId : `widget-component-404-${this._COMPONENT_RANDOM_ID}`
            },
            false
        )
    }
    fn_readyResponse(response){
        const el = document.getElementById(`section#widget-component-404-${this._COMPONENT_RANDOM_ID}`);
        if (response != null){
            if (response.hasOwnProperty("html")){
                el.innerHTML = response.html;

                const scripts = el.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }
                    document.body.appendChild(newScript);
                });
            }
            if (response.hasOwnProperty("script_src")){
                const script = document.createElement('script');
                script.src = response.script_src;
                script.defer = true; // یا async
                document.body.appendChild(script);
            }
            if (response.hasOwnProperty("script")){
                response.script.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }
                    document.body.appendChild(newScript);
                });
            }
        }
    }
    fn_onFetchWidget(){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onGetNewToken") && typeof data.fn_onGetNewToken != null){
            data.fn_onGetNewToken();
        }

        const prop_minHeight = data.hasOwnProperty("prop_minHeight")   ? Math.max(data.prop_minHeight , 120)   : 120;
        const prop_error404  = data.hasOwnProperty("prop_error404")    ? data.prop_error404                    : {};
        const prop_fetch     = data.hasOwnProperty("prop_fetch")       ? data.prop_fetch                       : {};

        if (prop_fetch != null && prop_fetch.hasOwnProperty("url")){

            tools_submit.fetcth(
                prop_fetch != null && prop_fetch.hasOwnProperty("url") ? prop_fetch.url : "" ,
                {
                    data: prop_fetch != null && prop_fetch.hasOwnProperty("data") ? prop_fetch.data : [] ,
                    callback: this.fn_readyResponse ,
                    componentLoadingData: {
                        elId : `widget-component-loading-${this._COMPONENT_RANDOM_ID}`
                    },
                    component404Data: {
                        elId : `widget-component-404-${this._COMPONENT_RANDOM_ID}` ,
                        prop_type : prop_error404 != null && prop_error404.hasOwnProperty("type") ? prop_error404.type : "simple_animation" ,
                        prop_width : prop_error404 != null && prop_error404.hasOwnProperty("width") ? prop_error404.width : prop_minHeight*1.3 ,
                        prop_height : prop_error404 != null && prop_error404.hasOwnProperty("height") ? prop_error404.height :  prop_minHeight*0.62 ,
                        fn_callback: () =>{
                            this.fn_retry404();
                        }
                    },
                }
            )
        }
        else {
            this.fn_readyResponse("<!--empty-component-->")
        }

    }

}






/*-------------------------------------
 14) Component Input
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_show_label
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles
@prop_title

@prop_inputClass
@prop_inputStyles
@prop_type
@prop_name
@prop_value
@prop_placeholder

@prop_icon

@fn_oninput
@fn_onfocus
@fn_onblur

@fn_clickBtnTools
-------------------------------------*/
window.ComponentInput = class ComponentInput extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_label: [
            {prop : "prop_labelShow"             , default: false} ,
            {prop : "prop_labelClass"            , default: ["shadow-sm" , "px-2" ,"py-1" , "d-block "]} ,
            {prop : "prop_labelStyles"           , default: null} ,
            {prop : "prop_labelHoverStyles"      , default: null} ,
            {prop : "prop_title"                 , default: null} ,
        ] ,
        part_input: [
            {prop : "prop_inputClass"            , default: [" form-control"]} ,
            {prop : "prop_inputStyles"           , default: {}} ,
            {prop : "prop_type"                  , default: "string"} ,
            {prop : "prop_name"                  , default: null} ,
            {prop : "prop_value"                 , default: null} ,
            {prop : "prop_placeholder"           , default: null} ,
            {prop : "prop_icon"                  , default: null} ,
            {prop : "prop_btnAddStatus"          , default: false} ,
        ] ,
        part_icon_clear: [
            {prop : "prop_btnAddStatus"          , default: false} ,
        ] ,
        part_icon: [
            {prop : "prop_icon"                  , default: null} ,
        ] ,
        part_button: [
            {prop : "prop_btnAddStatus"          , default: false} ,
            {prop : "prop_btnAddIcon"            , default: "&plus;"} ,
            {prop : "prop_btnAddTitle"           , default: "add item"} ,
            {prop : "prop_btnAddClass"           , default: []} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label: {} ,
            part_input: {} ,
            part_icon_clear: {} ,
            part_icon: {} ,
            part_button: {} ,
        } ,
    }




    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentInput.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();

    }


    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_label");
        this.templateFn("part_icon_clear");
        this.templateFn("part_icon");
        this.templateFn("part_button");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName)
            case "part_input":
                return this.template_render_input(partName);
            case "part_icon_clear":
                return this.componentFn_render_iconClear(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_button":
                return this.componentFn_render_button(partName);
            default:
                return this.templateBasic_render(partName);
        }
    }



    template_render_structure() {
        const content = `
         <component-label id="component-input-label-${this._COMPONENT_RANDOM_ID}"></component-label>

        <div class="position-relative">
           ${this.templateFn("part_input") ?? ""}
     
           <component-icon id="component-input-icon-clear-${this._COMPONENT_RANDOM_ID}" ></component-icon>
     
           <component-icon id="component-input-icon-${this._COMPONENT_RANDOM_ID}" ></component-icon>
           
           <component-button id="component-input-button-${this._COMPONENT_RANDOM_ID}" ></component-button>
        </div>
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_input(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_inputClass    =   data.hasOwnProperty("prop_inputClass")               ?  data.prop_inputClass                    :  [];
            const prop_inputStyles   =   data.hasOwnProperty("prop_inputStyles")              ?  data.prop_inputStyles                   :  {};
            const prop_type          =   data.hasOwnProperty("prop_type")                     ?  data.prop_type                          :  "string";
            const prop_name          =   data.hasOwnProperty("prop_name")                     ?  data.prop_name                          :  null;
            const prop_value         =   data.hasOwnProperty("prop_value")                    ?  data.prop_value                         :  null;
            const prop_placeholder   =   data.hasOwnProperty("prop_placeholder")              ?  data.prop_placeholder                   :  null;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;
            const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;

            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

            return `
<section  data-part-name="${partName}"
          id="component-input-input-element-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-input-element-${this._COMPONENT_RANDOM_ID}{
         
         }
         #${this._COMPONENT_ID} #component-input-input-${this._COMPONENT_RANDOM_ID}{
              ${directionRtl ? "padding-left" : "padding-right"} : ${prop_btnAddStatus ? "180px" : "20"};
     
              ${directionRtl ? "padding-right" : "padding-left"}: ${(prop_icon != null && prop_icon != "") ?  "30px"  : "10px"}!important;
              ${tools_public.renderListStyle(prop_inputStyles)}
         }
     </style>
     
     <input id="component-input-input-${this._COMPONENT_RANDOM_ID}"   
            class=" ${tools_public.renderListClass(prop_inputClass)}"
            name="${prop_name || "" }"  
            type="${prop_type || "" }"  
            value="${prop_value || ""}"
            placeholder="${prop_placeholder || ""}"
            onInput="${this.getFn("fn_onInputCallBack" , "event")}"
            onblur="${this.getFn("fn_onBlurCallBack" , "event")}"
            onfocus="${this.getFn("fn_onFocusCallBack" , "event")}"
            />
       
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_labelShow        = data.hasOwnProperty("prop_labelShow")        ? data.prop_labelShow        : false;
            const prop_title            = data.hasOwnProperty("prop_title")            ? data.prop_title            : "title";
            const prop_labelClass       = data.hasOwnProperty("prop_labelClass")       ? data.prop_labelClass       : ["shadow-sm" , "px-2" ,"py-1" , "d-block "];
            const prop_labelStyles      = data.hasOwnProperty("prop_labelStyles")      ? data.prop_labelStyles      : {};
            const prop_labelHoverStyles = data.hasOwnProperty("prop_labelHoverStyles") ? data.prop_labelHoverStyles : {};

            if (prop_labelShow){
                new window.ComponentLabel(
                    `component-input-label-${ this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_title:  prop_title ,
                        prop_for  :  `component-input-input-${ this._COMPONENT_RANDOM_ID}` ,

                        prop_labelClass:       prop_labelClass ,
                        prop_labelStyles:      prop_labelStyles ,
                        prop_labelHoverStyles: prop_labelHoverStyles ,
                    }
                )
            }

        }
    }

    componentFn_render_iconClear(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;

            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

            let styles = {
                "z-index" : "10",
                "width" :   "35px",
                "line-height" : "38px",
                "cursor" : "pointer",
                "height" : "38px" ,
                "top" : "0" ,
                "text-align" : "center" ,
            };
            if (directionRtl){
                styles["left"]=  prop_btnAddStatus ?  "160px" : "5px";
            }
            else {
                styles["right"]=  prop_btnAddStatus ?  "160px" : "5px";
            }


            new window.ComponentIcon(
                `component-input-icon-clear-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: []  ,
                    styles: {
                        "height" : "38px"
                    }  ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,
                    prop_icon : "&#10540;" ,

                    fn_callback: ()=>{
                        this.runFn("fn_onClearInput" , "event")
                    }
                }
            )

        }
    }

    componentFn_render_icon(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;

            let styles = {
                "z-index" : "10",
                "margin" : "0 5px",
                "width" : "30px",
                "line-height" :   "35px",
                "cursor" : "pointer",
                "font-size" : "20pt;",
                "top" : "0" ,
            }
            if (directionRtl){
                styles["right"]= "0"
            }
            else {
                styles["left"]= "0"
            }


            new window.ComponentIcon(
                `component-input-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_icon: prop_icon ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,

                    fn_callback: ()=>{
                        this.runFn("fn_onFocusInput" , "event")
                    }
                }
            )

        }
    }

    componentFn_render_button(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;

            if (prop_btnAddStatus){
                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
                const prop_btnAddIcon           =  data.hasOwnProperty("prop_btnAddIcon")                 ?  data.prop_btnAddIcon                    : "&plus;";
                const prop_btnAddTitle          =  data.hasOwnProperty("prop_btnAddTitle")                ?  data.prop_btnAddTitle                   : "add item";
                const prop_btnAddClass          =  data.hasOwnProperty("prop_btnAddClass")                ?  data.prop_btnAddClass                   : [];

                let styles =  {
                    "z-index" : "10" ,
                    "top" : "-1px" ,
                    "cursor" : "pointer" ,
                    "width" : "160px" ,
                    "height" : "38px" ,
                    "line-height" : "25px" ,
                };
                if (directionRtl){
                    styles["left"] = "0";
                }
                else {
                    styles["right"] = "0";
                }

                new window.ComponentButton(
                    `component-input-button-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                        prop_btnStyles: styles ,
                        prop_title: `
<span class="mx-3">
    ${prop_btnAddIcon}
</span>
<span class="d-none d-md-inline">
    ${prop_btnAddTitle}
</span>
                    `,

                        fn_callback: (event)=>{
                            this.runFn("fn_clickBtnTools" , "event")
                        }
                    }
                )
            }

        }
    }




    /* ---------------------------------------------
      FUNCTIONs
     --------------------------------------------- */
    fn_getValueInput(){
        return  document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`).value;
    }

    fn_onClearInput(event){
        document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`).value = ""
        this.runFn("fn_onInputCallBack" , "event");
        this.runFn("fn_onFocusInput" , "event");
    }

    fn_onFocusInput(event){
        document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`).focus();
        this.runFn("fn_onFocusCallBack" , "event");
    }

    fn_onInputCallBack(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_oninput") && typeof data.fn_oninput != null){
            data.fn_oninput(event , this.fn_getValueInput());
        }
    }
    fn_onFocusCallBack(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onfocus") && typeof data.fn_onfocus != null){
            data.fn_onfocus(event , this.fn_getValueInput());
        }
    }
    fn_onBlurCallBack(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onblur") && typeof data.fn_onblur != null){
            data.fn_onblur(event , this.fn_getValueInput());
        }
    }

    fn_clickBtnTools(event){
        event.stopPropagation();
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_clickBtnTools") && typeof data.fn_clickBtnTools != null){
            data.fn_clickBtnTools(event , this.fn_getValueInput());
        }
    }

}







/*-------------------------------------
 15) Component Input Price
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_show_label
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles
@prop_title

@prop_inputClass
@prop_inputStyles
@prop_type
@prop_name
@prop_value
@prop_placeholder

@prop_icon

@fn_oninput
@fn_onfocus
@fn_onblur

@fn_clickBtnTools
-------------------------------------*/
window.ComponentInputPrice = class ComponentInputPrice extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_label: [
            {prop : "prop_labelShow"             , default: false} ,
            {prop : "prop_labelClass"            , default: ["shadow-sm" , "px-2" ,"py-1" , "d-block "]} ,
            {prop : "prop_labelStyles"           , default: null} ,
            {prop : "prop_labelHoverStyles"      , default: null} ,
            {prop : "prop_title"                 , default: null} ,
        ] ,
        part_input: [
            {prop : "prop_inputClass"            , default: [" form-control"]} ,
            {prop : "prop_inputStyles"           , default: {}} ,
            {prop : "prop_type"                  , default: "string"} ,
            {prop : "prop_name"                  , default: null} ,
            {prop : "prop_value"                 , default: null} ,
            {prop : "prop_placeholder"           , default: null} ,
            {prop : "prop_icon"                  , default: null} ,
            {prop : "prop_btnAddStatus"          , default: false} ,
        ] ,
        part_icon_clear: [
            {prop : "prop_btnAddStatus"          , default: false} ,
        ] ,
        part_icon: [
            {prop : "prop_icon"                  , default: null} ,
        ] ,
        part_button: [
            {prop : "prop_btnAddStatus"          , default: false} ,
            {prop : "prop_btnAddIcon"            , default: "&plus;"} ,
            {prop : "prop_btnAddTitle"           , default: "add item"} ,
            {prop : "prop_btnAddClass"           , default: []} ,
        ] ,
        part_information: [
            {prop : "prop_information"           , default: null} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label: {} ,
            part_input: {} ,
            part_icon_clear: {} ,
            part_icon: {} ,
            part_button: {} ,
            part_information: {} ,
        } ,
    }




    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentInputPrice.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();

    }


    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_label");
        this.templateFn("part_icon_clear");
        this.templateFn("part_icon");
        this.templateFn("part_button");
        this.templateFn("part_information");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName)
            case "part_input":
                return this.template_render_input(partName);
            case "part_icon_clear":
                return this.componentFn_render_iconClear(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_button":
                return this.componentFn_render_button(partName);
            case "part_information":
                return this.componentFn_render_partition(partName);
            default:
                return this.templateBasic_render();
        }
    }


    template_render_structure(partName) {
        const content = `
     <component-label id="component-input-label-${this._COMPONENT_RANDOM_ID}" ></component-label>
     
     <div class="position-relative">
           ${this.templateFn("part_input") ?? ""}
     
           <component-icon id="component-input-icon-clear-${this._COMPONENT_RANDOM_ID}" ></component-icon>
     
           <component-icon id="component-input-icon-${this._COMPONENT_RANDOM_ID}" ></component-icon>
           
           <component-button id="component-input-button-${this._COMPONENT_RANDOM_ID}" ></component-button>
           
           <component-position-element id="component-input-position-element-${this._COMPONENT_RANDOM_ID}" ></component-position-element>
     </div>
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_input(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_inputClass    =   data.hasOwnProperty("prop_inputClass")               ?  data.prop_inputClass                    :  [];
            const prop_inputStyles   =   data.hasOwnProperty("prop_inputStyles")              ?  data.prop_inputStyles                   :  {};
            const prop_type          =   data.hasOwnProperty("prop_type")                     ?  data.prop_type                          :  "string";
            const prop_name          =   data.hasOwnProperty("prop_name")                     ?  data.prop_name                          :  null;
            const prop_value         =   data.hasOwnProperty("prop_value")                    ?  data.prop_value                         :  null;
            const prop_placeholder   =   data.hasOwnProperty("prop_placeholder")              ?  data.prop_placeholder                   :  null;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;
            const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;

            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;


            return `
<section  data-part-name="${partName}"
          id="component-input-input-element-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-input-element-${this._COMPONENT_RANDOM_ID}{
         
         }
         #${this._COMPONENT_ID} #component-input-input-${this._COMPONENT_RANDOM_ID}{
              ${directionRtl ? "padding-left" : "padding-right"} : ${prop_btnAddStatus ? "180px" : "20"};
     
              ${directionRtl ? "padding-right" : "padding-left"}: ${(prop_icon != null && prop_icon != "") ?  "30px"  : "10px"}!important;
              ${tools_public.renderListStyle(prop_inputStyles)}
         }
     </style>

     <input id="component-input-input-${this._COMPONENT_RANDOM_ID}"   
            class=" ${tools_public.renderListClass(prop_inputClass)}"
            name="${prop_name || "" }"  
            type="${prop_type || "" }"  
            value="${prop_value || ""}"
            placeholder="${prop_placeholder || ""}"
            onInput="${this.getFn("fn_onHandleInput" , "event")};   ${this.getFn("fn_onInputCallBack" , "event")}"
            onblur=" ${this.getFn("fn_onFormatValue" , "event")};   ${this.getFn("fn_onBlurCallBack" , "event")}"
            onfocus="${this.getFn("fn_onUnFormatValue" , "event")}; ${this.getFn("fn_onFocusCallBack" , "event")}"
            />
       
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_labelShow        = data.hasOwnProperty("prop_labelShow")        ? data.prop_labelShow        : false;
            const prop_title            = data.hasOwnProperty("prop_title")            ? data.prop_title            : "title";
            const prop_labelClass       = data.hasOwnProperty("prop_labelClass")       ? data.prop_labelClass       : ["shadow-sm" , "px-2" ,"py-1" , "d-block "];
            const prop_labelStyles      = data.hasOwnProperty("prop_labelStyles")      ? data.prop_labelStyles      : {};
            const prop_labelHoverStyles = data.hasOwnProperty("prop_labelHoverStyles") ? data.prop_labelHoverStyles : {};

            if (prop_labelShow){
                new window.ComponentLabel(
                    `component-input-label-${ this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_title:  prop_title ,
                        prop_for  :  `component-input-input-${ this._COMPONENT_RANDOM_ID}` ,

                        prop_labelClass:       prop_labelClass ,
                        prop_labelStyles:      prop_labelStyles ,
                        prop_labelHoverStyles: prop_labelHoverStyles ,
                    }
                )
            }

        }
    }

    componentFn_render_iconClear(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;

            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

            let styles = {
                "z-index" : "10",
                "width" :   "35px",
                "line-height" : "38px",
                "cursor" : "pointer",
                "height" : "38px" ,
                "top" : "0" ,
                "text-align" : "center" ,
            };
            if (directionRtl){
                styles["left"]=  prop_btnAddStatus ?  "160px" : "5px";
            }
            else {
                styles["right"]=  prop_btnAddStatus ?  "160px" : "5px";
            }


            new window.ComponentIcon(
                `component-input-icon-clear-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: []  ,
                    styles: {
                        "height" : "38px"
                    }  ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,
                    prop_icon : "&#10540;" ,

                    fn_callback: ()=>{
                        this.runFn("fn_onClearInput" , "event")
                    }
                }
            )

        }
    }

    componentFn_render_icon(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;

            let styles = {
                "z-index" : "10",
                "margin" : "0 5px",
                "width" : "30px",
                "line-height" :   "35px",
                "cursor" : "pointer",
                "font-size" : "20pt;",
                "top" : "0" ,
            }
            if (directionRtl){
                styles["right"]= "0"
            }
            else {
                styles["left"]= "0"
            }


            new window.ComponentIcon(
                `component-input-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_icon: prop_icon ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,

                    fn_callback: ()=>{
                        this.runFn("fn_onFocusInput" , "event")
                    }
                }
            )

        }
    }

    componentFn_render_button(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;

            if (prop_btnAddStatus){
                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
                const prop_btnAddIcon           =  data.hasOwnProperty("prop_btnAddIcon")                 ?  data.prop_btnAddIcon                    : "&plus;";
                const prop_btnAddTitle          =  data.hasOwnProperty("prop_btnAddTitle")                ?  data.prop_btnAddTitle                   : "add item";
                const prop_btnAddClass          =  data.hasOwnProperty("prop_btnAddClass")                ?  data.prop_btnAddClass                   : [];

                let styles =  {
                    "z-index" : "10" ,
                    "top" : "-1px" ,
                    "cursor" : "pointer" ,
                    "width" : "160px" ,
                    "height" : "38px" ,
                    "line-height" : "25px" ,
                };
                if (directionRtl){
                    styles["left"] = "0";
                }
                else {
                    styles["right"] = "0";
                }

                new window.ComponentButton(
                    `component-input-button-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                        prop_btnStyles: styles ,
                        prop_title: `
<span class="mx-3">
    ${prop_btnAddIcon}
</span>
<span class="d-none d-md-inline">
    ${prop_btnAddTitle}
</span>
                    `,

                        fn_callback: (event)=>{
                            this.runFn("fn_clickBtnTools" , "event")
                        }
                    }
                )
            }

        }
    }

    componentFn_render_partition(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_information       =   data.hasOwnProperty("prop_information")               ?  data.prop_information                      :  null;
            const directionRtl           =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;

            if (prop_information != null && Array.isArray(prop_information)) {
                let infoHtml = "";
                for (const indexInfo in prop_information) {
                    const itemInfo = prop_information[indexInfo];
                    if (itemInfo.hasOwnProperty("title")) {
                        infoHtml += `
<div class="rounded border d-md-block mb-1" style="background-color: ${itemInfo.hasOwnProperty("value_backgroundColor") ? itemInfo.value_backgroundColor : null}; ">
     <p class=" rounded text-center p-0 m-0" style="background-color: ${itemInfo.hasOwnProperty("title_backgroundColor") ? itemInfo.title_backgroundColor : null}; color: ${itemInfo.hasOwnProperty("title_color") ? itemInfo.title_color : null}; ">
            ${itemInfo.title}
     </p>
     <p class=" p-0 m-0 text-center" style="color: ${itemInfo.hasOwnProperty("value_color") ? itemInfo.value_color : null}; ">
            ${itemInfo.hasOwnProperty("value") ? itemInfo.value : "---"}
     </p>
</div>
                    `
                    }
                }

                let props = {
                    classList: ["d-none"]  ,
                    prop_width: "250px",
                    prop_height: null,
                    prop_content: infoHtml ,
                    prop_elementClass: [" border" , "shadow-sm" , "bg-white" , "px-2" , "py-1"] ,
                    prop_elementStyles: {
                        'z-index' : "11" ,
                    } ,

                }
                if (directionRtl){
                    props["prop_positionLeft"] = 0;
                }
                else {
                    props["prop_positionRight"] = 0;
                }

                new window.ComponentPositionElement(
                    `component-input-position-element-${this._COMPONENT_RANDOM_ID}` ,
                    props
                )

            }
        }
    }




    /* ---------------------------------------------
      FUNCTIONs
     --------------------------------------------- */

    fn_getValueInput(){
        return  tools_converter.convertStringToPrice(
            document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`).value
        );
    }

    fn_onHandleInput(event){
        this.value = event.target.value;
        event.target.value =  tools_converter.convertPriceToString(this.value);
    }
    fn_onFormatValue(event){
        document.querySelector(`#component-input-position-element-${this._COMPONENT_RANDOM_ID}`).classList.add("d-none");
    }
    fn_onUnFormatValue(event){
        document.querySelector(`#component-input-position-element-${this._COMPONENT_RANDOM_ID}`).classList.remove("d-none");
    }



    fn_onClearInput(event){
        document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`).value = ""
        this.runFn("fn_onInputCallBack" , "event");
        this.runFn("fn_onFocusInput" , "event");
    }

    fn_onFocusInput(event){
        document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`).focus();
        this.runFn("fn_onFocusCallBack" , "event");
    }

    fn_onInputCallBack(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_oninput") && typeof data.fn_oninput != null){
            data.fn_oninput(event , this.fn_getValueInput());
        }
    }
    fn_onFocusCallBack(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onfocus") && typeof data.fn_onfocus != null){
            data.fn_onfocus(event , this.fn_getValueInput());
        }
    }
    fn_onBlurCallBack(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onblur") && typeof data.fn_onblur != null){
            data.fn_onblur(event , this.fn_getValueInput());
        }
    }

    fn_clickBtnTools(event){
        event.stopPropagation();
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_clickBtnTools") && typeof data.fn_clickBtnTools != null){
            data.fn_clickBtnTools(event , this.fn_getValueInput());
        }
    }




}







/*-------------------------------------
 17) Component label
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_labelClass
@prop_labelStyles
@prop_labelBackgroundColor

@prop_title
@prop_for
@prop_labelColor

@fn_callback
-------------------------------------*/
window.ComponentLabel  = class ComponentLabel extends ComponentBase{


    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_labelClass"            , default:  ["shadow-sm" , "px-2" , "py-1"]} ,
            {prop : "prop_labelStyles"           , default: {}} ,
            {prop : "prop_labelBackgroundColor"  , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("label") && tools_const.styles.label.hasOwnProperty("backgroundColor")   ? tools_const.styles.label.backgroundColor : ""} ,
        ] ,
        part_label: [
            {prop : "prop_title"                 , default: null} ,
            {prop : "prop_for"                   , default: null} ,
            {prop : "prop_labelColor"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("label") && tools_const.styles.label.hasOwnProperty("color")             ? tools_const.styles.label.color           : ""} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_label: {} ,
            } ,
        } ,
    }





    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentLabel.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();

    }



    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_border");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure( partName );
            case "part_border":
                return this.componentFn_render_border( partName );
            case "part_label":
                return this.template_render_label(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
        <component-border id="component-label-border-${this._COMPONENT_RANDOM_ID}">
            <component-body>
                ${this.templateFn("part_label") ?? ""}
            </component-body>
        </component-border>
                `;
        return this.templateBasic_render_structure(content);
    }


    componentFn_render_border(partName) {

        const data = this.getPartProps(partName);

        if (data != null){
            const prop_labelClass              =   data.hasOwnProperty("prop_labelClass")    && data.prop_labelClass != null    ?  data.prop_labelClass              : [];
            const prop_labelStyles             =   data.hasOwnProperty("prop_labelStyles")   && data.prop_labelStyles != null   ?  data.prop_labelStyles             : {};
            const prop_labelBackgroundColor    =   data.hasOwnProperty("prop_labelBackgroundColor")                             ?  data.prop_labelBackgroundColor    : null;
            //---------------
            if (prop_labelBackgroundColor != null){
                prop_labelStyles["background-color"] = prop_labelBackgroundColor;
            }

            console.log(prop_labelStyles);

            new window.ComponentBorder(
                `component-label-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass: prop_labelClass ,
                    prop_structureStyles: prop_labelStyles ,
                }
            )
        }

    }


    template_render_label(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_for          =   data.hasOwnProperty("prop_for")                                   ?  data.prop_for          : "";
            const prop_title        =   data.hasOwnProperty("prop_title") && data.prop_title !=null       ?  data.prop_title        :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');
            const prop_labelColor   =   data.hasOwnProperty("prop_labelColor")                            ?  data.prop_labelColor   :  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("label") && tools_const.styles.label.hasOwnProperty("color")   ? tools_const.styles.label.color : "";

            return `
<label data-part-name="${partName}"   
         id="component-label-label-${this._COMPONENT_RANDOM_ID}" 
         class=" d-block" 
          for="${prop_for}" 
         onclick="${this.getFn('fn_onCLickLabel' , 'event' , `'${prop_for}'`)}">
         
     <style>
         #${this._COMPONENT_ID} #component-label-label-${this._COMPONENT_RANDOM_ID}{
              cursor: pointer;
              color: ${prop_labelColor};
         }
     </style>
       
     ${prop_title}
       
</label>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }




    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickLabel(event , prop_for){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event , prop_for);
        }
    }

}






/*-------------------------------------
 18) Component Icon
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_isItalik

@prop_iconClass
@prop_iconStyles

@fn_callback
-------------------------------------*/
window.ComponentIcon  = class ComponentIcon extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_icon: [
            {prop : "prop_icon"        , default: ""} ,
            {prop : "prop_isItalik"    , default: false} ,
            {prop : "prop_iconClass"   , default: []} ,
            {prop : "prop_iconStyles"  , default: {}} ,
            {prop : "fn_callback"      , default: null} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_icon: {} ,
        }
    }






    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentIcon.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();

    }






    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){

    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure( partName );
            case "part_icon":
                return this.template_render_label(partName);
            default:
                return this.templateBasic_render();
        }
    }


    template_render_structure(partName) {
        const content = `
${this.templateFn_render_icon("part_icon")} 
                `;
        return this.templateBasic_render_structure(content);
    }



    templateFn_render_icon(partName){

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_icon                =  data.hasOwnProperty("prop_icon")                       ?  data.prop_icon                                            :  "";
            const prop_isItalik            =  data.hasOwnProperty("prop_isItalik")                   ?  data.prop_isItalik                                        :  false;

            const prop_iconClass           =   data.hasOwnProperty("prop_iconClass")                 ?  data.prop_iconClass                                       :  [];
            const prop_iconStyles          =   data.hasOwnProperty("prop_iconStyles")                ?  data.prop_iconStyles                                      :  {};

            return `
<${prop_isItalik ? "i" : "span"} 
       id="component-icon-icon-${this._COMPONENT_RANDOM_ID}"
       class="${tools_public.renderListClass(prop_iconClass)}" 
       onclick="${this.getFn('fn_onCLickIcon' , "event")}">
    
      <style>
         #${this._COMPONENT_ID} #component-icon-icon-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_iconStyles)}
         }
      </style>

      ${prop_icon}
       
</${prop_isItalik ? "i" : "span"}>
`;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }





    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickIcon(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }

}






/*-------------------------------------
 19) Component Position Element
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_elementClass
@prop_elementStyles

@prop_positionType
@prop_positionTop
@prop_positionLeft
@prop_positionBottom
@prop_positionRight

@prop_width
@prop_height

@prop_content
-------------------------------------*/
window.ComponentPositionElement  = class ComponentPositionElement extends ComponentBase{

    /* ---------------------------------------------
       PROPERTYs
     --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_elementClass"            , default: ["border" , "shadow-sm" , "bg-white" ,"px-2" , "py-1" , "rounded"]} ,
            {prop : "prop_elementStyles"           , default: {}} ,
            {prop : "prop_positionType"            , default: "absolute"} ,
            {prop : "prop_positionTop"             , default: ""} ,
            {prop : "prop_positionLeft"            , default: ""} ,
            {prop : "prop_positionBottom"          , default: ""} ,
            {prop : "prop_positionRight"           , default: ""} ,
            {prop : "prop_width"                   , default: "100%"} ,
            {prop : "prop_height"                  , default: "200px"} ,
        ] ,
        part_content: [
            {prop : "prop_content"                 , default: null} ,
       ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_content: {}
            }
        } ,
    }




    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentPositionElement.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }




    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_border");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_content":
                return this.template_render_content(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
   <component-border id="component-position-element-border-${this._COMPONENT_RANDOM_ID}">
      <component-body>
         ${this.templateFn("part_content") ?? ""}
      </component-body>
   </component-border>
                `;
        return this.templateBasic_render_structure(content);
    }

    /*template_render_structure(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_elementClass       =  data.hasOwnProperty("prop_elementClass")               ?  data.prop_elementClass         :  ["border" , "shadow-sm" , "bg-white" ,"px-2" , "py-1" , "rounded"];
            const prop_elementStyles      =  data.hasOwnProperty("prop_elementStyles")              ?  data.prop_elementStyles        :  null;

            const prop_positionTop        =  data.hasOwnProperty("prop_positionTop")                ?  data.prop_positionTop          :  "";
            const prop_positionLeft       =  data.hasOwnProperty("prop_positionLeft")               ?  data.prop_positionLeft         :  "";
            const prop_positionBottom     =  data.hasOwnProperty("prop_positionBottom")             ?  data.prop_positionBottom       :  "";
            const prop_positionRight      =  data.hasOwnProperty("prop_positionRight")              ?  data.prop_positionRight        :  "";
            const prop_width              =  data.hasOwnProperty("prop_width")                      ?  data.prop_width                :  "100%";
            const prop_height             =  data.hasOwnProperty("prop_height")                     ?  data.prop_height               :  "200px";

            return `
<section data-part-name="${partName}" 
         id="component-position-element-structure-${this._COMPONENT_RANDOM_ID}"
         class=" position-absolute ${tools_public.renderListClass(prop_elementClass)}" >
         
     <style>
         #${this._COMPONENT_ID} #component-position-element-structure-${this._COMPONENT_RANDOM_ID}{
             z-index: 11;
             width:  ${prop_width};
             height: ${prop_height};
             top:    ${prop_positionTop};
             left:   ${prop_positionLeft };
             bottom: ${prop_positionBottom};
             right:  ${ prop_positionRight};
             ${tools_public.renderListStyle(prop_elementStyles)}
         }
     </style>
     
     ${this.templateFn("part_content") ?? ""}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }*/


    componentFn_render_border(partName) {

        const data = this.getPartProps(partName);

        if (data != null){
            const prop_elementClass       =  data.hasOwnProperty("prop_elementClass")  && data.prop_elementClass != null               ?  data.prop_elementClass         :  [];
            const prop_elementStyles      =  data.hasOwnProperty("prop_elementStyles") && data.prop_elementStyles != null              ?  data.prop_elementStyles        : {};
            const prop_positionType       =  data.hasOwnProperty("prop_positionType")                                                  ?  data.prop_positionType         :  "absolute";
            const prop_positionTop        =  data.hasOwnProperty("prop_positionTop")                                                   ?  data.prop_positionTop          :  "";
            const prop_positionLeft       =  data.hasOwnProperty("prop_positionLeft")                                                  ?  data.prop_positionLeft         :  "";
            const prop_positionBottom     =  data.hasOwnProperty("prop_positionBottom")                                                ?  data.prop_positionBottom       :  "";
            const prop_positionRight      =  data.hasOwnProperty("prop_positionRight")                                                 ?  data.prop_positionRight        :  "";
            const prop_width              =  data.hasOwnProperty("prop_width")                                                         ?  data.prop_width                :  "100%";
            const prop_height             =  data.hasOwnProperty("prop_height")                                                        ?  data.prop_height               :   "200px";

           //---------------
            prop_elementStyles["z-index"] = "9";
            if (prop_positionType != null){
                prop_elementStyles["position"] = prop_positionType;
            }
            if (prop_positionTop != null){
                prop_elementStyles["top"] = prop_positionTop;
            }
            if (prop_positionLeft != null){
                prop_elementStyles["left"] = prop_positionLeft;
            }
            if (prop_positionBottom != null){
                prop_elementStyles["bottom"] = prop_positionBottom;
            }
            if (prop_positionRight != null){
                prop_elementStyles["right"] = prop_positionRight;
            }
            if (prop_width != null){
                prop_elementStyles["width"] = prop_width;
            }
            if (prop_height != null){
                prop_elementStyles["height"] = prop_height;
            }

            new window.ComponentBorder(
                `component-position-element-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass:  prop_elementClass ,
                    prop_structureStyles: prop_elementStyles ,
                }
            )
        }

    }



    template_render_content(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_content  =  data.hasOwnProperty("prop_content")  && data.prop_content != null     ?  data.prop_content     :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            return `
<section data-part-name="${partName}" 
         id="component-position-element-content-${this._COMPONENT_RANDOM_ID}" 
         class=" ">
     <style>
         #${this._COMPONENT_ID} #component-position-element-content-${this._COMPONENT_RANDOM_ID}{

         }
     </style>
       
       ${prop_content}
       
</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }


}





/*-------------------------------------
 20) Component border
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_content

@prop_btnMore_icon
@prop_btnMore_show
@prop_btnMore_link
-------------------------------------*/
window.ComponentBorder = class ComponentBorder extends ComponentBase{

    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [
            {prop : "prop_structureClass"            , default: ["border" , "shadow-sm" , "rounded" , "px-1" , "px-2"]} ,
            {prop : "prop_structureStyles"           , default: {"position" : "relative"}} ,
        ] ,
        part_border: [
            {prop : "prop_content"                , default: null} ,
        ] ,
        part_icon_more: [
            {prop : "prop_btnMore_icon"           , default: ""} ,
            {prop : "prop_btnMore_show"           , default: false} ,
            {prop : "prop_btnMore_link"           , default: null} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {} ,
            part_icon_more: {} ,
        } ,
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentBorder.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
      TEMPLATEs
     --------------------------------------------- */
    componentFn(){
        this.templateFn("part_icon_more");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.template_render_border(partName);
            case "part_icon_more":
                return this.componentFn_render_iconMore(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
     <style>
         #${this._COMPONENT_ID} #component-border-icon-more-${this._COMPONENT_RANDOM_ID}{
             opacity: 0.25;
         }
         #${this._COMPONENT_ID}:hover #component-border-icon-more-${this._COMPONENT_RANDOM_ID}{
             transition: opacity 200ms ease;
             opacity: 0.75;
         }
     </style>
     
     ${this.templateFn("part_border") ?? ""}
     
     <component-icon id="component-border-icon-more-${this._COMPONENT_RANDOM_ID}"></component-icon>
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_border(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_content          =  data.hasOwnProperty("prop_content")  && data.prop_content != null     ?  data.prop_content   :   (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            prop_content
            return `
<section data-part-name="${partName}" 
         id="component-border-border-${this._COMPONENT_RANDOM_ID}"
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-border-border-${this._COMPONENT_RANDOM_ID}{
             
         }
     </style>
     
     ${prop_content}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_iconMore(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnMore_icon  =  data.hasOwnProperty("prop_btnMore_icon")         ?  data.prop_btnMore_icon      : "";
            const prop_btnMore_show  =  data.hasOwnProperty("prop_btnMore_show")         ?  data.prop_btnMore_show      : false;
            const prop_btnMore_link  =  data.hasOwnProperty("prop_btnMore_link")         ?  data.prop_btnMore_link      : null;

            if (prop_btnMore_show){
                new window.ComponentIcon(
                    `component-border-icon-more-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_icon: prop_btnMore_icon ,

                        prop_iconClass: ["position-absolute" , "border-dark" , "rounded"  , "shadow-sm" , "p-1"] ,
                        prop_iconStyles: {
                            "top" : "10px" ,
                            "left" : "10px" ,
                            "background-color" : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("elementBorder") && tools_const.styles.elementBorder.hasOwnProperty("btnMore_backgroundColor")  ? tools_const.styles.elementBorder.btnMore_backgroundColor : "" ,
                            "color" : tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("elementBorder") && tools_const.styles.elementBorder.hasOwnProperty("btnMore_color")  ? tools_const.styles.elementBorder.btnMore_color : "" ,
                            "cursor" : "pointer" ,
                            "z-index" : "9" ,
                        } ,

                        fn_callback: (event)=>{
                            this.fn_onCLickIconMore(event , prop_btnMore_link);
                        }
                    }
                )
            }

        }

    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickIconMore(event , prop_btnMore_link){
        if (prop_btnMore_link != null){
            window.open(prop_btnMore_link,'_blank');
        }
    }
}






/*-------------------------------------
 21) Component image
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_imageSource
@prop_imageTitle
@prop_imageAlt
@prop_imageClass
@prop_imageStyles

@fn_callback
-------------------------------------*/
window.ComponentImage = class ComponentImage extends ComponentBase{


    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [
            {prop : "prop_structureClass"            , default: ["border" , "shadow-sm" , "rounded" , "px-1" , "px-2" , "mx-auto"]} ,
            {prop : "prop_structureStyles"           , default: {"position" : "relative"}} ,
        ] ,
        part_image: [
            {prop : "prop_imageSource"               , default: ""} ,
            {prop : "prop_imageTitle"                , default: ""} ,
            {prop : "prop_imageAlt"                  , default: ""} ,
            {prop : "prop_imageClass"                , default: ["text-center"]} ,
            {prop : "prop_imageStyles"               , default: {}} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_image: {} ,
        } ,
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentImage.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }


    /* ---------------------------------------------
     TEMPLATEs
    --------------------------------------------- */
    componentFn(){

    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_image":
                return this.template_render_image(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
 ${this.templateFn("part_image") ?? ""}
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_image(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_imageSource     =  data.hasOwnProperty("prop_imageSource")        ?  data.prop_imageSource     : "";
            const prop_imageTitle      =  data.hasOwnProperty("prop_imageTitle")         ?  data.prop_imageTitle      : "";
            const prop_imageAlt        =  data.hasOwnProperty("prop_imageAlt")           ?  data.prop_imageAlt        : "";
            const prop_imageClass      =  data.hasOwnProperty("prop_imageClass")         ?  data.prop_imageClass      : [];
            const prop_imageStyles     =  data.hasOwnProperty("prop_imageStyles")        ?  data.prop_imageStyles     : {};

            return `
<section data-part-name="${partName}" 
         id="component-image-image-${this._COMPONENT_RANDOM_ID}"
         class="${tools_public.renderListClass(prop_imageClass)}"
         onclick="${this.getFn("fn_callback" , "event")}">
         
     <style>
         #${this._COMPONENT_ID} #component-image-image-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_imageStyles)}
         }
     </style>
     
      <img id="component-image-image-${this._COMPONENT_RANDOM_ID}" src="${prop_imageSource}" title="${prop_imageTitle}" alt="${prop_imageAlt}"/>
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }




    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_callback(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }

}






/*-------------------------------------
 22) Component link
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_image source , title , class , styles
@prop_icon  source , title , class , styles
@prop_title content , style , class
@prop_linkClass
@prop_linkStyles
@prop_linkHref
-------------------------------------*/
window.ComponentLink = class ComponentLink extends ComponentBase{


    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [

        ] ,
        part_image: [

        ] ,
        part_icon: [

        ] ,
        part_title: [

        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_image: {} ,
                part_icon: {} ,
                part_title: {} ,
            }
        } ,
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentLink.name] ,
            elId
        );
        this.onCreate(
            config ,
            this._COMPONENT_PROPS ,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
     TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_border");
        this.templateFn("part_image");
        this.templateFn("part_icon");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_image":
                return this.componentFn_render_image(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_title":
                return this.template_render_title(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
   <component-border id="component-link-border-${this._COMPONENT_RANDOM_ID}" class="row px-2 py-1 m-0">
       <component-body>
         
          <component-icon id="component-link-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>
         
          <component-image id="component-link-image-${this._COMPONENT_RANDOM_ID}"></component-image>
 
          ${this.templateFn("part_title") ?? ""}
         
       </component-body>
   </component-border>
                `;
        return this.templateBasic_render_structure(content );
    }



    componentFn_render_border(partName) {

        const data = this.getPartProps(partName);

        if (data != null){

            new window.ComponentBorder(
                `component-link-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    //prop_structureClass:  [] ,
                    prop_structureStyles: {"cursor" : "pointer"} ,
                }
            )
        }

    }

    componentFn_render_image(partName) {

        const data = this.getPartProps(partName);

        if (data != null){

            new window.ComponentImage(
                `component-link-image-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass:  [] ,
                    prop_structureStyles: {} ,
                }
            )
        }

    }

    componentFn_render_icon(partName) {

        const data = this.getPartProps(partName);

        if (data != null){

            new window.ComponentIcon(
                `component-link-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass:  [] ,
                    prop_structureStyles: {} ,
                }
            )
        }

    }


    template_render_title(partName) {
        const data = this.getPartProps(partName)

        if (data != null){


            return `
<section data-part-name="${partName}" 
         id="component-link-title-${this._COMPONENT_RANDOM_ID}"
         class="">
         
     <style>
         #${this._COMPONENT_ID} #component-link-title-${this._COMPONENT_RANDOM_ID}{

         }
     </style>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

}

