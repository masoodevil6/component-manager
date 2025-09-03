/*
Name: Components
Developer: Mehdi Maarefian
Version: 0.2
*/






if (typeof listComponent === 'undefined') {
    var listComponent = {

        // [01] text
        ComponentMessages:                   "component-messages" ,                       //01-01
        ComponentIsEmpty:                    "component-is-empty" ,                       //01-02
        ComponentHeader:                     "component-header" ,                         //01-03
        ComponentLabel:                      "component-label" ,                          //01-04
        ComponentDescription:                "component-description" ,                    //01-05
        ComponentLink:                       "component-link" ,                           //01-06
        ComponentInfo:                       "component-info" ,                           //01-07
        ComponentCard:                       "component-card" ,                           //01-08

        // [02] Fetch
        ComponentLoading:                    "component-loading" ,                        //02-01
        Component404:                        "component-404" ,                            //02-02
        ComponentForm:                       "component-form" ,                           //02-03
        ComponentWidget:                     "component-widget" ,                         //02-04
        ComponentIframe:                     "component-iframe" ,                         //02-05


        // [03] Button and Inputs
        ComponentButton:                     "component-button" ,                         //03-01
        ComponentSelectOption:               "component-select-option" ,                  //03-02
        ComponentOtp:                        "component-otp" ,                            //03-03
        ComponentInput:                      "component-input" ,                          //03-04
        ComponentInputPrice:                 "component-input-price" ,                    //03-05
        ComponentDate:                       "component-date" ,                           //03-06
        ComponentInputFile:                  "component-input-file" ,                     //03-07

        // [04] tooltips
        ComponentTooltipDescription:         "component-tooltip-description" ,            //04-01



        // [10] Tables
        ComponentTable:                      "component-table" ,                          //10-01

        // [11] Tabs
        ComponentTabs:                       "component-tabs" ,                           //11-01
        ComponentTree:                       "component-tree" ,                           //11-02

        // [12] Collapse
        ComponentCollapse:                   "component-collapse" ,                       //12-01

        // [13] Window
        ComponentWindow:                     "component-window" ,                         //13-01
        ComponentWindowConfirm:              "component-window-confirm" ,                 //13-02

        // [14] Slider Shows
        ComponentSliderShowOverlapping:      "component-slider-show-overlapping" ,        //14-01

        // [15] Breadcrumb
        ComponentBreadcrumb :                "component-breadcrumb" ,                     //15-01




        // [20] Charts
        ComponentChart:                      "component-chart" ,                          //20-01

        // [21] QR CODE
        ComponentQrCode:                     "component-qr-code" ,                        //21-01
        ComponentCameraQrCodeReader:         "component-camera-qr-code-reader" ,          //21-02
        ComponentUploadQrCodeReader:         "component-upload-qr-code-reader" ,          //21-03
        ComponentQrCodeReader:               "component-qr-code-reader" ,                 //21-04



        // [99] Others
        ComponentIcon:                       "component-icon" ,                           //99-01
        ComponentPositionElement:            "component-position-element" ,               //99-02
        ComponentBorder:                     "component-border" ,                         //99-03
        ComponentImage:                      "component-image" ,                          //99-04
        ComponentLayout:                     "component-layout" ,                         //99-05

    }
}
if (typeof components === 'undefined') {
   // var components = new WeakMap();
    var components = {};
}




if (typeof listComponentCategory === 'undefined') {
    var listComponentCategory = [
        { id: 1     , name: " [01] text"                                                          , parent_id:0 } ,
        { id: 1001  , name: " [01-01] " +  listComponent["ComponentMessages"]                     , parent_id:1 } ,
        { id: 1002  , name: " [01-02] " +  listComponent["ComponentIsEmpty"]                      , parent_id:1 } ,
        { id: 1003  , name: " [01-03] " +  listComponent["ComponentHeader"]                       , parent_id:1 } ,
        { id: 1004  , name: " [01-04] " +  listComponent["ComponentLabel"]                        , parent_id:1 } ,
        { id: 1005  , name: " [01-05] " +  listComponent["ComponentDescription"]                  , parent_id:1 } ,
        { id: 1006  , name: " [01-06] " +  listComponent["ComponentLink"]                         , parent_id:1 } ,
        { id: 1007  , name: " [01-07] " +  listComponent["ComponentInfo"]                         , parent_id:1 } ,
        { id: 1008  , name: " [01-08] " +  listComponent["ComponentCard"]                         , parent_id:1 } ,

        { id: 2     , name: " [02] Fetch"                                                         , parent_id:0 } ,
        { id: 2001  , name: " [02-01] " +  listComponent["ComponentLoading"]                      , parent_id:2 } ,
        { id: 2002  , name: " [02-02] " +  listComponent["Component404"]                          , parent_id:2 } ,
        { id: 2003  , name: " [02-03] " +  listComponent["ComponentForm"]                         , parent_id:2 } ,
        { id: 2004  , name: " [02-04] " +  listComponent["ComponentWidget"]                       , parent_id:2 } ,
        { id: 2005  , name: " [02-05] " +  listComponent["ComponentIframe"]                       , parent_id:2 } ,

        { id: 3     , name: " [03] Button and Inputs"                                              , parent_id:0 } ,
        { id: 3001  , name: " [03-01] " +  listComponent["ComponentButton"]                        , parent_id:3 } ,
        { id: 3002  , name: " [03-02] " +  listComponent["ComponentSelectOption"]                  , parent_id:3 } ,
        { id: 3003  , name: " [03-03] " +  listComponent["ComponentOtp"]                           , parent_id:3 } ,
        { id: 3004  , name: " [03-04] " +  listComponent["ComponentInput"]                         , parent_id:3 } ,
        { id: 3005  , name: " [03-05] " +  listComponent["ComponentInputPrice"]                    , parent_id:3 } ,
        { id: 3006  , name: " [03-06] " +  listComponent["ComponentDate"]                          , parent_id:3 } ,
        { id: 3007  , name: " [03-07] " +  listComponent["ComponentInputFile"]                     , parent_id:3 } ,

        { id: 4     , name: " [04] tooltips "                                                      , parent_id:0 } ,
        { id: 4001  , name: " [04-01] " + listComponent["ComponentTooltipDescription"]             , parent_id:4 } ,

        { id: 10     , name: " [10] Tables "                                                       , parent_id:0 } ,
        { id: 10001  , name: " [10-01] " + listComponent["ComponentTable"]                         , parent_id:10 } ,

        { id: 11     , name: " [11] Tabs "                                                          , parent_id:0 } ,
        { id: 11001  , name: " [11-01] " +  listComponent["ComponentTabs"]                          , parent_id:11 } ,
        { id: 11002  , name: " [11-02] " +  listComponent["ComponentTree"]                          , parent_id:11 } ,

        { id: 12     , name: " [12] Collapse "                                                      , parent_id:0 } ,
        { id: 12002  , name: " [12-01] " +  listComponent["ComponentCollapse"]                      , parent_id:12} ,

        { id: 13     , name: " [13] Window "                                                        , parent_id:0 } ,
        { id: 13001  , name: " [13-01] " +  listComponent["ComponentWindow"]                        , parent_id:13 } ,
        { id: 13002  , name: " [13-02] " +  listComponent["ComponentWindowConfirm"]                 , parent_id:13 } ,

        { id: 14     , name: " [14] Slider Shows "                                                  , parent_id:0 } ,
        { id: 14001  , name: " [14-01] " +  listComponent["ComponentSliderShowOverlapping"]         , parent_id:14 } ,

        { id: 15     , name: " [15] Breadcrumb "                                                    , parent_id:0 } ,
        { id: 15001  , name: " [15-01] " + listComponent["ComponentBreadcrumb"]                     , parent_id:15 } ,

        { id: 20     , name: " [20] Charts "                                                        , parent_id:0 } ,
        { id: 20001  , name: " [20-01] " +  listComponent["ComponentChart"]                        , parent_id:20 } ,

        { id: 21     , name: " [21] QR CODE "                                                       , parent_id:0 } ,
        { id: 21001  , name: " [21-01] " + listComponent["ComponentQrCode"]                         , parent_id:20 } ,
        { id: 21002  , name: " [21-02] " + listComponent["ComponentCameraQrCodeReader"]             , parent_id:20 } ,
        { id: 21003  , name: " [21-03] " + listComponent["ComponentUploadQrCodeReader"]             , parent_id:20 } ,
        { id: 21004  , name: " [21-04] " + listComponent["ComponentQrCodeReader"]                   , parent_id:20 } ,

        { id: 99     , name: " [99] Others "                                                        , parent_id:0 } ,
        { id: 99001  , name: " [99-01] " +  listComponent["ComponentIcon"]                          , parent_id:99 } ,
        { id: 99002  , name: " [99-02] " +  listComponent["ComponentPositionElement"]               , parent_id:99 } ,
        { id: 99003  , name: " [99-03] " +  listComponent["ComponentBorder"]                        , parent_id:99 } ,
        { id: 99004  , name: " [99-04] " +  listComponent["ComponentImage"]                         , parent_id:99 } ,
        { id: 99005  , name: " [99-05] " +  listComponent["ComponentLayout"]                        , parent_id:99 } ,

    ]
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
            if (!props.part_structure.hasOwnProperty("prop_show")){
                props["part_structure"].push( {prop: "prop_show"           , default: true});
            }
            if (!props.part_structure.hasOwnProperty("prop_structureClass")){
                props["part_structure"].push( {prop: "prop_structureClass" , default: []});
            }
            if (!props.part_structure.hasOwnProperty("prop_structureStyles")){
                props["part_structure"].push( {prop: "prop_structureStyles", default: {}});
            }
            if (!props.part_structure.hasOwnProperty("prop_structureHoverStyles")){
                props["part_structure"].push( {prop: "prop_structureHoverStyles", default: {}});
            }
        }
        if (props != null && props.hasOwnProperty("part_label")){
            if (!props.part_label.hasOwnProperty("prop_title")){
                props["part_label"].push( {prop: "prop_title"                       , default: null});
            }
            if (!props.part_label.hasOwnProperty("prop_labelShow")){
                props["part_label"].push( {prop: "prop_labelShow"                   , default: true});
            }
            if (!props.part_label.hasOwnProperty("prop_labelTooltipDescription")){
                props["part_label"].push( {prop: "prop_labelTooltipDescription"     , default: null});
            }
            if (!props.part_label.hasOwnProperty("prop_labelClass")){
                props["part_label"].push( {prop: "prop_labelClass"                  , default:  ["shadow-sm" , "px-2" ,"py-1" , "d-block"]});
            }
            if (!props.part_label.hasOwnProperty("prop_labelStyles")){
                props["part_label"].push( {prop: "prop_labelStyles"                 , default:  { "font-size" : "10pt"}});
            }
            if (!props.part_label.hasOwnProperty("prop_labelHoverStyles")){
                props["part_label"].push( {prop: "prop_labelHoverStyles"             , default: null});
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

       /* window.addEventListener('resize', (event)=>{
            this.setComponents();
        });*/
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
            html = this.templateFn(partName );

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
            this.componentFn();
        }
    }


    //--------------------------------------------------
    // tools
    //--------------------------------------------------
    getScreenWidth(){
        let screanWidth = window.innerWidth;
        let screanWidthType = "";
        if (screanWidth < 576) {
            screanWidthType = "xs"
        }
        else if (screanWidth >= 576 && screanWidth < 768) {
            screanWidthType = "s"
        }
        else if (screanWidth >= 768 && screanWidth < 992) {
            screanWidthType = "m"
        }
        else if (screanWidth >= 992 && screanWidth < 1200) {
            screanWidthType = "l"
        }
        else if (screanWidth >= 1200 && screanWidth < 1200) {
            screanWidthType = "xl"
        }
        else if (screanWidth >=1200) {
            screanWidthType = "xxl"
        }
        return screanWidthType;
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
    templateBasic_render(moreClass="mb-2") {
        return `
<section class="component-element-structure  ${tools_public.renderListClass(moreClass)}">
   ${this.templateFn("part_structure") ?? ""}
</section>
        `;
    }

    templateBasic_render_structure(content , moreClass="") {
        const partName = "part_structure";
        const data = this.getPartProps(partName);

        if (data != null){
            const prop_show                  =   data.hasOwnProperty("prop_show")                     ?  data.prop_show                    : true;
            const prop_structureClass        =   data.hasOwnProperty("prop_structureClass")           ?  data.prop_structureClass          : [];
            const prop_structureStyles       =   data.hasOwnProperty("prop_structureStyles")          ? data.prop_structureStyles          : {};
            const prop_structureHoverStyles  =   data.hasOwnProperty("prop_structureHoverStyles")     ? data.prop_structureHoverStyles     : {};

            if (prop_show){
                return `
<section  data-part-name="${partName}" 
          id="component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}"
          class=" ${tools_public.renderListClass(prop_structureClass)} ${tools_public.renderListClass(moreClass)}">

    <style>
        #${this._COMPONENT_ID} #component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}{
           ${tools_public.renderListStyle(prop_structureStyles)}
        }
        #${this._COMPONENT_ID}:hover #component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}{
           ${tools_public.renderListStyle(prop_structureHoverStyles)}
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

    componentFneBasic_render_structure(elementId , props = {}) {
        const partName = "part_label";
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_title                       = data.hasOwnProperty("prop_title") && data.prop_title !=null         ?  data.prop_title                      : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("label") ? this._COMPONENT_SLOTS.label : null);
            const prop_labelShow                   = data.hasOwnProperty("prop_labelShow")                               ? data.prop_labelShow                   : true;
            const prop_labelClass                  = data.hasOwnProperty("prop_labelClass")                              ? data.prop_labelClass                  : ["shadow-sm" , "px-2" ,"py-1" , "d-block "];
            const prop_labelStyles                 = data.hasOwnProperty("prop_labelStyles")                             ? data.prop_labelStyles                 : {"height": "25px" , "line-hight" : "25px"};
            const prop_labelHoverStyles            = data.hasOwnProperty("prop_labelHoverStyles")                        ? data.prop_labelHoverStyles            : {};
            const prop_labelTooltipDescription     = data.hasOwnProperty("prop_labelTooltipDescription")                 ? data.prop_labelTooltipDescription     : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("tooltip") ? this._COMPONENT_SLOTS.tooltip : null);

            if (prop_labelShow && (prop_title != null || (props != null && props.hasOwnProperty("prop_title")))){

                new window.ComponentLabel(
                    elementId ,
                    {
                        prop_title:  (props != null && props.hasOwnProperty("prop_title") ? props.prop_title : prop_title) ,
                        prop_for:  (props != null && props.hasOwnProperty("prop_for") ? props.prop_for : null) ,

                        prop_labelClass:       prop_labelClass ,
                        prop_labelStyles:      prop_labelStyles ,
                        prop_labelHoverStyles: prop_labelHoverStyles ,

                        prop_tooltipDescription: (props != null && props.hasOwnProperty("prop_labelTooltipDescription") ? props.prop_labelTooltipDescription : prop_labelTooltipDescription) ,

                        fn_callback: (props != null && props.hasOwnProperty("fn_callback") ? props.fn_callback : null) ,
                    }
                )

            }

        }
    }

}



/* ===============================================================================================================
 [01] TEXT
=============================================================================================================== */

/*-------------------------------------
 01-01) Component Messages
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
 01-02) Component Is Empty
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
 01-03) Component Header
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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
 01-04) Component label
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

@prop_tooltipIcon
@prop_tooltipDescription

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
        ] ,
        part_tooltip_desctiopn: [
            {prop : "prop_tooltipIcon"           , default: "!"} ,
            {prop : "prop_tooltipDescription"    , default: null} ,
        ]
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_label: {} ,
                part_tooltipDesctiopn: {} ,
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
        this.templateFn("part_tooltip_desctiopn");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure( partName );
            case "part_border":
                return this.componentFn_render_border( partName );
            case "part_label":
                return this.template_render_label(partName);
            case "part_tooltip_desctiopn":
                return this.componentFn_render_tooltipDesctiopn(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
        <component-border id="component-label-border-${this._COMPONENT_RANDOM_ID}">
            <component-body>
                ${this.templateFn("part_label") ?? ""}
                
                <component-tooltip-description id="component-label-tooltip-description-${this._COMPONENT_RANDOM_ID}"></component-tooltip-description>
                
            </component-body>
        </component-border>
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
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

            new window.ComponentBorder(
                `component-label-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass: prop_labelClass ,
                    prop_structureStyles: prop_labelStyles ,
                }
            )
        }

    }

    componentFn_render_tooltipDesctiopn(partName) {

        const data = this.getPartProps(partName);

        if (data != null){

            const prop_tooltipDescription        =   data.hasOwnProperty("prop_tooltipDescription") && data.prop_tooltipDescription !=null       ?  data.prop_tooltipDescription        :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("description") ? this._COMPONENT_SLOTS.description : null);
            const prop_tooltipIcon               =   data.hasOwnProperty("prop_tooltipIcon")                                                     ?  data.prop_tooltipIcon               : "";

            if (prop_tooltipDescription != null){

                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;

                const styles = {
                    "top" : "7.5px" ,
                };
                styles[directionRtl ? "left" : "right"] = "10px"


                new window.ComponentTooltipDescription(
                    `component-label-tooltip-description-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_structureClass: ["position-absolute"] ,
                        prop_structureStyles: styles,

                        prop_icon: prop_tooltipIcon ,
                        prop_description: prop_tooltipDescription ,
                    }
                )

            }

        }

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
 01-05) Component link
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_borderClass
@prop_borderStyles
@prop_borderHoverStyles

@prop_linkHref

@prop_imageSource
@prop_imageTitle
@prop_imageAlt
@prop_imageClass
@prop_imageStyles

@prop_iconSource
@prop_iconIsItalik
@prop_iconClass
@prop_iconStyles

@prop_title
@prop_titleClass
@prop_titleStyles
-------------------------------------*/
window.ComponentLink = class ComponentLink extends ComponentBase{


    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_borderClass"                  , default: ["row"  , "px-2" , "py-1" , "m-0" , "border" , "shadow-sm" , "rounded" , "rounded"]} ,
            {prop : "prop_borderStyles"                 , default: {
                    "cursor" : "pointer" ,
                    "background-color" :  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("elementLink") && tools_const.styles.elementLink.hasOwnProperty("normal") && tools_const.styles.elementLink.normal.hasOwnProperty("backgroundColor")  ? tools_const.styles.elementLink.normal.backgroundColor : ""
                }} ,
            {prop : "prop_borderHoverStyles"            , default: {
                    "transition" : "background-color ease 300ms" ,
                    "background-color" :  tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("elementLink") && tools_const.styles.elementLink.hasOwnProperty("hover") && tools_const.styles.elementLink.hover.hasOwnProperty("backgroundColor") ? tools_const.styles.elementLink.hover.backgroundColor : ""
                }} ,
            {prop : "prop_linkHref"                     , default: null} ,
        ] ,
        part_image: [
            {prop : "prop_imageSource"                  , default: null} ,
            {prop : "prop_imageTitle"                   , default: null} ,
            {prop : "prop_imageAlt"                     , default: null} ,
            {prop : "prop_imageClass"                   , default: ["text-center"]} ,
            {prop : "prop_imageStyles"                  , default: null} ,
        ] ,
        part_icon: [
            {prop : "prop_iconSource"                   , default: null} ,
            {prop : "prop_iconIsItalik"                 , default: false} ,
            {prop : "prop_iconClass"                    , default: ["text-center"]} ,
            {prop : "prop_iconStyles"                   , default: null} ,
        ] ,
        part_title: [
            {prop : "prop_title"                        , default: ""} ,
            {prop : "prop_titleClass"                   , default: []} ,
            {prop : "prop_titleStyles"                  , default: {
                    "height": "100%",
                    "line-height": "500%",
                    "text-align": "center"
                }} ,
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

    template_render_title(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_title            =  data.hasOwnProperty("prop_title")               ?  data.prop_title            : [];
            const prop_titleClass       =  data.hasOwnProperty("prop_titleClass")          ?  data.prop_titleClass       : {};
            const prop_titleStyles      =  data.hasOwnProperty("prop_titleStyles")         ?  data.prop_titleStyles      : {};

            return `
<section data-part-name="${partName}" 
         id="component-link-title-${this._COMPONENT_RANDOM_ID}"
         class="${tools_public.renderListClass(prop_titleClass)} col-8">
         
     <style>
         #${this._COMPONENT_ID} #component-link-title-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_titleStyles)}
         }
     </style>
     
     <b class="d-block text-center" style="font-size: 12pt">
${prop_title}
     </b>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_border(partName) {

        const data = this.getPartProps(partName);

        const prop_borderClass            =  data.hasOwnProperty("prop_borderClass")               ?  data.prop_borderClass            : [];
        const prop_borderStyles           =  data.hasOwnProperty("prop_borderStyles")              ?  data.prop_borderStyles           : {};
        const prop_borderHoverStyles      =  data.hasOwnProperty("prop_borderHoverStyles")         ?  data.prop_borderHoverStyles      : {};
        const prop_linkHref               =  data.hasOwnProperty("prop_linkHref")                  ?  data.prop_linkHref               : null;

        if (data != null){

            new window.ComponentBorder(
                `component-link-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass:  prop_borderClass ,
                    prop_structureStyles: prop_borderStyles ,
                    prop_structureHoverStyles: prop_borderHoverStyles ,

                    prop_borderClass: ["row"],

                    fn_callback  :  (event) => {
                        this.fn_callbackLink(event,  prop_linkHref)
                    } ,
                }
            )
        }

    }

    componentFn_render_image(partName) {

        const data = this.getPartProps(partName);

        if (data != null){

            const prop_imageSource            =  data.hasOwnProperty("prop_imageSource")               ?  data.prop_imageSource            : null;
            const prop_imageTitle             =  data.hasOwnProperty("prop_imageTitle")                ?  data.prop_imageTitle             : null;
            const prop_imageAlt               =  data.hasOwnProperty("prop_imageAlt")                  ?  data.prop_imageAlt               : null;
            const prop_imageClass             =  data.hasOwnProperty("prop_imageClass")                ?  data.prop_imageClass             : null;
            const prop_imageStyles            =  data.hasOwnProperty("prop_imageStyles")               ?  data.prop_imageStyles            : null;

            if (prop_imageSource != null){
                new window.ComponentImage(
                    `component-link-image-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        classList:  ["col-4" ] ,

                        prop_structureClass:  [] ,
                        prop_structureStyles: {} ,

                        prop_imageTitle : prop_imageTitle ,
                        prop_imageAlt : prop_imageAlt ,

                        prop_imageSource  :  prop_imageSource,
                        prop_imageClass   :  prop_imageClass,
                        prop_imageStyles  :  prop_imageStyles,
                    }
                )
            }
            else {
                const el = document.querySelector(`#component-link-image-${this._COMPONENT_RANDOM_ID}`);
                if (el != null){
                    el.remove();
                }
            }

        }

    }

    componentFn_render_icon(partName) {

        const data = this.getPartProps(partName);

        if (data != null){

            const prop_iconSource            =  data.hasOwnProperty("prop_iconSource")             ?  data.prop_iconSource           : null;
            const prop_iconIsItalik          =  data.hasOwnProperty("prop_iconIsItalik")           ?  data.prop_iconIsItalik         : false;
            const prop_iconClass             =  data.hasOwnProperty("prop_iconClass")              ?  data.prop_iconClass            : null;
            const prop_iconStyles            =  data.hasOwnProperty("prop_iconStyles")             ?  data.prop_iconStyles           : null;

            if (prop_iconSource != null){
                new window.ComponentIcon(
                    `component-link-icon-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        classList:  ["col-4" ] ,

                        prop_structureClass:  [] ,
                        prop_structureStyles: {} ,

                        prop_icon : prop_iconSource ,
                        prop_isItalik : prop_iconIsItalik ,

                        prop_iconClass : prop_iconClass ,
                        prop_iconStyles : prop_iconStyles
                    }
                )
            }
            else {
                const el = document.querySelector(`#component-link-icon-${this._COMPONENT_RANDOM_ID}`);
                if (el != null){
                    el.remove();
                }
            }

        }

    }





    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_callbackLink(event , prop_linkHref){
        if (prop_linkHref != null){
            window.open(prop_linkHref, '_blank');
        }
    }

}


/*-------------------------------------
 01-06) Component Description
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_title

@prop_description
@prop_descriptionClass
@prop_descriptionStyles

@prop_buttonTitleMore
@prop_buttonTitleLess


@prop_height
@prop_button   title_more|title_less|prop_show
-------------------------------------*/
window.ComponentDescription = class ComponentDescription extends ComponentBase{

    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [

        ] ,
        part_border_content: [
            {prop : "prop_height"                , default: 250} ,
            {prop : "var_showContent"            , default: false} ,
        ] ,
        part_header: [
            {prop : "prop_icon"                  , default: null} ,
            {prop : "prop_title"                 , default: ""} ,
            {prop : "var_showContent"            , default: false} ,
        ] ,
        part_description: [
            {prop : "prop_description"           , default: ""} ,
            {prop : "prop_descriptionClass"      , default: []} ,
            {prop : "prop_descriptionStyles"     , default: {}} ,
            {prop : "prop_height"                , default: 250} ,
            {prop : "var_showContent"            , default: false} ,
        ] ,
        part_btnMore: [
            {prop : "var_showContent"            , default: false} ,
            {prop : "prop_buttonTitleMore"       , default: "more ..."} ,
            {prop : "prop_buttonTitleLess"       , default: "less ..."} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_border: {
                part_border_content: {
                    part_header: {} ,
                    part_description: {} ,
                    part_btnMore: {} ,
                }
            }
        } ,
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentDescription.name] ,
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
        this.templateFn("part_header");
        this.templateFn("part_btnMore");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_border_content":
                return this.template_render_borderContnet(partName);
            case "part_header":
                return this.componentFn_render_header(partName);
            case "part_description":
                return this.template_render_description(partName);
            case "part_btnMore":
                return this.componentFn_render_btnMore(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
   <component-border id="component-description-border-${this._COMPONENT_RANDOM_ID}" class="row px-2 py-1 m-0">
       <component-body>
            
              ${this.templateFn("part_border_content") ?? ""}
              
       </component-body>
   </component-border>
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_borderContnet(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_height              =  data.hasOwnProperty("prop_height")                          ?  data.prop_height                  :  250;
            const var_showContent          =  data.hasOwnProperty("var_showContent")                      ?  data.var_showContent              :  false;

            let styles = {};
            if (!var_showContent){
                styles["overflow"]= "hidden";
                styles["height"]= prop_height + "px";
            }
            else{
                styles["overflow"]= "auto";
                styles["height"]= "auto";
            }


            return `
<section data-part-name="${partName}" 
         id="component-description-border-content-${this._COMPONENT_RANDOM_ID}"
         class="px-2 pt-2 position-relative">
         
     <style>
         #${this._COMPONENT_ID} #component-description-border-content-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(styles)}
         }
         
         
         #${this._COMPONENT_ID} #component-description-button-${this._COMPONENT_RANDOM_ID}{
             opacity: 0.6;
         }
         
         #${this._COMPONENT_ID} #component-description-border-content-${this._COMPONENT_RANDOM_ID}:hover #component-description-button-${this._COMPONENT_RANDOM_ID}{
             opacity: 1;
         }
     </style>
     
     <component-header id="component-description-header-${this._COMPONENT_RANDOM_ID}"></component-header>
                
     ${this.templateFn("part_description") ?? ""}
                
     <component-button id="component-description-button-${this._COMPONENT_RANDOM_ID}"></component-button>
                
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_description(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_description         =  data.hasOwnProperty("prop_description")                     ?  data.prop_description             : "";
            const prop_descriptionClass    =  data.hasOwnProperty("prop_descriptionClass")                ?  data.prop_descriptionClass        : [];
            const prop_descriptionStyles   =  data.hasOwnProperty("prop_descriptionStyles")               ?  data.prop_descriptionStyles       : {};

            prop_descriptionStyles["text-align"] = "justify";
            prop_descriptionStyles["display"] = "-webkit-box";
            prop_descriptionStyles["-webkit-box-orient"] = "vertical";
            prop_descriptionStyles["padding-bottom"] = "40px";

            return `
<section data-part-name="${partName}" 
         id="component-description-description-${this._COMPONENT_RANDOM_ID}"
         class="${tools_public.renderListClass(prop_descriptionClass)}">
         
     <style>
         #${this._COMPONENT_ID} #component-description-description-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_descriptionStyles)}
         }
     </style>
     
     ${prop_description}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_border(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            new window.ComponentBorder(
                `component-description-border-${this._COMPONENT_RANDOM_ID}` ,
                {

                }
            )
        }
    }

    componentFn_render_header(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            const prop_title            =  data.hasOwnProperty("prop_title")               ?  data.prop_title            : "";
            const prop_icon             =  data.hasOwnProperty("prop_icon")                ?  data.prop_icon             : null;

            new window.ComponentHeader(
                `component-description-header-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_icon: prop_icon,
                    prop_size: 5,
                    prop_title: prop_title,
                }
            )
        }

    }

    componentFn_render_btnMore(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            const prop_buttonTitleMore        =  data.hasOwnProperty("prop_buttonTitleMore")           ?  data.prop_buttonTitleMore        : "";
            const prop_buttonTitleLess        =  data.hasOwnProperty("prop_buttonTitleLess")           ?  data.prop_buttonTitleLess        : "";
            const var_showContent             =  data.hasOwnProperty("var_showContent")                ?  data.var_showContent             : false;

            new window.ComponentButton(
                `component-description-button-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_show: !var_showContent ? this.fn_checkShowDescription() : true ,

                    prop_structureClass:  ["position-absolute"] ,
                    prop_structureStyles: {
                        "bottom" : "5px" ,
                        "left" : "5px" ,
                        "right" : "5px" ,
                    } ,

                    prop_title: `<b>${var_showContent ? prop_buttonTitleLess :  prop_buttonTitleMore}</b>` ,
                    fn_callback: (event) => {
                        this.fn_callbackBtnMore(event);
                    }
                }
            )
        }

    }



    /* ---------------------------------------------
      FUNCTIONs
   --------------------------------------------- */
    fn_callbackBtnMore(event){
        let var_showContent = this.get("var_showContent" , false);
        this.set("var_showContent" , !var_showContent)
    }

    fn_checkShowDescription(){
        const borderElement = document.querySelector(`#component-description-border-${this._COMPONENT_RANDOM_ID}`).querySelector("[data-part-name=part_structure]");
        const descritionElement = document.querySelector(`#component-description-description-${this._COMPONENT_RANDOM_ID}`);

        if (borderElement != null && descritionElement != null){
            const borderHeight = borderElement.getBoundingClientRect().height;
            const descritionHeight = descritionElement.getBoundingClientRect().height;

            return  descritionHeight > borderHeight;
        }

        return true


    }
}


/*-------------------------------------
 01-07) Component Info
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_iconClass
@prop_iconStyles

@prop_info
@prop_infoClass
@prop_infoStyles
-------------------------------------*/
window.ComponentInfo = class ComponentInfo extends ComponentBase{

    /* ---------------------------------------------
  PROPERTYs
 --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_icon: [
            {prop : "prop_icon"                , default: null} ,
            {prop : "prop_iconClass"           , default: []} ,
            {prop : "prop_iconStyles"          , default: {"margin" : "0 5px", "width" : "30px", "line-height" :   "20px", "font-size" : "20pt;", "top" : "0" ,}} ,
        ] ,
        part_content: [
            {prop : "prop_info"                , default: ""} ,
            {prop : "prop_infoClass"           , default: []} ,
            {prop : "prop_infoStyles"          , default: {}} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_icon: {} ,
            part_content: {} ,
        } ,
    }


    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentInfo.name] ,
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
        this.templateFn("part_icon");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_content":
                return this.template_render_contnet(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
<div class="float-start">
    <component-icon id="component-info-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>
</div>

<div class="">
   ${this.templateFn("part_content") ?? ""}
</div>
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_contnet(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_info              =  data.hasOwnProperty("prop_info")                          ?  data.prop_info                  :  "";
            const prop_infoClass         =  data.hasOwnProperty("prop_infoClass")                     ?  data.prop_infoClass             :  [];
            const prop_infoStyles        =  data.hasOwnProperty("prop_infoStyles")                    ?  data.prop_infoStyles            : {};


            return `
<section data-part-name="${partName}" 
         id="component-info-content-${this._COMPONENT_RANDOM_ID}"
         class="${tools_public.renderListClass(prop_infoClass)}">
         
     <style>
         #${this._COMPONENT_ID} #component-info-content-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_infoStyles)}
         }
     </style>
     
     ${prop_info}
                
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_icon(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;
            const prop_iconClass     =   data.hasOwnProperty("prop_iconClass")                ?  data.prop_iconClass                     :  [];
            const prop_iconStyles    =   data.hasOwnProperty("prop_iconStyles")               ?  data.prop_iconStyles                    :  {"margin" : "0 5px", "width" : "30px", "line-height" :   "35px", "font-size" : "20pt;", "top" : "0" ,};


            if (prop_icon != null){

                new window.ComponentIcon(
                    `component-info-icon-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_icon: prop_icon ,

                        prop_iconClass : prop_iconClass ,
                        prop_iconStyles : prop_iconStyles ,
                    }
                )

            }

        }
    }


}




/*-------------------------------------
 01-08) Component Card
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_cardClass
@prop_cardStyles

@prop_header
@prop_cardHeaderClassBackground
@prop_cardHeaderClassColor

@prop_body
@prop_cardBodyClassBackground
@prop_cardBodyClassColor
-------------------------------------*/
window.ComponentCard = class ComponentCard extends ComponentBase {

    /* ---------------------------------------------
  PROPERTYs
 --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_card: [
            {prop : "prop_cardClass"                      , default: []} ,
            {prop : "prop_cardStyles"                     , default: {}} ,
        ],
        part_card_header: [
            {prop : "prop_header"                         , default: null} ,
            {prop : "prop_cardHeaderClassBackground"      , default: "bg-secondary"} ,
            {prop : "prop_cardHeaderClassColor"           , default: "text-white"} ,
        ],
        part_card_body: [
            {prop : "prop_body"                           , default: null} ,
            {prop : "prop_cardBodyClassBackground"        , default: "bg-white"} ,
            {prop : "prop_cardBodyClassColor"             , default: "text-dark"} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_card_header : {} ,
            part_card_body : {} ,
        },
    }


    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentCard.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }


    /* ---------------------------------------------
    TEMPLATEs
    --------------------------------------------- */
    componentFn() {

    }

    templateFn(partName = null) {
        switch (partName) {
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_card":
                return this.template_render_card(partName);
            case "part_card_header":
                return this.template_render_cardHeader(partName);
            case "part_card_body":
                return this.template_render_cardBody(partName);

            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
  ${this.templateFn("part_card") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_card(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_cardClass    = data.hasOwnProperty("prop_cardClass") ? data.prop_cardClass : [];
            const prop_cardStyles   = data.hasOwnProperty("prop_cardStyles") ? data.prop_cardStyles : {};

            return `
<section data-part-name="${partName}" 
         id="component-card-card-${this._COMPONENT_RANDOM_ID}"
         class="card mb-1 mx-2 overflow-hidden  ${tools_public.renderListClass(prop_cardClass)}">
         
     <style>
         #${this._COMPONENT_ID} #component-card-card-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_cardStyles)}
         }
     </style>
     
       ${this.templateFn("part_card_header") ?? ""}
       
       ${this.templateFn("part_card_body") ?? ""}
                
</section>
        `;
        }
    }

    template_render_cardHeader(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {
            const prop_header                    =   data.hasOwnProperty("prop_header") && data.prop_header !=null       ?  data.prop_header                     :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("header") ? this._COMPONENT_SLOTS.header : '');
            const prop_cardHeaderClassBackground = data.hasOwnProperty("prop_cardHeaderClassBackground")                 ? data.prop_cardHeaderClassBackground   : "";
            const prop_cardHeaderClassColor      = data.hasOwnProperty("prop_cardHeaderClassColor")                      ? data.prop_cardHeaderClassColor        : "";

            return `
<section data-part-name="${partName}" 
         id="component-card-header-${this._COMPONENT_RANDOM_ID}"
         class="card-header ${prop_cardHeaderClassBackground} ${prop_cardHeaderClassColor}">
         
     <style>
         #${this._COMPONENT_ID} #component-card-header-${this._COMPONENT_RANDOM_ID}{
         
         }
     </style>
     
  ${prop_header}
                
</section>
        `;
        }
    }

    template_render_cardBody(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_body                    =   data.hasOwnProperty("prop_body") && data.prop_body !=null       ?  data.prop_body                     :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');
            const prop_cardBodyClassBackground = data.hasOwnProperty("prop_cardBodyClassBackground")               ? data.prop_cardBodyClassBackground   : "";
            const prop_cardBodyClassColor      = data.hasOwnProperty("prop_cardBodyClassColor")                    ? data.prop_cardBodyClassColor        : "";

            return `
<section data-part-name="${partName}" 
         id="component-card-body-${this._COMPONENT_RANDOM_ID}"
         class="card-header ${prop_cardBodyClassBackground} ${prop_cardBodyClassColor}">
         
     <style>
         #${this._COMPONENT_ID} #component-card-body-${this._COMPONENT_RANDOM_ID}{
         
         }
     </style>
     
  ${prop_body}
                
</section>
        `;
        }
    }
}




/* ===============================================================================================================
 [02] FETCH
=============================================================================================================== */

/*-------------------------------------
 02-01) Component Loading
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
 02-02) Component 404
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
 02-03) Component Form
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
    componentFn(){
        this.templateFn(  "part_border");
        this.templateFn(  "part_button_submit");
    }

    templateFn(partName = null){
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
 02-04) Component Widget
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

//call_fetchWidget
//call_getComponentLayout
-------------------------------------*/
window.ComponentWidget = class ComponentWidget extends ComponentBase{

    _COMPONENT_LAYOUT = null;


    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_border: [
            {prop : "prop_widgetClass"                    , default:  []} ,
            {prop : "prop_widgetStyles"                   , default:  {"min-height" : "80px"}} ,
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
        this.call_fetchWidget()
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
             <component-messages id="widget-component-messages-${this._COMPONENT_RANDOM_ID}"></component-messages>
             
             <component-layout id="response-widget-component-${this._COMPONENT_RANDOM_ID}"></component-layout>
   
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
        this.call_fetchWidget();

        tools_component.control(
            "Component404" ,
            {
                elId : `widget-component-404-${this._COMPONENT_RANDOM_ID}`
            },
            false
        )
    }
    fn_readyResponse = (response , request = {}) => {
       // const el = document.querySelector(`section#response-widget-component-${this._COMPONENT_RANDOM_ID}`);

        const params = response.hasOwnProperty("params") ? response.params : {};

        let requestData={};
        if (request && request.hasOwnProperty("data")){
            for (let i = 0; i < request.data.length; i++) {
                const itemRequest = request.data[i];
                if (itemRequest.hasOwnProperty("name") && itemRequest.hasOwnProperty("value")){
                    requestData[itemRequest.name] = itemRequest.value;
                }
            }
        }


        if (response != null){
            if (response.hasOwnProperty("html")){

                this._COMPONENT_LAYOUT = new window.ComponentLayout(
                    `response-widget-component-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_layoutContent: response.html
                    }
                )

                /*const scripts = el.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }
                    document.body.appendChild(newScript);
                });*/
            }
            if (response.hasOwnProperty("script_src")){
                // const script = document.createElement('script');
                // script.src = response.script_src;
                // script.defer = true; // یا async
                // document.body.appendChild(script);

                console.log(response.script_src)

                fetch(response.script_src)
                    .then((res) => res.text())
                    .then((code) => {
                        const fullCode = `
      (function() {
        const __params = ${JSON.stringify(params)};
        const __request = ${JSON.stringify(requestData)};
        ${code}
      })();
    `;
                        eval(fullCode);
                    })
                    .catch(console.error);
            }
            if (response.hasOwnProperty("script")){

                try {

                    const fullCode = `
      (function() {
        const __params = ${JSON.stringify(params)};
        const __request = ${JSON.stringify(requestData)};
    ${response.script}
      })();
    `;
                    eval(fullCode);
                } catch (e) {
                    console.error("❌ خطا در اجرای کد:", e);
                }
            }
        }
    }

    call_fetchWidget(){
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
                    componentMessagesData: {
                        elId : `widget-component-messages-${this._COMPONENT_RANDOM_ID}`
                    },
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

    call_getComponentLayout(){
        return this._COMPONENT_LAYOUT;
    }

}



/*-------------------------------------
 02-04) Component Widget
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_url
@prop_width
@prop_height
@prop_iframeClass
@prop_iframeStyles

//call_getIframe
-------------------------------------*/
window.ComponentIframe = class ComponentIframe extends ComponentBase{

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_iframe: [
            {prop : "prop_url"                            , default:  ""} ,
            {prop : "prop_width"                          , default:  "100%"} ,
            {prop : "prop_height"                         , default:  "1000"} ,
            {prop : "prop_iframeClass"                    , default:  []} ,
            {prop : "prop_iframeStyles"                   , default:  {}} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_iframe:{}
        } ,
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config)
    {
        super(
            listComponent[ComponentIframe.name] ,
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
            case "part_iframe":
                return this.componentFn_render_iframe(partName);
            default:
                return this.templateBasic_render();
        }
    }


    template_render_structure(partName) {
        const content = `
        
           ${this.templateFn("part_iframe") ?? ""}
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
    }


    componentFn_render_iframe(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_url           = data.hasOwnProperty("prop_url")            ? data.prop_url                         : "";
            const prop_width         = data.hasOwnProperty("prop_width")          ? data.prop_width                       : "";
            const prop_height        = data.hasOwnProperty("prop_height")         ? data.prop_height                      : "";
            const prop_iframeClass   = data.hasOwnProperty("prop_iframeClass")    ? data.prop_iframeClass                 : [];
            const prop_iframeStyles  = data.hasOwnProperty("prop_iframeStyles")   ? data.prop_iframeStyles                : {};

            return `
<section 
     id="component-iframe-iframe-${this._COMPONENT_RANDOM_ID}"
     data-part-name="${partName}"
     class=" ${tools_public.renderListClass(prop_iframeClass)}">
     
    <style>
        #${this._COMPONENT_ID} #component-iframe-iframe-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_iframeStyles)}
        }
    </style>
    
    <iframe src="${prop_url}" width="${prop_width}" height="${prop_height}"></iframe>
    
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
    call_getIframe(){
        return document.querySelector(`component-iframe-iframe-${this._COMPONENT_RANDOM_ID} iframe`);
    }

}








/* ===============================================================================================================
 [03] BUTTONs And INPUTs
=============================================================================================================== */

/*-------------------------------------
 03-01) Component Button
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type   // cancel  //submit //null
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
            {prop : "prop_type"                         , default: "submit"  } ,  // cancel  //submit //null
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
    templateFn(partName = null){
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

   <button id="component-button-${this._COMPONENT_RANDOM_ID}" class="shadow-sm border-0 rounded ${tools_public.renderListClass(prop_btnClass)}   "
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
        event.stopPropagation()
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }

}


/*-------------------------------------
 03-02) Component Select Option
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
@prop_positionTop
@prop_positionLeft
@prop_positionBottom
@prop_positionRight

@prop_listIcons      [{icon ,name ,  method} , ...]
@prop_options
@prop_optionStyles
@prop_optionWidth
@prop_optionItemNotSelectedBackground
@prop_optionItemHoverBackground
@prop_optionItemSelectedBackground

@prop_firstCallback
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
            {prop : "prop_titleClass"                        , default:  ["form-control" , " px-2"]} ,
            {prop : "prop_titleStyles"                       , default:  {"line-height" : "24px" , "height": "30px"}} ,
        ] ,
        part_header_icon: [
            {prop : "prop_icon"                              , default: null} ,
        ] ,
        part_header_title: [
            {prop : "prop_icon"                              , default: null} ,
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
            {prop : "prop_positionTop"                        , default: ""} ,
            {prop : "prop_positionLeft"                       , default: ""} ,
            {prop : "prop_positionBottom"                     , default: ""} ,
            {prop : "prop_positionRight"                      , default: ""} ,
        ] ,
        part_body_searcher: [

        ] ,
        part_body_options: [
            {prop : "prop_listIcons"                          , default:  null} ,
            {prop : "prop_firstCallback"                      , default:  false} ,
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
    componentFn(screanWidthType){
        this.templateFn("part_label");
        this.templateFn("part_header_icon" );
        this.templateFn("part_header_arrow_icon" );
        this.templateFn("part_header_button" );
        this.templateFn("part_body" );
        this.templateFn("part_body_searcher" );

        this.fn_firstCallback();
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

    template_render_structure(partName ) {
        const content = `
      
     <style>
         #${this._COMPONENT_ID} #component-select-option-form-position-element-${ this._COMPONENT_RANDOM_ID}{
             z-index:11;
             position:relative;
         }
     </style>
     
      <component-label id="component-select-option-label-${ this._COMPONENT_RANDOM_ID}"></component-label>
     
      ${this.templateFn("part_value") ?? ""}
      
      ${this.templateFn("part_header") ?? ""}
      
      <div id="component-select-option-form-position-element-${ this._COMPONENT_RANDOM_ID}">
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

    template_render_value(partName ) {

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

    template_render_header(partName ) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_titleClass           =  data.hasOwnProperty("prop_titleClass")                ?  data.prop_titleClass                    :  ["  form-control " , " px-2" ];
            const prop_titleStyles          =  data.hasOwnProperty("prop_titleStyles")               ?  data.prop_titleStyles                   :  {"line-height" : "24px" , "height": "30px"};

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
         
         @media (max-width: 768px) {
               #${this._COMPONENT_ID} #component-select-option-header-button-text-${ this._COMPONENT_RANDOM_ID}{
                    display: none;
               }
               #${this._COMPONENT_ID} #component-select-option-header-button-icon-${ this._COMPONENT_RANDOM_ID}{
                 
               }
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

    template_render_headerTitle(partName ) {
        const data = this.getPartProps(partName)

        if (data != null){
            const screanWidthType = this.getScreenWidth();

            const prop_options              =  data.hasOwnProperty("prop_options")                   ?  data.prop_options                       : [];
            const prop_itemSelected         =  data.hasOwnProperty("prop_itemSelected")              ?  data.prop_itemSelected                  : [];
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;
            const prop_placeholder          =  data.hasOwnProperty("prop_placeholder")               ?  data.prop_placeholder                   : null;
            const prop_icon                 =  data.hasOwnProperty("prop_icon")                      ?  data.prop_icon                          : null;
            const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

            const var_itemSelectedTitle =this.fn_getItemSelectedTitle(prop_options , prop_itemSelected , prop_placeholder)


            let padding = "180px"
            if (screanWidthType == "xs"){
                padding = "35px";
            }

            return `
<section data-part-name="${partName}"
         id="component-select-option-header-title-${ this._COMPONENT_RANDOM_ID}"
         class=" d-block" >
     <style>
         #${this._COMPONENT_ID} #component-select-option-header-title-${ this._COMPONENT_RANDOM_ID}{
            ${directionRtl ? "padding-left" : "padding-right"} : ${prop_btnAddStatus ? padding : "20"};
            ${directionRtl ? "padding-right" : "padding-left"} : ${prop_icon != null ? "30px" : "0"} ;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 28px;
            line-height: 30px;
         }
     </style>

     <b class="select-title-${ this._COMPONENT_RANDOM_ID}  w-100 d-block position-relative text-center ">

        ${var_itemSelectedTitle}

     </b>

</section>
            `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyOptions(partName ) {

        const data = this.getPartProps(partName)

        if (data != null){

            const directionRtl                           =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")            ? this._COMPONENT_CONFIG.directionRtl             : false;

            const prop_listIcons                         =  data.hasOwnProperty("prop_listIcons")                            ?  data.prop_listIcons                            :  null;
            const prop_options                           =  data.hasOwnProperty("prop_options")                              ?  data.prop_options                              :  [];
            const prop_itemSelected                      =  data.hasOwnProperty("prop_itemSelected")                         ?  data.prop_itemSelected                         :   null;
            const prop_optionItemNotSelectedBackground   =  data.hasOwnProperty("prop_optionItemNotSelectedBackground")      ?  data.prop_optionItemNotSelectedBackground      :   tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemNotSelected")  ? tools_const.styles.selectOption.backgroundColor_itemNotSelected : "";
            const prop_optionItemHoverBackground         =  data.hasOwnProperty("prop_optionItemHoverBackground")            ?  data.prop_optionItemHoverBackground            :   tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemHover")  ? tools_const.styles.selectOption.backgroundColor_itemHover : "";
            const prop_optionItemSelectedBackground      =  data.hasOwnProperty("prop_optionItemSelectedBackground")         ?  data.prop_optionItemSelectedBackground         :   tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("selectOption") && tools_const.styles.selectOption.hasOwnProperty("backgroundColor_itemSelected")  ? tools_const.styles.selectOption.backgroundColor_itemSelected : "";
            const var_searcherSelectOption               =  data.hasOwnProperty("var_searcherSelectOption")                  ?  data.var_searcherSelectOption                  :   "";

            const optionHtml = this.fn_onGetBodyOptions(prop_options , prop_itemSelected , var_searcherSelectOption , prop_listIcons);

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
             padding: 3px 10px !important;
         }
         #${this._COMPONENT_ID} .component-select-option-body-options-item-${this._COMPONENT_RANDOM_ID}:hover{
             background-color: ${prop_optionItemHoverBackground};
             color: white;
             cursor: pointer;
         }
         #${this._COMPONENT_ID} .component-select-option-body-options-item-selected-${this._COMPONENT_RANDOM_ID}{
             background-color: ${prop_optionItemSelectedBackground};
         }
         
         #${this._COMPONENT_ID} .component-select-option-body-options-item-icon-${this._COMPONENT_RANDOM_ID}{
             cursor: pointer;
             margin: 0 5px;
             font-size: 18pt;
             line-height: 15pt;
             float:  ${directionRtl? 'left' : 'right'};
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

    componentFn_render_label(partName ) {
        this.componentFneBasic_render_structure(
            `component-select-option-label-${ this._COMPONENT_RANDOM_ID}` ,
            {
                prop_for: `component-select-option-header-${ this._COMPONENT_RANDOM_ID}` ,
                fn_callback: ()=>{
                    this.runFn("fn_showListOptions" , "event" )
                }
            }
        );
    }

    componentFn_render_headerIcon(partName ) {

        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  null;

            let styles = {
                "z-index" : "10",
                "margin" : "0 5px",
                "width" : "30px",
                "line-height" :   "30px",
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

            if (prop_icon != null){
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
    }

    componentFn_render_headerArrowIcon(partName ) {

        const data = this.getPartProps(partName)

        if (data != null){
            const screanWidthType = this.getScreenWidth();

            const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;
            const var_showFormSelectOption  =  data.hasOwnProperty("var_showFormSelectOption")           ?  data.var_showFormSelectOption        : false;

            let styles = {
                "font-size" : "20pt",
                "height" : "30px",
                "margin" : "0 10px",
                "top" : "0px",
            }
            if (directionRtl){
                if (screanWidthType == "xs"){
                    styles["left"]= prop_btnAddStatus ? "30px" : "0px";
                }
                else{
                    styles["left"]= prop_btnAddStatus ? "165px" : "0px";
                }
            }
            else {
                if (screanWidthType == "xs"){
                    styles["right"]= prop_btnAddStatus ? "30px" : "0px";
                }
                else{
                    styles["right"]= prop_btnAddStatus ? "165px" : "0px";
                }
            }

            if (var_showFormSelectOption){
                styles["line-height"]= "5pt";
            }
            else{
                styles["line-height"]= "35pt";
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

    componentFn_render_headerButton(partName ) {

        const data = this.getPartProps(partName)

        if (data != null){
            const screanWidthType = this.getScreenWidth();

            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;

            if (prop_btnAddStatus){
                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
                const prop_btnAddIcon           =  data.hasOwnProperty("prop_btnAddIcon")                 ?  data.prop_btnAddIcon                    : "&plus;";
                const prop_btnAddTitle          =  data.hasOwnProperty("prop_btnAddTitle")                ?  data.prop_btnAddTitle                   : "add item";
                const prop_btnAddClass          =  data.hasOwnProperty("prop_btnAddClass")                ?  data.prop_btnAddClass                   : [];

                let styles =  {
                    "z-index" : "10" ,
                    "top" : "0" ,
                    "cursor" : "pointer" ,
                    "height" : "30px" ,
                    "line-height" : "20px" ,
                };
                if (directionRtl){
                    styles["left"] = "0";
                }
                else {
                    styles["right"] = "0";
                }

                if (screanWidthType == "xs"){
                    styles["width"] = "30px";
                }
                else{
                    styles["width"] = "160px";
                }

                new window.ComponentButton(
                    `component-select-option-header-button-${ this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_btnClass: "border shadow-sm position-absolute p-0 m-0   " + prop_btnAddClass.join(" ") ,
                        prop_btnStyles: styles ,
                        prop_title: `
<span id="component-select-option-header-button-icon-${ this._COMPONENT_RANDOM_ID}" class="mx-3">
    ${prop_btnAddIcon}
</span>
<span id="component-select-option-header-button-text-${ this._COMPONENT_RANDOM_ID}" class="d-md-inline">
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

    componentFn_render_body(partName ) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_optionStyles         =  data.hasOwnProperty("prop_optionStyles")             ?  data.prop_optionStyles           :  {};
            const prop_optionHeight         =  data.hasOwnProperty("prop_optionHeight")             ?  data.prop_optionHeight           :  130;
            const prop_optionWidth          =  data.hasOwnProperty("prop_optionWidth")              ?  data.prop_optionWidth            :  "100%";
            const prop_positionTop          =  data.hasOwnProperty("prop_positionTop")              ?  data.prop_positionTop            :  "";
            const prop_positionLeft         =  data.hasOwnProperty("prop_positionLeft")             ?  data.prop_positionLeft           :  "";
            const prop_positionBottom       =  data.hasOwnProperty("prop_positionBottom")           ?  data.prop_positionBottom         :  "";
            const prop_positionRight        =  data.hasOwnProperty("prop_positionRight")            ?  data.prop_positionRight          :  "";

            new window.ComponentPositionElement(
                `component-select-option-position-element-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "d-none" ,

                    prop_elementClass: ["form-control" , "custom-select" , "rounded" , "px-2"] ,
                    prop_elementStyles: prop_optionStyles ,
                    prop_width: prop_optionWidth,
                    prop_height: prop_optionHeight,

                    prop_positionTop: prop_positionTop,
                    prop_positionLeft: prop_positionLeft,
                    prop_positionBottom: prop_positionBottom,
                    prop_positionRight: prop_positionRight,
                }
            )
        }
    }

    componentFn_render_bodySearcher(partName ) {

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
    fn_firstCallback(){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_firstCallback") && data.prop_firstCallback){
            this.fn_onSelectItemSelectOption(null ,  data.hasOwnProperty("prop_itemSelected") ? data.prop_itemSelected : null );
        }
    }

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

        let itemSelectedId = null;
        let itemSelectedData = null;
        if (prop_options != null && Array.isArray(prop_options)){
            for (const itemOption of prop_options) {
                if (itemOption.hasOwnProperty("id") && itemOption.hasOwnProperty("name") && itemOption.id == itemIdSelected){
                    itemSelectedId = itemOption.id;
                    itemSelectedData = itemOption;
                    this.set("prop_itemSelected" , itemSelectedId)
                    break;
                }
            }
        }
        this.fn_showListOptions(event , false);

        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event , itemSelectedId , itemSelectedData);
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

    fn_onGetBodyOptions(prop_options  , prop_itemSelected , var_searcherSelectOption , prop_listIcons=null){

        let optionsStr = "";

        if (prop_options != null && Array.isArray(prop_options)){
            for (let i=0; i < prop_options.length; i++){
                const item = prop_options[i];

                if (item.hasOwnProperty("name")){
                    let value = item.hasOwnProperty('id') ? item.id : 0;

                    let iconsHtml = "";
                    if (prop_listIcons != null && Array.isArray(prop_listIcons) && item.hasOwnProperty('id') && item.id != null){
                        for (let j = 0; j < prop_listIcons.length; j++) {
                            const itemIcon = prop_listIcons[j];
                            if (itemIcon.hasOwnProperty("icon") && itemIcon.hasOwnProperty("name") && itemIcon.hasOwnProperty("method") && typeof itemIcon.method != "undefined"){
                                const itemIconHtml = itemIcon["icon"];
                                const itemIconMethod = itemIcon.method;
                                const itemIconName = itemIcon.name;

                                iconsHtml += `
                                <i class="component-select-option-body-options-item-icon-${this._COMPONENT_RANDOM_ID} "
                                    onclick="${this.getFn("fn_onClickIconOption" , "event" , `'${itemIconName}'` , value)}">
                                      ${itemIconHtml} 
                                </i>
                                `;

                            }
                        }
                    }

                    if (typeof item.name.includes == "undefined" || item.name.includes(var_searcherSelectOption)){

                        optionsStr += `
<div class="component-select-option-body-options-item-${this._COMPONENT_RANDOM_ID} rounded my-1 ${prop_itemSelected != null && value == prop_itemSelected ? `component-select-option-body-options-item-selected-${this._COMPONENT_RANDOM_ID}` : ''}"
   onclick="${this.getFn("fn_onSelectItemSelectOption" , "event" , item.id)}"> 
   ${item.name} 
   
   ${iconsHtml}
</div>
                `;
                    }
                }
            }
        }

        return optionsStr;
    }

    fn_onClickIconOption(event , name , id){
        event.stopPropagation()

        const data = this._COMPONENT_CONFIG;
        const prop_listIcons      = data != null && data.hasOwnProperty("prop_listIcons")      ? data.prop_listIcons      : [];
        if (prop_listIcons != null && Array.isArray(prop_listIcons)){
            for (let j = 0; j < prop_listIcons.length; j++) {
                const itemIcon = prop_listIcons[j];
                if (itemIcon.hasOwnProperty("name") && itemIcon.hasOwnProperty("method") && typeof itemIcon.method != "undefined" && name == itemIcon.name) {
                    const itemIconMethod = itemIcon.method;
                    itemIconMethod(event , id);
                }
            }
        }
    }

}


/*-------------------------------------
 03-03) Component OTP
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
//call_getValue
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

            this.componentFneBasic_render_structure(
                `component-otp-label-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_title:
                        `
<p class="title-otp text-center  mb-0 px-2 ">
    ${prop_langs.hasOwnProperty("_title_otp_description") ? prop_langs._title_otp_description : ""}
    <b style="display:block; direction: ltr">
       ${prop_input}
    </b>
</p>
                `,
                    prop_for:  `component-otp-inputs-${ this._COMPONENT_RANDOM_ID}-${prop_name}0`,
                }
            );
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

    call_getValue(){
        return this.get("var_value")
    }
}


/*-------------------------------------
 03-04) Component Input
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
@prop_isDisable

@prop_icon

@fn_oninput
@fn_onfocus
@fn_onblur

@fn_clickBtnTools
//call_setValue
-------------------------------------*/
window.ComponentInput = class ComponentInput extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_label: [
            {prop : "prop_title"                        , default: null} ,
            {prop : "prop_labelShow"                    , default: true} ,
            {prop : "prop_labelTooltipDescription"      , default: null} ,
            {prop : "prop_labelClass"                   , default: ["shadow-sm" , "px-2" ,"py-1" , "d-block "]} ,
            {prop : "prop_labelStyles"                  , default: null} ,
            {prop : "prop_labelHoverStyles"             , default: null} ,
        ] ,
        part_input: [
            {prop : "prop_inputClass"            , default: [" form-control"]} ,
            {prop : "prop_inputStyles"           , default: {}} ,
            {prop : "prop_type"                  , default: "string"} ,
            {prop : "prop_name"                  , default: null} ,
            {prop : "prop_value"                 , default: null} ,
            {prop : "prop_placeholder"           , default: null} ,
            {prop : "prop_icon"                  , default: ""} ,
            {prop : "prop_btnAddStatus"          , default: false} ,
            {prop : "prop_isDisable"             , default: false} ,
        ] ,
        part_icon_clear: [
            {prop : "prop_isDisable"             , default: false} ,
            {prop : "prop_btnAddStatus"          , default: false} ,
        ] ,
        part_icon: [
            {prop : "prop_icon"                  , default: ""} ,
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
         <style>
            @media (max-width: 768px) {
               #${this._COMPONENT_ID} #component-input-button-text-${ this._COMPONENT_RANDOM_ID}{
                    display: none;
               }
               #${this._COMPONENT_ID} #component-input-button-icon-${ this._COMPONENT_RANDOM_ID}{
                 
               }
           }
        </style>

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
            const screanWidthType = this.getScreenWidth();

            const prop_inputClass    =   data.hasOwnProperty("prop_inputClass")               ?  data.prop_inputClass                    :  [];
            const prop_inputStyles   =   data.hasOwnProperty("prop_inputStyles")              ?  data.prop_inputStyles                   :  {};
            const prop_type          =   data.hasOwnProperty("prop_type")                     ?  data.prop_type                          :  "string";
            const prop_name          =   data.hasOwnProperty("prop_name")                     ?  data.prop_name                          :  null;
            const prop_value         =   data.hasOwnProperty("prop_value")                    ?  data.prop_value                         :  null;
            const prop_placeholder   =   data.hasOwnProperty("prop_placeholder")              ?  data.prop_placeholder                   :  null;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                          :  "";
            const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;
            const prop_isDisable     =  data.hasOwnProperty("prop_isDisable")                 ?  data.prop_isDisable                     : false;

            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

            let padding = "180px"
            if (screanWidthType == "xs"){
                padding = "35px";
            }

            return `
<section  data-part-name="${partName}"
          id="component-input-input-element-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-input-element-${this._COMPONENT_RANDOM_ID}{
         
         }
         #${this._COMPONENT_ID} #component-input-input-${this._COMPONENT_RANDOM_ID}{
              height: 30px;
              
              ${directionRtl ? "padding-left" : "padding-right"} : ${prop_btnAddStatus ? padding : "20"};
     
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
            ${prop_isDisable ? 'disabled' : ''}
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
        this.componentFneBasic_render_structure(
            `component-input-label-${ this._COMPONENT_RANDOM_ID}` ,
            {
                prop_for:  `component-input-input-${this._COMPONENT_RANDOM_ID}` ,
            }
        );
    }

    componentFn_render_iconClear(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_isDisable     =  data.hasOwnProperty("prop_isDisable")                 ?  data.prop_isDisable                     : false;
            if (!prop_isDisable){
                const screanWidthType = this.getScreenWidth();

                const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;
                const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

                let styles = {
                    "z-index" : "10",
                    "width" :   "35px",
                    "line-height" : "30px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "top" : "0" ,
                    "text-align" : "center" ,
                };
                if (directionRtl){
                    if (screanWidthType == "xs"){
                        styles["left"]= prop_btnAddStatus ? "30px" : "5px";
                    }
                    else{
                        styles["left"]= prop_btnAddStatus ? "165px" : "5px";
                    }
                }
                else {
                    if (screanWidthType == "xs"){
                        styles["right"]= prop_btnAddStatus ? "30px" : "5px";
                    }
                    else{
                        styles["right"]= prop_btnAddStatus ? "165px" : "5px";
                    }
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
                "line-height" :   "30px",
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
            const screanWidthType = this.getScreenWidth();

            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;

            if (prop_btnAddStatus){
                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
                const prop_btnAddIcon           =  data.hasOwnProperty("prop_btnAddIcon")                 ?  data.prop_btnAddIcon                    : "&plus;";
                const prop_btnAddTitle          =  data.hasOwnProperty("prop_btnAddTitle")                ?  data.prop_btnAddTitle                   : "add item";
                const prop_btnAddClass          =  data.hasOwnProperty("prop_btnAddClass")                ?  data.prop_btnAddClass                   : [];

                let styles =  {
                    "z-index" : "10" ,
                    "top" : "0" ,
                    "cursor" : "pointer" ,
                    "height" : "30px" ,
                    "line-height" : "20px" ,
                };

                if (directionRtl){
                    styles["left"] = "0";
                }
                else {
                    styles["right"] = "0";
                }

                if (screanWidthType == "xs"){
                    styles["width"] = "30px";
                }
                else{
                    styles["width"] = "160px";
                }

                new window.ComponentButton(
                    `component-input-button-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                        prop_btnStyles: styles ,
                        prop_title: `
<span id="component-input-button-icon-${ this._COMPONENT_RANDOM_ID}" class="">
    ${prop_btnAddIcon}
</span>
<span  id="component-input-button-text-${ this._COMPONENT_RANDOM_ID}" class=" d-md-inline">
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
 03-05) Component Input Price
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
@prop_isDisable

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
            {prop : "prop_labelShow"             , default: true} ,
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
            {prop : "prop_isDisable"             , default: false} ,
        ] ,
        part_icon_clear: [
            {prop : "prop_btnAddStatus"          , default: false} ,
            {prop : "prop_isDisable"             , default: false} ,
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

        this.fn_onInputCallBack();
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

     <style>
            @media (max-width: 768px) {
               #${this._COMPONENT_ID} #component-input-price-button-text-${ this._COMPONENT_RANDOM_ID}{
                    display: none;
               }
               #${this._COMPONENT_ID} #component-input-price-button-icon-${ this._COMPONENT_RANDOM_ID}{
                 
               }
           }
     </style>

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
            const screanWidthType = this.getScreenWidth();

            const prop_inputClass    =   data.hasOwnProperty("prop_inputClass")               ?  data.prop_inputClass                                   :  [];
            const prop_inputStyles   =   data.hasOwnProperty("prop_inputStyles")              ?  data.prop_inputStyles                                  :  {};
            const prop_type          =   data.hasOwnProperty("prop_type")                     ?  data.prop_type                                         :  "string";
            const prop_name          =   data.hasOwnProperty("prop_name")                     ?  data.prop_name                                         :  null;
            const prop_value         =   data.hasOwnProperty("prop_value")                    ?  tools_converter.convertPriceToString(data.prop_value)  :  null;
            const prop_placeholder   =   data.hasOwnProperty("prop_placeholder")              ?  data.prop_placeholder                                  :  null;
            const prop_icon          =   data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                                         :  null;
            const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                                 : false;
            const prop_isDisable     =  data.hasOwnProperty("prop_isDisable")                 ?  data.prop_isDisable                                    : false;

            const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl                     : false;

            let padding = "180px"
            if (screanWidthType == "xs"){
                padding = "35px";
            }

            return `
<section  data-part-name="${partName}"
          id="component-input-input-element-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-input-element-${this._COMPONENT_RANDOM_ID}{
         
         }
         #${this._COMPONENT_ID} #component-input-input-${this._COMPONENT_RANDOM_ID}{
              height: 30px;

              ${directionRtl ? "padding-left" : "padding-right"} : ${prop_btnAddStatus ? padding : "20"};
     
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
            ${prop_isDisable ? 'disabled' : ''}
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
        this.componentFneBasic_render_structure(
            `component-input-label-${ this._COMPONENT_RANDOM_ID}` ,
            {
                prop_for:  `component-input-input-${ this._COMPONENT_RANDOM_ID}` ,
            }
        );
    }

    componentFn_render_iconClear(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_isDisable     =  data.hasOwnProperty("prop_isDisable")                 ?  data.prop_isDisable                     : false;

            if (!prop_isDisable){
                const screanWidthType = this.getScreenWidth();

                const prop_btnAddStatus  =  data.hasOwnProperty("prop_btnAddStatus")              ?  data.prop_btnAddStatus                  : false;

                const directionRtl       =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl      : false;

                let styles = {
                    "z-index" : "10",
                    "width" :   "35px",
                    "line-height" : "30px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "top" : "0" ,
                    "text-align" : "center" ,
                };

                if (directionRtl){
                    if (screanWidthType == "xs"){
                        styles["left"]= prop_btnAddStatus ? "30px" : "5px";
                    }
                    else{
                        styles["left"]= prop_btnAddStatus ? "165px" : "5px";
                    }
                }
                else {
                    if (screanWidthType == "xs"){
                        styles["right"]= prop_btnAddStatus ? "30px" : "5px";
                    }
                    else{
                        styles["right"]= prop_btnAddStatus ? "165px" : "5px";
                    }
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
                "line-height" :   "30px",
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

            if (prop_icon != null){
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
    }

    componentFn_render_button(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const prop_btnAddStatus         =  data.hasOwnProperty("prop_btnAddStatus")               ?  data.prop_btnAddStatus                  : false;

            if (prop_btnAddStatus){
                const screanWidthType = this.getScreenWidth();

                const directionRtl              =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
                const prop_btnAddIcon           =  data.hasOwnProperty("prop_btnAddIcon")                 ?  data.prop_btnAddIcon                    : "&plus;";
                const prop_btnAddTitle          =  data.hasOwnProperty("prop_btnAddTitle")                ?  data.prop_btnAddTitle                   : "add item";
                const prop_btnAddClass          =  data.hasOwnProperty("prop_btnAddClass")                ?  data.prop_btnAddClass                   : [];

                let styles =  {
                    "z-index" : "10" ,
                    "top" : "0" ,
                    "cursor" : "pointer" ,

                    "height" : "30px" ,
                    "line-height" : "20px" ,
                };

                if (directionRtl){
                    styles["left"] = "0";
                }
                else {
                    styles["right"] = "0";
                }

                if (screanWidthType == "xs"){
                    styles["width"] = "30px";
                }
                else{
                    styles["width"] = "160px";
                }

                new window.ComponentButton(
                    `component-input-button-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                        prop_btnStyles: styles ,
                        prop_title: `
<span id="component-input-price-button-icon-${ this._COMPONENT_RANDOM_ID}" class="">
    ${prop_btnAddIcon}
</span>
<span id="component-input-price-button-text-${ this._COMPONENT_RANDOM_ID}" class=" d-md-inline">
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

        let inputValue =0 ;
        const input = document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`);
        if (input != null){
            inputValue = input.value
        }
        return  tools_converter.convertStringToPrice(
            inputValue
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


    call_setValue(value){
        const input = document.querySelector(`input#component-input-input-${this._COMPONENT_RANDOM_ID}`);
        if (input != null){
            input.value = tools_converter.convertPriceToString(value)
        }
        this.fn_onInputCallBack();
    }

}


/*-------------------------------------
 03-06) Component Date
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_backgroundMain

@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles
@prop_title

@prop_name
@prop_value

@prop_prevYears
@prop_nextYears

@prop_backgroundRowSelected
@prop_backgroundColumnSelected
@prop_colorColumnSelected

@prop_titleBtnAccept
@prop_backgroundBtnAccept
@prop_backgroundBtnHoverAccept
@prop_colorBtnAccept

@prop_titleBtnNow
@prop_backgroundBtnNow
@prop_backgroundBtnHoverNow
@prop_colorBtnNow

@prop_titleMonth0
@prop_titleMonth1
@prop_titleMonth2
@prop_titleMonth3
@prop_titleMonth4
@prop_titleMonth5
@prop_titleMonth6
@prop_titleMonth7
@prop_titleMonth8
@prop_titleMonth9
@prop_titleMonth10
@prop_titleMonth11

@prop_titleDay0
@prop_titleDay1
@prop_titleDay2
@prop_titleDay3
@prop_titleDay4
@prop_titleDay5
@prop_titleDay6
-------------------------------------*/
window.ComponentDate = class ComponentDate extends ComponentBase{

    SHOW_DATE_BODY = false;
    TIMEINTERVAL_INPUTS = null;
    TIMEINTERVAL_INPUTS_DURATION = 250;

    TYPE_YAER = "YEAR";
    TYPE_MONTH = "MONTH";
    TYPE_DAY = "DAY";

    TYPE_INPUT_ONE_DIGIT = 0;
    TYPE_INPUT_PART_DIGIT = 1;
    TYPE_INPUT_FULL_DIGIT = 2;
    TYPE_INPUT_FRIZE_DIGIT = 3;

    /* ---------------------------------------------
   PROPERTYs
   --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [
            {prop : "prop_backgroundMain"      ,  default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_main")   ? tools_const.styles.inputDate.backgroundColor_main : ""} ,
        ] ,
        part_label: [
            {prop : "prop_labelClass"            , default: ["shadow-sm" , "px-2" ,"py-1" , "d-block "]} ,
            {prop : "prop_labelStyles"           , default: null} ,
            {prop : "prop_labelHoverStyles"      , default: null} ,
            {prop : "prop_title"                 , default: "TITLE"} ,
        ] ,
        part_value: [
            {prop : "prop_name"                  , default: ""} ,
            {prop : "prop_value"                 , default: null} ,

        ] ,
        part_header: [

        ] ,
        part_header_inputs: [
            {prop : "prop_type"                     , default: 0} ,
            {prop : "prop_value"                    , default: null} ,

            {prop : "var_selected_date"             , default: null} ,
        ] ,
        part_header_icon_clear: [

        ] ,
        part_header_icon_calender: [

        ] ,
        part_body: [

        ] ,
        part_body_header: [

        ] ,
        part_body_header_year: [

        ] ,
        part_body_header_year_btn_previous: [

        ] ,
        part_body_header_year_options: [
            {prop : "prop_prevYears"                      , default: 100} ,
            {prop : "prop_nextYears"                      , default: 25} ,
            {prop : "prop_value"                          , default: null} ,
        ] ,
        part_body_header_year_btn_next: [

        ] ,
        part_body_header_month: [

        ] ,
        part_body_header_month_btn_previous: [

        ] ,
        part_body_header_month_options: [
            {prop : "prop_titleMonth0"                    , default:  "فروردین"} ,
            {prop : "prop_titleMonth1"                    , default:  "اردیبهشت"} ,
            {prop : "prop_titleMonth2"                    , default:  "خرداد"} ,
            {prop : "prop_titleMonth3"                    , default:  "تیر"} ,
            {prop : "prop_titleMonth4"                    , default:  "مرداد"} ,
            {prop : "prop_titleMonth5"                    , default:  "شهریور"} ,
            {prop : "prop_titleMonth6"                    , default:  "مهر"} ,
            {prop : "prop_titleMonth7"                    , default:  "آبان"} ,
            {prop : "prop_titleMonth8"                    , default:  "آذر"} ,
            {prop : "prop_titleMonth9"                    , default:  "دی"} ,
            {prop : "prop_titleMonth10"                   , default:  "بهمن"} ,
            {prop : "prop_titleMonth11"                   , default:  "اسفند"} ,
            {prop : "prop_value"                          , default: null} ,
        ] ,
        part_body_header_month_btn_next: [

        ] ,
        part_body_weeks: [

        ] ,
        part_body_weeks_table: [
            {prop : "prop_backgroundRowSelected"          , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_rowSelected")   ? tools_const.styles.inputDate.backgroundColor_rowSelected : ""} ,
            {prop : "prop_backgroundColumnSelected"       , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_colSelected")   ? tools_const.styles.inputDate.backgroundColor_colSelected : ""} ,
            {prop : "prop_colorColumnSelected"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("color_columnSelected")   ? tools_const.styles.inputDate.color_columnSelected : ""} ,
            {prop : "prop_titleDay0"                      , default:  "شنبه"} ,
            {prop : "prop_titleDay1"                      , default:  "یک شنبه"} ,
            {prop : "prop_titleDay2"                      , default:  "دو شنبه"} ,
            {prop : "prop_titleDay3"                      , default:  "سه شنبه"} ,
            {prop : "prop_titleDay4"                      , default:  "چهارشنبه"} ,
            {prop : "prop_titleDay5"                      , default:  "پنج شنبه"} ,
            {prop : "prop_titleDay6"                      , default:  "جمعه"} ,
            {prop : "prop_value"                          , default: null} ,
        ] ,
        part_body_footer: [

        ] ,
        part_body_footer_btn_accept: [
            {prop : "prop_titleBtnAccept"                 , default: "تایید"} ,
            {prop : "prop_backgroundBtnAccept"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_btn")   ? tools_const.styles.inputDate.backgroundColor_btn : ""} ,
            {prop : "prop_backgroundBtnHoverAccept"       , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_btnHover")   ? tools_const.styles.inputDate.backgroundColor_btnHover : ""} ,
            {prop : "prop_colorBtnAccept"                 , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("color_btn")   ? tools_const.styles.inputDate.color_btn : ""} ,
        ] ,
        part_body_footer_btn_now: [
            {prop : "prop_titleBtnNow"                    , default: "اکنون"} ,
            {prop : "prop_backgroundBtnNow"               , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_btn")   ? tools_const.styles.inputDate.backgroundColor_btn : ""} ,
            {prop : "prop_backgroundBtnHoverNow"          , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("backgroundColor_btnHover")   ? tools_const.styles.inputDate.backgroundColor_btnHover : ""} ,
            {prop : "prop_colorBtnNow"                    , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputDate") && tools_const.styles.inputDate.hasOwnProperty("color_btn")   ? tools_const.styles.inputDate.color_btn : ""} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label: {} ,
            part_value: {} ,
            part_header: {
                part_header_inputs:{} ,
                part_header_icon_clear:{} ,
                part_header_icon_calender:{} ,
            } ,
            part_body: {
                part_body_header:{
                    part_body_header_year:{
                        part_body_header_year_btn_previous: {},
                        part_body_header_year_options: {},
                        part_body_header_year_btn_next: {},
                    } ,
                    part_body_header_month:{
                        part_body_header_month_btn_previous: {},
                        part_body_header_monthr_options: {},
                        part_body_header_month_btn_next: {},
                    } ,
                } ,
                part_body_weeks:{
                    part_body_weeks_table:{}
                } ,
                part_body_footer:{
                    part_body_footer_btn_accept :{},
                    part_body_footer_btn_now :{},
                } ,
            } ,
        } ,
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentDate.name] ,
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
        this.templateFn("part_header_icon_clear");
        this.templateFn("part_header_icon_calender");

        this.templateFn("part_body");

        this.templateFn("part_body_header_year_btn_previous");
        this.templateFn("part_body_header_year_options");
        this.templateFn("part_body_header_year_btn_next");

        this.templateFn("part_body_header_month_btn_previous");
        this.templateFn("part_body_header_month_options");
        this.templateFn("part_body_header_month_btn_next");

        this.templateFn("part_body_weeks_table");

        this.templateFn("part_body_footer_btn_accept");
        this.templateFn("part_body_footer_btn_now");
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
            case "part_header_inputs":
                return this.template_render_headerInputs(partName);
            case "part_header_icon_clear":
                return this.componentFn_render_headerIconClear(partName);
            case "part_header_icon_calender":
                return this.componentFn_render_headerIconCalender(partName);

            case "part_body":
                return this.componentFn_render_body(partName);

            case "part_body_header":
                return this.template_render_bodyHeader(partName);

            case "part_body_header_year":
                return this.template_render_bodyHeader_year(partName);
            case "part_body_header_year_btn_previous":
                return this.componentFn_render_bodyHeader_year_btnPrevious(partName);
            case "part_body_header_year_options":
                return this.componentFn_render_bodyHeader_year_options(partName);
            case "part_body_header_year_btn_next":
                return this.componentFn_render_bodyHeader_year_btnNext(partName);

            case "part_body_header_month":
                return this.template_render_bodyHeader_month(partName);
            case "part_body_header_month_btn_previous":
                return this.componentFn_render_bodyHeader_month_btnPrevious(partName);
            case "part_body_header_month_options":
                return this.componentFn_render_bodyHeader_month_options(partName);
            case "part_body_header_month_btn_next":
                return this.componentFn_render_bodyHeader_month_btnNext(partName);

            case "part_body_weeks":
                return this.template_render_bodyWeeks(partName);
            case "part_body_weeks_table":
                return this.componentFn_render_bodyWeeks_table(partName);

            case "part_body_footer":
                return this.template_render_bodyFooter(partName);
            case "part_body_footer_btn_accept":
                return this.componentFn_render_bodyFooter_btnAccept(partName);
            case "part_body_footer_btn_now":
                return this.componentFn_render_bodyFooter_btnNow(partName);

            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const data = this.getPartProps(partName)

        const prop_backgroundMain            = data.hasOwnProperty("prop_backgroundMain")            ? data.prop_backgroundMain            : null;

        const content = `
     <style>
         #${this._COMPONENT_ID} #component-input-date-body-contnet${this._COMPONENT_RANDOM_ID}{
             background-color: ${prop_backgroundMain};
         }
     </style>
     <component-label id="component-input-date-label-${this._COMPONENT_RANDOM_ID}" ></component-label>
     
     ${this.templateFn("part_value") ?? ""}
     
     ${this.templateFn("part_header") ?? ""}
     
     <component-position-element id="component-input-date-body-${this._COMPONENT_RANDOM_ID}">
        <component-body>
             <section id="component-input-date-body-contnet${this._COMPONENT_RANDOM_ID}" class=" px-0 h-100 rounded">
                 ${this.templateFn("part_body_header") ?? ""}
                 ${this.templateFn("part_body_weeks") ?? ""}
                 ${this.templateFn("part_body_footer") ?? ""}
             </section>
        </component-body>
     </component-position-element>
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
    }

    template_render_value(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name    =   data.hasOwnProperty("prop_name")               ?  data.prop_name                    :  "";
            const prop_value   =   data.hasOwnProperty("prop_value")              ?  data.prop_value                   :  null;

            return `
<section  data-part-name="${partName}"
          id="component-input-date-value-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-value-${this._COMPONENT_RANDOM_ID}{
         
         }
     </style>

     <input name="${prop_name}"  value="${prop_value != null ? prop_value : ""}"  type="hidden"/>
       
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_header(partName) {

        const data = this.getPartProps(partName)

        if (data != null) {

            return `
<section  data-part-name="${partName}"
          id="component-input-date-header-${this._COMPONENT_RANDOM_ID}"  
          class="position-relative  form-control p-0" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-header-${this._COMPONENT_RANDOM_ID}{
         
         }
     </style>
         
     ${this.templateFn("part_header_inputs") ?? ""}
     
     <component-icon id="component-input-date-header-icon-clear-${this._COMPONENT_RANDOM_ID}"></component-icon>  
     
     <component-icon id="component-input-date-header-icon-calender-${this._COMPONENT_RANDOM_ID}"></component-icon>  
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_headerInputs(partName) {

        const data = this.getPartProps(partName)
        console.log(data)

        if (data != null){

            const prop_type    =   data.hasOwnProperty("prop_type")               ?  data.prop_type                    :  0;

            let inputs = "";
            if (prop_type == this.TYPE_INPUT_ONE_DIGIT){

                const yearDigitOne   =  this.fn_getDigitDatePart(this.TYPE_YAER , 1);
                const yearDigitTwo   =  this.fn_getDigitDatePart(this.TYPE_YAER , 2);
                const yearDigitThree =  this.fn_getDigitDatePart(this.TYPE_YAER , 3);
                const yearDigitFour  =  this.fn_getDigitDatePart(this.TYPE_YAER , 4);

                const monthDigitOne  =  this.fn_getDigitDatePart(this.TYPE_MONTH , 1);
                const monthDigitTwo  =  this.fn_getDigitDatePart(this.TYPE_MONTH , 2);

                const dayDigitOne    = this.fn_getDigitDatePart(this.TYPE_DAY , 1);
                const dayDigitTwo    = this.fn_getDigitDatePart(this.TYPE_DAY , 2);

                inputs = `
                    <div class="row parts-form-input-date">
                             <div class="part-form-input-date-1 col-6 row pe-2 ps-0 m-0 position-relative">
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_1-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="${ this.getFn("fn_moveToNext" , "event" , `'Date_2-${this._COMPONENT_RANDOM_ID}'`)   };   " 
                                             onfocus="${ this.getFn("fn_onFocus" , "event" ,    `'Date_1-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onkeydown="${ this.getFn("fn_moveToPrev" , "event" ,  null) };"
                                             onblur="${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_YAER}'` , 1)}"
                                             value="${yearDigitOne}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_2-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"       , "event"  , `'Date_3-${this._COMPONENT_RANDOM_ID}'`)  }; " 
                                             onfocus="  ${ this.getFn("fn_onFocus"          , "event"  , `'Date_2-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"       , "event"  , `'Date_1-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_YAER}'` , 2)}"
                                             value="${yearDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_3-${this._COMPONENT_RANDOM_ID}"
                                             oninput="  ${ this.getFn("fn_moveToNext"  , "event"  ,  `'Date_4-${this._COMPONENT_RANDOM_ID}'`)  }; " 
                                             onfocus="  ${ this.getFn("fn_onFocus"     , "event"  ,  `'Date_3-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"  , "event"  ,  `'Date_2-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_YAER}'` , 3)}"
                                             value="${yearDigitThree}"
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_4-${ this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"         , "event"  ,  `'Date_5-${this._COMPONENT_RANDOM_ID}'`)   };" 
                                             onfocus="  ${ this.getFn("fn_onFocus"           , "event"  ,  `'Date_4-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"        , "event"  ,  `'Date_3-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onblur="   ${ this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_YAER}'` , 4)}"
                                             value="${yearDigitFour}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-2 col-3 row pe-2 ps-2 m-0 position-relative">
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input                                           
                                             id="Date_5-${this._COMPONENT_RANDOM_ID}"
                                             oninput="  ${ this.getFn("fn_moveToNext"       , "event"  ,  `'Date_6-${this._COMPONENT_RANDOM_ID}'`)   };" 
                                             onfocus="  ${ this.getFn("fn_onFocus"          , "event"  ,  `'Date_5-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"       , "event"  ,  `'Date_4-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_MONTH}'`  , 1)}"
                                             value="${monthDigitOne}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_6-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"  , "event"  , `'Date_7-${this._COMPONENT_RANDOM_ID}'`)   };" 
                                             onfocus="  ${ this.getFn("fn_onFocus"     , "event"  , `'Date_6-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"  , "event"  , `'Date_5-${this._COMPONENT_RANDOM_ID}'`)   };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_MONTH}'`  , 2)};"
                                             value="${monthDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-3 col-3 row pe-0 ps-2 m-0 position-relative">
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_7-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"       , "event"  , `'Date_8-${this._COMPONENT_RANDOM_ID}'`)  };" 
                                             onfocus="  ${ this.getFn("fn_onFocus"          , "event"  , `'Date_7-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"       , "event"  , `'Date_6-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_DAY}'`  , 1)};"
                                             value="${dayDigitOne}"
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_8-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"       , "event"  , null)                                     };" 
                                             onfocus="  ${ this.getFn("fn_onFocus"          , "event"  , `'Date_8-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"       , "event"  , `'Date_7-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_DAY}'`  , 2)};"
                                             value="${dayDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                         </div>
            `;
            }
            else if (prop_type == this.TYPE_INPUT_PART_DIGIT){

                const yearDigitOne   = this.fn_getDigitDatePart(this.TYPE_YAER);

                const monthDigitOne  = this.fn_getDigitDatePart(this.TYPE_MONTH);

                const dayDigitOne    = this.fn_getDigitDatePart(this.TYPE_DAY);

                inputs = `
                    <div class="row parts-form-input-date">
                             <div class="part-form-input-date-1 col-6 row pe-2 ps-0 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_1-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"  , "event"  , `'Date_2-${this._COMPONENT_RANDOM_ID}'` , `'${this.TYPE_YAER}'`)  };" 
                                             onfocus="  ${ this.getFn("fn_onFocus"     , "event"  , `'Date_1-${this._COMPONENT_RANDOM_ID}'` )  };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"  , "event"  ,  null)  };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_YAER}'`  , 1)};"
                                             value="${yearDigitOne}" 
                                             type="text"  maxlength="4" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-2 col-3 row pe-2 ps-2 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <input                                           
                                             id="Date_2-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"  , "event"  , `'Date_3-${this._COMPONENT_RANDOM_ID}'` , `'${this.TYPE_MONTH}'` )  }; " 
                                             onfocus="  ${ this.getFn("fn_onFocus"     , "event"  , `'Date_2-${this._COMPONENT_RANDOM_ID}'` )  };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"  , "event"  , `'Date_1-${this._COMPONENT_RANDOM_ID}'` )  };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_MONTH}'`  , 2)};"
                                             value="${monthDigitOne}" 
                                             type="text"  maxlength="2" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-3 col-3 row pe-0 ps-2 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_3-${this._COMPONENT_RANDOM_ID}" 
                                             oninput="  ${ this.getFn("fn_moveToNext"  , "event"  , "null" , `'${this.TYPE_DAY}'`)              }; " 
                                             onfocus="  ${ this.getFn("fn_onFocus"     , "event"  , `'Date_3-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onkeydown="${ this.getFn("fn_moveToPrev"  , "event"  , `'Date_2-${this._COMPONENT_RANDOM_ID}'`)  };"
                                             onblur="   ${this.getFn("fn_onChangeDateDigit" , "event" ,  `'${this.TYPE_DAY}'`  , 3)};"
                                             value="${dayDigitOne}"
                                             type="text"  maxlength="2" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                     </div>
            `;
            }
            else if (prop_type == this.TYPE_INPUT_FULL_DIGIT){
                const digitAll   = this.fn_getDigitDatePart();
                inputs = `
                    <div class="row parts-form-input-date">
                    
                           <input
                                 id="Date_1-${this._COMPONENT_RANDOM_ID}" 
                                 oninput="  ${this.getFn("fn_onChangeDateDigit" , "event"  )}" 
                                 onfocus="  ${ this.getFn("fn_onFocus"          , "event"  )  };"
                                 onkeydown="${ this.getFn("fn_moveToPrev"       , "event"  )  };"
                                 onblur="   ${this.getFn("fn_onChangeDateDigit" , "event"  )};"
                                 value="${digitAll}" 
                                 type="text"  maxlength="10" class="inputs-date  form-control text-center "  />
                                 
                    </div>
            `;
            }
            else if (prop_type == this.TYPE_INPUT_FRIZE_DIGIT){
                const yearDigitOne   = this.fn_getDigitDatePart(this.TYPE_YAER);

                const monthDigitOne  = this.fn_getDigitDatePart(this.TYPE_MONTH);

                const dayDigitOne    = this.fn_getDigitDatePart(this.TYPE_DAY);

                inputs = `
                    <div class="row parts-form-input-date" onclick="${this.getFn("fn_selectDate" , "event")}">
                          
                             <div class="part-form-input-date-1 col-6 row pe-2 ps-0 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <span class="inputs-date  form-control text-center">
                                               ${yearDigitOne}
                                        </span>
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-2 col-3 row pe-2 ps-2 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <span class="inputs-date  form-control text-center">
                                               ${monthDigitOne}
                                        </span>
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-3 col-3 row pe-0 ps-2 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                         <span class="inputs-date  form-control text-center">
                                               ${dayDigitOne}
                                        </span>
                                  </div>
                             </div>
                     </div>
            `;
            }

            return `
<section  data-part-name="${partName}"
          id="component-input-date-header-inputs-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-header-inputs-${this._COMPONENT_RANDOM_ID}{
              padding-right: calc(30px + 20%);
              padding-left: calc(20px + 20%);
              padding-top: 2px;
              padding-bottom: 2px;
              height: 30px;
              direction: ltr !important;
         }
         
         #${this._COMPONENT_ID} .parts-form-input-date{
              width: 175px;
              margin: auto;
         }
         #${this._COMPONENT_ID} .part-form-input-date-1:after , .part-form-input-date-2:after{
              content: "/";
              right: -5px;
              line-height: 30px;
              position: absolute;
         }
         #${this._COMPONENT_ID} .inputs-date{
              border-color: #ebebeb;
              line-height: 28px;
              padding: 0;
              margin: 0;
              border: none;
              outline: none;
         }
     </style>
     
     ${inputs}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyHeader(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section  data-part-name="${partName}"
          id="component-input-date-body-header-${this._COMPONENT_RANDOM_ID}"  
          class="row p-0 m-0 border-bottom border-2 border-white " >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-body-header-${this._COMPONENT_RANDOM_ID}{
             height: 40px;
             direction: ltr !important;
         }
     </style>
     
     ${this.templateFn("part_body_header_year") ?? ""}
     
     ${this.templateFn("part_body_header_month") ?? ""}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyHeader_year(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section  data-part-name="${partName}"
          id="component-input-date-body-heade-year-${this._COMPONENT_RANDOM_ID}"  
          class=" col-5  p-0 m-0 " >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-body-header-year-${this._COMPONENT_RANDOM_ID}{

         }
     </style>
     
     <div class="row p-0 m-0 border-end border-white border-2 h-100">
        
       
        <div class="col-3 h-100">
            <component-icon id="component-input-date-body-header-year-btn-pervious-${this._COMPONENT_RANDOM_ID}"></component-icon>
        </div>
        
        <div class="col-6 p-0 m-0 position-relative h-100">
            <component-select-option id="component-input-date-body-header-year-options-${this._COMPONENT_RANDOM_ID}"></component-select-option>
        </div>
        
        <div class="col-3 h-100">
            <component-icon id="component-input-date-body-header-year-btn-next-${this._COMPONENT_RANDOM_ID}"></component-icon>
        </div>

     </div>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyHeader_month(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section  data-part-name="${partName}"
          id="component-input-date-body-heade-year-${this._COMPONENT_RANDOM_ID}"  
          class=" col-7  p-0 m-0 " >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-body-header-year-${this._COMPONENT_RANDOM_ID}{

         }
     </style>
     
     <div class="row p-0 m-0 h-100">
         
        <div class="col-3 h-100">
            <component-icon id="component-input-date-body-header-month-btn-pervious-${this._COMPONENT_RANDOM_ID}"></component-icon>
        </div>
        
        <div class="col-6 p-0 m-0 position-relative h-100">
            <component-select-option id="component-input-date-body-month-options-${this._COMPONENT_RANDOM_ID}"></component-select-option>
        </div>
        
        <div class="col-3 h-100">
            <component-icon id="component-input-date-body-header-month-btn-next-${this._COMPONENT_RANDOM_ID}"></component-icon>
        </div>
                 
     </div>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyWeeks(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section  data-part-name="${partName}"
          id="component-input-date-body-weeks-${this._COMPONENT_RANDOM_ID}"  
         class="row p-0 m-0 border-bottom border-2 border-white pb-1 " >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-body-weeks-${this._COMPONENT_RANDOM_ID}{
             height: calc(100% - 80px);
         }
     </style>
     
     <component-table id="component-input-date-body-weeks-table-${this._COMPONENT_RANDOM_ID}"></component-table>
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyFooter(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section  data-part-name="${partName}"
          id="component-input-date-body-footer-${this._COMPONENT_RANDOM_ID}"  
          class="row px-0 m-0 pt-1" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-body-footer-${this._COMPONENT_RANDOM_ID}{
                      height: 40px;
         }
     </style>
     
     
       
     <div class="col-4">
          <component-button id="component-input-date-body-footer-btn-accept-${this._COMPONENT_RANDOM_ID}"></component-button>
     </div>
                               
     <div class="col-4"></div>
     
     <div class="col-4">
          <component-button id="component-input-date-body-footer-btn-now-${this._COMPONENT_RANDOM_ID}"></component-button>
     </div>

</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }


    componentFn_render_label(partName) {
        this.componentFneBasic_render_structure(
            `component-input-date-label-${ this._COMPONENT_RANDOM_ID}` ,
            {
                prop_for:  `component-input-input-${ this._COMPONENT_RANDOM_ID}` ,
                fn_callback:  () => {
                    this.fn_selectDate(event)
                } ,
            }
        );
    }

    componentFn_render_headerIconClear(partName) {

        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl =   this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl : false;

            const styles = {
                "z-index" : "10",
                "width" :   "30px",
                "line-height" : "30px",
                "cursor" : "pointer",
                "height" : "30px" ,
                "top" : "0" ,
                "text-align" : "center" ,
            }
            styles[directionRtl ? "left" : "right"] = "5px";

            new window.ComponentIcon(
                `component-input-date-header-icon-clear-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: []  ,
                    styles: {
                        "height" : "35px"
                    }  ,

                    // prop_show: !var_showFormSelector ,

                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,
                    prop_icon : "&#10540;" ,

                    fn_callback: (event)=>{
                        this.fn_onCLickIconClear(event)
                    }
                }
            )

        }
    }

    componentFn_render_headerIconCalender(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const directionRtl =   this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl : false;

            const styles = {
                "z-index" : "10",
                "width" :   "30px",
                "line-height" : "30px",
                "cursor" : "pointer",
                "height" : "30px" ,
                "top" : "0" ,
                "text-align" : "center" ,
            }
            styles[directionRtl ? "right" : "left"] = "5px";

            new window.ComponentIcon(
                `component-input-date-header-icon-calender-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: []  ,
                    styles: {
                        "height" : "38px"
                    }  ,
                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles : styles ,
                    prop_icon : "&#128467;" ,

                    fn_callback: (event)=>{
                        this.fn_selectDate(event)
                    }
                }
            )

        }
    }

    componentFn_render_body(partName) {

        const data = this.getPartProps(partName)

        if (data != null){


            new window.ComponentPositionElement(
                `component-input-date-body-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "d-none" ,

                    prop_elementStyles: {
                        "padding" : "0 !important"
                    },

                    prop_width: "100%",
                    prop_height: "280px",
                }
            )

        }

    }


    componentFn_render_bodyHeader_year_btnPrevious(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            new window.ComponentIcon(
                `component-input-date-body-header-year-btn-pervious-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_iconClass : ["text-white" , "d-block" , "text-center"] ,
                    prop_iconStyles : {
                        "line-height" : "35px" ,
                        "font-size" : "14pt" ,
                        "cursor" : "pointer",
                        "border" : "none" ,
                        "outline" : "none" ,
                    } ,

                    prop_icon : "&#11164;" ,

                    fn_callback: (event)=>{
                        this.fn_goToYear(event);
                    }
                }
            )

        }
    }

    componentFn_render_bodyHeader_year_options(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            const prop_prevYears     =     data.hasOwnProperty("prop_prevYears")      ?  data.prop_prevYears      :  100;
            const prop_nextYears     =     data.hasOwnProperty("prop_nextYears")      ?  data.prop_nextYears      :  25;

            const var_selected_date  =   this.fn_getPartDate();
            const var_selected_year  =   var_selected_date != null && var_selected_date.hasOwnProperty("total") &&  var_selected_date.total.hasOwnProperty("year") ?  parseInt(var_selected_date.total.year)  : -1;

            const datePart = this.fn_getPartDate();
            const thisYear = datePart != null && datePart.hasOwnProperty("total") && datePart.total.hasOwnProperty("year") ? parseInt(datePart.total.year) : this.DEFULAT_YEAR;

            let listYear = [];
            for (let i = thisYear - prop_prevYears; i < thisYear + prop_nextYears ; i++) {
                listYear.push(
                    {id:i-1 , name: i.toString()}
                )
            }

            new window.ComponentSelectOption(
                `component-input-date-body-header-year-options-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_title:null ,
                    prop_optionWidth : "150px" ,
                    prop_name:"date-picker-year" ,

                    prop_titleClass: ["text-white" ] ,
                    prop_titleStyles: {
                        "line-height" : "35px!important",
                        "background-color" : "#ffffff00!important"
                    } ,

                    prop_positionLeft: "-25%" ,

                    prop_icon : null ,

                    prop_itemSelected: var_selected_year,
                    prop_options: listYear ,
                    fn_callback: (event , index)=>{
                        this.fn_goToYearSelected(event , index);
                    }
                }
            )

        }
    }

    componentFn_render_bodyHeader_year_btnNext(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            new window.ComponentIcon(
                `component-input-date-body-header-year-btn-next-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_iconClass : ["text-white" , "d-block" , "text-center"] ,
                    prop_iconStyles : {
                        "line-height" : "35px" ,
                        "font-size" : "14pt" ,
                        "cursor" : "pointer",
                        "border" : "none" ,
                        "outline" : "none" ,
                    } ,

                    prop_icon : "&#11166;" ,

                    fn_callback: (event)=>{
                        this.fn_goToYear(event , true);
                    }
                }
            )

        }
    }


    componentFn_render_bodyHeader_month_btnPrevious(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            new window.ComponentIcon(
                `component-input-date-body-header-month-btn-pervious-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_iconClass : ["text-white" , "d-block" , "text-center"] ,
                    prop_iconStyles : {
                        "line-height" : "35px" ,
                        "font-size" : "14pt" ,
                        "cursor" : "pointer",
                        "border" : "none" ,
                        "outline" : "none" ,
                    } ,

                    prop_icon : "&#11164;" ,

                    fn_callback: (event)=>{
                        this.fn_goToMonth(event);
                    }
                }
            )

        }
    }

    componentFn_render_bodyHeader_month_options(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            const var_selected_date  =   this.fn_getPartDate();
            const var_selected_month = var_selected_date != null && var_selected_date.hasOwnProperty("total") &&  var_selected_date.total.hasOwnProperty("month") ?  parseInt(var_selected_date.total.month) : -1;

            const prop_titleMonth0       =   data.hasOwnProperty("prop_titleMonth0")     ?  data.prop_titleMonth0        :  null;
            const prop_titleMonth1       =   data.hasOwnProperty("prop_titleMonth1")     ?  data.prop_titleMonth1        :  null;
            const prop_titleMonth2       =   data.hasOwnProperty("prop_titleMonth2")     ?  data.prop_titleMonth2        :  null;
            const prop_titleMonth3       =   data.hasOwnProperty("prop_titleMonth3")     ?  data.prop_titleMonth3        :  null;
            const prop_titleMonth4       =   data.hasOwnProperty("prop_titleMonth4")     ?  data.prop_titleMonth4        :  null;
            const prop_titleMonth5       =   data.hasOwnProperty("prop_titleMonth5")     ?  data.prop_titleMonth5        :  null;
            const prop_titleMonth6       =   data.hasOwnProperty("prop_titleMonth6")     ?  data.prop_titleMonth6        :  null;
            const prop_titleMonth7       =   data.hasOwnProperty("prop_titleMonth7")     ?  data.prop_titleMonth7        :  null;
            const prop_titleMonth8       =   data.hasOwnProperty("prop_titleMonth8")     ?  data.prop_titleMonth8        :  null;
            const prop_titleMonth9       =   data.hasOwnProperty("prop_titleMonth9")     ?  data.prop_titleMonth9        :  null;
            const prop_titleMonth10      =   data.hasOwnProperty("prop_titleMonth10")    ?  data.prop_titleMonth10       :  null;
            const prop_titleMonth11      =   data.hasOwnProperty("prop_titleMonth11")    ?  data.prop_titleMonth11       :  null;


            const listMonth = [
                {id:0 , name: prop_titleMonth0} ,
                {id:1 , name: prop_titleMonth1} ,
                {id:2 , name: prop_titleMonth2} ,
                {id:3 , name: prop_titleMonth3} ,
                {id:4 , name: prop_titleMonth4} ,
                {id:5 , name: prop_titleMonth5} ,
                {id:6 , name: prop_titleMonth6} ,
                {id:7 , name: prop_titleMonth7} ,
                {id:8 , name: prop_titleMonth8} ,
                {id:9 , name: prop_titleMonth9} ,
                {id:10 , name: prop_titleMonth10} ,
                {id:11 , name: prop_titleMonth11} ,
            ]

            new window.ComponentSelectOption(
                `component-input-date-body-month-options-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_title:null ,
                    prop_optionWidth : "200px" ,
                    prop_name:"date-picker-year" ,

                    prop_titleClass: ["text-white" ] ,
                    prop_titleStyles: {
                        "line-height" : "35px!important",
                        "background-color" : "#ffffff00!important"
                    } ,

                    prop_positionLeft: "-15%" ,

                    prop_icon : null ,

                    prop_options: listMonth,
                    prop_itemSelected: var_selected_month,
                    fn_callback: (event , index)=>{
                        this.fn_goToMonthSelected(event , index)
                    }
                }
            )

        }
    }

    componentFn_render_bodyHeader_month_btnNext(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            new window.ComponentIcon(
                `component-input-date-body-header-month-btn-next-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_iconClass : ["text-white" , "d-block" , "text-center"] ,
                    prop_iconStyles : {
                        "line-height" : "35px" ,
                        "font-size" : "14pt" ,
                        "cursor" : "pointer",
                        "border" : "none" ,
                        "outline" : "none" ,
                    } ,

                    prop_icon : "&#11166;" ,

                    fn_callback: (event)=>{
                        this.fn_goToMonth(event , true);
                    }
                }
            )

        }
    }


    componentFn_render_bodyWeeks_table(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            const prop_backgroundRowSelected                 =   data.hasOwnProperty("prop_backgroundRowSelected")                ?  data.prop_backgroundRowSelected                :  null;
            const prop_backgroundColumnSelected              =   data.hasOwnProperty("prop_backgroundColumnSelected")             ?  data.prop_backgroundColumnSelected             :  null;
            const prop_colorColumnSelected                   =   data.hasOwnProperty("prop_colorColumnSelected")                  ?  data.prop_colorColumnSelected                  :  null;
            const prop_titleDay0                             =   data.hasOwnProperty("prop_titleDay0")                            ?  data.prop_titleDay0                            :  null;
            const prop_titleDay1                             =   data.hasOwnProperty("prop_titleDay1")                            ?  data.prop_titleDay1                            :  null;
            const prop_titleDay2                             =   data.hasOwnProperty("prop_titleDay2")                            ?  data.prop_titleDay2                            :  null;
            const prop_titleDay3                             =   data.hasOwnProperty("prop_titleDay3")                            ?  data.prop_titleDay3                            :  null;
            const prop_titleDay4                             =   data.hasOwnProperty("prop_titleDay4")                            ?  data.prop_titleDay4                            :  null;
            const prop_titleDay5                             =   data.hasOwnProperty("prop_titleDay5")                            ?  data.prop_titleDay5                            :  null;
            const prop_titleDay6                             =   data.hasOwnProperty("prop_titleDay6")                            ?  data.prop_titleDay6                            :  null;

            //---------------
            const var_selected_date  =   this.fn_getPartDate();
            const listWeek = this.fn_getJalaliMonthGrid(
                var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ,
                var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month)   : -1
            );

            new window.ComponentTable(
                `component-input-date-body-weeks-table-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "row p-0 m-0"  ,

                    prop_structureClass : ["h-100"] ,
                    prop_structureStyles : {
                        //"background" : "#fff" ,
                        "height" : "100%" ,
                    },

                    prop_valueType: 3 ,
                    prop_valueRow : var_selected_date != null && var_selected_date.hasOwnProperty("inMonth") && var_selected_date.inMonth.toString("week") ?   parseInt(var_selected_date.inMonth.week) : -1 ,
                    prop_valueCol : var_selected_date != null && var_selected_date.hasOwnProperty("inWeek") && var_selected_date.inMonth.toString("inWeek") ?   parseInt(var_selected_date.inWeek.day)   : -1 ,

                    prop_valueRow_backgroundColor : prop_backgroundRowSelected ,
                    prop_valueCol_backgroundColor : prop_backgroundColumnSelected ,
                    prop_valueCol_textColor : prop_colorColumnSelected ,

                    prop_tableClass : ["h-100" , "border-none"] ,
                    prop_tableStyles : {
                        "height" : "100%" ,
                    },
                    prop_tableHeadClass : [ "border-bottom" , "border-white"] ,
                    prop_tableItemHeadClass : [ "" , "text-white"]  ,
                    prop_tableItemHeadStyles : {
                        "font-size" : "8pt" ,
                        "line-height" : "25px" ,
                        "border-left" : "white solid 1px" ,
                        "border-right" : "white solid 1px" ,
                        "border-bottom" : "white solid 1px" ,
                        "width" : "14%" ,
                        "text-align" : "center !important" ,
                    },
                    prop_tableBodyClass : [ "bg-white" , "h-100"] ,
                    prop_tableItemBodyClass : [  "rounded" , "d-block"] ,
                    prop_tableItemBodyStyles: {
                        "color" : "#525252" ,
                        "text-align" : "center" ,
                    },
                    prop_tableItemBodyHoverStyles : {
                        "background-color" : "#e1e1e1!important" ,
                        "cursor" : "pointer" ,
                    },


                    prop_order : ["day_0" , "day_1" , "day_2" , "day_3", "day_4" , "day_5", "day_6" ] ,
                    prop_header : [
                        {id:"day_0" , content: prop_titleDay0 },
                        {id:"day_1" , content: prop_titleDay1 },
                        {id:"day_2" , content: prop_titleDay2 },
                        {id:"day_3" , content: prop_titleDay3 },
                        {id:"day_4" , content: prop_titleDay4 },
                        {id:"day_5" , content: prop_titleDay5 },
                        {id:"day_6" , content: prop_titleDay6 },
                    ] ,

                    prop_data : listWeek,

                    fn_callback: (event , dayNum , dayName , dayIndex , weekIndex)=>{
                        this.fn_goToDaySelected(event , dayNum , dayName , dayIndex , weekIndex)
                    }
                }
            )

        }
    }


    componentFn_render_bodyFooter_btnAccept(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            const prop_titleBtnAccept                 =   data.hasOwnProperty("prop_titleBtnAccept")                ?  data.prop_titleBtnAccept                :  "---";
            const prop_backgroundBtnAccept            =   data.hasOwnProperty("prop_backgroundBtnAccept")           ?  data.prop_backgroundBtnAccept           :  null;
            const prop_backgroundBtnHoverAccept       =   data.hasOwnProperty("prop_backgroundBtnHoverAccept")      ?  data.prop_backgroundBtnHoverAccept      :  null;
            const prop_colorBtnAccept                 =   data.hasOwnProperty("prop_colorBtnAccept")                ?  data.prop_colorBtnAccept                :  null;

            new window.ComponentButton(
                `component-input-date-body-footer-btn-accept-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_btnBackgroundColor : prop_backgroundBtnAccept ,
                    prop_btnBackgroundColor_hover : prop_backgroundBtnHoverAccept ,
                    prop_btnColor : prop_colorBtnAccept ,
                    prop_title : prop_titleBtnAccept ,
                    prop_btnStyles : {
                        "border" : "none" ,
                        "outline" : "none" ,
                    } ,
                    prop_type: null ,

                    fn_callback: (event)=>{
                        this.fn_onCLickBtnAccept(event)
                    }
                }
            )

        }
    }

    componentFn_render_bodyFooter_btnNow(partName) {
        const data = this.getPartProps(partName)
        if (data != null){

            const prop_titleBtnNow                =   data.hasOwnProperty("prop_titleBtnNow")                ?  data.prop_titleBtnNow                :  "---";
            const prop_backgroundBtnNow           =   data.hasOwnProperty("prop_backgroundBtnNow")           ?  data.prop_backgroundBtnNow           :  null;
            const prop_backgroundBtnHoverNow      =   data.hasOwnProperty("prop_backgroundBtnHoverNow")      ?  data.prop_backgroundBtnHoverNow      :  null;
            const prop_colorBtnNow                =   data.hasOwnProperty("prop_colorBtnNow")                ?  data.prop_colorBtnNow                :  null;

            new window.ComponentButton(
                `component-input-date-body-footer-btn-now-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_btnBackgroundColor : prop_backgroundBtnNow ,
                    prop_btnBackgroundColor_hover : prop_backgroundBtnHoverNow ,
                    prop_btnColor : prop_colorBtnNow ,
                    prop_title : prop_titleBtnNow ,
                    prop_btnStyles : {
                        "border" : "none" ,
                        "outline" : "none" ,
                    } ,
                    prop_type: null ,

                    fn_callback: ()=>{
                        this.fn_onCLickBtNow(event)
                    }
                }
            )
        }
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */

    fn_selectDate(event , show=null){
        const statusShow = (show == null)  ? this.SHOW_DATE_BODY : show
        this.SHOW_DATE_BODY = !statusShow;

        const elBody = document.querySelector(`#component-input-date-body-${this._COMPONENT_RANDOM_ID}`);
        if (this.SHOW_DATE_BODY){
            elBody.classList.remove("d-none")
        }
        else {
            elBody.classList.add("d-none")
        }
    }

    fn_getDaysInJalaliMonth(year, month){
        return jalaali.jalaaliMonthLength(year, month);
    }

    fn_jalaliToTimeUnix(jy, jm, jd){
        const gDate = jalaali.toGregorian(jy, jm, jd);
        const date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        const timeUnix = Math.floor(date.getTime() / 1000);

        return {
            date: date,
            timeUnix: timeUnix
        };
    }

    fn_getJalaliMonthGrid(year, month){
        const daysInMonth = this.fn_getDaysInJalaliMonth(year+1, month+1);

        const gDate = jalaali.toGregorian(year+1, month+1 , 1);
        const date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        const firstDayOfWeek = date.getDay()+2;

        const offset = (firstDayOfWeek + 6) % 7;

        const weeks = [];
        let currentDay = 1;

        let week = {};
        for (let i = 0; i < 7; i++) {
            week[`day_${i}`] = i < offset ? null : currentDay++;
        }
        weeks.push(week);

        while (currentDay <= daysInMonth) {
            let week = {};
            for (let i = 0; i < 7; i++) {
                week[`day_${i}`] = currentDay <= daysInMonth ? currentDay++ : null;
            }
            weeks.push(week);
        }

        return weeks;
    }

    fn_getPartDate(date = null){

        if (date == null){
            const prop_value = this.get("prop_value" , null);
            date =  prop_value != null ? new Date(prop_value * 1000) : new Date();
        }

        let gYear = date.getFullYear();
        let gMonth = date.getMonth() + 1; // از 0 شروع میشه
        let gDay = date.getDate();

        let  { jy, jm, jd } = jalaali.toJalaali(gYear, gMonth, gDay);
        let [year, month, day] = [jy.toString() , jm.toString().padStart(2, '0') , jd.toString().padStart(2, '0')];
        const persianDate = `${jy}/${jm.toString().padStart(2, '0')}/${jd.toString().padStart(2, '0')}`


        /*const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        const persianDate = formatter.format(date);
        const [year, month, day] = persianDate.split('/');*/

        const jalaliYear = +tools_converter.numPersianToEnglish(year) -1  ;
        const jalaliMonth = +tools_converter.numPersianToEnglish(month)  -1 ;
        const jalaliDay =  +tools_converter.numPersianToEnglish(day) -1;

        const listWeek = this.fn_getJalaliMonthGrid(jalaliYear, jalaliMonth);
        let startWeekDay = -1;
        let totalWeek = 0;
        if (listWeek != null && Array.isArray(listWeek)){
            totalWeek = listWeek.length;

            for (const weekIndex in listWeek) {
                const week =  listWeek[weekIndex];
                for (const dayIndex in listWeek[weekIndex]) {
                    const day =  week[dayIndex];
                    if (day == null ){
                        startWeekDay ++;
                    }
                    else {
                        break;
                    }
                }
            }
        }

        const dayInMonth = startWeekDay + jalaliDay + 2 ;
        let week = Math.floor(dayInMonth / 7);

        let dayInWeek = dayInMonth % 7
        if (dayInWeek == 0){
            week -= 1;
            dayInWeek = 6;
        }
        else {
            dayInWeek = dayInMonth % 7 - 1;
        }

        return {
            total: {
                year: tools_converter.numPersianToEnglish(year) -1 ,
                month: tools_converter.numPersianToEnglish(month) -1,
                day: tools_converter.numPersianToEnglish(day) -1,
                text: persianDate,
            },
            inMonth: {
                dayStart : startWeekDay ,
                day: jalaliDay ,

                week: week ,
                weekTotal: totalWeek ,
            },
            inWeek:{
                day: dayInWeek
            }
        };
    }

    fn_readyDatePicker(){
        const var_selected_date = this.fn_getPartDate();
        let   year       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
        let   month      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
        let   day        =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

        const value = this.fn_jalaliToTimeUnix(year+1 , month+1 , day+1);

        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
    }

    fn_onCLickIconClear(event){
        const today = new Date();
        const jToday = jalaali.toJalaali(today);

        const value = this.fn_jalaliToTimeUnix(jToday.jy, jToday.jm, jToday.jd);

        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);

        this.fn_readyDatePicker()
    }

    fn_onCLickBtnAccept(event){
        this.fn_selectDate(event , true)
    }

    fn_onCLickBtNow(event){
        this.fn_onCLickIconClear(event)
    }

    fn_goToYearSelected(event , yearNum){
        const var_selected_date = this.fn_getPartDate();
        let   month       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
        let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

        const value = this.fn_jalaliToTimeUnix(yearNum+1 , month+1 , day+1);

        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
    }

    fn_goToYear(event , isNext = false){
        const var_selected_date = this.fn_getPartDate();

        let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
        let   month     =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
        let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

        const prop_prevYears     =   this.get("prop_prevYears" , 100);
        const prop_nextYears     =   this.get("prop_nextYears" , 25);

        const datePart = this.fn_getPartDate();
        const thisYear = datePart != null && datePart.hasOwnProperty("year") ? parseInt(datePart.year) : this.DEFULAT_YEAR;

        if (isNext && year + 1 <= thisYear + prop_nextYears -2){
            year += 1;
        }
        else if (!isNext && year - 1 >= thisYear - prop_prevYears -1){
            year -= 1;
        }

        const value = this.fn_jalaliToTimeUnix(year+1 , month+1 , day+1);
        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
    }

    fn_goToMonthSelected(event , monthNum = null){
        const var_selected_date = this.fn_getPartDate();
        let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
        let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

        const value =  this.fn_jalaliToTimeUnix(year+1 , monthNum+1 , day+1);
        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
    }

    fn_goToMonth(event , isNext = false){
        const var_selected_date = this.fn_getPartDate();

        let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
        let   month     =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
        let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

        const maxDay = this.fn_getDaysInJalaliMonth(year+1 , isNext ? month+1 : month -1);

        if (isNext ){
            if (month + 1 > 11){
                month = 0;
                year += 1;
            }
            else {
                month += 1;
            }
        }
        else if (!isNext ){
            if (month - 1 <0 ){
                month = 11;
                year -= 1;
            }
            else {
                month -= 1;
            }
        }

        day = day > maxDay ? maxDay : day;

        const value = this.fn_jalaliToTimeUnix(year+1 , month+1 , day+1);
        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
    }

    fn_goToDaySelected(event , dayNum , dayName , dayIndex , weekIndex) {
        const var_selected_date = this.fn_getPartDate();

        const value = this.fn_jalaliToTimeUnix(
            var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) +1 : -1 ,
            var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) +1 : -1 ,
            parseInt(dayNum)
        )

        this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
    }

    fn_getDigitDatePart(type=null , digit=null){
        const var_selected_date = this.fn_getPartDate();

        const prop_type  =  this.get("prop_type" , this.TYPE_INPUT_ONE_DIGIT);

        let number = 0;
        let value = 0;


        if (prop_type == this.TYPE_INPUT_ONE_DIGIT){
            if (type == this.TYPE_YAER){
                number = var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?  ( parseInt(var_selected_date.total.year) +1).toString() : -1 ;
            }
            else if( type == this.TYPE_MONTH){
                const val =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ? (  parseInt(var_selected_date.total.month)+1).toString() : -1 ;
                number = val.length == 1 ? "0" +  val : val;
            }
            else if(type == this.TYPE_DAY){
                const val =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?  ( parseInt(var_selected_date.total.day)+1 ).toString(): -1 ;
                number = val.length == 1 ? "0" +  val : val;
            }

            if (number != null && number > 0){
                number = number.toString();
                if (number.length > digit-1){
                    value = number[digit-1]
                }
            }
        }
        else if (prop_type == this.TYPE_INPUT_PART_DIGIT || prop_type == this.TYPE_INPUT_FRIZE_DIGIT){
            if (type == this.TYPE_YAER){
                number = var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?  ( parseInt(var_selected_date.total.year) +1).toString() : -1 ;
            }
            else if( type == this.TYPE_MONTH){
                const val =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ? (  parseInt(var_selected_date.total.month)+1).toString() : -1 ;
                number = val.length == 1 ? "0" +  val : val;
            }
            else if(type == this.TYPE_DAY){
                const val =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?  ( parseInt(var_selected_date.total.day)+1 ).toString(): -1 ;
                number = val.length == 1 ? "0" +  val : val;
            }

            value = number.toString();
        }
        else if (prop_type == this.TYPE_INPUT_FULL_DIGIT){

            let yearStr = var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?  ( parseInt(var_selected_date.total.year) +1).toString() : -1 ;

            let monthStr =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ? (  parseInt(var_selected_date.total.month)+1).toString() : -1 ;
            monthStr = monthStr.length == 1 ? "0" +  monthStr : monthStr;

            let dayStr =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?  ( parseInt(var_selected_date.total.day)+1 ).toString(): -1 ;
            dayStr = dayStr.length == 1 ? "0" +  dayStr : dayStr;

            value = yearStr + "/" + monthStr + "/" + dayStr;
        }

        return value;
    }

    fn_onChangeDateDigit(event , type=null , index=null){

        const prop_type  =  this.get("prop_type" , this.TYPE_INPUT_ONE_DIGIT);
        const inputs = document.querySelectorAll(`#${this._COMPONENT_ID} input.inputs-date`)

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                // یک تأخیر کوتاه برای بررسی اینکه وارد input دیگری نشده
                clearTimeout(this.TIMEINTERVAL_INPUTS);
                this.TIMEINTERVAL_INPUTS = setTimeout(() => {
                    if (![...inputs].some(el => el === document.activeElement)) {

                        let valueTextYear = "";
                        let valueTextMonth = "";
                        let valueTextDay = "";
                        if (prop_type == this.TYPE_INPUT_ONE_DIGIT){
                            for (const index in inputs) {
                                const itemInput = inputs[index]
                                if (index >= 0 && index <=3){
                                    valueTextYear += itemInput.value;
                                }
                                if (index >= 4 && index <=5){
                                    valueTextMonth += itemInput.value;
                                }
                                if (index >= 6 && index <=7){
                                    valueTextDay += itemInput.value;
                                }
                            }
                            //      valueText = valueTextYear + "/" + valueTextMonth + "/" + valueTextDay
                        }
                        else if (prop_type == this.TYPE_INPUT_PART_DIGIT){
                            for (const index in inputs) {
                                const itemInput = inputs[index]
                                if (index ==0){
                                    valueTextYear = itemInput.value;
                                }
                                if (index ==1){
                                    valueTextMonth = itemInput.value;
                                }
                                if (index ==2){
                                    valueTextDay = itemInput.value;
                                }
                            }
                        }
                        else if (prop_type == this.TYPE_INPUT_FULL_DIGIT){
                            const itemInput = inputs[0];

                            let val = itemInput.value.replace(/\D/g, ''); // فقط عددها

                            if (val.length > 8) val = val.slice(0, 8);

                            if (val.length >= 4) valueTextYear = parseInt(val.slice(0, 4));
                            if (val.length >= 6) valueTextMonth = parseInt(val.slice(4, 6));
                            if (val.length >= 8) valueTextDay = parseInt(val.slice(6, 8));
                        }

                        this.fn_commitNewTime(valueTextYear , valueTextMonth , valueTextDay);


                    }
                }, this.TIMEINTERVAL_INPUTS_DURATION); // تاخیر کم برای اینکه اگر به input بعدی رفت متوجه بشیم
            });
        });

    }

    fn_commitNewTime(year , month , day){

        /// year
        year = parseInt(year);
        const prop_prevYears     =   this.get("prop_prevYears" , 100);
        const prop_nextYears     =   this.get("prop_nextYears" , 25);

        const datePart = this.fn_getPartDate();
        const thisYear = datePart != null && datePart.hasOwnProperty("year") ? parseInt(datePart.year) : this.DEFULAT_YEAR;

        if (year > thisYear + prop_nextYears -1 ){
            year = thisYear + prop_nextYears -1 ;
        }
        else if (year < thisYear - prop_prevYears - 1){
            year = thisYear - prop_prevYears;
        }

        /// month
        month = parseInt(month).toString().padStart(2, '0');
        month = parseInt(month);
        month = month > 12 ? 12 : month;
        month = month == 0 ? 1 : month;

        /// day
        day =  parseInt(day).toString().padStart(2, '0');
        day =  parseInt(day);

        const maxDay = this.fn_getDaysInJalaliMonth(year+1 , month+1);
        day =  day > maxDay ? maxDay : day;
        day =  day == 0 ? 1 : day;

        if (year >0 && month>0 && day>0){
            /// value
            const value = this.fn_jalaliToTimeUnix(year , month , day);
            this.set("prop_value" , value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null);
        }
    }

    fn_commitNewDate(event ){
        let year = 0;
        let month = 0;
        let day = 0;
        if (event.key === "Enter") {
            let val = event.target.value.replace(/\D/g, '');

            if (val.length > 8) val = val.slice(0, 8);

            if (val.length >= 4) year = parseInt(val.slice(0, 4));
            if (val.length >= 6) month = parseInt(val.slice(4, 6));
            if (val.length >= 8) day = val.slice(6, 8);

            this.fn_commitNewTime(year , month , day , null);
        }
    }



    fn_moveToNext(event , nextFieldID , type=null){
        const prop_type  =  this.get("prop_type" , this.TYPE_INPUT_ONE_DIGIT);

        let statusMove = false;
        const valPart = event.target.value;

        if (prop_type == this.TYPE_INPUT_ONE_DIGIT){
            statusMove = true;
        }
        else if (prop_type == this.TYPE_INPUT_PART_DIGIT){
            console.log(type)

            let number = 0;
            if (type == this.TYPE_YAER){
                if (valPart.length == 4){
                    statusMove = true
                }
            }
            else if( type == this.TYPE_MONTH){
                if (valPart.length == 2){
                    statusMove = true
                }
            }
            else if(type == this.TYPE_DAY){
                if (valPart.length == 2){
                    statusMove = true
                }
            }
        }

        if (statusMove){
            if (event.key !== 'Backspace' && event.target.value !== '') {
                if (nextFieldID !== '') {
                    const el =  document.getElementById(nextFieldID);

                    if (el != null){
                        el.focus();
                    }
                }
            }
        }
    }

    fn_moveToPrev(event , prevFieldID , type=null , digit=null){
        const prop_type  =  this.get("prop_type" , this.TYPE_INPUT_ONE_DIGIT);

        let statusMove = false;
        const valPart = event.target.value;

        if (prop_type == this.TYPE_INPUT_ONE_DIGIT){
            statusMove = true;
        }
        else if (prop_type == this.TYPE_INPUT_PART_DIGIT){
            statusMove = true
        }


        if (statusMove){
            if (event.key === 'Backspace' && event.target.value === '') {
                if (prevFieldID !== '') {
                    const el = document.getElementById(prevFieldID);
                    if (el != null){
                        el.focus();
                    }
                }
            }
        }
    }

    fn_onFocus(event , myElId){
        const prop_type  =  this.get("prop_type" , this.TYPE_INPUT_ONE_DIGIT);

        if (prop_type == this.TYPE_INPUT_ONE_DIGIT || prop_type == this.TYPE_INPUT_PART_DIGIT){

            const el = document.getElementById(myElId);
            if (el != null){
                el.select();

                // if (myElId == "Date_8"){
                //     el.select();
                // }
                // else {
                //     el.value = "";
                // }
            }

        }
    }


}


/*-------------------------------------
 03-07) Component Input File
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_name
@prop_accept
@prop_maxCount
@prop_maxSize
@prop_textValidateSize
@prop_textValidateAccept
@prop_labelTooltipDescription

@prop_title
@prop_labelShow
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_borderColor
@prop_borderColorHover
@prop_borderHeight

@prop_textColor
@prop_text

@prop_showListFiles

@prop_deleteBody
@prop_deleteBtnCancel
@prop_deleteBtnAccept

@fn_callback
-------------------------------------*/
window.ComponentInputFile = class ComponentInputFile extends ComponentBase{

    _COMPONENT_WINDOW_DELETE = null;

    /* ---------------------------------------------
   PROPERTYs
   --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_value: [
            {prop : "prop_name"                  , default: "NAME"} ,
            {prop : "prop_accept"                , default: "*"} ,
            {prop : "prop_maxCount"              , default: null} ,
            {prop : "prop_maxSize"               , default: null} ,
            {prop : "prop_textValidateSize"      , default: "حداکثر سایر فایل، باید {{fileMaxSize}} کیلوبایت باشد"} ,
            {prop : "prop_textValidateAccept"    , default: "فرمت قابل پذیرش {{fileAccept}} می باشد"} ,
        ] ,
        part_label: [
            {prop : "prop_title"                        , default: "TITLE"} ,
            {prop : "prop_labelShow"                    , default: true} ,
            {prop : "prop_labelTooltipDescription"      , default: null} ,
            {prop : "prop_labelClass"                   , default: ["shadow-sm" , "px-2" ,"py-1" , "d-block "]} ,
            {prop : "prop_labelStyles"                  , default: null} ,
            {prop : "prop_labelHoverStyles"             , default: null} ,
            {prop : "prop_maxCount"                     , default: null} ,
            {prop : "prop_maxSize"                      , default: null} ,
            {prop : "prop_textValidateSize"             , default: "حداکثر سایر فایل، باید {{fileMaxSize}} کیلوبایت باشد"} ,
            {prop : "prop_textValidateAccept"           , default: "فرمت قابل پذیرش {{fileAccept}} می باشد"} ,
        ] ,
        part_body: [
            {prop : "prop_borderColor"           , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputFile") && tools_const.styles.inputFile.hasOwnProperty("boderColor")   ? tools_const.styles.inputFile.boderColor : "red"} ,
            {prop : "prop_borderColorHover"      , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputFile") && tools_const.styles.inputFile.hasOwnProperty("boderColorHover")   ? tools_const.styles.inputFile.boderColorHover : "red"} ,
            {prop : "prop_borderHeight"          , default: "150px"} ,
        ] ,
        part_body_text: [
            {prop : "prop_textColor"             , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("inputFile") && tools_const.styles.inputFile.hasOwnProperty("textColor")   ? tools_const.styles.inputFile.textColor : "red"} ,
            {prop : "prop_text"                  , default: "لطفا فایل خود را بکشید و رها کنید یا برای انتخاب کلیک کنید "} ,
        ] ,
        part_footer: [

        ] ,
        part_footer_files: [
            {prop : "prop_showListFiles"        , default: true} ,
            {prop : "var_fileIsValid"           , default: null} ,
            {prop : "var_fileIsNotValid"        , default: null} ,
        ] ,
        part_footer_files_tooltips: [
            {prop : "prop_showListFiles"        , default: true} ,
            {prop : "var_fileIsNotValid"        , default: null} ,
        ] ,
        part_window_confirm: [
            {prop : "prop_deleteBody"            , default: "آیا از حذف قایل مطمئن هستید"} ,
            {prop : "prop_deleteBtnCancel"       , default: "لغو"} ,
            {prop : "prop_deleteBtnAccept"       , default: "تایید"} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure:{
            part_label : {} ,
            part_value : {} ,
            part_body : {
                part_body_text:{}
            },
            part_footer: {
                part_footer_files:{}
            },
            part_window_confirm: {}
        } ,
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentInputFile.name] ,
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
        this.templateFn("part_window_confirm");
        this.templateFn("part_footer_files_tooltips");

        document.addEventListener("dragover", e => e.preventDefault());
        document.addEventListener("drop", e => e.preventDefault());
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);

            case "part_label":
                return this.componentFn_render_label(partName);

            case "part_value":
                return this.template_render_value(partName);

            case "part_body":
                return this.template_render_body(partName);
            case "part_body_text":
                return this.template_render_bodyText(partName);

            case "part_footer":
                return this.template_render_bodyFooter(partName);
            case "part_footer_files":
                return this.template_render_bodyFooterFiles(partName);
            case "part_footer_files_tooltips":
                return this.template_render_bodyFooterFilesTooltips(partName);

            case "part_window_confirm":
                return this.componentFn_render_windowConfirmDelete(partName);

            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {

        const content = `
  
     <component-label id="component-input-file-label-${this._COMPONENT_RANDOM_ID}" ></component-label>
     
     ${this.templateFn("part_value") ?? ""}
     
     ${this.templateFn("part_body") ?? ""}

     ${this.templateFn("part_footer") ?? ""}
     
      <component-window-confirm id="component-input-file-window-confirm-delete-${this._COMPONENT_RANDOM_ID}" ></component-window-confirm>
        
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
    }

    template_render_value(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name      =   data.hasOwnProperty("prop_name")               ?  data.prop_name                    :  "";
            const prop_accept    =   data.hasOwnProperty("prop_accept")             ?  data.prop_accept                  :  "";
            const prop_maxCount  =   data.hasOwnProperty("prop_maxCount")           ?  data.prop_maxCount                :  null;

            return                                       `
<section  data-part-name="${partName}"
          id="component-input-file-value-${this._COMPONENT_RANDOM_ID}"  
          class="" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-date-value-${this._COMPONENT_RANDOM_ID}{
         
         }
     </style>

     <input id="component-input-file-value-input-${this._COMPONENT_RANDOM_ID}" name="${prop_name}" 
            type="file" 
            class="d-none" 
            onchange=" ${this.getFn("fn_onChangeFiles" , "event")};"
            ${prop_maxCount != null && prop_maxCount > 1 ? "multiple" : ''}
            accept="${prop_accept}"/>
       
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_body(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_borderColor         =   data.hasOwnProperty("prop_borderColor")               ?  data.prop_borderColor                    :  "";
            const prop_borderColorHover    =   data.hasOwnProperty("prop_borderColorHover")          ?  data.prop_borderColorHover               :  "";
            const prop_borderHeight        =   data.hasOwnProperty("prop_borderHeight")              ?  data.prop_borderHeight                   :  "";

            return                                       `
<section  data-part-name="${partName}"
          id="component-input-file-body-${this._COMPONENT_RANDOM_ID}"  
          draggable="true"
          onclick="${this.getFn("fn_clickToFileInput")}"
          ondragover="${this.getFn("fn_onDragStart" , "event")}"
          ondragenter="${this.getFn("fn_onDragStart" , "event")}"
          ondragleave="${this.getFn("fn_onDragEnd" , "event")}"
          ondrop=" ${this.getFn("fn_onDrap" , "event")};"
          class="p-2 rounded position-relative" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-file-body-${this._COMPONENT_RANDOM_ID}{
             cursor: pointer;
             border-style: dashed;
             border-width: 2px;
             border-color: ${prop_borderColor};
             height: ${prop_borderHeight}
         }
         
         #${this._COMPONENT_ID} #component-input-file-body-${this._COMPONENT_RANDOM_ID}:hover{
             border-color: ${prop_borderColorHover} !important;
         }
     
         #${this._COMPONENT_ID} .component-input-file-body-${this._COMPONENT_RANDOM_ID}-active{
             border-color: ${prop_borderColorHover} !important;
         }
     </style>
     
     ${this.templateFn("part_body_text") ?? ""}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyText(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_textColor    =   data.hasOwnProperty("prop_textColor")               ?  data.prop_textColor                    :  "";
            const prop_text         =   data.hasOwnProperty("prop_text")                    ?  data.prop_text                         :  "";

            return                                       `
<section  data-part-name="${partName}"
          id="component-input-file-body-text-${this._COMPONENT_RANDOM_ID}"  
          class="position-absolute text-center" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-file-body-text-${this._COMPONENT_RANDOM_ID}{
             color: ${prop_textColor};
             font-size: 11pt;
             transform: translate(-50% , -50%);
             left: 50%;
             top: 50%;
         }
     </style>

     <b> ${prop_text} </b>

</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_bodyFooter(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            return                                       `
<section  data-part-name="${partName}"
          id="component-input-file-footer-${this._COMPONENT_RANDOM_ID}"  
          class="row" >
          
     <style>
         #${this._COMPONENT_ID} #component-input-file-footer-${this._COMPONENT_RANDOM_ID}{
             
         }
     </style>

     ${this.templateFn("part_footer_files") ?? ""}

</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;

    }

    template_render_bodyFooterFiles(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_showListFiles     =   data.hasOwnProperty("prop_showListFiles")      ?  data.prop_showListFiles          :  true;
            const var_fileIsValid        =   data.hasOwnProperty("var_fileIsValid")         ?  data.var_fileIsValid             :  null;
            const var_fileIsNotValid     =   data.hasOwnProperty("var_fileIsNotValid")      ?  data.var_fileIsNotValid          :  null;

            if (prop_showListFiles){

                let counter = 1;

                let htmlAcceptFiles = "";
                if (var_fileIsValid != null){
                    for (let i = 0; i < var_fileIsValid.length; i++) {
                        const itemFile = var_fileIsValid[i];

                        const formatted = (itemFile.size / 10000).toFixed(3);

                        htmlAcceptFiles += `
<div class="  shadow-sm bg-info rounded row px-1 py-1 mx-0 my-1">

   <span class="counter col-1 bg-white rounded ">${counter}</span>
   
   <span class="fileName col-7 text-start ">  ${itemFile.name}</span>
   
   <span class="fileSize col-3 bg-success rounded text-white border border-white row p-0 m-0">  
      <span class="col-8">
         ${formatted}
      </span>
      <span class="col-4">
          KB
      </span>
   </span>
   
   <span class="fileDelete col-1  text-danger" title="delete" onclick="${this.getFn("fn_showWindowDelete" , "event" , `'${itemFile.name}'`)}"> &#x1F5D1; </span>
  
</div>
                    `;

                        counter ++;
                    }
                }


                let htmlUnAcceptFiles = "";
                if (var_fileIsNotValid != null){
                    for (let i = 0; i < var_fileIsNotValid.length; i++) {
                        const itemFile = var_fileIsNotValid[i];

                        const formatted = (itemFile.size / 10000).toFixed(3);

                        htmlUnAcceptFiles += `
<div class="  shadow-sm bg-danger rounded row px-1 py-1 mx-0 my-1">

   <span class="counter col-1 bg-white rounded ">${counter}</span>
   
   <span class="fileName col-7 text-start text-white  ">  ${itemFile.name}</span>
   
   <span class="fileSize col-3 bg-success rounded text-white border border-white row p-0 m-0">  
      <span class="col-8">
         ${formatted}
      </span>
      <span class="col-4">
          KB
      </span>
   </span>
   
    <component-tooltip-description  id="component-input-file-footer-files-tooltip-${this._COMPONENT_RANDOM_ID}-${i}"> </component-tooltip-description>
  
  
</div>
                    `;

                        counter ++;
                    }
                }

                return                                       `
<section  data-part-name="${partName}"
          id="component-input-file-footer-files-${this._COMPONENT_RANDOM_ID}"  
          class=" " >
          
     <style>
         #${this._COMPONENT_ID} #component-input-file-footer-files-${this._COMPONENT_RANDOM_ID}{
        
         }
         #${this._COMPONENT_ID} #component-input-file-footer-files-${this._COMPONENT_RANDOM_ID} .counter{
         
         }
         #${this._COMPONENT_ID} #component-input-file-footer-files-${this._COMPONENT_RANDOM_ID} .fileName{
              font-size: 10pt;
              white-space: nowrap;        /* فقط یک خط */
              overflow: hidden;           /* جلوگیری از overflow */
              text-overflow: ellipsis;    /* نمایش سه نقطه ... */
         }
         #${this._COMPONENT_ID} #component-input-file-footer-files-${this._COMPONENT_RANDOM_ID} .fileSize{
              font-size: 10pt;
         }
         #${this._COMPONENT_ID} #component-input-file-footer-files-${this._COMPONENT_RANDOM_ID} .fileDelete{
              cursor: pointer;
         }
     </style>

     ${htmlAcceptFiles}
     ${htmlUnAcceptFiles}

</section>
        `;

            }

        }

        return `
<section data-part-name="${partName}"></section>
        `;

    }

    componentFn_render_label(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            let   prop_labelTooltipDescription     = data.hasOwnProperty("prop_labelTooltipDescription")    ? data.prop_labelTooltipDescription     : null;

            if (prop_labelTooltipDescription == null){

                let prop_textValidateSize   = data.hasOwnProperty("prop_textValidateSize") && data.prop_textValidateSize != null       ? data.prop_textValidateSize     : "Error File Size";
                let prop_textValidateAccept = data.hasOwnProperty("prop_textValidateAccept") && data.prop_textValidateAccept != null   ? data.prop_textValidateAccept   : "Error File Accept";
                const prop_accept             = data.hasOwnProperty("prop_accept") && data.prop_accept != null                           ? data.prop_accept               : "";
                let prop_maxSize            = data.hasOwnProperty("prop_maxSize") && data.prop_maxSize != null                         ? data.prop_maxSize              : "";

                prop_maxSize = (prop_maxSize / 10000).toFixed(3);

                prop_textValidateSize = prop_textValidateSize.replace("{{fileMaxSize}}", prop_maxSize);
                prop_textValidateAccept = prop_textValidateAccept.replace("{{fileAccept}}", prop_accept);

                prop_labelTooltipDescription = `
     <div> - ${prop_textValidateSize} </div>
     <div> - ${prop_textValidateAccept} </div>
                `;

            }


            this.componentFneBasic_render_structure(
                `component-input-file-label-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_for:  `component-input-file-value-input-${this._COMPONENT_RANDOM_ID}`,
                    prop_labelTooltipDescription: prop_labelTooltipDescription ,
                    fn_callback: () => {
                        this.fn_selectDate(event)
                    } ,
                }
            );
        }
    }

    componentFn_render_windowConfirmDelete(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_deleteBtnCancel            = data.hasOwnProperty("prop_deleteBtnCancel")            ? data.prop_deleteBtnCancel            : "";
            const prop_deleteBtnAccept            = data.hasOwnProperty("prop_deleteBtnAccept")            ? data.prop_deleteBtnAccept            : "";
            const prop_deleteBody                 = data.hasOwnProperty("prop_deleteBody")                 ? data.prop_deleteBody                 : "";

            this._COMPONENT_WINDOW_DELETE = new window.ComponentWindowConfirm(
                `component-input-file-window-confirm-delete-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_titleBtnCancel:  prop_deleteBtnCancel ,
                    prop_titleBtnAccept  :  prop_deleteBtnAccept,
                    prop_body  :  prop_deleteBody,
                    prop_showBtnResize : false ,
                    fn_callback: (event , data) => {
                        this.fn_deleteFileSelected(event , data);
                    } ,
                }
            )


        }
    }

    template_render_bodyFooterFilesTooltips(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_showListFiles     =   data.hasOwnProperty("prop_showListFiles")      ?  data.prop_showListFiles          :  true;

            const var_fileIsNotValid     =   data.hasOwnProperty("var_fileIsNotValid")      ?  data.var_fileIsNotValid          :  null;

            if (prop_showListFiles && var_fileIsNotValid != null) {
                for (let i = 0; i < var_fileIsNotValid.length; i++) {
                    const itemFile = var_fileIsNotValid[i];

                    let htmlError = "";
                    if (itemFile.hasOwnProperty("errors")){
                        for (const itemError of itemFile.errors) {
                            htmlError += `<div> - ${itemError}</div>`
                        }
                    }

                    new window.ComponentTooltipDescription(
                        `component-input-file-footer-files-tooltip-${this._COMPONENT_RANDOM_ID}-${i}` ,
                        {
                            classList: "fileDelete col-1"  ,

                            prop_icon: "?" ,
                            prop_description: htmlError,
                        }
                    )
                }
            }

        }
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_getInput(){
        return document.querySelector(`input#component-input-file-value-input-${this._COMPONENT_RANDOM_ID}`);
    }
    fn_getDragArea(){
        return document.querySelector(`section#component-input-file-body-${this._COMPONENT_RANDOM_ID}`);
    }
    fn_clickToFileInput(){
        const elInput = this.fn_getInput();
        if (elInput != null){
            elInput.click();
        }
    }
    fn_onDragStart(event){
        event.preventDefault();
        const elDrag = this.fn_getDragArea();
        if (elDrag != null){
            elDrag.classList.add(`component-input-file-body-${this._COMPONENT_RANDOM_ID}-active`);
        }
    }
    fn_onDragEnd(event){
        event.preventDefault();
        const elDrag = this.fn_getDragArea();
        if (elDrag != null){
            elDrag.classList.remove(`component-input-file-body-${this._COMPONENT_RANDOM_ID}-active`);
        }
    }
    fn_onDrap(event){
        this.fn_onDragEnd(event);

        const files = event.dataTransfer.files;
        if (files) {
            this.fn_onValidateCountFiles(files)
        }
    }


    fn_onChangeFiles(event){
        this.fn_onValidateCountFiles(event.target.files)
    }
    fn_onValidateCountFiles(files){
        const data = this._COMPONENT_CONFIG;

        const dataTransfer = new DataTransfer();
        const filesAccepts = [];
        const filesUnAccepts = [];

        const elInput = this.fn_getInput();
        if (elInput != null){

            let prop_textValidateSize   = data.hasOwnProperty("prop_textValidateSize") && data.prop_textValidateSize != null       ? data.prop_textValidateSize     : "Error File Size";
            let prop_textValidateAccept = data.hasOwnProperty("prop_textValidateAccept") && data.prop_textValidateAccept != null   ? data.prop_textValidateAccept   : "Error File Accept";
            const prop_accept             = data.hasOwnProperty("prop_accept") && data.prop_accept != null                           ? data.prop_accept               : "";
            let prop_maxSize            = data.hasOwnProperty("prop_maxSize") && data.prop_maxSize != null                         ? data.prop_maxSize              : "";

            prop_maxSize = (prop_maxSize / 10000).toFixed(3);

            prop_textValidateSize = prop_textValidateSize.replace("{{fileMaxSize}}", prop_maxSize);
            prop_textValidateAccept = prop_textValidateAccept.replace("{{fileAccept}}", prop_accept);

            let limit = files.length;
            if (data.hasOwnProperty("prop_maxCount") && data.prop_maxCount != null){
                limit = Math.min(files.length, data.prop_maxCount);
            }

            let numberAceppted = 0;
            for (let i = 0; i < files.length; i++) {
                const fileSelected = files[i];
                fileSelected.errors = [];

                const validateSize = this.fn_onValidateSizeFiles(fileSelected);
                const validateAccept = this.fn_onIsAccepted(fileSelected);
                console.log(validateSize , validateAccept)

                let isValid = false;
                if (validateSize && validateAccept){
                    isValid = true;
                }

                if (!validateSize){
                    fileSelected.errors.push(prop_textValidateSize);
                    isValid = false;
                }
                if (!validateAccept){
                    fileSelected.errors.push(prop_textValidateAccept);
                    isValid = false;
                }

                if (isValid){
                    dataTransfer.items.add(fileSelected);
                    filesAccepts.push(fileSelected);
                    numberAceppted++;
                }
                else{
                    filesUnAccepts.push(fileSelected);
                }

                if(limit <= numberAceppted){
                    break;
                }
            }

            elInput.files = dataTransfer.files;

            this.fn_callback(dataTransfer.files);
        }

        console.log(filesUnAccepts)

        this.set("var_fileIsValid" , filesAccepts);
        this.set("var_fileIsNotValid" , filesUnAccepts);
    }
    fn_onValidateSizeFiles(file){
        const data = this._COMPONENT_CONFIG;

        if (file != null){
            if (data.hasOwnProperty("prop_maxSize") && data.prop_maxSize != null){
                const sizeValidate =  data.prop_maxSize*1000;

                if (file.size <= sizeValidate){
                    return true;
                }
                else {
                    return false;
                }
            }

            return true;
        }

        return false;
    }
    fn_onIsAccepted(file) {
        const data = this._COMPONENT_CONFIG;
        let accept = "";
        if (data.hasOwnProperty("prop_accept") && data.prop_accept != null){
            accept = data.prop_accept;
        }

        if (!accept) return true;

        const mime = file.type;
        const name = file.name;

        return accept.split(',').some(type => {
            type = type.trim();
            if (type.endsWith('/*')) {
                return mime.startsWith(type.replace('/*', ''));
            } else if (type.startsWith('.')) {
                return name.toLowerCase().endsWith(type.toLowerCase());
            } else {
                return mime === type;
            }
        });
    }


    fn_showWindowDelete(event , filename){
        this._COMPONENT_WINDOW_DELETE.call_open(event , filename)
    }
    fn_deleteFileSelected(event , filename){

        const elInput = this.fn_getInput();
        if (elInput != null){
            const dt = new DataTransfer();
            const files = elInput.files;

            Array.from(files).forEach((file, index) => {
                console.log(file , filename , file.name !== filename)
                if (file.name !== filename) {
                    dt.items.add(file);
                }
            });

            this.fn_onValidateCountFiles(dt.files);
        }
    }


    fn_callback(files){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event , files);
        }
    }

}





/* ===============================================================================================================
 [04] Tooltips
=============================================================================================================== */

/*-------------------------------------
 04-01) Component tooltips description
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_iconClass
@prop_iconStyles

@prop_descriptionBackground
@prop_descriptionColor
@prop_description
@prop_descriptionWidth
-------------------------------------*/
window.ComponentTooltipDescription = class ComponentTooltipDescription extends ComponentBase {

    _COMPONENT_WINDOW_DELETE = null;

    /* ---------------------------------------------
   PROPERTYs
   --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_icon: [
            {prop : "prop_icon"                       , default: ""} ,
            {prop : "prop_iconClass"                  , default: ["shadow-sm" , "bg-dark" , "text-white" , "rounded" , "d-inline-block" , "text-center"]} ,
            {prop : "prop_iconStyles"                 , default: {"width" : "15px" , "height" : "15px", "line-height" : "15px", "cursor" : "pointer"}} ,
        ],
        part_description: [
            {prop : "prop_descriptionBackground"      , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("tooltipDescription") && tools_const.styles.tooltipDescription.hasOwnProperty("backgroundColor_description")   ? tools_const.styles.tooltipDescription.backgroundColor_description : "black"} ,
            {prop : "prop_descriptionColor"           , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("tooltipDescription") && tools_const.styles.tooltipDescription.hasOwnProperty("color_description")   ? tools_const.styles.tooltipDescription.color_description : "black"} ,
            {prop : "prop_description"                , default: null} ,
            {prop : "prop_descriptionWidth"           , default: "300px"} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_icon:{},
            part_description:{},
        },
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentTooltipDescription.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();

    }





    /* ---------------------------------------------
   TEMPLATEs
 --------------------------------------------- */
    componentFn(){
        this.templateFn("part_icon")
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_icon":
                return this.componentFn_render_icon(partName);
            case "part_description":
                return this.template_render_description(partName);

            default:
                return this.templateBasic_render([]);
        }
    }

    template_render_structure(partName) {

        const content = `
  
     <component-icon id="component-tooltip-description-icon-${this._COMPONENT_RANDOM_ID}" ></component-icon>
          
     ${this.templateFn("part_description") ?? ""}
                `;
        return this.templateBasic_render_structure(content , ["position-relative"]);
    }

    template_render_description(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_description                 =   data.hasOwnProperty("prop_description")                ?  data.prop_description                   :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');
            const prop_descriptionColor            =   data.hasOwnProperty("prop_descriptionColor")           ?  data.prop_descriptionColor              :  "";
            const prop_descriptionBackground       =   data.hasOwnProperty("prop_descriptionBackground")      ?  data.prop_descriptionBackground         :  "";
            const prop_descriptionWidth            =   data.hasOwnProperty("prop_descriptionWidth")           ?  data.prop_descriptionWidth              :  "";


            return                                       `
<section  data-part-name="${partName}"
          id="component-tooltip-description-description-${this._COMPONENT_RANDOM_ID}"  
          class="rounded position-absolute shadow-sm py-2 px-3 d-none" >
          
     <style>
         #${this._COMPONENT_ID} #component-tooltip-description-description-${this._COMPONENT_RANDOM_ID}{
             background-color: ${prop_descriptionBackground};
             color: ${prop_descriptionColor};
             width: ${prop_descriptionWidth};
             border: white solid 1px;
             top: 35px;
             left: -20px;
             font-size: 10pt;
             z-index: 11;
         }
         #${this._COMPONENT_ID} #component-tooltip-description-description-${this._COMPONENT_RANDOM_ID}:after{
             content: "";
             width: 0px;
             height: 0px;
             border-style: solid;
             border-width: 0 7.5px 15px 7.5px;
             border-color: transparent transparent ${prop_descriptionBackground} transparent;
             transform: rotate(0deg);
             position:absolute;
             top: -15px;
             left: 25px;
         }
     </style>

     ${prop_description}

</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;

    }

    componentFn_render_icon(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_icon          =   data.hasOwnProperty("prop_icon")                ?  data.prop_icon               :  null;
            const prop_iconClass     =   data.hasOwnProperty("prop_iconClass")           ?  data.prop_iconClass          :  [];
            const prop_iconStyles    =   data.hasOwnProperty("prop_iconStyles")          ?  data.prop_iconStyles         :  {};

            if (prop_icon != null){
                new window.ComponentIcon(
                    `component-tooltip-description-icon-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_icon: prop_icon ,

                        prop_iconClass : prop_iconClass ,
                        prop_iconStyles : prop_iconStyles ,

                        fn_onHoverIcon: ()=>{
                            this.showTooptipDescription();
                        } ,
                        fn_onBlurIcon: ()=>{
                            this.hideTooptipDescription();
                        }
                    }
                )
            }

        }
    }


    /* ---------------------------------------------
      FUNCTIONs
    --------------------------------------------- */
    fn_getElDescription(){
        return document.querySelector(`section#component-tooltip-description-description-${this._COMPONENT_RANDOM_ID}`);
    }
    showTooptipDescription(){
        const el = this.fn_getElDescription();
        if (el != null){
            el.classList.remove("d-none");
        }
    }
    hideTooptipDescription(){
        const el = this.fn_getElDescription();
        if (el != null){
            el.classList.add("d-none");
        }
    }
}





/* ===============================================================================================================
 [10] Tables
=============================================================================================================== */

/*-------------------------------------
 10-01) Component Table
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

@prop_tableHeadClass
@prop_tableHeadStyles
@prop_tableItemHeadClass
@prop_tableItemHeadStyles

@prop_order
@prop_data
@prop_header

@prop_tableBodyClass
@prop_tableBodyStyles
@prop_tableItemBodyClass
@prop_tableItemBodyStyles
@prop_tableItemBodyHoverStyles

@prop_valueType
@prop_valueRow_backgroundColor
@prop_valueCol_backgroundColor
@prop_valueCol_textColor

@prop_valueRow
@prop_valueCol
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
<section data-part-name="${partName}" class="row h-100">
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
         #${this._COMPONENT_ID} .component-table-header-item-${this._COMPONENT_RANDOM_ID}{
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
<th class="component-table-header-item-${this._COMPONENT_RANDOM_ID} ${tools_public.renderListClass(prop_tableItemHeadClass)}" 
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
<td class="component-table-body-item-${this._COMPONENT_RANDOM_ID}" >
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
            data.fn_callback(event , value , key , colIndex , rowIndex);
        }
    }


}





/* ===============================================================================================================
 [11] Tabs
=============================================================================================================== */

/*-------------------------------------
 11-01) Component Tabs
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
                //tabStyle = "height: 60px;"
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
 11-02) Component Tabs
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_backgroundColor_unSelected
@prop_backgroundColor_selected
@prop_list
@prop_itemSelected

-------------------------------------*/
window.ComponentTree = class ComponentTree extends ComponentBase{


    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_tree: [

            {prop : "prop_backgroundColor_unSelected"          , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("tree") && tools_const.styles.tree.hasOwnProperty("backgroundColor_unSelected")   ? tools_const.styles.tree.backgroundColor_unSelected : ""} ,
            {prop : "prop_backgroundColor_selected"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("tree") && tools_const.styles.tree.hasOwnProperty("backgroundColor_selected")   ? tools_const.styles.tree.backgroundColor_selected : ""} ,
            {prop : "prop_list"                                , default:  [] } ,
            {prop : "prop_itemSelected"                        , default:  null } ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_tree: {}
        } ,
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentTree.name] ,
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
        this.fn_checkExistSelected();
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_tree":
                return this.template_render_tree(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
            ${this.templateFn("part_tree") ?? ""}
        `;
        return this.templateBasic_render_structure(content);
    }

    template_render_tree(partName){

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_backgroundColor_unSelected        =   data.hasOwnProperty("prop_backgroundColor_unSelected")          ?  data.prop_backgroundColor_unSelected           : "";
            const prop_backgroundColor_selected          =   data.hasOwnProperty("prop_backgroundColor_selected")            ?  data.prop_backgroundColor_selected             : "";
            const prop_list                              =   data.hasOwnProperty("prop_list")                                ?  data.prop_list                                 :  [];
            const prop_itemSelected                      =   data.hasOwnProperty("prop_itemSelected")                        ?  data.prop_itemSelected                         :  null;
            const directionRtl                           =   this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")           ? this._COMPONENT_CONFIG.directionRtl             : false;

            let itemSelected = prop_itemSelected;
            if (Array.isArray(prop_itemSelected ) && typeof prop_itemSelected[0] != "undefined"){
                itemSelected = prop_itemSelected[0];
            }


            let treehtml = "";
            if (prop_list != null && Array.isArray(prop_list)){

                for (let i = 0; i < prop_list.length; i++) {
                    const itemTree = prop_list[i];

                    if (itemTree.hasOwnProperty("id") && itemTree.hasOwnProperty("name")){

                        let selected = false;
                        let componentTreeChildId = `${this._COMPONENT_ID}-child-${itemTree.id}`;
                        if (itemSelected == itemTree["id"]){
                            selected = true;
                        }

                        treehtml += `
                        <div class="item-tree row p-0 mx-0 my-1 " onclick="${this.getFn("fn_onSelectItem" , "event" , itemTree.id ,`'${componentTreeChildId}'` )}">
                            <span class=" ${selected ? 'icon-arrow-item-tree-active' : ''} icon-arrow-item-tree col-1"> ${selected ?  (directionRtl ? '&#x2BC7;' : '&#x2BC8;' )   :  (directionRtl ? '&#x2BC8;' : '&#x2BC7;' ) }  </span>
                            <span class=" ${selected ? 'title-item-tree-active' : ''} title-item-tree col-7  rounded">  ${itemTree.name} </span>
                            <span class=" ${selected ? 'line-item-tree-active' : ''} line-item-tree col-4"></span>
                            <div class=" ${directionRtl ? 'me-3 ms-0' : 'ms-3 me-0'}  p-0 my-0 ">
                                <component-tree id="${componentTreeChildId}"></component-tree>
                            </div>
                        </div>
                        `
                    }
                }

            }


            return `
<section data-part-name="${partName}" 
         id="component-tree-tree-${this._COMPONENT_RANDOM_ID}" 
         class="" >
         
     <style>
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID}{
         
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree {
             cursor: pointer;
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree .icon-arrow-item-tree{
             color: ${prop_backgroundColor_unSelected};
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree .icon-arrow-item-tree-active{
             color: ${prop_backgroundColor_selected};
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree .title-item-tree{
             background-color: ${prop_backgroundColor_unSelected};
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree .title-item-tree-active{
             background-color: ${prop_backgroundColor_selected};
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree .line-item-tree{
             background-color: ${prop_backgroundColor_unSelected};
             height: 2px;
             margin-top: 12.5px;
         }
         #${this._COMPONENT_ID} #component-tree-tree-${this._COMPONENT_RANDOM_ID} .item-tree .line-item-tree-active{
             background-color: ${prop_backgroundColor_selected};
         }
     </style>
     
     ${treehtml}
     
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
    fn_onSelectItem(event , itemId , componentTreeChildId){
        event.stopPropagation();
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && data.fn_callback != null){

            this.set("prop_itemSelected" , itemId);

            const var_children = data.fn_callback(event , itemId);
            this.fn_readyItemSelected(componentTreeChildId , var_children);
        }
    }

    fn_checkExistSelected(){
        const data = this._COMPONENT_CONFIG;

        if (data.hasOwnProperty("prop_list") &&  data.prop_list != null &&
            data.hasOwnProperty("prop_itemSelected") &&  data.prop_itemSelected != null){

            let listSelected = data.prop_itemSelected;

            let itemSelected = listSelected;
            if (Array.isArray(listSelected ) && typeof listSelected[0] != "undefined"){
                itemSelected = listSelected[0];
            }


            let itemSelectedExist = false;
            const prop_list = data.prop_list;
            if (prop_list != null && Array.isArray(prop_list)){
                for (let i = 0; i < prop_list.length; i++) {
                    const itemTree = prop_list[i];
                    if (itemTree.hasOwnProperty("id") && itemTree.hasOwnProperty("name")) {
                        if (itemSelected == itemTree["id"]) {
                            itemSelectedExist= true;
                            break;
                        }
                    }
                }
            }


            if (itemSelectedExist){

                let childItemSelected = null;
                if (Array.isArray(listSelected ) && listSelected[0]){
                    listSelected.splice(0, 1);
                    childItemSelected = listSelected;
                }

                let componentTreeChildId = `${this._COMPONENT_ID}-child-${itemSelected}`;
                const var_children = data.fn_callback(event , itemSelected);
                this.fn_readyItemSelected(componentTreeChildId , var_children , childItemSelected);
            }

        }
    }

    fn_readyItemSelected(componentTreeChildId , var_children , childItemSelected =null){
        const data = this._COMPONENT_CONFIG;


        if ((var_children != null && var_children.length>0) &&
            data.hasOwnProperty("fn_callback") &&  data.fn_callback != null){
            new window.ComponentTree(
                componentTreeChildId ,
                {
                    prop_itemSelected: childItemSelected,
                    prop_list: var_children,
                    fn_callback: data.fn_callback
                }
            )
        }
    }


}






/* ===============================================================================================================
 [12] Collapse
=============================================================================================================== */

/*-------------------------------------
 12-01) Component Collapse
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
        part_label: [

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
    componentFn(){

        this.templateFn("part_collapse_header_icon")
        this.templateFn("part_label")
    }

    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_collapse_header":
                return this.template_render_collapseHeader(partName);
            case "part_label":
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
<section data-part-name="${partName}" 
         id="component-collapse-header-${this._COMPONENT_RANDOM_ID}"
         class="position-relative" >
         
    <style>
        #${this._COMPONENT_ID} #component-collapse-header-${this._COMPONENT_RANDOM_ID}{
            
       }
    </style>
    <component-label id="component-collapse-header-label-${this._COMPONENT_RANDOM_ID}"></component-label>
    
   <component-icon id="component-collapse-header-label-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>

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
         data-show = "${prop_bodyShow}"
         id="component-collapse-body-${this._COMPONENT_RANDOM_ID}" 
         class="shadow-sm p-2 border ${prop_bodyShow ? "" : "d-none"}">
    <style>
        #${this._COMPONENT_ID} #component-collapse-body-${this._COMPONENT_RANDOM_ID}{
            background-color: ${prop_bodyBackgroundColor};
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
        this.componentFneBasic_render_structure(
            `component-collapse-header-label-${this._COMPONENT_RANDOM_ID}` ,
            {
                fn_callback: (event)=>{
                    this.fn_onCLickHeaderCollapse(event)
                }
            }
        );
    }

    componentFn_render_icon (partName , bodyShow=null) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_bodyShow   =  bodyShow != null ? bodyShow : (data.hasOwnProperty("prop_bodyShow")     ?  data.prop_bodyShow    : true);
            const directionRtl =   this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") ? this._COMPONENT_CONFIG.directionRtl : false;

            const styles =  {
                "font-size" : "20pt",
                    "margin" : "0 10px",
                    "color" : "#000000",
                    "line-height" : prop_bodyShow  ? "50px" : "0px" ,
                    "height" : "35px",
                    "top": "0px" ,
            };

            styles[directionRtl ? "left" : "right"] = "0px";

            new window.ComponentIcon(
                `component-collapse-header-label-icon-${ this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_icon : prop_bodyShow  ? "&#129171;" : "&#129169" ,
                    prop_iconClass : ["position-absolute"] ,
                    prop_iconStyles :styles,
                }
            )

        }
    }




    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickHeaderCollapse(event){
        const el = document.querySelector(`#component-collapse-body-${this._COMPONENT_RANDOM_ID}`);
        const dataShow = el.getAttribute("data-show")
        const statusShow = dataShow == "false" ;

        if (statusShow){
            el.classList.remove("d-none");
        }
        else {
            el.classList.add("d-none");
        }

        el.setAttribute("data-show" , (statusShow ? "true" : "false"))

        this.componentFn_render_icon("part_collapse_header_icon" , statusShow)
    }

}





/* ===============================================================================================================
 [13] Window
=============================================================================================================== */

/*-------------------------------------
 13-01) Component Window
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_blurBackgroundColor

@prop_windowBackgroundColor
@prop_windowWidth
@prop_windowHeight
@prop_windowRound

@prop_showBtnResize

@prop_header   [or component-header]

@prop_body     [or component-body]

@prop_footer   [or component-footer]

// call_close
// call_open
// call_resize
// call_minimize
-------------------------------------*/
window.ComponentWindow = class ComponentWindow extends ComponentBase {

    _IS_FULL_SIZE = false;

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_blur: [
            {prop : "prop_blurBackgroundColor"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("window") && tools_const.styles.window.hasOwnProperty("backgroundColor_blur")   ? tools_const.styles.window.backgroundColor_blur : ""} ,

        ],
        part_window: [
            {prop : "prop_windowBackgroundColor"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("window") && tools_const.styles.window.hasOwnProperty("backgroundColor_window")   ? tools_const.styles.window.backgroundColor_window : ""} ,
            {prop : "prop_windowWidth"                      , default: 700} ,
            {prop : "prop_windowHeight"                     , default: 400} ,
            {prop : "prop_windowRound"                      , default: "0"} ,
        ],
        part_window_header: [

        ],
        part_window_header_title: [
            {prop : "prop_header"                            , default: null} ,
        ],
        part_window_header_icons: [

        ],
        part_window_header_icons_icon_close: [

        ],
        part_window_header_icons_icon_resize: [
            {prop : "prop_showBtnResize"                    , default: true} ,
        ],
        part_window_body: [
            {prop : "prop_body"                             , default: null} ,
        ],
        part_window_footer: [
            {prop : "prop_footer"                           , default: null} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_blur:{
                part_window:{
                    part_window_header:{
                        part_window_header_title: {},
                        part_window_header_icons: {
                            part_window_header_icons_icon_close:{},
                            part_window_header_icons_icon_resize:{},
                        },
                    },
                    part_window_body:{},
                    part_window_footer:{}
                }
            }
        }
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentWindow.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }

    /* ---------------------------------------------
   TEMPLATEs
--------------------------------------------- */
    componentFn(){
        this.templateFn("part_window_header_icons_icon_close");
        this.templateFn("part_window_header_icons_icon_resize");
        this.fn_setUnvisableWindow();
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_blur":
                return this.template_render_blur(partName);
            case "part_window":
                return this.template_render_window(partName);

            case "part_window_header":
                return this.template_render_windowHeader(partName);

            case "part_window_header_title":
                return this.template_render_windowHeaderTitle(partName);

            case "part_window_header_icons":
                return this.template_render_windowHeaderIcons(partName);
            case "part_window_header_icons_icon_close":
                return this.componentFn_render_windowHeaderIconClose(partName);
            case "part_window_header_icons_icon_resize":
                return this.componentFn_render_windowHeaderIconResize(partName);

            case "part_window_body":
                return this.template_render_windowBody(partName);
            case "part_window_footer":
                return this.template_render_windowFooter(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
         ${this.templateFn("part_blur") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_blur(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_blurBackgroundColor       = data.hasOwnProperty("prop_blurBackgroundColor")          ?  data.prop_blurBackgroundColor     : "";

            return `
<section data-part-name="${partName}" 
         id="component-windwow-blur-${this._COMPONENT_RANDOM_ID}" 
         onclick="${this.getFn("fn_onCLicCloseWindow" , "event")}"
         class="position-fixed w-100 h-100" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-blur-${this._COMPONENT_RANDOM_ID}{
            background-color: ${prop_blurBackgroundColor};
            top: 0;
            left: 0;
            z-index: 11;
       }
    </style>
    
     ${this.templateFn("part_window") ?? ""}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_window(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_windowBackgroundColor       = data.hasOwnProperty("prop_windowBackgroundColor")          ?  data.prop_windowBackgroundColor     : "";
            const prop_windowWidth                 = data.hasOwnProperty("prop_windowWidth")                    ?  data.prop_windowWidth               : "";
            const prop_windowHeight                = data.hasOwnProperty("prop_windowHeight")                   ?  data.prop_windowHeight              : "";
            const prop_windowRound                 = data.hasOwnProperty("prop_windowRound")                    ?  data.prop_windowRound               : "";




            return `
<section data-part-name="${partName}" 
         id="component-windwow-window-${this._COMPONENT_RANDOM_ID}" 
         onclick="${this.getFn("fn_onclickWindow" , "event")}"
         class="position-absolute shadow" >
         
    <style>
    
        #${this._COMPONENT_ID} #component-windwow-window-${this._COMPONENT_RANDOM_ID}{
            transition: width 250ms ease, height 250ms ease;
            background-color: ${prop_windowBackgroundColor};
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
            width: ${prop_windowWidth}px;
            height: ${prop_windowHeight}px;
            border-radius: ${prop_windowRound};
            max-height: calc(100vh - 30%) !important;
       }
       
       @media (max-width: ${prop_windowWidth}px) {
           #${this._COMPONENT_ID} #component-windwow-window-${this._COMPONENT_RANDOM_ID} {
              width: calc(90%) !important;
          }
       }
     
       @media (min-width: ${prop_windowWidth}px) {
            @keyframes window-visable-${this._COMPONENT_RANDOM_ID}{
                0% {
                   width: ${prop_windowWidth * 2 / 3}px;
                   height: ${prop_windowHeight * 2 / 3 }px;
                }
                50% {
                   width: ${prop_windowWidth * 4 / 3}px;
                   height: ${prop_windowHeight * 4 / 3 }px;
                }
                100% {
                   width: ${prop_windowWidth}px;
                   height: ${prop_windowHeight}px;
                }
            }

            @keyframes window-unvisable-${this._COMPONENT_RANDOM_ID} {
                 0% {
                    width: ${prop_windowWidth}px;
                    height: ${prop_windowHeight}px;
                 }
                 50% {
                    width: ${prop_windowWidth * 4 / 3}px;
                    height: ${prop_windowHeight * 4 / 3 }px;
                 }
                 100% {
                    width: ${prop_windowWidth * 2 / 3}px;
                    height: ${prop_windowHeight * 2 / 3 }px;
                 }
             }

             .window-visable-animation-${this._COMPONENT_RANDOM_ID} {
                animation: window-visable-${this._COMPONENT_RANDOM_ID} 0.15s forwards ease-in-out;
             }

             .window-unvisable-animation-${this._COMPONENT_RANDOM_ID} {
                animation: window-unvisable-${this._COMPONENT_RANDOM_ID} 0.15s forwards ease-in-out;
             }


             @keyframes window-full-size-${this._COMPONENT_RANDOM_ID}{
                0% {
                   width: ${prop_windowWidth}px;
                   height: ${prop_windowHeight}px;
                }
                100% {
                   width: calc(100% - 40px);
                   height: calc(100% - 40px);
                }
             }

            @keyframes window-real-size-${this._COMPONENT_RANDOM_ID} {
                0% {
                   width: calc(100% - 40px);
                   height: calc(100% - 40px);
                }
                100% {
                   width: ${prop_windowWidth}px;
                   height: ${prop_windowHeight}px;
                }
            }

            .window-full-size-animation-${this._COMPONENT_RANDOM_ID} {
                animation: window--full-size-${this._COMPONENT_RANDOM_ID} 0.15s forwards ease-in-out;
            }

           .window-real-size-animation-${this._COMPONENT_RANDOM_ID} {
                animation: window-real-size-${this._COMPONENT_RANDOM_ID} 0.15s forwards ease-in-out;
            }

            .window-full-size-${this._COMPONENT_RANDOM_ID} {
               width: calc(100% - 40px) !important;
               height: calc(100% - 40px) !important;
            }

            window-full-size-${this._COMPONENT_RANDOM_ID} {
               width: ${prop_windowWidth}px !important;
               height: ${prop_windowHeight}px !important;
            }
       }

    </style>
    
    ${this.templateFn("part_window_header") ?? ""}
    ${this.templateFn("part_window_body") ?? ""}
    ${this.templateFn("part_window_footer") ?? ""}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_windowHeader(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section data-part-name="${partName}" 
         id="component-windwow-window-header-${this._COMPONENT_RANDOM_ID}" 
         class=" border-bottom row p-0 m-0" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-window-header-${this._COMPONENT_RANDOM_ID}{
            height: 35px;
       }
    </style>
    
    ${this.templateFn("part_window_header_title") ?? ""}
    
    ${this.templateFn("part_window_header_icons") ?? ""}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_windowHeaderTitle(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_header        =   data.hasOwnProperty("prop_header") && data.prop_header !=null       ?  data.prop_header       :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("header") ? this._COMPONENT_SLOTS.header : '');

            return `
<section data-part-name="${partName}" 
         id="component-windwow-window-header-title-${this._COMPONENT_RANDOM_ID}" 
         class=" col-8" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-window-header-title-${this._COMPONENT_RANDOM_ID}{
            line-height: 35px;
       }
    </style>
   
    <b>${prop_header}</b>
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_windowHeaderIcons(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section data-part-name="${partName}" 
         id="component-windwow-window-header-title-${this._COMPONENT_RANDOM_ID}" 
         class="col-4 position-relative" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-window-header-title-${this._COMPONENT_RANDOM_ID}{
            height: 35px;
       }
    </style>
   
    <component-button id="component-windwow-window-header-icon-close-${this._COMPONENT_RANDOM_ID}"></component-button>
    
    <component-button id="component-windwow-window-header-icon-resize-${this._COMPONENT_RANDOM_ID}"></component-button>
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_windowBody(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_body        =   data.hasOwnProperty("prop_body") && data.prop_body !=null       ?  data.prop_body        :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');


            return `
<section data-part-name="${partName}" 
         id="component-windwow-window-body-${this._COMPONENT_RANDOM_ID}" 
         class="overflow-auto px-2" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-window-body-${this._COMPONENT_RANDOM_ID}{
            height: calc(100% - 90px);
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

    template_render_windowFooter(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_footer        =   data.hasOwnProperty("prop_footer") && data.prop_footer !=null       ?  data.prop_footer        :  (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("footer") ? this._COMPONENT_SLOTS.footer : '');

            return `
<section data-part-name="${partName}" 
         id="component-windwow-window-footer-${this._COMPONENT_RANDOM_ID}" 
         class=" border-top" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-window-footer-${this._COMPONENT_RANDOM_ID}{
            height: 55px;
       }
    </style>
    
    ${prop_footer}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_windowHeaderIconClose(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const directionRtl  =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;

            const styles = {
                "top" : "50%" ,
                "transform" : "translate(0, -50%)" ,
            }
            styles[directionRtl ? "left" : "right"] =  "10px";

            new window.ComponentButton(
                `component-windwow-window-header-icon-close-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass:  ["position-absolute"] ,
                    prop_structureStyles: styles ,

                    prop_btnClass: [

                    ],
                    prop_btnStyles: {
                        "width" : "22px" ,
                        "height" : "22px" ,
                        "line-height" : "18px" ,
                        "padding" : "0 !important" ,
                    },

                    prop_title: `&#x00D7;` ,

                    fn_callback: (event) => {
                        this.fn_onCLicCloseWindow(event)
                    }
                }
            )

        }

    }

    componentFn_render_windowHeaderIconResize(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const directionRtl  =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;

            const prop_showBtnResize  =   data.hasOwnProperty("prop_showBtnResize")       ? data.prop_showBtnResize                  : true;

            if (prop_showBtnResize){
                const styles = {
                    "top" : "50%" ,
                    "transform" : "translate(0, -50%)" ,
                }
                styles[directionRtl ? "left" : "right"] =  "40px";

                new window.ComponentButton(
                    `component-windwow-window-header-icon-resize-${this._COMPONENT_RANDOM_ID}` ,
                    {
                        prop_structureClass:  ["position-absolute"] ,
                        prop_structureStyles: styles ,

                        prop_btnClass: [

                        ],
                        prop_btnStyles: {
                            "width" : "22px" ,
                            "height" : "22px" ,
                            "line-height" : "18px" ,
                            "padding" : "0 !important" ,
                        },

                        prop_title: `🗗` ,

                        fn_callback: (event) => {
                            this.fn_onCLicResizeWindow(event)
                        }
                    }
                )
            }

        }

    }


    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onGetStuctureElement(){
        return document.querySelector(`section#component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}`);
    }
    fn_onGetWindowElement(){
        return document.querySelector(`section#component-windwow-window-${this._COMPONENT_RANDOM_ID}`);
    }

    fn_setUnvisableWindow(){
        const el = this.fn_onGetStuctureElement();
        el.classList.add("d-none");
    }

    fn_onclickWindow(event){
        event.stopImmediatePropagation();
    }


    fn_onRemoveClass(event){
        const elWindow = this.fn_onGetWindowElement();

        elWindow.classList.remove(`window-full-size-${this._COMPONENT_RANDOM_ID}`);
        elWindow.classList.remove(`window-real-size-${this._COMPONENT_RANDOM_ID}`);

        elWindow.classList.remove(`window-full-size-animation-${this._COMPONENT_RANDOM_ID}`);
        elWindow.classList.remove(`window-real-size-animation-${this._COMPONENT_RANDOM_ID}`);

        elWindow.classList.remove(`window-visable-animation-${this._COMPONENT_RANDOM_ID}`);
        elWindow.classList.remove(`window-unvisable-animation-${this._COMPONENT_RANDOM_ID}`);
    }


    fn_onCLicOpenWindow(event){
        this.fn_onRemoveClass();

        const el = this.fn_onGetStuctureElement();
        el.classList.remove("d-none");

        const elWindow = this.fn_onGetWindowElement();
        elWindow.classList.add(`window-visable-animation-${this._COMPONENT_RANDOM_ID}`);

        this._IS_FULL_SIZE = false;
    }

    fn_onCLicCloseWindow(event){
        this.fn_onRemoveClass();

        const elWindow = this.fn_onGetWindowElement();
        elWindow.classList.add(`window-unvisable-animation-${this._COMPONENT_RANDOM_ID}`);

        const el = this.fn_onGetStuctureElement();
        setTimeout(() => {
            el.classList.add("d-none");
        } , 150)

        this._IS_FULL_SIZE = false;
    }

    fn_onCLicResizeWindow(event){
        this.fn_onRemoveClass();

        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_windowWidth")   && data.hasOwnProperty("prop_windowHeight")  ){
            const prop_windowWidth   =  data.prop_windowWidth ;
            const prop_windowHeight  = data.prop_windowHeight ;

            const elWindow = this.fn_onGetWindowElement();
            if (this._IS_FULL_SIZE){
                elWindow.classList.add(`window-real-size-animation-${this._COMPONENT_RANDOM_ID}`);
                elWindow.classList.add(`window-real-size-${this._COMPONENT_RANDOM_ID}`);
                this._IS_FULL_SIZE = false;
            }
            else {
                elWindow.classList.add(`window-full-size-animation-${this._COMPONENT_RANDOM_ID}`);
                elWindow.classList.add(`window-full-size-${this._COMPONENT_RANDOM_ID}`);
                this._IS_FULL_SIZE = true;
            }
        }

    }

    fn_onCLicMinimizeWindow(event){

    }



    call_close(event){
        this.fn_onCLicCloseWindow(event);
    }
    call_open(event){
        this.fn_onCLicOpenWindow(event);
    }
    call_resize(event){
        this.fn_onCLicResizeWindow(event);
    }
    call_minimize(event){
        this.fn_onCLicMinimizeWindow(event);
    }


}


/*-------------------------------------
 13-02) Component Window Confirm
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_header   [or component-header]

@prop_body     [or component-body]

@prop_showBtnResize

@prop_titleBtnCancel
@prop_titleBtnAccept

@fn_callback
// call_close
// call_open
// call_resize
// call_minimize
-------------------------------------*/
window.ComponentWindowConfirm = class ComponentWindowConfirm extends ComponentBase {

    _COMPONENT_WINDOW = null;
    _COMPONENT_DATA_CALLBACK = null;

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_window: [
            {prop : "prop_showBtnResize"                     , default: true} ,
        ],
        part_window_header: [
            {prop : "prop_header"                            , default: null} ,
        ],
        part_window_body: [
            {prop : "prop_body"                              , default: null} ,
        ],
        part_window_footer: [

        ],
        part_window_footer_btn_candel: [
            {prop : "prop_titleBtnCancel"                    , default: "لغو"} ,
        ],
        part_window_footer_btn_accept: [
            {prop : "prop_titleBtnAccept"                    , default: "تایید"} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_window:{
                part_window_header: {} ,
                part_window_body: {} ,
                part_window_footer: {
                    part_window_footer_btn_candel:{},
                    part_window_footer_btn_accept:{},
                } ,
            }
        }
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentWindowConfirm.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }



    /* ---------------------------------------------
     TEMPLATEs
    --------------------------------------------- */
    componentFn(){
        this.templateFn("part_window");
        this.templateFn("part_window_footer_btn_candel");
        this.templateFn("part_window_footer_btn_accept");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_window":
                return this.componentFn_render_window(partName);
            case "part_window_header":
                return this.template_render_windowHeader(partName);
            case "part_window_body":
                return this.template_render_windowBody(partName);
            case "part_window_footer":
                return this.template_render_windowFooter(partName);
            case "part_window_footer_btn_candel":
                return this.componentFn_render_windowFooterBtnCancel(partName);
            case "part_window_footer_btn_accept":
                return this.componentFn_render_windowFooterBtnAccept(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
<component-window id="component-windwow-confirm-winddow-${this._COMPONENT_RANDOM_ID}">

    <component-header>
          ${this.templateFn("part_window_header") ?? ""}
    </component-header> 
    
    <component-body>
          ${this.templateFn("part_window_body") ?? ""}
    </component-body> 
      
    <component-footer>
          ${this.templateFn("part_window_footer") ?? ""}
    </component-footer>
    
</component-window>
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_windowHeader(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_header = data.hasOwnProperty("prop_header") && data.prop_header != null ? data.prop_header : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("header") ? this._COMPONENT_SLOTS.header : '');

            return `
<section data-part-name="${partName}" 
         id="component-windwow-confirm-winddow-header-${this._COMPONENT_RANDOM_ID}" 
         class="" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-confirm-winddow-header-${this._COMPONENT_RANDOM_ID}{
            
       }
    </style>
    
    ${prop_header}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_windowBody(partName) {

        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_body = data.hasOwnProperty("prop_body") && data.prop_body != null ? data.prop_body : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            return `
<section data-part-name="${partName}" 
         id="component-windwow-confirm-winddow-body-${this._COMPONENT_RANDOM_ID}" 
         class="m-2" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-confirm-winddow-body-${this._COMPONENT_RANDOM_ID}{
            
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

    template_render_windowFooter(partName) {

        const data = this.getPartProps(partName)

        if (data != null) {

            return `
<section data-part-name="${partName}" 
         id="component-windwow-confirm-winddow-footer-${this._COMPONENT_RANDOM_ID}" 
         class="row p-0 my-0 mx-2" >
         
    <style>
        #${this._COMPONENT_ID} #component-windwow-confirm-winddow-footer-${this._COMPONENT_RANDOM_ID}{
            
       }
    </style>
    
    <component-button id="component-windwow-confirm-winddow-footer-btn-cancel-${this._COMPONENT_RANDOM_ID}"></component-button>
    
    <component-button id="component-windwow-confirm-winddow-footer-btn-accept-${this._COMPONENT_RANDOM_ID}"></component-button>
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }


    componentFn_render_window(partName){
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_showBtnResize = data.hasOwnProperty("prop_showBtnResize") ? data.prop_showBtnResize : true;

            this._COMPONENT_WINDOW = new window.ComponentWindow(
                `component-windwow-confirm-winddow-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_windowWidth: 500 ,
                    prop_windowHeight: 125 ,
                    prop_showBtnResize: prop_showBtnResize
                }
            )
        }
    }

    componentFn_render_windowFooterBtnCancel(partName){
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_titleBtnCancel = data.hasOwnProperty("prop_titleBtnCancel")  ? data.prop_titleBtnCancel : "";

            new window.ComponentButton(
                `component-windwow-confirm-winddow-footer-btn-cancel-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "col-6 mt-2"  ,

                    prop_type:"cancel" ,

                    prop_title: prop_titleBtnCancel ,
                    fn_callback: (event) => {
                        this.call_close(event);
                    }
                }
            )
        }
    }

    componentFn_render_windowFooterBtnAccept(partName){
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_titleBtnAccept = data.hasOwnProperty("prop_titleBtnAccept")  ? data.prop_titleBtnAccept : "";

            new window.ComponentButton(
                `component-windwow-confirm-winddow-footer-btn-accept-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "col-6 mt-2"  ,

                    prop_type:"submit" ,

                    prop_title: prop_titleBtnAccept ,
                    fn_callback: (event) => {
                        this.fn_callback(event)
                    }
                }
            )
        }
    }






    /* ---------------------------------------------
      FUNCTIONs
    --------------------------------------------- */
    fn_callback(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event , this._COMPONENT_DATA_CALLBACK);
        }

        this.call_close(event);
    }

    call_close(event){
        this._COMPONENT_WINDOW.fn_onCLicCloseWindow(event);
    }
    call_open(event , data=null){
        this._COMPONENT_WINDOW.fn_onCLicOpenWindow(event);

        this._COMPONENT_DATA_CALLBACK = data;
    }
    call_resize(event){
        this._COMPONENT_WINDOW.fn_onCLicResizeWindow(event);
    }
    call_minimize(event){
        this._COMPONENT_WINDOW.fn_onCLicMinimizeWindow(event);
    }

}


/* ===============================================================================================================
 [14] Slider Shows
=============================================================================================================== */
/*-------------------------------------
 14-01) Slider Show Overlapping
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_title
@prop_labelShow
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_borderClass
@prop_borderStyles

@prop_imageDuration
@prop_imageSelected
@prop_images
-------------------------------------*/
window.ComponentSliderShowOverlapping = class ComponentSliderShowOverlapping extends ComponentBase {

    _TILE_INTERVAL = null;

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_label: [
            {prop: "prop_labelClass"                               , default:  [ "text-center"]},
            {prop: "prop_labelStyles"                              , default:  { "font-size" : "16pt"}}
        ] ,
        part_border: [
            {prop : "prop_borderClass"                            , default: ["border" , "shadow-sm" , "my-2" , "mx-auto" , "d-block" , "p-1"]} ,
            {prop : "prop_borderStyles"                           , default: {}} ,
        ],
        part_btn_next: [

        ],
        part_btn_previous: [

        ],
        part_bottom_selector: [
            {prop : "prop_imageDuration"                        , default: 3000} ,
            {prop : "prop_imageSelected"                        , default: 0} ,
            {prop : "prop_images"                               , default: []} ,
        ],
        part_images: [
            {prop : "prop_imageMaxWidth"                        , default: null} ,
            {prop : "prop_imageSelected"                        , default: 0} ,
            {prop : "prop_images"                               , default: []} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label: {} ,
            part_border: {
                part_btn_next : {} ,
                part_btn_previous : {} ,
                part_bottom_selector : {} ,
                part_images : {} ,
            }
        }
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentSliderShowOverlapping.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }


    /* ---------------------------------------------
     TEMPLATEs
    --------------------------------------------- */
    componentFn() {
        this.templateFn("part_label");
        this.templateFn("part_border");
        this.templateFn("part_btn_next");
        this.templateFn("part_btn_previous");

        this.fn_defineTimeInterval();
    }

    templateFn(partName = null) {
        switch (partName) {
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_border":
                return this.componentFn_render_border(partName);
            case "part_btn_next":
                return this.componentFn_render_iconBtnNext(partName);
            case "part_btn_previous":
                return this.componentFn_render_iconBtnPrevious(partName);
            case "part_bottom_selector":
                return this.template_render_bottomSelector(partName);
            case "part_images":
                return this.template_render_images(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
<component-label id="component-slider-show-overlapping-label-${this._COMPONENT_RANDOM_ID}"></component-label>

<component-border id="component-slider-show-overlapping-border-${this._COMPONENT_RANDOM_ID}">
    <component-body>
        
        <style>
        
          #${this._COMPONENT_ID} #component-slider-show-overlapping-btn-pervious-${this._COMPONENT_RANDOM_ID}{
              transition: opacity 250ms ease;
              opacity:0.4;
          }
          #${this._COMPONENT_ID} #component-slider-show-overlapping-btn-next-${this._COMPONENT_RANDOM_ID}{
              transition: opacity 250ms ease;
              opacity:0.4;
          }
        
          #${this._COMPONENT_ID} #component-slider-show-overlapping-border-${this._COMPONENT_RANDOM_ID}:hover #component-slider-show-overlapping-btn-pervious-${this._COMPONENT_RANDOM_ID}{
              opacity:1;
          }
          #${this._COMPONENT_ID} #component-slider-show-overlapping-border-${this._COMPONENT_RANDOM_ID}:hover #component-slider-show-overlapping-btn-next-${this._COMPONENT_RANDOM_ID}{
             opacity:1;
          }
          
       </style>
   
       <component-icon id="component-slider-show-overlapping-btn-pervious-${this._COMPONENT_RANDOM_ID}"></component-icon>
       
       <component-icon id="component-slider-show-overlapping-btn-next-${this._COMPONENT_RANDOM_ID}"></component-icon>
       
       ${this.templateFn("part_bottom_selector") ?? ""}
       
       ${this.templateFn("part_images") ?? ""}
       
   </component-body>
</component-border>
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_bottomSelector(partName) {

        const data = this.getPartProps(partName)

        if (data != null) {

            const prop_imageSelected   =  data.hasOwnProperty("prop_imageSelected")      ?  data.prop_imageSelected     : 0;
            const prop_images          =  data.hasOwnProperty("prop_images")                ?  data.prop_images            : [];
            let htmlSelector = "";
            if (prop_images != null && Array.isArray(prop_images)){
                for (let i = 0; i < prop_images.length ; i++) {
                    htmlSelector += `<div class="item-for-selected mx-1 float-start ${ prop_imageSelected == i ? 'item-selected' : ''}" onclick="${this.getFn('fn_selectItemImage' , 'event' , i)}"></div>`
                }
            }


            return `
<section data-part-name="${partName}" 
         id="component-slider-show-overlapping-bottom-selector-${this._COMPONENT_RANDOM_ID}" 
         class="position-absolute" >
         
    <style>
        #${this._COMPONENT_ID} #component-slider-show-overlapping-bottom-selector-${this._COMPONENT_RANDOM_ID}{
            bottom: 0%;
            left: 50%;
            transform: translate(-50% , -50%);
            z-index: 2;
       }
       #${this._COMPONENT_ID} #component-slider-show-overlapping-bottom-selector-${this._COMPONENT_RANDOM_ID} .item-for-selected{
            width:10px;
            height: 10px;
            border-radius: 100%;
            cursor: pointer;
            border: #9b9b9b 2px solid;
       }
       #${this._COMPONENT_ID} #component-slider-show-overlapping-bottom-selector-${this._COMPONENT_RANDOM_ID} .item-selected{
            width:20px !important;
            border-radius: 25px !important;
            background-color: white;
       }
    </style>
    
    ${htmlSelector}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_images(partName) {

        const data = this.getPartProps(partName)

        if (data != null) {
            const prop_imageMaxWidth   =  data.hasOwnProperty("prop_imageMaxWidth")      ?  data.prop_imageMaxWidth     : null;
            const prop_imageSelected   =  data.hasOwnProperty("prop_imageSelected")      ?  data.prop_imageSelected     : 0;
            const prop_images          =  data.hasOwnProperty("prop_images")             ?  data.prop_images            : [];

            let htmlImg = "";
            if (prop_images != null && Array.isArray(prop_images)){
                for (let i = 0; i < prop_images.length ; i++) {
                    if (prop_imageSelected == i){
                        htmlImg += `<img src="${prop_images[i]}" alt="" class="d-block"/>`
                        break;
                    }
                }
            }

            return `
<section data-part-name="${partName}" 
         id="component-slider-show-overlapping-images-${this._COMPONENT_RANDOM_ID}" 
         class="" >
         
    <style>
        #${this._COMPONENT_ID} #component-slider-show-overlapping-images-${this._COMPONENT_RANDOM_ID}{
            
        }
        #${this._COMPONENT_ID} #component-slider-show-overlapping-images-${this._COMPONENT_RANDOM_ID} img{
            margin: auto;
            display: block;
            max-width: ${prop_imageMaxWidth != null ? prop_imageMaxWidth+"px" : "100%"} !important;
            z-index: 1;
       }
       
       @media (max-width: ${prop_imageMaxWidth != null ? prop_imageMaxWidth + 100 + "px" : ""}) {
          #${this._COMPONENT_ID} #component-slider-show-overlapping-images-${this._COMPONENT_RANDOM_ID} img{
            max-width: 100% !important ;
          }
       }
       
    </style>
    
    ${htmlImg}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {
        this.componentFneBasic_render_structure(
            `component-slider-show-overlapping-label-${this._COMPONENT_RANDOM_ID}` ,
            {
                prop_for:  `component-input-input-${ this._COMPONENT_RANDOM_ID}`
            }
        );
    }

    componentFn_render_border(partName) {
        const data = this.getPartProps(partName);

        if (data != null){
            const prop_borderClass       =  data.hasOwnProperty("prop_borderClass")             ?  data.prop_borderClass         : [];
            const prop_borderStyles      =  data.hasOwnProperty("prop_borderStyles")            ?  data.prop_borderStyles        : {};

            //---------------
            prop_borderStyles["position"] = "relative";


            new window.ComponentBorder(
                `component-slider-show-overlapping-border-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_structureClass:  prop_borderClass ,
                    prop_structureStyles: prop_borderStyles ,
                }
            )
        }

    }

    componentFn_render_iconBtnNext(partName) {
        const data = this.getPartProps(partName);

        if (data != null){
            let styles = {
                "width" : "45px" ,
                "height" : "45px" ,
                "border-radius" : "100%" ,
                "line-height" : "40px" ,
                "top" : "50%" ,
                "transform" : "translate(-50%, -50%)" ,
                "z-index" : "2" ,
            }
            if (this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") && this._COMPONENT_CONFIG.directionRtl){
                styles[ "left"] = "0";
            }
            else{
                styles[ "right"] = "-45px";
            }

            new window.ComponentIcon(
                `component-slider-show-overlapping-btn-next-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList:     [ "position-absolute" , "border" , 'shadow-sm' , "bg-white" , "text-center"] ,
                    styles:     styles,
                    prop_icon:     "&gt;"  ,

                    prop_iconClass : ["d-block" , "text-center" ] ,
                    prop_iconStyles : {
                        "cursor" : "pointer" ,
                        "font-size" : "20pt" ,
                        "color" : "#cecece" ,
                    } ,

                    fn_callback: (event) =>{
                        this.fn_gotoNextImage(event);
                    }
                }
            )

        }
    }

    componentFn_render_iconBtnPrevious(partName) {
        const data = this.getPartProps(partName);

        if (data != null){
            let styles = {
                "width" : "45px" ,
                "height" : "45px" ,
                "border-radius" : "100%" ,
                "line-height" : "40px" ,
                "top" : "50%" ,
                "right" : "0%" ,
                "transform" : "translate(-50%, -50%)" ,
                "z-index" : "2" ,
            }
            if (this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") && this._COMPONENT_CONFIG.directionRtl){
                styles[ "right"] = "-45px";
            }
            else{
                styles[ "left"] = "0";
            }

            new window.ComponentIcon(
                `component-slider-show-overlapping-btn-pervious-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList:     [ "position-absolute" , "border" , 'shadow-sm' , "bg-white" , "text-center"] ,
                    styles:       styles,
                    prop_icon:     "&lt;"  ,

                    prop_iconClass : ["d-block" , "text-center" ] ,
                    prop_iconStyles : {
                        "cursor" : "pointer" ,
                        "font-size" : "20pt" ,
                        "color" : "#cecece" ,
                    } ,

                    fn_callback: (event) =>{
                        this.fn_gotoPreviousImage(event);
                    }
                }
            )

        }
    }


    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_gotoNextImage(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_imageSelected")){
            this.fn_selectItemImage(event , data.prop_imageSelected + 1 );
        }
    }
    fn_gotoPreviousImage(event, timeInterval=true){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_imageSelected")){
            this.fn_selectItemImage(event , data.prop_imageSelected - 1 );
        }
    }

    fn_selectItemImage(event , indexImage ){

        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_images")){
            const length = data.prop_images.length;
            if (indexImage >= 0 && indexImage <= length-1){
                this.fn_defineTimeInterval(indexImage);
            }
            else if (indexImage > length-1){
                this.fn_defineTimeInterval(0);
            }
            else if (indexImage < 0){
                this.fn_defineTimeInterval( length-1);
            }
        }
    }

    fn_defineTimeInterval(indexImage = null){

        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_imageDuration")){

            if (indexImage != null){
                this.set("prop_imageSelected" , indexImage);
            }

            if (this._TILE_INTERVAL != null){
                clearInterval(this._TILE_INTERVAL)
            }

            this._TILE_INTERVAL = setInterval(() => {
                this.fn_gotoNextImage();
            } , data.prop_imageDuration);

        }
    }

}


/* ===============================================================================================================
 [15] Breadcrums
=============================================================================================================== */
/*-------------------------------------
 15-01) Breadcrumb
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_unactiveBreadcrumb
@prop_activeBreadcrumb
@prop_breadcrumbs

@fn_callback
@fn_onBackClick
-------------------------------------*/
window.ComponentBreadcrumb = class ComponentBreadcrumb extends ComponentBase {

    _TILE_INTERVAL = null;

    /* ---------------------------------------------
      PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_scroller: [

        ],
        part_btnBack: [
            {prop : "prop_showBtn"                       , default: true} ,
        ],
        part_breadcrumbs: [
            {prop : "prop_unactiveBreadcrumb"            , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("breadcrumb") && tools_const.styles.breadcrumb.hasOwnProperty("backgroundColor_unactive")   ? tools_const.styles.breadcrumb.backgroundColor_unactive : ""} ,
            {prop : "color_unactive"                     , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("breadcrumb") && tools_const.styles.breadcrumb.hasOwnProperty("color_unactive")   ? tools_const.styles.breadcrumb.color_unactive : ""} ,
            {prop : "prop_activeBreadcrumb"              , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("breadcrumb") && tools_const.styles.breadcrumb.hasOwnProperty("backgroundColor_active")   ? tools_const.styles.breadcrumb.backgroundColor_active : ""} ,
            {prop : "color_active"                       , default: tools_const.hasOwnProperty("styles") && tools_const.styles.hasOwnProperty("breadcrumb") && tools_const.styles.breadcrumb.hasOwnProperty("color_active")   ? tools_const.styles.breadcrumb.color_active : ""} ,
            {prop : "prop_breadcrumbs"                   , default: []} ,
            {prop : "prop_stepSelected"                  , default: 1} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_scroller:{
                part_btnBack:{} ,
                part_breadcrumbs:{}
            }
        }
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentBreadcrumb.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }


    /* ---------------------------------------------
     TEMPLATEs
    --------------------------------------------- */
    componentFn() {
    }

    templateFn(partName = null) {
        switch (partName) {
            case "part_structure":
                return this.template_render_structure(partName);

            case "part_btnBack":
                return this.template_render_btnBack(partName);

            case "part_scroller":
                return this.template_render_scroller(partName);

            case "part_breadcrumbs":
                return this.template_render_breadcrumbs(partName);

            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
       ${this.templateFn("part_scroller") ?? ""}
                `;
        return this.templateBasic_render_structure(content);
    }



    template_render_scroller(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            return `
<section data-part-name="${partName}" 
         id="component-breadcrumb-scroller-${this._COMPONENT_RANDOM_ID}" 
         class="w-100 position-relative" >
         
    <style>
        #${this._COMPONENT_ID} #component-breadcrumb-scroller-${this._COMPONENT_RANDOM_ID}{

        }
    </style>
    
     ${this.templateFn("part_btnBack") ?? ""}
     ${this.templateFn("part_breadcrumbs") ?? ""}
    
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }




    template_render_btnBack(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {
            const directionRtl               =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;
            const prop_showBtn               =  data.hasOwnProperty("prop_showBtn")                    ?  data.prop_showBtn                       : true;

            if (prop_showBtn){

                return `
<section data-part-name="${partName}" 
         id="component-breadcrumb-btn-back-${this._COMPONENT_RANDOM_ID}" 
         class="position-absolute border shadow-sm bg-white text-center rounded" onclick="${this.getFn('fn_onBackClick' , 'event')}">
         
    <style>
        #${this._COMPONENT_ID} #component-breadcrumb-btn-back-${this._COMPONENT_RANDOM_ID}{
             ${directionRtl ? 'right' : 'left'} : 0;
             top: 0;
             transform: translate(0 , 0);
             width: 30px;
             height: 30px;
             
             z-index: 10;
             cursor: pointer;
             font-size: 20pt;
             line-height: 30px;
        }
    </style>
    
     ${directionRtl ? "&#129170" : "&#129168"}
    
</section>
        `;
            }

        }
    }



    template_render_breadcrumbs(partName) {
        const data = this.getPartProps(partName)

        if (data != null) {

            const directionRtl               =  this._COMPONENT_CONFIG.hasOwnProperty("directionRtl")  ? this._COMPONENT_CONFIG.directionRtl      : false;

            const prop_unactiveBreadcrumb    =  data.hasOwnProperty("prop_unactiveBreadcrumb")         ?  data.prop_unactiveBreadcrumb            : "";
            const color_unactive             =  data.hasOwnProperty("color_unactive")                  ?  data.color_unactive                     : "";
            const prop_activeBreadcrumb      =  data.hasOwnProperty("prop_activeBreadcrumb")           ?  data.prop_activeBreadcrumb              : "";
            const color_active               =  data.hasOwnProperty("color_active")                    ?  data.color_active                       : "";
            const prop_breadcrumbs           =  data.hasOwnProperty("prop_breadcrumbs")                ?  data.prop_breadcrumbs                   : [];
            const prop_stepSelected          =  data.hasOwnProperty("prop_stepSelected")               ?  data.prop_stepSelected                  : 1;

            const {style , html} = this.fn_readyListBreadCrumb(prop_breadcrumbs , prop_activeBreadcrumb , color_active , prop_unactiveBreadcrumb , color_unactive , prop_stepSelected , directionRtl);

            return `
<section data-part-name="${partName}" 
         id="component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID}" 
         class="" >
         
    <style>
    
        #${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID}{
              display: flex;
              white-space: nowrap;
              overflow-x: auto;
        } 
       
        ${style}
 
    </style>
    
    ${html}
    
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
    fn_readyListBreadCrumb(prop_breadcrumbs , prop_activeBreadcrumb , color_active , prop_unactiveBreadcrumb , color_unactive , prop_stepSelected , directionRtl){
        let reusltExp = {
            html: "" ,
            style: ""
        }


        if(prop_breadcrumbs != null && Array.isArray(prop_breadcrumbs)){
            for (let i = 0; i < prop_breadcrumbs.length; i++) {
                const item = prop_breadcrumbs[i];
                const itemId = item!= null && item.hasOwnProperty("id") ? item.id : null;

                reusltExp.html += `<div class="item-breadcrumb-${i} position-relative" onclick="${this.getFn("fn_onSelectBreadcrumb" , 'event' , itemId)}"> ${item != null && item.hasOwnProperty("title") ? item.title : "---"} </div>`;

                if (i == 0){
                    reusltExp.style += `
#${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}{
            height: 30px;
            line-height: 30px;
            padding-left: ${directionRtl ? "30px": "45px"} ;
            padding-right: ${directionRtl ? "45px": "30px"} ;
            background-color: ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb};
            color: ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? color_active : color_unactive};
            float: left;
            cursor: pointer;  
        
            z-index: ${prop_breadcrumbs.length - i};
        
            border-radius:  ${directionRtl ? "0 5px 5px 0": "5px 0 0 5px"} ;
        }  
 #${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}:after{
           content: "";
           ${directionRtl ? "left": "right"} :  -30px;
           top: 0;
           position: absolute;
           width: 0px;
           height: 0px;
           border-style: solid;
           border-width: ${directionRtl ? " 15px 30px 15px 0": " 15px 0 15px 30px"};
           border-color: ${directionRtl ? `transparent ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb}  transparent transparent;`: `transparent transparent transparent ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb}`}; 
           transform: rotate(0deg);
        } 
#${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}:before{
           content: "";
           ${directionRtl ? "left": "right"} :  -36px;
           top: 0;
           position: absolute;
           width: 0px;
           height: 0px;
           border-style: solid;
           border-width: ${directionRtl ? " 15px 30px 15px 0": " 15px 0 15px 30px"};
           border-color: ${directionRtl ? "  transparent #fff transparent transparent ": "  transparent transparent transparent #fff "};
           transform: rotate(0deg);
        } 
                    `;

                }
                else if (i > 0 && i<prop_breadcrumbs.length - 1){

                    reusltExp.style += `
#${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}{
            height: 30px;
            line-height: 30px;
            padding-left: ${directionRtl ? "30px": "45px"} ;
            padding-right: ${directionRtl ? "45px": "30px"} ;
            background-color: ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb};
            color: ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? color_active : color_unactive};
            float: left;
            cursor: pointer;  
        
            z-index: ${prop_breadcrumbs.length - i};
        }  
 #${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}:after{
           content: "";
            ${directionRtl ? "left": "right"} :  -30px;
           top: 0;
           position: absolute;
           width: 0px;
           height: 0px;
           border-style: solid;
           border-width: ${directionRtl ? " 15px 30px 15px 0": " 15px 0 15px 30px"};
           border-color: ${directionRtl ? `transparent ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb}  transparent transparent;`: `transparent transparent transparent ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb}`}; 
           transform: rotate(0deg);
        } 
#${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}:before{
           content: "";
           ${directionRtl ? "left": "right"} :  -36px;
           top: 0;
           position: absolute;
           width: 0px;
           height: 0px;
           border-style: solid;
           border-width: ${directionRtl ? " 15px 30px 15px 0": " 15px 0 15px 30px"};
           border-color: ${directionRtl ? "  transparent #fff transparent transparent ": "  transparent transparent transparent #fff "};
           transform: rotate(0deg);
        } 
                    `;

                }
                else if ( i == prop_breadcrumbs.length - 1){
                    reusltExp.style += `
#${this._COMPONENT_ID} #component-breadcrumb-breadcrumbs-${this._COMPONENT_RANDOM_ID} .item-breadcrumb-${i}{
            height: 30px;
            line-height: 30px;
            padding-left: ${directionRtl ? "30px": "45px"} ;
            padding-right: ${directionRtl ? "45px": "30px"} ;
            background-color: ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? prop_activeBreadcrumb : prop_unactiveBreadcrumb};
            color: ${item != null && item.hasOwnProperty("id") && item.id == prop_stepSelected ? color_active : color_unactive};
            float: left;
            cursor: pointer;  
        
            z-index: ${prop_breadcrumbs.length - i};
            
            border-radius:  ${directionRtl ? "5px 0 0 5px": " 0 5px 5px 0"} ;
        }  
                    `;
                }

            }
        }

        return reusltExp;
    }


    fn_onSelectBreadcrumb(event , itemId){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            const prop_breadcrumbs = data.hasOwnProperty("prop_breadcrumbs") ? data.prop_breadcrumbs : [];

            let itemData = null;
            if (prop_breadcrumbs != null && Array.isArray(prop_breadcrumbs)){
                for (let i = 0; i < prop_breadcrumbs.length; i++) {
                    const item = prop_breadcrumbs[i];
                    if (item.hasOwnProperty("id") && item.id == itemId){
                        itemData = item;
                        break;
                    }
                }
            }

            data.fn_callback(event , itemData);
        }
    }


    fn_onBackClick(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onBackClick") && typeof data.fn_onBackClick != null){
            const prop_stepSelected = data.hasOwnProperty("prop_stepSelected") ? data.prop_stepSelected : null;

            data.fn_onBackClick(event , prop_stepSelected);
        }
    }

}





/* ===============================================================================================================
 [20] Charts
=============================================================================================================== */

/*-------------------------------------
 20-01) Component Chart
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type
@prop_TypeDirection

@prop_title_text
@prop_title_align

@prop_description_text
@prop_description_align

@prop_y_title_text
@prop_y_title_align

@prop_x_title_text
@prop_x_title_align

@prop_categories
@prop_series

@prop_tooltip_header
@prop_tooltip_format
-------------------------------------*/
window.ComponentChart = class ComponentChart extends ComponentBase{


    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_chart_element: [

        ] ,
        part_chart_view: [
            {prop : "prop_type"                  , default: 0} ,
            {prop : "prop_TypeDirection"         , default: 0} ,
            {prop : "prop_height"                , default: null} ,
            {prop : "prop_title_text"            , default: null} ,
            {prop : "prop_title_align"           , default: "left"} ,
            {prop : "prop_x_title_text"          , default: null} ,
            {prop : "prop_x_title_align"         , default: "left"} ,
            {prop : "prop_categories"            , default: []} ,
            {prop : "prop_series"                , default: []} ,
            {prop : "prop_tooltip_header"        , default: `<b>{series.name}</b><br />`} ,
            {prop : "prop_tooltip_format"        , default: `{point.y}`} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_chart_element: {
                part_chart_view: {}
            }
        } ,
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentChart.name] ,
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
        this.templateFn("part_chart_view");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_chart_element":
                return this.template_render_chartElement(partName);
            case "part_chart_view":
                return this.componentFn_render_chartView(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
  ${this.templateFn("part_chart_element") ?? ""}
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_chartElement(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section data-part-name="${partName}" 
         id="component-chart-element-${this._COMPONENT_RANDOM_ID}"
         class="">
         
     <style>
         #${this._COMPONENT_ID} #component-chart-element-${this._COMPONENT_RANDOM_ID}{
        
         }
     </style>
     
     <div id="component-chart-view-${this._COMPONENT_RANDOM_ID}"></div>
      
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_chartView(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            const prop_type            =  data.hasOwnProperty("prop_type")            ?  data.prop_type           : 0;
            let typeStr = null;
            switch (prop_type){
                case 0: typeStr = "line";       break;
                case 1: typeStr = "column";     break;
                case 2: typeStr = "bar";        break;
                case 3: typeStr = "pie";        break;
                case 4: typeStr = "area";       break;
                case 5: typeStr = "spline";     break;
                case 6: typeStr = "scatter";    break;
                case 7: typeStr = "areaspline"; break;
                case 8: typeStr = "heatmap";    break;
            }

            const prop_TypeDirection   =  data.hasOwnProperty("prop_TypeDirection")   ?  data.prop_TypeDirection  : 0;
            const prop_height          =  data.hasOwnProperty("prop_height")          ?  data.prop_height         : null;

            const prop_title_text      =  data.hasOwnProperty("prop_title_text")      ?  data.prop_title_text     : null;
            const prop_title_align     =  data.hasOwnProperty("prop_title_align")     ?  data.prop_title_align    : "left";

            const prop_x_title_text    =  data.hasOwnProperty("prop_x_title_text")    ?  data.prop_x_title_text   : null;
            const prop_x_title_align   =  data.hasOwnProperty("prop_x_title_align")   ?  data.prop_x_title_align  : "left";

            const prop_y_title_text    =  data.hasOwnProperty("prop_y_title_text")    ?  data.prop_y_title_text   : null;
            const prop_y_title_align   =  data.hasOwnProperty("prop_y_title_align")   ?  data.prop_y_title_align  : "left";

            const prop_categories      =  data.hasOwnProperty("prop_categories")      ?  data.prop_categories     : [];
            const prop_series          =  data.hasOwnProperty("prop_series")          ?  data.prop_series         : [];

            const prop_tooltip_header  =  data.hasOwnProperty("prop_tooltip_header")  ?  data.prop_tooltip_header : '<b>{series.name}</b><br />';
            const prop_tooltip_format  =  data.hasOwnProperty("prop_tooltip_format")  ?  data.prop_tooltip_format : '{point.y}';



            const chartOptions = {
                chart: {
                    height: prop_height,
                },
                title: {
                    text: prop_title_text ,
                    align: prop_title_align ,
                },
                series: prop_series ,
                tooltip: {
                    headerFormat: prop_tooltip_header,
                    pointFormat: prop_tooltip_format
                },
            }



            if ( typeStr != null){
                chartOptions["chart"]["type"] =  typeStr
            }

            if ( prop_TypeDirection != null && prop_TypeDirection == 0){
                chartOptions["xAxis"] =  {
                    title: {
                        text: prop_x_title_text ,
                        align: prop_x_title_align ,
                    },
                    categories: prop_categories
                }
            }
            if ( prop_TypeDirection != null && prop_TypeDirection == 1){
                chartOptions["yAxis"] =  {
                    title: {
                        text: prop_y_title_text ,
                        align: prop_y_title_align ,
                    } ,
                    categories: prop_categories
                }
            }

            console.log(prop_TypeDirection , prop_categories, chartOptions)

            Highcharts.chart(`component-chart-view-${this._COMPONENT_RANDOM_ID}`, chartOptions );

        }

    }

}






/* ===============================================================================================================
 [21] QR CODE
=============================================================================================================== */


/*-------------------------------------
 21-01) Component Qr Code
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_title
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_formClass
@prop_formStyles

@prop_value
@prop_size
@prop_version
-------------------------------------*/
window.ComponentQrCode = class ComponentQrCode extends ComponentBase{

    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_label: [

        ] ,
        part_qr_code_element: [
            {prop : "prop_formClass"                  , default: [ "border" , "rounded" , "shadow-sm" , "text-center"]} ,
            {prop : "prop_formStyles"                 , default: {}} ,
        ] ,
        part_qr_code_view: [
            {prop : "prop_value"                      , default: ""} ,
            {prop : "prop_size"                       , default: 4} ,
            {prop : "prop_version"                    , default: 3} ,
        ] ,
        part_qr_code_bottom: [

        ] ,
        part_qr_code_bottom_text: [
            {prop : "prop_value"                      , default: ""} ,
        ] ,
        part_qr_code_bottom_icon: [

        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label:{} ,
            part_qr_code_element: {
                part_qr_code_view: {} ,
                part_qr_code_bottom: {
                    part_qr_code_bottom_text: {} ,
                    part_qr_code_bottom_icon: {} ,
                } ,
            }
        } ,
    }


    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentQrCode.name] ,
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
        this.templateFn("part_qr_code_view");
        this.templateFn("part_qr_code_bottom_icon");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_qr_code_element":
                return this.template_render_qrCodeElement(partName);
            case "part_qr_code_view":
                return this.componentFn_render_qrCodeView(partName);
            case "part_qr_code_bottom":
                return this.template_render_qrCodeBottom(partName);
            case "part_qr_code_bottom_text":
                return this.template_render_qrCodeBottomText(partName);
            case "part_qr_code_bottom_icon":
                return this.componentFn_render_qrCodeBottomIcon(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
  <component-label id="component-qr-code-label-${this._COMPONENT_RANDOM_ID}"></component-label>
        
  ${this.templateFn("part_qr_code_element") ?? ""}
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_qrCodeElement(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_formClass     =  data.hasOwnProperty("prop_formClass")      ?  data.prop_formClass     : [];
            const prop_formStyles    =  data.hasOwnProperty("prop_formStyles")     ?  data.prop_formStyles    : {};

            return `
<section data-part-name="${partName}" 
         id="component-qr-code-element-${this._COMPONENT_RANDOM_ID}"
         class="${tools_public.renderListClass(prop_formClass)}">
         
     <style>
         #${this._COMPONENT_ID} #component-qr-code-element-${this._COMPONENT_RANDOM_ID}{
               ${tools_public.renderListStyle(prop_formStyles)}
         }
     </style>
     
     <div id="component-qr-code-view-${this._COMPONENT_RANDOM_ID}"></div>
     
       ${this.templateFn("part_qr_code_bottom") ?? ""}
      
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_qrCodeBottom(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section data-part-name="${partName}" 
         id="component-qr-code-bottom-${this._COMPONENT_RANDOM_ID}"
         onclick="${this.getFn("fn_onCLickCopy")}"
         class="mx-2 mb-1 rounded bg-dark text-white position-relative py-1">
         
     <style>
         #${this._COMPONENT_ID} #component-qr-code-bottom-${this._COMPONENT_RANDOM_ID}{
             cursor: pointer;
         }
     </style>
     
     ${this.templateFn("part_qr_code_bottom_text") ?? ""}
     
     <component-icon id="component-qr-code-bottom-icon-${this._COMPONENT_RANDOM_ID}"></component-icon>
      
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    template_render_qrCodeBottomText(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_value     =  data.hasOwnProperty("prop_value")      ?  data.prop_value     : "";

            return `
<section data-part-name="${partName}" 
         id="component-qr-code-bottom-text-${this._COMPONENT_RANDOM_ID}" 
         title="COPY"
         class="">
         
     <style>
         #${this._COMPONENT_ID} #component-qr-code-bottom-text-${this._COMPONENT_RANDOM_ID}{
             font-size: 10pt;
         }
     </style>
     
     ${prop_value}
     
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {
        this.componentFneBasic_render_structure(
            `component-qr-code-label-${this._COMPONENT_RANDOM_ID}` ,
            {
                prop_for:  `component-input-input-${ this._COMPONENT_RANDOM_ID}`
            }
        );
    }

    componentFn_render_qrCodeView(partName) {
        const data = this.getPartProps(partName);

        if (data != null){
            const prop_value     =  data.hasOwnProperty("prop_value")      ?  data.prop_value     : "";
            const prop_size      =  data.hasOwnProperty("prop_size")       ?  data.prop_size      : 4;
            const prop_version   =  data.hasOwnProperty("prop_version")    ?  data.prop_version   : 3;

            var qr = qrcode(prop_version, 'L')
            qr.addData(prop_value);
            qr.make();

            const el = document.querySelector(`div#component-qr-code-view-${this._COMPONENT_RANDOM_ID}`);
            if (el != null){
                el.innerHTML = qr.createSvgTag(prop_size)
            }
        }
    }

    componentFn_render_qrCodeBottomIcon(partName) {
        const data = this.getPartProps(partName);

        if (data != null){

            const styles = {
                "top" : "0" ,
            }
            styles[ this._COMPONENT_CONFIG.hasOwnProperty("directionRtl") && this._COMPONENT_CONFIG.directionRtl ? "right" : "left"] = "5px";

            new window.ComponentIcon(
                `component-qr-code-bottom-icon-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: [ "position-absolute" ] ,
                    styles: styles,

                    prop_icon : "&#x1F4CB;" ,
                    prop_iconClass : [] ,
                    prop_iconStyles : {
                        "font-size" : "14pt",
                    } ,
                }
            )
        }

    }


    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onCLickCopy(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("prop_value")){
            navigator.clipboard.writeText(data.prop_value).then(() => {
                alert("copied")
                console.log('متن کپی شد: ' , data.prop_value);
            }).catch(err => {
                console.error('خطا در کپی کردن متن: ', err);
            });
        }
    }
}


/*-------------------------------------
 21-02) Component Camera Qr Code Reader
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_title
@prop_labelShow
@prop_labelTooltipDescription
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_formMinHight

@prop_fps
@prop_qrbox

@prop_titleErrorExistCamera

@prop_titleErrorPermisionCamera
@prop_titleBtnRetry

@prop_name
@prop_showInput

@fn_callback
-------------------------------------*/
window.ComponentCameraQrCodeReader = class ComponentCameraQrCodeReader extends ComponentBase{

    _COMPONENT_CAMERA = null;
    _COMPONENT_ERROR_EXIST_CAMERA = null;
    _COMPONENT_ERROR_PERMISION_CAMERA = null;
    _COMPONENT_INPUT = null;

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,
        part_label: [

        ] ,
        part_form: [
            {prop : "prop_formMinHight"                 , default: "150px"} ,
        ] ,
        part_element: [
            {prop : "prop_fps"                          , default: 10} ,
            {prop : "prop_qrbox"                        , default: 250} ,
        ] ,
        part_error_exist_camera: [
            {prop : "prop_titleErrorExistCamera"        , default: "دوربینی در دستگاه شما یافت نشد"} ,
            {prop : "prop_titleBtnRetry"                , default: "تلاج مجدد"} ,
        ] ,
        part_error_permision_camera: [
            {prop : "prop_titleErrorPermisionCamera"    , default: "مجوز برای درخواست دوربین تایید نشد"} ,
            {prop : "prop_titleBtnRetry"                , default: "تلاج مجدد"} ,
        ] ,
        part_input: [
            {prop : "prop_showInput"                    , default: true} ,
            {prop : "prop_name"                         , default: "camera_qr_code"} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label:{} ,
            part_form:{
                part_element:{},
                part_error_exist_camera:{},
                part_error_permision_camera:{},
            } ,
            part_input:{}
        }
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentCameraQrCodeReader.name] ,
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
        this.templateFn("part_element");
        this.templateFn("part_input");
    }
    templateFn(partName = null){
        switch (partName){
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_form":
                return this.template_render_form(partName);
            case "part_element":
                return this.componentFn_render_formElement(partName);
            case "part_error_exist_camera":
                return this.componentFn_render_formErrorExistCamera(partName);
            case "part_error_permision_camera":
                return this.componentFn_render_formErrorPermisionCamera(partName);
            case "part_input":
                return this.componentFn_render_input(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
  
  <component-label id="component-camera-qr-code-reader-label-${this._COMPONENT_RANDOM_ID}"></component-label>
  
   ${this.templateFn("part_form") ?? ""}
  
  <component-input id="component-camera-qr-code-reader-input-${this._COMPONENT_RANDOM_ID}"></component-input>

                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_form(partName){
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_formMinHight          = data.hasOwnProperty("prop_formMinHight")                      ? data.prop_formMinHight          : "";

            return `
<section data-part-name="${partName}" 
         id="component-camera-qr-code-reader-form-${this._COMPONENT_RANDOM_ID}"
         class="border rounded my-2 px-2">
         
     <style>
         #${this._COMPONENT_ID} #component-camera-qr-code-reader-form-${this._COMPONENT_RANDOM_ID}{
             min-height: ${prop_formMinHight};
         }
     </style>
     
     <component-is-empty id="component-camera-qr-code-reader-error-exist-camera-${this._COMPONENT_RANDOM_ID}"></component-is-empty>
      
     <component-is-empty id="component-camera-qr-code-reader-error-permision-camera-${this._COMPONENT_RANDOM_ID}"></component-is-empty>
  
     <section id="component-camera-qr-code-reader-element-${this._COMPONENT_RANDOM_ID}" ></section>
 
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {
        this.componentFneBasic_render_structure(
            `component-camera-qr-code-reader-label-${this._COMPONENT_RANDOM_ID}` ,
        );
    }

    componentFn_render_formElement(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_fps            = data.hasOwnProperty("prop_fps")                        ? data.prop_fps            : 10;
            const prop_qrbox          = data.hasOwnProperty("prop_qrbox")                      ? data.prop_qrbox          : 250;

            let  cameraExist = false;

            this._COMPONENT_CAMERA = new Html5Qrcode(
                `component-camera-qr-code-reader-element-${this._COMPONENT_RANDOM_ID}`
            );
            Html5Qrcode.getCameras().then(devices => {

                for (const device of devices) {
                    if (device.hasOwnProperty("id") && device.id != ""){

                        html5QrCode.start(
                            cameraId,
                            {
                                fps: prop_fps,
                                qrbox: prop_qrbox,
                            },
                            (decodedText, decodedResult) => {
                                this.fn_onScanSuccess(decodedText, decodedResult);
                            },
                            (errorMessage) => {
                                console.log(errorMessage);
                            }
                        ).catch(err => {
                            console.log(err);
                        });

                        cameraExist = true;
                        break;
                    }
                }

            }).catch(err => {
                this.templateFn("part_error_permision_camera");
                this.fn_hiddenErrorExistCamera();
                cameraExist = true;
            });

            if (!cameraExist){
                this.templateFn("part_error_exist_camera");
                this.fn_hiddenErrorPermoisionCamera();
            }

        }
    }

    componentFn_render_formErrorExistCamera(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_titleErrorExistCamera    = data.hasOwnProperty("prop_titleErrorExistCamera")    ? data.prop_titleErrorExistCamera      : "";
            const prop_titleBtnRetry            = data.hasOwnProperty("prop_titleBtnRetry")            ? data.prop_titleBtnRetry              : "";

            this._COMPONENT_ERROR_EXIST_CAMERA = new window.ComponentIsEmpty(
                `component-camera-qr-code-reader-error-exist-camera-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "m-2"  ,

                    prop_title:  prop_titleErrorExistCamera ,
                    prop_btnAddStatus: true,
                    prop_btnAddTitle:  prop_titleBtnRetry ,

                    fn_callback: () => {
                        this.templateFn("part_element");
                    } ,
                }
            )
        }
    }

    componentFn_render_formErrorPermisionCamera(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_titleErrorPermisionCamera            = data.hasOwnProperty("prop_titleErrorPermisionCamera")                        ? data.prop_titleErrorPermisionCamera            : "";
            const prop_titleBtnRetry            = data.hasOwnProperty("prop_titleBtnRetry")            ? data.prop_titleBtnRetry              : "";

            this._COMPONENT_ERROR_PERMISION_CAMERA = new window.ComponentIsEmpty(
                `component-camera-qr-code-reader-error-permision-camera-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: "m-2"  ,

                    prop_title:  prop_titleErrorPermisionCamera ,

                    prop_btnAddStatus: true,
                    prop_btnAddTitle:  prop_titleBtnRetry ,

                    fn_callback: () => {
                        this.templateFn("part_element");
                    } ,
                }
            )

        }
    }

    componentFn_render_input(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name            = data.hasOwnProperty("prop_name")            ? data.prop_name              : "";
            const prop_showInput       = data.hasOwnProperty("prop_showInput")       ? data.prop_showInput         : true;

            this._COMPONENT_INPUT = new window.ComponentInput(
                `component-camera-qr-code-reader-input-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: [prop_showInput ? "" : "d-none"]  ,

                    prop_type:"string" ,
                    prop_icon:"&#x25A3;" ,
                    prop_name: prop_name ,
                    prop_isDisable: true ,

                }
            )

        }
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onScanSuccess(decodedText, decodedResult) {
        this._COMPONENT_INPUT.set("prop_value" , decodedText);
        this.fn_onCallback(decodedText);
    }

    fn_hiddenErrorExistCamera() {
        document.querySelector(`#component-camera-qr-code-reader-error-exist-camera-${this._COMPONENT_RANDOM_ID}`).innerHTML=""
    }
    fn_hiddenErrorPermoisionCamera() {
        document.querySelector(`#component-camera-qr-code-reader-error-permision-camera-${this._COMPONENT_RANDOM_ID}`).innerHTML=""
    }


    fn_onCallback(qrCodde){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(qrCodde);
        }
    }


}


/*-------------------------------------
 21-03) Component Upload Qr Code Reader
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_title
@prop_labelShow
@prop_labelTooltipDescription
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_formHight

@prop_name
@prop_showInput

@fn_callback
-------------------------------------*/
window.ComponentUploadQrCodeReader = class ComponentUploadQrCodeReader extends ComponentBase {

    _COMPONENT_INPUT_FILE = null;
    _COMPONENT_ERROR_EXIST_CAMERA = null;
    _COMPONENT_ERROR_PERMISION_CAMERA = null;
    _COMPONENT_INPUT = null;

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [],
        part_label: [],
        part_element: [
            {prop: "prop_formHight"                 , default: 150},
        ],
        part_input: [
            {prop : "prop_showInput"                , default: true} ,
            {prop: "prop_name"                      , default: "upload_qr_code"},
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label: {},
            part_element: {},
            part_input: {}
        }
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentUploadQrCodeReader.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }


    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn() {
        this.templateFn("part_label");
        this.templateFn("part_element");
        this.templateFn("part_input");
    }

    templateFn(partName = null) {
        switch (partName) {
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_element":
                return this.componentFn_render_formElement(partName);
            case "part_input":
                return this.componentFn_render_input(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure(partName) {
        const content = `
  
  <component-label id="component-upload-qr-code-reader-label-${this._COMPONENT_RANDOM_ID}"></component-label>
  
  <div id="component-upload-qr-code-reader-input-reader-${this._COMPONENT_RANDOM_ID}" style="display: none"></div>
  <component-input-file id="component-upload-qr-code-reader-input-file-${this._COMPONENT_RANDOM_ID}"></component-input-file>
  
  <component-input id="component-upload-qr-code-reader-input-${this._COMPONENT_RANDOM_ID}"></component-input>

                `;
        return this.templateBasic_render_structure(content);
    }


    componentFn_render_label(partName) {
        this.componentFneBasic_render_structure(
            `component-upload-qr-code-reader-label-${this._COMPONENT_RANDOM_ID}` ,
        );
    }

    componentFn_render_formElement(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_formHight     = data.hasOwnProperty("prop_formHight")                 ? data.prop_formHight     : 150;

            new window.ComponentInputFile(
                `component-upload-qr-code-reader-input-file-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_labelShow: false ,

                    prop_accept:  "image/*" ,
                    prop_maxCount: 1 ,
                    prop_borderHeight: prop_formHight+"px" ,
                    prop_showListFiles: false ,

                    fn_callback: (event , files) => {
                        if (files != null && files.length > 0){
                            this.fn_onScanSuccess(files[0]);
                        }
                    } ,

                }
            )

        }
    }

    componentFn_render_input(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name            = data.hasOwnProperty("prop_name")            ? data.prop_name              : "";
            const prop_showInput       = data.hasOwnProperty("prop_showInput")       ? data.prop_showInput         : true;

            this._COMPONENT_INPUT = new window.ComponentInput(
                `component-upload-qr-code-reader-input-${this._COMPONENT_RANDOM_ID}` ,
                {
                    classList: [prop_showInput ? "" : "d-none"]  ,

                    prop_type:"string" ,
                    prop_icon:"&#x25A3;" ,
                    prop_name: prop_name ,
                    prop_isDisable: true ,

                }
            )

        }
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */
    fn_onScanSuccess(file) {
        const html5Qr = new Html5Qrcode(
            `component-upload-qr-code-reader-input-reader-${this._COMPONENT_RANDOM_ID}`
        );
        html5Qr.scanFile(file, true)
            .then(decodedText => {
                this._COMPONENT_INPUT.set("prop_value" , decodedText);
                this.fn_onCallback(decodedText);
            })
            .catch(err => {
                console.log("خطا در خواندن QR: " + err)
            });
    }


    fn_onCallback(qrCodde){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(qrCodde);
        }
    }


}


/*-------------------------------------
 21-04) Component Qr Code Reader
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_title
@prop_labelShow
@prop_labelTooltipDescription
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_placeholder

@prop_formHight

@prop_name
@prop_value
@prop_showInput

@fn_callback
-------------------------------------*/
window.ComponentQrCodeReader = class ComponentQrCodeReader extends ComponentBase {

    _COMPONENT_LABEL = null;
    _COMPONENT_TABS = null;
    _COMPONENT_INPUT = null;
    _COMPONENT_QR_CODE_CAMERA = null;
    _COMPONENT_QR_CODE_UPLOAD = null;

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ],
        part_label: [

        ],
        part_tabs: [
            {prop : "prop_titleTabCamera"               , default: "دوربین"} ,
            {prop : "prop_titleTabFile"                 , default: "فایل"} ,
            {prop : "prop_titleTabInput"                , default: "ورودی"} ,
        ],
        part_qr_code: [

        ],
        part_qr_code_file: [

        ],
        part_qr_code_camera: [

        ],
        part_input: [
            {prop : "prop_name"                          , default: ""} ,
            {prop : "prop_value"                         , default: ""} ,
            {prop : "prop_placeholder"                   , default: ""} ,
        ],
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_label: {},
            part_tabs: {},
            part_qr_code: {
                part_qr_code_file: {} ,
                part_qr_code_camera: {} ,
            },
            part_input: {}
        }
    }


    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId, config) {
        super(
            listComponent[ComponentQrCodeReader.name],
            elId
        );
        this.onCreate(
            config,
            this._COMPONENT_PROPS,
            this._COMPONENT_SCHEMA
        )
        this.onTemplateComplete();
        this.onRegister();
    }


    /* ---------------------------------------------
      TEMPLATEs
    --------------------------------------------- */
    componentFn() {
        this.templateFn("part_label");
        this.templateFn("part_tabs");
        this.templateFn("part_tabs");
        this.templateFn("part_input");

        this.fn_onSelectTab(1);
    }

    templateFn(partName = null) {
        switch (partName) {
            case "part_structure":
                return this.template_render_structure(partName);
            case "part_label":
                return this.componentFn_render_label(partName);
            case "part_tabs":
                return this.componentFn_render_tabs(partName);
            case "part_qr_code":
                return this.template_render_qrCode(partName);
            case "part_qr_code_camera":
                return this.componentFn_render_qrCodeCamera(partName);
            case "part_qr_code_file":
                return this.componentFn_render_qrCodeFile(partName);
            case "part_input":
                return this.componentFn_render_input(partName);
            default:
                return this.templateBasic_render();
        }
    }


    template_render_structure(partName) {
        const content = `
  
  <component-label id="component-qr-code-reader-label-${this._COMPONENT_RANDOM_ID}"></component-label>

  <component-tabs id="component-qr-code-reader-tabs-${this._COMPONENT_RANDOM_ID}"></component-tabs>
  
   ${this.templateFn("part_qr_code") ?? ""}
  
  <component-input id="component-qr-code-reader-input-${this._COMPONENT_RANDOM_ID}"></component-input>
  
                `;
        return this.templateBasic_render_structure(content);
    }

    template_render_qrCode(partName) {
        const data = this.getPartProps(partName)

        if (data != null){

            return `
<section data-part-name="${partName}" 
         id="component-qr-code-reader-qr-code-${this._COMPONENT_RANDOM_ID}"
         class="">
         
     <style>
         #${this._COMPONENT_ID} #component-qr-code-reader-qr-code-${this._COMPONENT_RANDOM_ID}{
        
         }
     </style>
     
     
     <component-camera-qr-code-reader  id="component-qr-code-reader-qr-code-camera-${this._COMPONENT_RANDOM_ID}"></component-camera-qr-code-reader>
     
     <component-upload-qr-code-reader  id="component-qr-code-reader-qr-code-upload-${this._COMPONENT_RANDOM_ID}"></component-upload-qr-code-reader>
      
</section>
        `;
        }

        return `
<section data-part-name="${partName}"></section>
        `;
    }

    componentFn_render_label(partName) {
        this.componentFneBasic_render_structure(
            `component-qr-code-reader-label-${this._COMPONENT_RANDOM_ID}` ,
        );
    }

    componentFn_render_tabs(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_titleTabCamera        = data.hasOwnProperty("prop_titleTabCamera")          ? data.prop_titleTabCamera                   : "";
            const prop_titleTabFile          = data.hasOwnProperty("prop_titleTabFile")            ? data.prop_titleTabFile                     : "";
            const prop_titleTabInput         = data.hasOwnProperty("prop_titleTabInput")           ? data.prop_titleTabInput                    : "";

            this._COMPONENT_TABS = new window.ComponentTabs(
                `component-qr-code-reader-tabs-${this._COMPONENT_RANDOM_ID}` ,
                {

                    prop_type: 0 ,
                    prop_tabSelected: 1 ,
                    prop_firstCallBack: false ,
                    prop_tabs: [
                        {id:1 , title: prop_titleTabCamera } ,
                        {id:2 , title: prop_titleTabFile   },
                        {id:3 , title: prop_titleTabInput  }
                    ] ,
                    fn_callback: (event , tabIndex) =>{
                        this.fn_onSelectTab(tabIndex)
                    }
                }
            )

        }
    }

    componentFn_render_input(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name            = data.hasOwnProperty("prop_name")            ? data.prop_name              : "";
            const prop_value           = data.hasOwnProperty("prop_value")           ? data.prop_value             : "";
            const prop_placeholder     = data.hasOwnProperty("prop_placeholder")     ? data.prop_placeholder       : "";

            this._COMPONENT_INPUT = new window.ComponentInput(
                `component-qr-code-reader-input-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_type:"string" ,
                    prop_icon:"&#x25A3;" ,
                    prop_name: prop_name ,
                    prop_value: prop_value ,
                    prop_placeholder: prop_placeholder ,
                    prop_isDisable: true ,

                    fn_onblur: (event , qrCode) => {
                        this.fn_onScanSuccess(qrCode);
                    } ,

                }
            )

        }
    }

    componentFn_render_qrCodeCamera(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name            = data.hasOwnProperty("prop_name")            ? data.prop_name              : "";

            this._COMPONENT_QR_CODE_CAMERA = new window.ComponentCameraQrCodeReader(
                `component-qr-code-reader-qr-code-camera-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_labelShow: false ,
                    prop_showInput: false ,

                    fn_callback: (qrCode)=>{
                        this.fn_onScanSuccess(qrCode);
                    }
                }
            )

        }
    }

    componentFn_render_qrCodeFile(partName) {

        const data = this.getPartProps(partName)

        if (data != null){

            const prop_name            = data.hasOwnProperty("prop_name")            ? data.prop_name              : "";

            this._COMPONENT_QR_CODE_UPLOAD = new window.ComponentUploadQrCodeReader(
                `component-qr-code-reader-qr-code-upload-${this._COMPONENT_RANDOM_ID}` ,
                {
                    prop_labelShow: false ,
                    prop_showInput: false ,

                    fn_callback: (qrCode)=>{
                        this.fn_onScanSuccess(qrCode);
                    }
                }
            )

        }
    }



    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */


    fn_onSelectTab(tabId) {
        const tabCamera = document.querySelector(`#component-qr-code-reader-qr-code-camera-${this._COMPONENT_RANDOM_ID}`);
        const tabUpload = document.querySelector(`#component-qr-code-reader-qr-code-upload-${this._COMPONENT_RANDOM_ID}`);

        tabCamera.innerHTML = "";
        tabUpload.innerHTML = "";
        this._COMPONENT_INPUT.set("prop_isDisable" , true);

        if (tabId == 1){
            this.templateFn("part_qr_code_camera");
        }
        else if (tabId == 2){
            this.templateFn("part_qr_code_file");
        }
        else if (tabId == 3){
            this._COMPONENT_INPUT.set("prop_isDisable" , false);
        }
    }

    fn_onScanSuccess(decodedText) {
        this._COMPONENT_INPUT.set("prop_value" , decodedText);
        this.fn_onCallback(decodedText);
    }

    fn_onCallback(qrCodde){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(qrCodde);
        }
    }
}






/* ===============================================================================================================
 [99] OTHERs
=============================================================================================================== */

/*-------------------------------------
 99-01) Component Icon
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_isItalik

@prop_iconClass
@prop_iconStyles

@fn_callback
@fn_onHoverIcon
@fn_onBlurIcon
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
                return this.templateBasic_render([]);
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
       onclick="${this.getFn('fn_onCLickIcon' , "event")}"
       onmouseenter="${this.getFn('fn_onHoverIcon' , "event")}"
       onmouseleave="${this.getFn('fn_onBlurIcon' , "event")}"
       >
    
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
    fn_onHoverIcon(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onHoverIcon") && typeof data.fn_onHoverIcon != null){
            data.fn_onHoverIcon(event);
        }
    }
    fn_onBlurIcon(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_onBlurIcon") && typeof data.fn_onBlurIcon != null){
            data.fn_onBlurIcon(event);
        }
    }

}


/*-------------------------------------
 99-02) Component Position Element
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
 99-03) Component border
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_borderClass
@prop_borderStyles
@prop_content

@prop_btnMore_icon
@prop_btnMore_show
@prop_btnMore_link

@fn_callback
-------------------------------------*/
window.ComponentBorder = class ComponentBorder extends ComponentBase{

    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [
            {prop : "prop_structureClass"            , default: ["border" , "shadow-sm" , "rounded" , "px-1" , "px-2"]} ,
            {prop : "prop_structureStyles"           , default: {"position" : "relative" }} ,
        ] ,
        part_border: [
            {prop : "prop_borderClass"            , default: []} ,
            {prop : "prop_borderStyles"           , default: {}} ,
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

            const prop_borderClass      =  data.hasOwnProperty("prop_borderClass")                               ?  data.prop_borderClass   : [];
            const prop_borderStyles     =  data.hasOwnProperty("prop_borderStyles")                              ?  data.prop_borderStyles  : {};
            const prop_content          =  data.hasOwnProperty("prop_content")  && data.prop_content != null     ?  data.prop_content       : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            prop_content
            return `
<section data-part-name="${partName}" 
         id="component-border-border-${this._COMPONENT_RANDOM_ID}"
         class="${tools_public.renderListClass(prop_borderClass)}"
         onclick="${this.getFn("fn_callback" , "event")}">
         
     <style>
         #${this._COMPONENT_ID} #component-border-border-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_borderStyles)}
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

    fn_callback(event){
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
    }

}


/*-------------------------------------
 99-04) Component image
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
            {prop : "prop_imageClass"                , default: ["d-block" , "mx-auto"]} ,
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
         
         onclick="${this.getFn("fn_callback" , "event")}">
         
     <style>
         #${this._COMPONENT_ID} #component-image-image-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_imageStyles)}
         }
     </style>
     
      <img id="component-image-image-${this._COMPONENT_RANDOM_ID}"
           class="${tools_public.renderListClass(prop_imageClass)}"
           src="${prop_imageSource}" 
           title="${prop_imageTitle}" 
           alt="${prop_imageAlt}"/>
    
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
 99-04) Component image
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_layoutClass
@prop_layoutStyles
@prop_layoutContent
-------------------------------------*/
window.ComponentLayout = class ComponentLayout extends ComponentBase{


    /* ---------------------------------------------
     PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [
            {prop : "prop_structureClass"            , default: []} ,
            {prop : "prop_structureStyles"           , default: {}} ,
        ] ,
        part_layout: [
            {prop : "prop_layoutClass"               , default: []} ,
            {prop : "prop_layoutStyles"              , default: {}} ,
            {prop : "prop_layoutContent"             , default: null} ,
        ] ,
    }

    _COMPONENT_SCHEMA = {
        part_structure: {
            part_layout: {} ,
        } ,
    }



    /* ---------------------------------------------
       SETUP
    --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentLayout.name] ,
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
            case "part_layout":
                return this.template_render_layout(partName);
            default:
                return this.templateBasic_render();
        }
    }

    template_render_structure() {
        const content = `
 ${this.templateFn("part_layout") ?? ""}
                `;
        return this.templateBasic_render_structure(content );
    }

    template_render_layout(partName) {
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_layoutClass     =  data.hasOwnProperty("prop_layoutClass")                                        ?  data.prop_layoutClass     : [];
            const prop_layoutStyles    =  data.hasOwnProperty("prop_layoutStyles")                                       ?  data.prop_layoutStyles    : {};
            const prop_layoutContent   =  data.hasOwnProperty("prop_layoutContent")  && data.prop_layoutContent != null  ?  data.prop_layoutContent   : (this._COMPONENT_SLOTS != null && this._COMPONENT_SLOTS.hasOwnProperty("body") ? this._COMPONENT_SLOTS.body : '');

            return `
<section data-part-name="${partName}" 
         id="component-layout-layout-${this._COMPONENT_RANDOM_ID}"
         class=" ${tools_public.renderListClass(prop_layoutClass)}"
         >
         
     <style>
         #${this._COMPONENT_ID} #component-layout-layout-${this._COMPONENT_RANDOM_ID}{
             ${tools_public.renderListStyle(prop_layoutStyles)}
         }
     </style>
     
      ${prop_layoutContent}
    
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



    call_addElement(html , tagId= null , typeDirection=false){
        let elTarget = document.querySelector(`section#component-layout-layout-${this._COMPONENT_RANDOM_ID}`);
        if (tagId != null){
            elTarget = elTarget.querySelector(`#${tagId}`)
        }
        if (elTarget != null){
            if (typeDirection){
                elTarget.innerHTML += html;
            }
            else {
                elTarget.innerHTML = html;
            }
        }
    }

}


