/*
Name: Components
Developer: Mehdi Maarefian
Version: 0.1
*/


if (typeof listComponent === 'undefined') {
    var listComponent = {
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
    }
}
if (typeof components === 'undefined') {
    var components = {}
}




/* -------------------------------------
 Component Make:
------------------------------------- */
class ComponentMaker {
    define(elId , props , randomId , componentName, templateFn , onCreate , onRender) {

        if (!customElements.get(componentName)) {

            customElements.define(
                componentName,
                class extends HTMLElement {

                    constructor() {
                        super();
                        //this.el = document.createElement("div");

                       //  this.el.className = className;

                        // UID یکتا تنظیم می‌کنیم
                        //const uid = Math.floor(Math.random() * 1000000);
                       // this.setAttribute('data-uid', uid);
                        return this;
                    }


                  /*  constructor() {
                        super();
                        this.container = document.createElement("div");
                        this.appendChild(this.container);
                    }*/

                    static get observedAttributes() {
                        return ['data' ];
                    }


                    attributeChangedCallback(name, oldValue, newValue) {
                        if (name === 'data' && oldValue !== newValue) {
                            this.render();
                        }
                    }


                    render() {

                        const data = JSON.parse(this.getAttribute('data') || '{}');

                        let componentSlots = {};

                        const componentSlotNames = [...this.children].filter(
                            el => el.tagName.toLowerCase().startsWith('component-')
                        );
                        if (componentSlotNames != null && Array.isArray(componentSlotNames)){
                            for (const index in componentSlotNames) {
                                const componentTag = componentSlotNames[index];
                                componentSlots[componentTag.tagName.toLowerCase().replace(/^component-/, '')] = componentTag.innerHTML
                            }
                        }

                        if (data.hasOwnProperty("prop_show") && data.prop_show){
                            const html = templateFn(data, componentSlots , this );

                            const directionRtl = data.hasOwnProperty("directionRtl") ? data.directionRtl : component_props.directionRtl

                            if (this.innerHTML !== html) {
                                this.innerHTML = html;

                                const parents = this.querySelectorAll(".component-element-structure");

                                if (parent != null ){
                                    for (const index in parents) {
                                        const itemParent = parents[index];
                                        if (typeof itemParent.style != "undefined"){
                                            itemParent.style.setProperty('direction', directionRtl ? 'rtl' : 'ltr' , 'important');
                                            itemParent.style.setProperty('text-align', directionRtl ? 'right' : 'left' , 'important');
                                        }
                                    }

                                }

                            }
                        }
                        else {
                            this.innerHTML = "<!--hidden-component-->";
                        }


                        Promise.resolve().then(() => {
                            if (typeof onRender === 'function') {
                                onRender(data, componentSlots, this );
                            }
                        });

                        /*requestAnimationFrame(() => {
                            if (typeof onRender === 'function') {
                                onRender(data, componentSlots, this);
                            }
                        });*/
                    }

                    connectedCallback() {
                        const data = JSON.parse(this.getAttribute('data') || '{}');
                        if (typeof onCreate === 'function') {
                            onCreate(data ,this);
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

    constructor(elId , config , componentName , methods , randomId = null ) {

        this.elId = elId;
        this.randomId = Math.floor(Math.random() * 10000);;
        this.config = this.readyStaticConfig(config);
        this.componentName = componentName // +"-" + Math.floor(Math.random() * 10000);

     /*   let el = document.getElementById(elId);
        el = this.replaceTag(elId , this.componentName)*/

        components[randomId] = config;

        this.setMethods(methods);
    }

    getConfig(){
        return this.config;
    }


  /*  replaceTag(elId, newTagName) {
        const oldEl = document.getElementById(elId);
        if (!oldEl) return;

        const newEl = document.createElement(newTagName);

        // کپی کردن همه attribute‌ها
        for (const attr of oldEl.attributes) {
            newEl.setAttribute(attr.name, attr.value);
        }

        // کپی کردن محتوا
        newEl.innerHTML = oldEl.innerHTML;

        // جایگزین کردن در DOM
        oldEl.parentNode.replaceChild(newEl, oldEl);

        return newEl; // در صورت نیاز به ادامه کار
    }*/

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

    /*refresh(config){
        this.config = config;
        this.render();
    }*/

    readyAttrs(){
       // const el = document.getElementById(this.elId);

        const els = document.querySelectorAll(`#${this.elId}`);
        els.forEach(el => {

            if (!el) {
                console.warn(`Element with id '${this.elId}' not found`);
                return;
            }


            this.config.methods = this.methods;
            const newData = JSON.stringify(this.config);
            const currentData = el.getAttribute("data");

            // اگر مقدار جدید همان مقدار قبلی است، نیازی به set نیست
            if (currentData === newData) {
                return;
            }

            el.setAttribute("data", newData);


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
            this.randomId ,
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
            }
        )
    }


}




/*-------------------------------------
 Component Messages
-------------------------------------
@prop_status
@prop_background
@prop_color
@prop_messages
-------------------------------------*/
window.ComponentMessages = class ComponentMessages extends ComponentBase{

    constructor(elId , config) {

        let methods = {};
        config["var_randomId"]= Math.floor(Math.random() * 10000);


        methods["closeMessage"] = {
            name: `closeMessage_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (index) => {
                const var_randomId          =  config.hasOwnProperty("var_randomId")     ?  config.var_randomId        :  0;

                if ( components.hasOwnProperty(var_randomId)) {
                    const el = document.getElementById(elId);
                    const formMessage = el.getElementsByClassName(`text-message-${var_randomId}-${index}`);
                    if (formMessage != null){
                        formMessage[0].remove();
                    }
                }

            }
        };

        super(elId , config , listComponent[ComponentMessages.name] , methods ,  config["var_randomId"]);

        this.render()
    }

    templateFn =(data , componentSlots , el) => {

        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];

            const prop_status =       componentData.hasOwnProperty("prop_status")             ?          componentData.prop_status        :  true;
            const prop_background =   componentData.hasOwnProperty("prop_background")         ?          componentData.prop_background    :  (prop_status ? tools_const.styles.message.backgroundColor_success: tools_const.styles.message.backgroundColor_error);
            const prop_color =        componentData.hasOwnProperty("prop_color")              ?          componentData.prop_color         :  (prop_status ?    tools_const.styles.message.color_success: tools_const.styles.message.color_error);

            if (data.hasOwnProperty("prop_messages")){
                let html = ``;
                html += `<div class="mx-2 px-2 ">`;

             /*   const closeMessage = super.getMethod(data , "closeMessage");*/
                /*<span class="   " onclick="${closeMessage}">&#10005;</span>*/
                for (const index in data.prop_messages) {
                    html += `
<style>
#${el.id} .text-message-${var_randomId}-${index}{
     background-color: ${prop_background};
     color: ${prop_color};
}
</style>
<div class="component-element-structure mb-2 text-message-${var_randomId}-${index}    mt-2" role="alert">
    <p class="text-message-${var_randomId}-${index} alert shadow-sm">
      ${data.prop_messages[index]}
<component-icon id="icon-message-${var_randomId}-${index}"></component-icon>
    </p>
</div>
`;
                }

                html += `</div>`;

                return html;
            }
            return  "";
        }


    }


    onRender = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        this.readyIconInput(var_randomId);
    }

    readyIconInput = (var_randomId) => {
        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];

            const prop_messages =  componentData.hasOwnProperty("prop_messages")     ?  componentData.prop_messages        :  0;
            const directionRtl =   componentData.hasOwnProperty("directionRtl")      ?  componentData.directionRtl         :  component_props.directionRtl

            const closeMessage = super.getMethod(componentData , "closeMessage" , null);

            for (const index in prop_messages) {


                new window.ComponentIcon(
                    "icon-message-"+  var_randomId + "-"+ index  ,
                    {
                        classList:     [ directionRtl ? "float-start" :  "float-end" ] ,
                        prop_icon:     "&#10005"  ,

                        prop_iconClass : ["mx-2" ] ,
                        prop_iconStyles : {
                            "cursor" : "pointer"
                        } ,

                        fn_callback: () =>{
                            window[closeMessage](index)
                        }
                    }
                )
            }

        }

    }

}





/*-------------------------------------
 Component Loading
-------------------------------------
@prop_background_loading
@prop_background_shadow
-------------------------------------*/
window.ComponentLoading = class ComponentLoading extends ComponentBase{

    constructor(elId , config) {

        config["var_randomId"]= Math.floor(Math.random() * 10000);
        let methods = {};

        super(elId , config , listComponent[ComponentLoading.name] , methods ,  config["var_randomId"]);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const var_randomId     =   data.hasOwnProperty("var_randomId")      ?  data.var_randomId      :  0;

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];

            const prop_background_loading = componentData.hasOwnProperty("prop_background_loading") ? componentData.prop_background_loading : tools_const.styles.loading.backgroundColor_shadow;
            const prop_background_shadow  = componentData.hasOwnProperty("prop_background_shadow")   ? componentData.prop_background_shadow   : tools_const.styles.loading.backgroundColor_loading;


            return  `
<style>
#${el.id} .form-loading-${var_randomId}{
    left: 0;
    top: 0;
    z-index: 5000;
    background-color: ${prop_background_loading};
}

#${el.id} .lds-ring-${var_randomId} {
    z-index: 12;
    color: ${prop_background_shadow};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
#${el.id} .lds-ring-${var_randomId},
#${el.id} .lds-ring-${var_randomId} div {
    box-sizing: border-box;
}
#${el.id} .lds-ring-${var_randomId} {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
#${el.id} .lds-ring-${var_randomId} div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: lds-ring-${var_randomId} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
}
#${el.id} .lds-ring-${var_randomId} div:nth-child(1) {
    animation-delay: -0.45s;
}
#${el.id} .lds-ring-${var_randomId} div:nth-child(2) {
    animation-delay: -0.3s;
}
#${el.id} .lds-ring-${var_randomId} div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring-${var_randomId} {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

    <section class="fcomponent-element-structure form-loading-${var_randomId} position-absolute  w-100 h-100" >
        <div class="lds-ring-${var_randomId} position-absolute"><div></div><div></div><div></div><div></div></div>
    </section>
        `;
        }


    }

}






/*-------------------------------------
 Component 404
-------------------------------------
@prop_type
@prop_btnRetry    prop_type  prop_title  prop_btnClass
@prop_width
@prop_height

@fn_callback
-------------------------------------*/
window.Component404 = class Component404 extends ComponentBase{

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["button404Retry"] = {
            name: `retry404_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: () => {

                const var_randomId     =   config.hasOwnProperty("var_randomId")      ?  config.var_randomId      :  0;

                if ( components.hasOwnProperty(var_randomId)) {

                    const componentData = components[var_randomId];

                    if (componentData.hasOwnProperty("fn_callback") && typeof componentData.fn_callback != null){
                        componentData.fn_callback();
                    }

                }
            }
        };

        super(elId , config , listComponent[Component404.name] , methods ,  config["var_randomId"]);

        this.render()
    }

    templateFn = (data , componentSlots , el) => {

        const var_randomId     =   data.hasOwnProperty("var_randomId")      ?  data.var_randomId      :  0;

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_type =      componentData.hasOwnProperty("prop_type")      ?   componentData.prop_type             : 0;

            const prop_width =     componentData.hasOwnProperty("prop_width")     ? componentData.prop_width     : 250;
            const prop_height =    componentData.hasOwnProperty("prop_height")    ? componentData.prop_height    : 100;


            const button404Retry = super.getMethod(componentData , "button404Retry");

            if (prop_type == 0){

                return `
<style>
#${el.id} .form-404-animation{
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${tools_const.styles.state404.backgroundColor_shadow};
}


#${el.id} #svgWrap_1,
#${el.id} #svgWrap_2{
    position: absolute;
    height: auto;
    width: ${prop_width}px;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
}

#${el.id} #svgWrap_0{
 height: ${prop_height}px
}

#${el.id} #svgWrap_1,
#${el.id} #svgWrap_2,


#${el.id} #id1_1,
#${el.id} #id2_1,
#${el.id} #id3_1{
    stroke: #11539c;
    stroke-width: 3px;
    fill: transparent;
    filter: url(#glow);
}

#${el.id} #id1_2,
#${el.id} #id2_2,
#${el.id} #id3_2{
    stroke-width: 3px;
    fill: transparent;
    filter: url(#glow);
}

#${el.id} #id3_1{
    stroke-dasharray: 940px;
    stroke-dashoffset: -940px;
    animation: drawLine3 2.5s ease-in-out 0s forwards, flicker3 4s linear 4s infinite;
}

#${el.id} #id2_1{
    stroke-dasharray: 735px;
    stroke-dashoffset: -735px;
    animation: drawLine2 2.5s ease-in-out 0.5s forwards, flicker2 4s linear 4.5s infinite;
}

#${el.id} #id1_1{
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

     <section class="component-element-structure mb-2 form-404-animation w-100 h-100 rounded ">

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
        
        
        <section class="d-block mt-2 mx-5">
           <component-button id="form-button-404-${var_randomId}" ></component-button>
        </section>
         

    </section>
            `
            }
            else if (prop_type == 1){


                return `
<style>

 #${el.id} .section-404-space-bot{
    min-height: 200px;
    background-color: ${tools_const.styles.backShadow.backgroundColor};
    top: 0;
    left: 0;
}
 #${el.id} .img-404-space-bot{
    width: 250px;
}
</style>
            
          <section class="component-element-structure mb-2 section-404-space-bot position-absolute w-100 rounded py-2">
              <img class="img-404-space-bot d-block mx-auto rounded" src='${tools_const.botResPath}/bot-404.png'/>
            
              <section class="d-block mt-2 mx-5">
                 <component-button id="form-button-404-${var_randomId}"></component-button>
              </section>
          </section>
`
            }

            return "[404]"
        }

    }


    onRender = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        this.readyBbbtnRetry(var_randomId);
    }

    readyBbbtnRetry = (var_randomId) => {

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_btnRetry =  componentData.hasOwnProperty("prop_btnRetry")  ?   componentData.prop_btnRetry : {};

            const button404Retry = super.getMethod(componentData , "button404Retry" , null);
            new window.ComponentButton(
                "form-button-404-"+var_randomId ,
                {
                    prop_title:       prop_btnRetry != null && prop_btnRetry.hasOwnProperty("prop_title")      ? prop_btnRetry.prop_title           : "Retry" ,
                    prop_btnClass:    prop_btnRetry != null && prop_btnRetry.hasOwnProperty("prop_btnClass")   ? prop_btnRetry.prop_btnClass        : "w-100" ,
                    prop_type:        prop_btnRetry != null && prop_btnRetry.hasOwnProperty("prop_type")       ? prop_btnRetry.prop_type            : null ,
                    fn_callback: ()=>{
                        window[button404Retry]();
                    }
                }
            )
        }

    }
}






/*-------------------------------------
 Component Form
-------------------------------------
@prop_btnSubmit
@prop_formClass
@prop_forms
-------------------------------------*/
window.ComponentForm = class ComponentForm extends ComponentBase{
    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);


        let methods = {};
        methods["button404Retry"] = {
            name: `button404Retry${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                const var_randomId     =   config.hasOwnProperty("var_randomId")      ?  config.var_randomId      :  0;

                if ( components.hasOwnProperty(var_randomId)) {

                    const componentData = components[var_randomId];

                    tools_component.control(
                        "Component404" ,
                        {
                            elId : "template-error-404-"+var_randomId
                        },
                        false
                    )
                }
            }
        };
        methods["buttonSubmitForm"] = {
            name: `buttonSubmitForm${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {

                const var_randomId = config.hasOwnProperty("var_randomId") ? config.var_randomId : 0;

                if (components.hasOwnProperty(var_randomId)) {

                    const componentData = components[var_randomId];

                    const elementForm =  document.getElementById(elId).getElementsByClassName("form-data-" + var_randomId);
                    let formData = [];
                    if (elementForm != null && elementForm.length > 0) {
                        formData = elementForm[0];
                    }


                    tools_submit.fetcth(
                        config.hasOwnProperty("url") ? config.url : "",
                        {
                            data: {
                                formData: formData,
                                data: componentData.hasOwnProperty("data") ? componentData.data : []
                            },
                            componentMessagesData: {elId: "list-message-" + var_randomId},
                            componentLoadingData: {elId: "template-loading-" + var_randomId},
                            component404Data: {
                                elId: "template-error-404-" + var_randomId,
                                fn_callback: window[methods.button404Retry.name]
                            },
                        });
                }
            }
        };

        super(elId , config , listComponent[ComponentForm.name] , methods , config["var_randomId"]);

        this.render()
    }

    templateFn(data , componentSlots , el){
        const var_randomId     =   data.hasOwnProperty("var_randomId")      ?  data.var_randomId      :  0;

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];

            const prop_forms =     componentData.hasOwnProperty("prop_forms")       ? componentData.bgColor           : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
            const prop_formClass = componentData.hasOwnProperty("prop_formClass")   ? componentData.prop_formClass    : "border shadow-sm round mx-2 my-2 bg-white py-2 px-3";

            const methodSubmit = super.getMethod(componentData , "buttonSubmitForm");

            return  `
<style>
  #${el.id} .form-parent-${var_randomId}{
    min-hight: 100px
}
</style>

<section class="component-element-structure mb-2 form-parent position-relative ${prop_formClass}">
    <component-messages id="list-message-${var_randomId}"></component-messages>
    
    <form class="form-data-${var_randomId}">
       ${prop_forms}
    </form>
    
    <section class="row">
         <component-button id="form-button-submit-${var_randomId}"></component-button>
    </section>

    <component-404 id="template-error-404-${var_randomId}"></component-404>

    <component-loading id="template-loading-${var_randomId}"></component-loading>
</section>
        `;
        }

    }

    onCreate(data , el){

    }


    onRender = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        this.readyBbbtnSubmit(var_randomId);
    }

    readyBbbtnSubmit = (var_randomId) => {

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];

            const buttonSubmitForm = super.getMethod(componentData , "buttonSubmitForm" , null);
            const prop_btnSubmit =  componentData.hasOwnProperty("prop_btnSubmit")  ?   componentData.prop_btnSubmit : {};

            new window.ComponentButton(
                "form-button-submit-"+var_randomId ,
                {
                    prop_title:       prop_btnSubmit != null && prop_btnSubmit.hasOwnProperty("prop_title")      ? prop_btnSubmit.prop_title           : "submit" ,
                    prop_btnClass:    prop_btnSubmit != null && prop_btnSubmit.hasOwnProperty("prop_btnClass")   ? prop_btnSubmit.prop_btnClass        : "d-inline-block" ,
                    prop_type:        prop_btnSubmit != null && prop_btnSubmit.hasOwnProperty("prop_type")       ? prop_btnSubmit.prop_type            : null ,

                    fn_callback: ()=>{
                        window[buttonSubmitForm]();
                    }
                }
            )

        }

    }

}




/*-------------------------------------
 Component Is Empty
-------------------------------------
@prop_title
@prop_icon
@prop_iconClass

@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddTitle
@prop_btnAddClass

@fn_callback
-------------------------------------*/
window.ComponentIsEmpty = class ComponentIsEmpty extends ComponentBase{
    constructor(elId , config) {

        config["var_randomId"]= Math.floor(Math.random() * 10000);
        let methods = {};
        methods["callback"] = {
            name: `callback${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback();
                }
            }
        };

        super(elId , config , listComponent[ComponentIsEmpty.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        //------------------
        const var_randomId     =   data.hasOwnProperty("var_randomId")      ?  data.var_randomId      :  0;

        //------------------
        const prop_title         =      data.hasOwnProperty("prop_title")                   ?  data.prop_title        : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_icon          =      data.hasOwnProperty("prop_icon")                    ?  data.prop_icon         : "&#9888;";
        const prop_iconClass     =      data.hasOwnProperty("prop_iconClass")               ?  data.prop_iconClass    : " font-30pt text-danger";

        const prop_btnAddStatus  =        data.hasOwnProperty("prop_btnAddStatus")          ?  data.prop_btnAddStatus           :  false;
        const prop_btnAddIcon    =        data.hasOwnProperty("prop_btnAddIcon")            ?  data.prop_btnAddIcon             :  "&#10082;";
        const prop_btnAddTitle   =        data.hasOwnProperty("prop_btnAddTitle")           ?  data.prop_btnAddTitle            :  "add item";


        let btnAddStatus = "";
        if (prop_btnAddStatus){
            btnAddStatus = `
<component-button id="button-tools-component-input-${var_randomId}">
     <component-body>
          <span class="mx-3">
              ${prop_btnAddIcon}
          </span>
          <span class="d-none d-md-inline">
              ${prop_btnAddTitle}
          </span>
     </component-body>
</component-button>
            `
        }


        return `
<style>

#${el.id} .form-warning-not-exist-response-${var_randomId}{
    text-align: center!important;
}

#${el.id} .icon-warning-not-exist-response-${var_randomId}{
    font-size: 30px;
    display: block;
}

</style>

    <section class="component-element-structure mb-2">
        <section class="form-warning-not-exist-response-${var_randomId} border border-danger text-danger  rounded shadow-sm">
            <p class="">
               <span class="icon-warning-not-exist-response-${var_randomId}  ${prop_iconClass}">${prop_icon}</span>
               ${prop_title}
            </p>
            
            <div style="display: flow-root">
                ${btnAddStatus}
            </div>
            
        </section>        
         
    </section>
            `;

    }

    onRender = (data , componentSlots , el) => {
        this.readyButtonTools(data , componentSlots , el);
    }

    readyButtonTools  = (data , componentSlots , el) => {

        const var_randomId    =   data.hasOwnProperty("var_randomId")        ?  data.var_randomId   :  0;
        const prop_btnAddStatus   =   data.hasOwnProperty("prop_btnAddStatus")  ?  data.prop_btnAddStatus   :  false;

        const callback    =    super.getMethod(data , "callback"     , null );

        const prop_btnAddClass    =   data.hasOwnProperty("prop_btnAddClass")  ?  data.prop_btnAddClass   :  ["btn" , "btn-light"];

        if (prop_btnAddStatus){
            new window.ComponentButton(
                "button-tools-component-input-"+var_randomId ,
                {
                    prop_btnClass: prop_btnAddClass ,
                    prop_btnStyles: {
                        "cursor" : "pointer" ,
                        "width" : "160px" ,
                        "height" : "32px" ,
                        "text-align" : "center!important" ,
                    },

                    fn_callback: ()=>{
                        window[callback]()
                    }
                }
            )
        }
    }
}




/*-------------------------------------
 Component Header
-------------------------------------
@prop_size
@prop_title
@prop_classList
-------------------------------------*/
window.ComponentHeader = class ComponentHeader extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        super(elId , config , listComponent[ComponentHeader.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_size =      data.hasOwnProperty("prop_size")       ?  data.prop_size  : 5;
        const prop_title =      data.hasOwnProperty("prop_title")       ?  data.prop_title  : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_classList = data.hasOwnProperty("prop_classList")  ?  data.prop_classList  : "pb-0 px-2 mb-1 border-bottom";

        return `<h${prop_size} class="component-element-structure mb-2 ${prop_classList ?? ''} ">${prop_title ?? ''}</h${prop_size}>`;
    }
}




/*-------------------------------------
 Component Table
-------------------------------------
@prop_tableType
@prop_tableBordered
@prop_tableStriped
@prop_tableHover
@prop_tableBorderless
@prop_order
@prop_data
@prop_header
-------------------------------------*/
window.ComponentTable = class ComponentTable extends ComponentBase{

    TYPE_SELECTED_NONE  = 0;
    TYPE_SELECTED_ROW  = 1;
    TYPE_SELECTED_COL  = 2;
    TYPE_SELECTED_BOTH = 3;

    constructor(elId , config) {

        let methods = {};
        methods["onSelectCol"] = {
            name: `onSelectCol${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event , key  , colIndex, rowIndex) => {
                const el = event.target;
                const value = el.innerHTML.trim();

                config.prop_valueRow = rowIndex;
                config.prop_valueCol = colIndex;
                this.changeProperty(config);

                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback(value , key , colIndex , rowIndex);
                }
            }
        };

        super(elId , config , listComponent[ComponentTable.name] , methods);

        this.render()
    }

    templateFn = (data , componentSlots , el) => {

        //----------------
        const prop_tableType                  =   data.hasOwnProperty("prop_tableType")                ?  data.prop_tableType                : 0;
        const prop_tableBordered              =   data.hasOwnProperty("prop_tableBordered")            ?  data.prop_tableBordered            : 0;
        const prop_tableStriped               =   data.hasOwnProperty("prop_tableStriped")             ?  data.prop_tableStriped             : false;
        const prop_tableHover                 =   data.hasOwnProperty("prop_tableHover")               ?  data.prop_tableHover               : false;
        const prop_tableBorderless            =   data.hasOwnProperty("prop_tableBorderless")          ?  data.prop_tableBorderless          : false;

        let   prop_valueRow                   =     data.hasOwnProperty("prop_valueRow")               ?      data.prop_valueRow             :  null;
        let   prop_valueCol                   =     data.hasOwnProperty("prop_valueCol")               ?      data.prop_valueCol             :  null;

        const prop_valueType                  =   data.hasOwnProperty("prop_valueType")                ?  data.prop_valueType                : this.TYPE_SELECTED_NONE;
        const prop_valueRow_backgroundColor   =   data.hasOwnProperty("prop_valueRow_backgroundColor") ?  data.prop_valueRow_backgroundColor : tools_const.styles.table.backgroundColor_rowSelected;
        const prop_valueCol_backgroundColor   =   data.hasOwnProperty("prop_valueCol_backgroundColor") ?  data.prop_valueCol_backgroundColor : tools_const.styles.table.backgroundColor_columnSelected;
        const prop_valueCol_textColor         =   data.hasOwnProperty("prop_valueCol_textColor")       ?  data.prop_valueCol_textColor       : tools_const.styles.table.backgroundColor_textSelected;

        const prop_order                      =   data.hasOwnProperty("prop_order")                    ?  data.prop_order                    : [];
        const prop_data                       =   data.hasOwnProperty("prop_data")                     ?  data.prop_data                     : [];
        const prop_header                     =   data.hasOwnProperty("prop_header")                   ?  data.prop_header                   : [];

        const prop_tableClass                 =   data.hasOwnProperty("prop_tableClass")              ?  data.prop_tableClass               : ["table"];
        const prop_tableStyles                =   data.hasOwnProperty("prop_tableStyles")             ?  data.prop_tableStyles              : null;

        const prop_tableHeadClass             =   data.hasOwnProperty("prop_tableHeadClass")          ?  data.prop_tableHeadClass           : [];
        const prop_tableHeadStyles            =   data.hasOwnProperty("prop_tableHeadStyles")         ?  data.prop_tableHeadStyles          : null;

        const prop_tableItemHeadClass         =   data.hasOwnProperty("prop_tableItemHeadClass")      ?  data.prop_tableItemHeadClass       : [];
        const prop_tableItemHeadStyles        =   data.hasOwnProperty("prop_tableItemHeadStyles")     ?  data.prop_tableItemHeadStyles      : null;

        const prop_tableBodyClass             =   data.hasOwnProperty("prop_tableBodyClass")          ?  data.prop_tableBodyClass           : [];
        const prop_tableBodyStyles            =   data.hasOwnProperty("prop_tableBodyStyles")         ?  data.prop_tableBodyStyles          : null;

        const prop_tableItemBodyClass         =   data.hasOwnProperty("prop_tableItemBodyClass")         ?  data.prop_tableItemBodyClass           : [];
        const prop_tableItemBodyStyles        =   data.hasOwnProperty("prop_tableItemBodyStyles")        ?  data.prop_tableItemBodyStyles          : null;
        const prop_tableItemBodyHoverStyles   =   data.hasOwnProperty("prop_tableItemBodyHoverStyles")   ?  data.prop_tableItemBodyHoverStyles     : null;

        //----------------
        const onSelectCol = super.getMethod(data , "onSelectCol"    , null);

        //----------------
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

        let htmlHeader = "";
        let htmlBody = "";
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
<th class="element-item-header-table ${super.renderListClass(prop_tableItemHeadClass)}" 
   scope="col">
     ${itemHeader.hasOwnProperty("content") ? itemHeader.content : '#'}
</th>`
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
    <span class="${colClassSelected} ${super.renderListClass(prop_tableItemBodyClass)}" onclick="${onSelectCol}(event , '${itemHeader.id}', '${headerIndex}' , '${bodyIndex}')")">
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
<style>
 #${el.id} .icon-false-table{
   font-size: 15pt;
}
 #${el.id} .icon-true-table{
   font-size: 10pt;
}

#${el.id} .element-table{
   ${super.renderListStyle(prop_tableStyles)}
}
#${el.id} .element-header-table{
   ${super.renderListStyle(prop_tableHeadStyles)}
}
#${el.id} .element-item-header-table{
   ${super.renderListStyle(prop_tableItemHeadStyles)}
}
#${el.id} .element-body-table{
   ${super.renderListStyle(prop_tableBodyStyles)}
}
#${el.id} .element-item-body-table span{
   ${super.renderListStyle(prop_tableItemBodyStyles)}
   
   text-align: center!important;
}
#${el.id} .element-item-body-table:hover span{
   ${super.renderListStyle(prop_tableItemBodyHoverStyles)}
}

#${el.id} .selected_table_row{
   background-color: ${prop_valueRow_backgroundColor}!important;
}
#${el.id} .selected_table_col{
   background-color: ${prop_valueCol_backgroundColor}!important;
   color: ${prop_valueCol_textColor}!important;
}
</style>
<table class="component-element-structure mb-2 element-table ${prop_tableClass} ${tableType} ${tableBordered}
              ${ prop_tableStriped ?    'table-striped'    : ''}
              ${ prop_tableHover ?      'table-hover'      : ''} 
              ${ prop_tableBorderless ? 'table-borderless' : ''}
                    ">
  <thead class="element-header-table ${super.renderListClass(prop_tableHeadClass)}">
    <tr>
      ${htmlHeader}
    </tr>
  </thead>
  <tbody class="element-body-table ${super.renderListClass(prop_tableBodyClass)}">
    ${htmlBody}
  </tbody>
</table>
            `

        /*// with teamyar
        else if (prop_type == 1){
            return ` <div class="mx-2 mb-2">`+
                 $.Teamyar.table({
                     arrayId:    prop_order,
                     objData:    tableDataOreder,
                     objHeader:  prop_header,
                 })
                 +` </div>`;
        }*/

    }
}




/*-------------------------------------
 Component Tabs
-------------------------------------
@prop_tabs           {id   icon}
@prop_tabSelected

@fn_callback
-------------------------------------*/
window.ComponentTabs = class ComponentTabs extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        methods["onSelectTab"] = {
            name: `onSelectTab${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (tabIndex) => {

                config.prop_tabSelected = tabIndex;
                const newData = JSON.stringify(config);
                const el = document.getElementById(elId);
                el.setAttribute("data" , newData);

                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback(tabIndex);
                }
            }
        };

        super(elId , config , listComponent[ComponentTabs.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_tabs          =   data.hasOwnProperty("prop_tabs")         ?  data.prop_tabs          :  [];
        const prop_tabSelected   =   data.hasOwnProperty("prop_tabSelected")  ?  data.prop_tabSelected   :  null;

        const onSelectTab = super.getMethod(data , "onSelectTab"    , null);

        let tabHtml = "";
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
                                onclick="${onSelectTab}(${tabId})"
                                class="${classActive} btn-tab-types btn btn-light w-100 border shadow-sm line-height-30px">
                            ${icon}
                            ${itemTab.title}
                         </button>
                     </div>
                `;
                }

            }

        }

        return `
<style>
.btn-tab-types{
    background-color: #c7c7c7;
    height: 60px;
}
.btn-tab-types:before{
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

.btn-tab-types-active{
    background-color:#0A1225 !important;
    color :#ffffff !important;
}
</style>
           <section class="component-element-structure row m-0 mb-2">
               ${tabHtml}
           </section>
        `
    }
}




/*-------------------------------------
 Component Collapse
-------------------------------------
@prop_title
@prop_body
@prop_bodyShow
-------------------------------------*/
window.ComponentCollapse = class ComponentCollapse extends ComponentBase{

    props = {};

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["showOrHideCollapse"] = {
            name: `showOrHideCollapse_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: () => {
                const var_randomId    =        config.hasOwnProperty("var_randomId")        ?  config.var_randomId            :  0;

               if ( components.hasOwnProperty(var_randomId)){
                    const componentData    =  components[var_randomId];

                    componentData.prop_bodyShow = !componentData.prop_bodyShow;

                    const el = document.getElementById(elId);
                    const body = el.querySelector(`.body-collapse-${var_randomId}`);

                    if (componentData.prop_bodyShow){
                        body.classList.remove("d-none");
                    }
                    else {
                        body.classList.add("d-none");
                    }

                    this.readyLabelIcon(var_randomId);

                }
            }
        };

        super(elId , config , listComponent[ComponentCollapse.name] , methods ,  config["var_randomId"]);

        this.render();
    }

    templateFn = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        if ( components.hasOwnProperty(var_randomId)){

            const componentData    =  components[var_randomId];
            const prop_title       =  componentData.hasOwnProperty("prop_title")       ?  componentData.prop_title          : null;
            const prop_body        =  componentData.hasOwnProperty("prop_body")        ?  componentData.prop_body           :  (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
            const prop_bodyShow    =  componentData.hasOwnProperty("prop_bodyShow")    ?  componentData.prop_bodyShow       : false;
            console.log(componentData)


            if ( prop_title != null){

                return `
<style>
     #${el.id} .title-collapse-${  var_randomId}{
        cursor: pointer;
    }
     
     #${el.id} .body-collapse-${  var_randomId}{
        background-color: ${tools_const.styles.collapse.backgroundColor};
    }
</style>
<div class="component-element-structure mx-2 mb-3">

<component-label id="label-component-collapse-${  var_randomId}" class="position-relative">
   <component-body>
       ${ prop_title }
       
       <component-icon id="icon-collapse-${  var_randomId}"></component-icon>
       
   </component-body>
</component-label>
   
    <div class="body-collapse-${  var_randomId} shadow-sm p-2 ${prop_bodyShow ? "" : "d-none"}">
        ${  prop_body }
    </div>

</div>      
                `;
            }

            return prop_body;

        }

    }

    onRender = (data , componentSlots , el) =>{
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        this.readyLabelInput(var_randomId);
        this.readyLabelIcon(var_randomId);
    }

    readyLabelInput  = (var_randomId)  => {
        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_title          =  componentData.hasOwnProperty("prop_title")       ?  componentData.prop_title          : null;
            const showOrHideCollapse  = super.getMethod(componentData , "showOrHideCollapse" , null);

            if (prop_title != null){
                new window.ComponentLabel(
                    "label-component-collapse-"+  var_randomId ,
                    {
                        fn_callback: ()=>{
                            window[showOrHideCollapse]()
                        }
                    }
                )
            }
        }
    }

    readyLabelIcon  = (var_randomId)  => {
        if ( components.hasOwnProperty(var_randomId)) {

            const componentData         = components[var_randomId];
            const prop_bodyShow         =  componentData.hasOwnProperty("prop_bodyShow")    ?  componentData.prop_bodyShow       : false;

            new window.ComponentIcon(
                `icon-collapse-${var_randomId}` ,
                {
                    prop_icon : prop_bodyShow  ? "&#129171;" : "&#129169" ,
                    prop_iconClass : ["float-end" , "position-absolute"] ,
                    prop_iconStyles : {
                        "font-size" : "20pt",
                        "margin" : "0 10px",
                        "top" : "0",
                        "left" : "0",
                        "color" : "#000000",
                        "line-height" :prop_bodyShow  ? "20px" : "10px",
                        "padding-top" :prop_bodyShow  ? "15px" : "0px"
                    } ,
                }
            )

        }
    }
}




/*-------------------------------------
 Component Button
-------------------------------------
@prop_type
@prop_title
@prop_btnClass

@prop_btnBackgroundColor
@prop_btnColor

@fn_callback
-------------------------------------*/
window.ComponentButton = class ComponentButton extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        methods["buttonClick"] = {
            name: `buttonClick_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback(event);
                }
            }
        };

        super(elId , config , listComponent[ComponentButton.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_type  =          data.hasOwnProperty("prop_type")                 ?  data.prop_type          :  null;
        const prop_title  =         data.hasOwnProperty("prop_title")                ?  data.prop_title         :  (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');

        const prop_btnClass =       data.hasOwnProperty("prop_btnClass")             ?  data.prop_btnClass      : "w-100"
        const prop_btnStyles        =   data.hasOwnProperty("prop_btnStyles")        ?  data.prop_btnStyles          : null;
        const prop_btnHoverStyles   =   data.hasOwnProperty("prop_btnHoverStyles")   ?  data.prop_btnHoverStyles     : null;

        let btnBackgroundColor =  null;
        let btnColor =            null;


        switch (prop_type){
            case "error" :
                btnBackgroundColor = tools_const.styles.buttonError.backgroundColor;
                btnColor =           tools_const.styles.buttonError.color;
                break;
            default:
                btnBackgroundColor =  data.hasOwnProperty("prop_btnBackgroundColor")   ?  data.prop_btnBackgroundColor      : tools_const.styles.button.backgroundColor;
                btnColor =            data.hasOwnProperty("prop_btnColor")             ?  data.prop_btnColor                : tools_const.styles.button.color;
                break;
        }


        const buttonClick = super.getMethod(data , "buttonClick" , "(event)");


        return `
<style>
     #${el.id} .btn-action{
          background-color: ${btnBackgroundColor};
          color:            ${btnColor};
     }
     #${el.id} .btn-action:hover{
         ${super.renderListStyle(prop_btnHoverStyles)}
     }
</style>
<div class="<!--component-element-structure--> mb-2">
     <button class=" ${super.renderListClass(prop_btnClass)} btn-action  shadow-sm border-0 px-2 py-1 rounded " style="${super.renderListStyle(prop_btnStyles)}" onclick="${buttonClick}">
         ${prop_title}
     </button>
</div>
 
`;
    }

}




/*-------------------------------------
 Component Select Option
-------------------------------------
@prop_type
@prop_name
@prop_title
@prop_placeholder

@prop_options
@prop_optionStyles
@prop_optionWidth
@prop_optionHeight
@prop_optionIcon
@prop_optionIconColor
@prop_optionItemBackground

@prop_itemSelected
@prop_selectOptionClass
@prop_titleClass
@prop_titleStyles

@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddClass
@prop_btnAddTitle

@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@fn_callback
@fn_clickBtnTools
-------------------------------------*/
window.ComponentSelectOption = class ComponentSelectOption extends ComponentBase{

    constructor(elId , config) {

        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["clickBtnTools"] = {
            name: `clickBtnTools${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                event.stopPropagation();
                if (config.hasOwnProperty("fn_clickBtnTools") && typeof config.fn_clickBtnTools != null){
                    config.fn_clickBtnTools();
                }
            }
        };

        methods["showListOptions"] = {
            name: `showListOptions${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (status=null) => {
                config.var_showFormSelectOption = status != null ? status : !config.var_showFormSelectOption;
                this.changeProperty(config);
            }
        };
        methods["selectItemOption"] = {
            name: `selectItemOption${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (id , event) => {

                if (event != null){
                    event.stopPropagation();
                }

                const elParent = document.getElementById(elId);
                const prop_name = config.hasOwnProperty("prop_name")    ?  config.prop_name   :  "";
                let elSelect = null;
                if (prop_name != null){
                    elSelect = elParent.querySelector(`input[name=${prop_name}]`)
                }
                else {
                    elSelect =elParent.querySelector(`input`)
                }

                config.prop_itemSelected = id;
                this.changeProperty(config);

                const changeItemSelected     =    super.getMethod(config , "changeItemSelected"  ,null );
                window[changeItemSelected](id);

                const setTitleItemSelected   =    super.getMethod(config , "setTitleItemSelected"  ,null );
                window[setTitleItemSelected](id , event);

                const showListOptions       =    super.getMethod(config , "showListOptions"  ,null );
                window[showListOptions](false);
            }
        };
        methods["setTitleItemSelected"] = {
            name: `selectItemOption${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (id = null , data=null) => {

                if (id != null){
                    const prop_options = config.hasOwnProperty("prop_options")       ?  config.prop_options      :  null;

                    let itemSelected = "---";
                    let dataSelected = null;
                    if (prop_options != null && Array.isArray(prop_options)){
                        for (let i=0; i < prop_options.length; i++){
                            const item = prop_options[i];
                            if (item.hasOwnProperty("name")){
                                let value = item.hasOwnProperty('id') ? item.id : 0;
                                let data = item.hasOwnProperty('data') ? item.data : null;
                                if (item.hasOwnProperty('id') && item.hasOwnProperty('name') && item.id == id ){
                                    itemSelected = item.name;
                                    dataSelected = data;
                                    break;
                                }
                            }
                        }
                    }

                    config.var_titleItemSelected = itemSelected;
                    this.changeProperty(config);
                }
            }
        };

        methods["changeItemSelected"] = {
            name: `changeItemSelected${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (id=null , event=null) => {
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){


                    if (event != null){
                        event.stopPropagation();
                    }


                    if (id == null){
                        const elParent = document.getElementById(elId);
                        const prop_name = config.hasOwnProperty("prop_name")    ?  config.prop_name   :  "";
                        let elSelect = null;
                        if (name != null){
                            elSelect = elParent.querySelector(`select[name=${prop_name}]`)
                        }
                        else {
                            elSelect =elParent.querySelector(`select`)
                        }

                        id = elSelect != null ? elSelect.value : null;
                    }


                    const prop_options = config.hasOwnProperty("prop_options")       ?  config.prop_options      :  null;

                    let exist = false;
                    let dataSelected = null;
                    if (prop_options != null && Array.isArray(prop_options)){
                        for (let i=0; i < prop_options.length; i++){
                            const item = prop_options[i];
                            if (item.hasOwnProperty("name")){
                                let value = item.hasOwnProperty('id') ? item.id : 0;
                                let data = item.hasOwnProperty('data') ? item.data : null;
                                if (item.hasOwnProperty('id') && item.hasOwnProperty('name') && item.id == id ){
                                    exist = true;
                                    dataSelected = data;
                                    break;
                                }
                            }
                        }
                    }


                    if (exist && id != null){
                        config.fn_callback( id , dataSelected);
                    }

                }
            }
        };

        methods["searchListOptions"] = {
            name: `searchListOptions${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (value) => {
                config.var_textSearch = value;
                this.changeProperty(config);
            }
        };

        methods["searchFocus"] = {
            name: `searchFocus${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (value) => {
                config.var_focusSearch = true;
                this.changeProperty(config);
            }
        };

        methods["searchBlur"] = {
            name: `searchBlur${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (value) => {
                config.var_focusSearch = false;
                this.changeProperty(config);
            }
        };

        super(elId , config , listComponent[ComponentSelectOption.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        //------------------
        const var_randomId              =     data.hasOwnProperty("var_randomId")              ?  data.var_randomId                :  0;
        const var_showFormSelectOption  =     data.hasOwnProperty("var_showFormSelectOption")  ?  data.var_showFormSelectOption    :  false;
        let   var_titleItemSelected     =     data.hasOwnProperty("var_titleItemSelected")     ?  data.var_titleItemSelected       :  (data.hasOwnProperty("prop_placeholder")   ?  data.prop_placeholder :  "---");
        let   var_textSearch            =     data.hasOwnProperty("var_textSearch")            ?  data.var_textSearch              :  "" ;
        let   var_focusSearch           =     data.hasOwnProperty("var_focusSearch")           ?  data.var_focusSearch             :  false ;



        //------------------
        const prop_type                 =     data.hasOwnProperty("prop_type")                 ?      data.prop_type               :  0;

        const prop_name                 = data.hasOwnProperty("prop_name")                     ?  data.prop_name                   :  "";
        const prop_title                = data.hasOwnProperty("prop_title")                    ?  data.prop_title                  :  "";
        const prop_placeholder          = data.hasOwnProperty("prop_placeholder")              ?  data.prop_placeholder            :  "";
        const prop_icon                 = data.hasOwnProperty("prop_icon")                     ?  data.prop_icon                   :  "";

        const prop_options              = data.hasOwnProperty("prop_options")                  ?  data.prop_options                :  (componentSlots != null && componentSlots.hasOwnProperty("options") ? componentSlots.options : '');
        const prop_optionWidth          = data.hasOwnProperty("prop_optionWidth")              ?  data.prop_optionWidth            :  "100%";


        const prop_selectOptionClass    = data.hasOwnProperty("prop_selectOptionClass")        ?  data.prop_selectOptionClass      :  "";
        const prop_titleClass           = data.hasOwnProperty("prop_titleClass")               ?  data.prop_titleClass             :  "text-dark  border shadow-sm";
        const prop_titleStyles          = data.hasOwnProperty("prop_titleStyles")              ?  data.prop_titleStyles            :  {};
        const prop_optionHeight         = data.hasOwnProperty("prop_optionHeight")             ?  data.prop_optionHeight           :   130;
        const prop_optionItemBackground = data.hasOwnProperty("prop_optionItemBackground")     ?  data.prop_optionItemBackground   :  "#13b799";

        const prop_optionIcon           = data.hasOwnProperty("prop_optionIcon")               ?  data.prop_optionIcon             :  "&#129171";
        const prop_optionIconColor      = data.hasOwnProperty("prop_optionIconColor")          ?  data.prop_optionIconColor        :  "#000000";

        const prop_itemSelected         = data.hasOwnProperty("prop_itemSelected")             ?  data.prop_itemSelected           :  null;


        const prop_btnAddStatus         =        data.hasOwnProperty("prop_btnAddStatus")      ?  data.prop_btnAddStatus           :  false;

        //------------------
        const showListOptions           =    super.getMethod(data , "showListOptions"     , "()" );
        const selectItemOption          =    super.getMethod(data , "selectItemOption"    , null );
        const changeItemSelected        =    super.getMethod(data , "changeItemSelected"  , "(null , event)" );




        let btnAddItem = "";
        if (prop_btnAddStatus) {
            btnAddItem = `
<component-button id="button-tools-component-input-${var_randomId}">
</component-button>
            `;
        }


        if (prop_type == 0){

            let optionsStr = "";
            if (prop_options != null && Array.isArray(prop_options)){
                for (let i=0; i < prop_options.length; i++){
                    const item = prop_options[i];
                    if (item.hasOwnProperty("name")){
                        let value = item.hasOwnProperty('id') ? item.id : 0;
                        optionsStr += `
<option value="${value}" >
    ${item.name}
</option>
                `
                    }
                }
            }
            else if (typeof prop_options == "string") {
                optionsStr = prop_options;
            }


            return `
<style>
 #${el.id} .arrow-selector-option-${var_randomId} {
   font-size: 20pt;
   line-height: 40pt;
   height: 34px;
   margin: 0 10px;  
   color: ${prop_optionIconColor}; 
   left: ${prop_btnAddStatus ? "165px" : "10px"};
}
 #${el.id} .custom-select-${var_randomId}{
    line-height: 20px;
    height: 35px;
    cursor: pointer;
    padding-right: 30px;
}
 #${el.id} .icon-select-title-${var_randomId} {
    z-index: 10;
    margin: 0 !important;
    width: 30px;
    line-height: 20px;
    right: 0;
    cursor: pointer;
    font-size: 20pt;
}
</style>
 <section class="component-element-structure mb-2 form-group mb-4 position-relative">
        <div class="d-block ">
<component-label id="label-component-select-option-${var_randomId}"></component-label>
        </div>
        
        <div class="position-relative">
              <span class="arrow-selector-option-${var_randomId} icon-input-arrow position-absolute font-16pt cursor-pointer">${prop_optionIcon}</span>
            
              <select name="${prop_name}" 
                      id="${prop_name}-${var_randomId}"
                      value="${prop_itemSelected}"
                      class="custom-select-${var_randomId} form-control  w-100 rounded line-height-30px "
                      onchange="${changeItemSelected}">
                 ${optionsStr}
              </select>  
              
                      
${btnAddItem} 
        </div>
        
 </section>
        `

        }
        else if (prop_type == 1) {

            let optionsStr = "";
            if (prop_options != null && Array.isArray(prop_options)){
                for (let i=0; i < prop_options.length; i++){
                    const item = prop_options[i];
                    if (item.hasOwnProperty("name")){
                        let value = item.hasOwnProperty('id') ? item.id : 0;
                        if (typeof item.name.includes == "undefined" || item.name.includes(var_textSearch)){
                            optionsStr += `
<div class="select-title-inside-title-${var_randomId} rounded  ${prop_itemSelected != null && value == prop_itemSelected ? 'select-title-inside-item_active-'+var_randomId : ''}"
   onclick="${selectItemOption+`(${item.id} , event)`}"> ${item.name} 
</div>
                `
                            if (prop_itemSelected != null && value == prop_itemSelected ){
                                var_titleItemSelected = item.name;
                            }
                        }
                    }
                }
            }


            return  `
<style>
 #${el.id} .select-title-${var_randomId}{
    width: 10px;
    line-height: 30px;
    height: 35px; 
    cursor: pointer;
    padding-left: ${prop_btnAddStatus ? "180px" : "20px"};
    padding-right: 30px;
    background-color: white;
    ${super.renderListStyle(prop_titleStyles)}
}
 #${el.id} .arrow-selector-option-${var_randomId} {
   font-size: 20pt;
   height: 34px;
   line-height: 40pt;
   margin: 0 10px;
   top: 0;
   color: ${prop_optionIconColor};
   left: ${prop_btnAddStatus ? "165px" : "10px"};
}
 #${el.id} .select-title-inside-${var_randomId}{
     height: ${prop_optionHeight}px;
     position: relative;
     z-index: 10;
}
 #${el.id} .select-title-inside-title-${var_randomId}{
     padding: 0 10px !important;
}
 #${el.id} .select-title-inside-title-${var_randomId}:hover{
     background-color: ${prop_optionItemBackground};
     color: white;
     cursor: pointer;
}
 #${el.id} .select-title-inside-item_active{
     background-color: ${prop_optionItemBackground};
     color: ${prop_optionIconColor};
}
 #${el.id} .icon-select-title-${var_randomId} {
    z-index: 10;
    margin: 0 5px !important;
    width: 20px;
    line-height: 30px;
    right: 0;
    cursor: pointer;
    font-size: 20pt;
}
</style>
<div class="component-element-structure mb-2 position-relative ${prop_selectOptionClass}">
       <div class="d-block ">
<component-label id="label-component-select-option-${var_randomId}"></component-label>
       </div>
       
       <input name="${prop_name}" value="${prop_itemSelected}" type="hidden"/>
       
       <b class="select-title-${var_randomId}  w-100 d-block position-relative ${prop_titleClass}" onclick="${showListOptions}">
           ${var_titleItemSelected}
              
              <span class="icon-select-title-${var_randomId} position-absolute " 
                     onclick="${showListOptions}">
                   ${prop_icon}
              </span>
              
              <span class="arrow-selector-option-${var_randomId} position-absolute ">${prop_optionIcon}</span>
           
              ${btnAddItem}
       </b>
  
<component-position-element id="form-position-select-option-${var_randomId}">
    <component-body>
        <component-input id="input-search-${var_randomId}">
        </component-input>
    
        <section class="select-title-inside-${var_randomId} bg-white overflow-auto">
             ${optionsStr}
        </section>
    </component-body>
</component-position-element>
    
    


</div>
            `
        }

    }

    onRender = (data , componentSlots , el) =>{
        this.readyLabelInput(data , componentSlots , el);
        this.readyInputSearch(data , componentSlots , el);
        this.readyElementPosition(data , componentSlots , el);
        this.readyButtonTools(data , componentSlots , el);
    }

    readyLabelInput  = (data , componentSlots , el) => {

        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;

        const prop_name                 =   data.hasOwnProperty("prop_name")                   ?  data.prop_name                          :  "No-Name-input";
        const prop_title                =   data.hasOwnProperty("prop_title")                  ?  data.prop_title                         :  "No Title";
        const prop_type                 =     data.hasOwnProperty("prop_type")                 ?  data.prop_type                          :  0;

        const prop_labelClass           =   data.hasOwnProperty("prop_labelClass")             ?  data.prop_labelClass                    :  [ "shadow-sm" , "px-2" ,"py-1" , "d-block "];
        const prop_labelStyles          =   data.hasOwnProperty("prop_labelStyles")            ?  data.prop_labelStyles                   :  {};
        const prop_labelHoverStyles     =   data.hasOwnProperty("prop_labelHoverStyles")       ?  data.prop_title                         :  {};

        const showListOptions            =    super.getMethod(data , "showListOptions"     , null );

        if (prop_title != null){
            new window.ComponentLabel(
                "label-component-select-option-"+var_randomId ,
                {
                    prop_title:  prop_title ,
                    prop_for  :  prop_name+"-"+var_randomId ,

                    prop_labelClass:       prop_labelClass ,
                    prop_labelStyles:      prop_labelStyles ,
                    prop_labelHoverStyles: prop_labelHoverStyles ,

                    fn_callback: ()=>{
                        if (prop_type != 0){
                            window[showListOptions]()
                        }
                    }
                }
            )
        }
    }

    readyElementPosition  = (data , componentSlots , el) => {
        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;
        const var_showFormSelectOption  =     data.hasOwnProperty("var_showFormSelectOption")  ?  data.var_showFormSelectOption           :  false;

        const prop_type                 =     data.hasOwnProperty("prop_type")                 ?      data.prop_type                      :  0;
        const prop_optionWidth          = data.hasOwnProperty("prop_optionWidth")              ?  data.prop_optionWidth                   :  "100%";
        const prop_optionStyles         = data.hasOwnProperty("prop_optionStyles")             ?  data.prop_optionStyles                  :  {};

        if (prop_type == 1){
            new window.ComponentPositionElement(
                "form-position-select-option-"+var_randomId ,
                {
                    prop_show: var_showFormSelectOption,

                    prop_elementClass: ["form-control" , "custom-select" , "rounded" , "px-2"] ,
                    prop_elementStyles: prop_optionStyles ,
                    prop_width: prop_optionWidth,
                }
            )
        }
    }

    readyInputSearch  = (data , componentSlots , el) => {

        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;
        const var_textSearch            =     data.hasOwnProperty("var_textSearch")            ?  data.var_textSearch                     :  "";
        const var_focusSearch           =    data.hasOwnProperty("var_focusSearch")            ?  data.var_focusSearch                    :  false;

        const prop_type                 =     data.hasOwnProperty("prop_type")                 ?      data.prop_type                      :  0;

        const searchListOptions         =    super.getMethod(data , "searchListOptions"     , null );
        const searchFocus               =    super.getMethod(data , "searchFocus"           , null );
        const searchBlur                =    super.getMethod(data , "searchBlur"            , null );

        if (prop_type == 1){
            new window.ComponentInput(
                "input-search-"+var_randomId ,
                {
                    prop_title: null ,
                    prop_icon: "&#x2315;" ,
                    prop_value: var_textSearch ,
                    prop_isFocus: var_focusSearch ,

                    fn_oninput: (value)=> {
                        window[searchListOptions](value)
                    } ,

                    fn_onfocus: (value)=> {
                        window[searchFocus](value)
                    } ,

                    /*fn_onblur: (value)=> {
                        window[searchBlur](value)
                    }*/
                }
            )
        }
    }

    readyButtonTools  = (data , componentSlots , el) => {

        const var_randomId    =   data.hasOwnProperty("var_randomId")        ?  data.var_randomId   :  0;
        const prop_btnAddStatus   =   data.hasOwnProperty("prop_btnAddStatus")  ?  data.prop_btnAddStatus   :  false;
        const prop_btnAddIcon     =        data.hasOwnProperty("prop_btnAddIcon")        ?  data.prop_btnAddIcon             :  "&plus;";
        const prop_btnAddTitle    =        data.hasOwnProperty("prop_btnAddTitle")       ?  data.prop_btnAddTitle            :  "add item";


        const clickBtnTools    =    super.getMethod(data , "clickBtnTools"     , null );

        const prop_btnAddClass    =   data.hasOwnProperty("prop_btnAddClass")  ?  data.prop_btnAddClass   :  ["btn" , "btn-light"];

        if (prop_btnAddStatus){
            new window.ComponentButton(
                "button-tools-component-input-"+var_randomId ,
                {
                    prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                    prop_btnBackgroundColor: "",
                    prop_title: `
<span class="mx-3">
    ${prop_btnAddIcon}
</span>
<span class="d-none d-md-inline">
    ${prop_btnAddTitle}
</span>
                    `,
                    prop_btnColor: "",
                    prop_btnStyles: {
                        "z-index" : "10" ,
                        "left" : "0" ,
                        "top" : "0" ,
                        "cursor" : "pointer" ,
                        "width" : "160px" ,
                        "height" : "32px" ,
                    },

                    fn_callback: (event)=>{
                        window[clickBtnTools](event)
                    }
                }
            )
        }
    }


}




/*-------------------------------------
 Component Widget
-------------------------------------
@prop_classList
@prop_minHeight
@prop_error404   type   width   height
@prop_fetch      url    data
-------------------------------------*/
window.ComponentWidget = class ComponentWidget extends ComponentBase{

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["retry404"] = {
            name: `retry404_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                const var_randomId = config.hasOwnProperty("var_randomId") ? config.var_randomId : 0;

                const onFetchWidget = super.getMethod(config , "onFetchWidget" , null);
                window[onFetchWidget]();

                tools_component.control(
                    "Component404" ,
                    {
                        elId : "widget-component-404-"+var_randomId
                    },
                    false
                )

            }
        };
        methods["readyResponse"] = {
            name: `readyResponse_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (response) => {
                const var_randomId = config.hasOwnProperty("var_randomId") ? config.var_randomId : 0;

                const el = document.getElementById(elId);
                const responseEl = el.getElementsByClassName("response-widget-component-"+var_randomId);
                responseEl[0].innerHTML = response
            }
        };''
        methods["onFetchWidget"] = {
            name: `onFetchWidget_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                const var_randomId = config.hasOwnProperty("var_randomId") ? config.var_randomId : 0;
                const prop_minHeight = config.hasOwnProperty("prop_minHeight") ? Math.max(config.prop_minHeight , 120) : 120;
                const prop_error404  = config.hasOwnProperty("prop_error404") ? config.prop_error404 : {};

                const retry404 = super.getMethod(config , "retry404" , null);

                const prop_fetch = config.hasOwnProperty("prop_fetch") ? config.prop_fetch : {};
                if (prop_fetch != null && prop_fetch.hasOwnProperty("url")){

                    tools_submit.fetcth(
                        prop_fetch != null && prop_fetch.hasOwnProperty("url") ? prop_fetch.url : "" ,
                        {
                            data:prop_fetch != null && prop_fetch.hasOwnProperty("data") ? prop_fetch.data : {} ,
                            callback: window[methods.readyResponse.name] ,
                            componentLoadingData: {
                                elId : "widget-component-loading-"+var_randomId
                            },
                            component404Data: {
                                elId : "widget-component-404-"+var_randomId ,
                                prop_type : prop_error404 != null && prop_error404.hasOwnProperty("type") ? prop_error404.type : 0 ,
                                prop_width : prop_error404 != null && prop_error404.hasOwnProperty("width") ? prop_error404.width : prop_minHeight*1.3 ,
                                prop_height : prop_error404 != null && prop_error404.hasOwnProperty("height") ? prop_error404.height :  prop_minHeight*0.62 ,
                                fn_callback: window[retry404]
                            },
                        }
                    )
                }
                else {
                    const readyResponse = super.getMethod(config , "readyResponse" , null);
                    window[readyResponse]("<!--empty-component-->")
                }

            }
        };

        super(elId , config , listComponent[ComponentWidget.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const var_randomId    = data.hasOwnProperty("var_randomId")   ? data.var_randomId                    : 0;
        //---------------

        const prop_classList  = data.hasOwnProperty("prop_classList") ? data.prop_classList                  : "shadow-sm rounded border";
        const prop_minHeight  = data.hasOwnProperty("prop_minHeight") ? Math.max(data.prop_minHeight , 120)  : 120;
        //---------------

        return `
<style>
 #${el.id} .widget-component{
    min-height: ${prop_minHeight}px;
}
</style>
<section class="component-element-structure mb-2 widget-component position-relative ${ prop_classList }" >

    <section class="response-widget-component-${var_randomId}"></section>
    
    <component-404 id="widget-component-404-${var_randomId}"></component-404>

    <component-loading id="widget-component-loading-${var_randomId}"></component-loading>
</section>
`;
    }

    onCreate(data , el){

    }

    onRender(data , componentSlots , el){

        if (componentSlots.hasOwnProperty("body")){
            const readyResponse = super.getMethod(data , "readyResponse" , null);
            window[readyResponse](componentSlots.body)
        }
        else{
            const onFetchWidget = super.getMethod(data , "onFetchWidget" , null);
            window[onFetchWidget]()
        }
    }


}




/*-------------------------------------
 Component Input
-------------------------------------
@prop_type
@prop_name
@prop_title
@prop_icon
@prop_value
@prop_isFocus

@prop_inputClass
@prop_inputStyles

@fn_oninput
@fn_onfocus
@fn_onblur
-------------------------------------*/
window.ComponentInput = class ComponentInput extends ComponentBase{

    IS_FOCUS= false;
    value= "";

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["focusToInput"] = {
            name: `focusToInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const var_randomId  =        config.hasOwnProperty("var_randomId")               ?  config.var_randomId                    :  0;
                const prop_name     =        config.hasOwnProperty("prop_name")                  ?  config.prop_name                       :  "No-Name-input";

                const el = document.getElementById(`${prop_name}-${var_randomId}`);
                el.focus();
            }
        };
        methods["clearInput"] = {
            name: `clearInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const var_randomId  =        config.hasOwnProperty("var_randomId")               ?  config.var_randomId                    :  0;
                const prop_name     =        config.hasOwnProperty("prop_name")                  ?  config.prop_name                       :  "No-Name-input";

                const el = document.getElementById(`${prop_name}-${var_randomId}`);
                el.value = "";

                if (config.hasOwnProperty("fn_oninput") && typeof config.fn_oninput != null){
                    config.fn_oninput("");
                }
            }
        };
        methods["oninput"] = {
            name: `oninput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const el = event.target;
                const value = el.value;
                if (config.hasOwnProperty("fn_oninput") && typeof config.fn_oninput != null){
                    config.fn_oninput(value);
                }
            }
        };
        methods["onfocus"] = {
            name: `onfocus${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (config.hasOwnProperty("fn_onfocus") && typeof config.fn_onfocus != null){
                    config.fn_onfocus();
                }
            }
        };
        methods["onblur"] = {
            name: `onblur${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (config.hasOwnProperty("fn_onblur") && typeof config.fn_onblur != null){
                    config.fn_onblur();
                }
            }
        };

        super(elId , config , listComponent[ComponentInput.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        //-------------------
        const var_randomId              =        data.hasOwnProperty("var_randomId")               ?  data.var_randomId                                         :  0;

        //-------------------
        const prop_type                 =        data.hasOwnProperty("prop_type")                  ?  data.prop_type                                            :  "";
        const prop_name                 =        data.hasOwnProperty("prop_name")                  ?  data.prop_name                                            :  "No-Name-input";
        const prop_title                =        data.hasOwnProperty("prop_title")                 ?  data.prop_title                                           :  "No Title";
        const prop_icon                 =        data.hasOwnProperty("prop_icon")                  ?  data.prop_icon                                            :  "";
        const prop_value                =        data.hasOwnProperty("prop_value")                 ?  data.prop_value                                           :  "";
        const prop_isFocus              =        data.hasOwnProperty("prop_isFocus")               ?  data.prop_isFocus                                         :  false;

        const prop_inputClass           =    data.hasOwnProperty("prop_inputClass")                 ?  data.prop_inputClass                                      :  [];
        const prop_inputStyles          =    data.hasOwnProperty("prop_inputStyles")                ?  data.prop_inputStyles                                     :  {};

        const oninput                   =    super.getMethod(data , "oninput"  , "(event)" );
        const onblur                    =    super.getMethod(data , "onblur"  , "(event)" );
        const onfocus                   =    super.getMethod(data , "onfocus"  , "(event)" );

        return `
<style>
 #${el.id} .compoent-input-${var_randomId}{
     ${super.renderListStyle(prop_inputStyles)}
     padding-left: 30px!important;
     padding-right: ${(prop_icon != null && prop_icon != "") ?  "30px"  : "10px"}!important;
 }
</style>
<section class="component-element-structure mb-2">

<component-label id="label-component-input-${var_randomId}"></component-label>

         <div class="position-relative">
            <input id="${prop_name}-${var_randomId}"  
                   oninput="${oninput}" onfocus="${onfocus}" onblur="${onblur}"
                   type="${prop_type}" name="${prop_name}"  value="${prop_value}"
                   class="compoent-input-${var_randomId}  ${super.renderListClass(prop_inputClass)} form-control  px-2 " type="password" placeholder="">
       
<component-icon id="icon-component-input-${var_randomId}">
</component-icon>  
            
<component-button id="btn-clear-component-input-${var_randomId}">
</component-button>  
         </div>

</section>
        `;
    }

    onCreate = (data , el) => {

    }

    onRender = (data , componentSlots , el) => {

        this.readyLabelInput(data , componentSlots , el);
        this.readyBtnClearInput(data , componentSlots , el);
        this.readyIconInput(data , componentSlots , el);

        const prop_name        =    data.hasOwnProperty("prop_name")              ?  data.prop_name                                            :  "No-Name-input";
        const var_randomId     =    data.hasOwnProperty("var_randomId")           ?  data.var_randomId                                         :  0;
        const prop_isFocus     =    data.hasOwnProperty("prop_isFocus")           ?  data.prop_isFocus                                         :  false;
        const prop_value                =        data.hasOwnProperty("prop_value")                 ?  data.prop_value                                           :  "";

        const elInput = document.getElementById(`${prop_name}-${var_randomId}`);
        if (elInput != null){
            if (prop_isFocus){
                elInput.focus()
                elInput.setSelectionRange(prop_value.length, prop_value.length);
            }
            else {
                elInput.blur()
            }
        }

    }

    readyLabelInput  = (data , componentSlots , el) => {

        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;

        const prop_name                 =   data.hasOwnProperty("prop_name")                   ?  data.prop_name                          :  "No-Name-input";
        const prop_title                =   data.hasOwnProperty("prop_title")                  ?  data.prop_title                         :  "No Title";
        const prop_type                 =     data.hasOwnProperty("prop_type")                 ?  data.prop_type                          :  0;

        const prop_labelClass           =   data.hasOwnProperty("prop_labelClass")             ?  data.prop_labelClass                    :  [];
        const prop_labelStyles          =   data.hasOwnProperty("prop_labelStyles")            ?  data.prop_labelStyles                   :  {};
        const prop_labelHoverStyles     =   data.hasOwnProperty("prop_labelHoverStyles")       ?  data.prop_title                         :  {};


        if (prop_title != null){
            new window.ComponentLabel(
                "label-component-input-"+var_randomId ,
                {
                    prop_title:  prop_title ,
                    prop_for  :  prop_name+"-"+var_randomId ,

                    prop_labelClass:       prop_labelClass ,
                    prop_labelStyles:      prop_labelStyles ,
                    prop_labelHoverStyles: prop_labelHoverStyles ,

                    fn_callback: ()=>{

                    }
                }
            )
        }

    }

    readyBtnClearInput  = (data , componentSlots , el) => {

        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;

        const clearInput                =    super.getMethod(data , "clearInput"    , null);

        new window.ComponentButton(
            "btn-clear-component-input-"+var_randomId ,
            {
                classList: []  ,
                styles: {
                    "height" : "38px"
                }  ,

                prop_btnClass : ["position-absolute"] ,
                prop_btnStyles : {
                    "z-index" : "10",
                    "width" :   "35px",
                    "line-height" : "20px",
                    "left" : "5px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "margin-top" : "3px!important" ,
                    "top" : "0" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#10540;" ,

                fn_callback: ()=>{
                    window[clearInput]();
                }
            }
        )
    }

    readyIconInput = (data , componentSlots , el) => {

        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;

        const prop_icon                 =    data.hasOwnProperty("prop_icon")                  ?  data.prop_icon                          :  "";
        const focusToInput              =    super.getMethod(data , "focusToInput"  , null );

        new window.ComponentIcon(
            "icon-component-input-"+var_randomId ,
            {
                prop_icon: prop_icon ,

                prop_iconClass : ["position-absolute" , ""] ,
                prop_iconStyles : {
                    "z-index" : "10",
                    "margin" : "0 5px",
                    "width" : "30px",
                    "line-height" :   "35px",
                    "right" :   "0",
                    "cursor" : "pointer",
                    "font-size" : "20pt;",
                    "top" : "0" ,
                } ,

                fn_callback: ()=>{
                    window[focusToInput]();
                }
            }
        )
    }

}




/*-------------------------------------
 Component Input price
-------------------------------------
@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddClass
@prop_btnAddTitle

@prop_icon
@prop_name
@prop_title
@prop_value
@prop_information

@fn_clickBtnTools
-------------------------------------*/
window.ComponentInputPrice = class ComponentInputPrice extends ComponentBase{

    IS_FOCUS= false;
    value= 0;

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["setValue"] = {
            name: `setValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (value) => {
                const var_randomId    =    config.hasOwnProperty("var_randomId")     ?  config.var_randomId  :  0;
                this.value = value;

                const el = document.getElementById(elId);
                const input = el.querySelector(`.input-editor-${var_randomId}`);
                input.value = tools_converter.convertPriceToString(this.value);

                window[this.methods["changeValue_commit"]]()
            }
        };


        methods["handleInput"] = {
            name: `handleInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                this.value = event.target.value;
                event.target.value =  tools_converter.convertPriceToString(this.value);
            }
        };
        methods["formattedValue"] = {
            name: `formattedValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (this.IS_FOCUS) return this.value;

                if (!this.value) return '';

                let [intPart, decimalPart] = this.suggestRate.split('.');
                intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

                return decimalPart !== undefined
                    ? `${intPart}.${decimalPart}`
                    : intPart;
            }
        };
        methods["formatValue"] = {
            name: `formatValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                this.IS_FOCUS = false;

                this.readyElementPosition(
                    config.hasOwnProperty("var_randomId")                ?  config.var_randomId                       :  0 ,
                    config.hasOwnProperty("prop_information")            ?  config.prop_information                   : null ,
                    this.IS_FOCUS
                )
            }
        };
        methods["unformatValue"] = {
            name: `unformatValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                this.IS_FOCUS = true;

                this.readyElementPosition(
                    config.hasOwnProperty("var_randomId")                ?  config.var_randomId                       :  0 ,
                    config.hasOwnProperty("prop_information")            ?  config.prop_information                   : null ,
                    this.IS_FOCUS
                )
            }
        };

        methods["clearInput"] = {
            name: `clearInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                window[this.methods["setValue"]](0)
            }
        };



        methods["focustoInput"] = {
            name: `focustoInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const element = event.target;
                const parent = element.parentElement;
                const inputs = parent.getElementsByTagName("input");
                if (inputs != null){
                    inputs[0].focus();
                }
            }
        };

        methods["clickBtnTools"] = {
            name: `clickBtnTools${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (config.hasOwnProperty("fn_clickBtnTools") && typeof config.fn_clickBtnTools != null){
                    config.fn_clickBtnTools();
                }
            }
        };

        methods["changeValue"] = {
            name: `changeValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                this.value = event.target.value;
                window[this.methods["changeValue_commit"]]();
            }
        };

        methods["changeValue_commit"] = {
            name: `changeValue_commit${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                if (config.hasOwnProperty("fn_changeValue") && typeof config.fn_changeValue != null){
                    config.fn_changeValue(tools_converter.convertStringToPrice(this.value));
                }
            }
        };

        super(elId , config , listComponent[ComponentInputPrice.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const var_randomId        =        data.hasOwnProperty("var_randomId")               ?  data.var_randomId                                         :  0;
        const var_showInfoInput         =   data.hasOwnProperty("var_showInfoInput")          ?  data.var_showInfoInput                  :  false;

        const prop_btnAddStatus   =        data.hasOwnProperty("prop_btnAddStatus")          ?  data.prop_btnAddStatus                                    :  false;
        const prop_btnAddIcon     =        data.hasOwnProperty("prop_btnAddIcon")            ?  data.prop_btnAddIcon                                      :  "&plus;";
        const prop_btnAddTitle     =        data.hasOwnProperty("prop_btnAddTitle")            ?  data.prop_btnAddTitle                                   :  "add item";
        const prop_icon           =        data.hasOwnProperty("prop_icon")                  ?  data.prop_icon                                            :  "";
        const prop_name           =        data.hasOwnProperty("prop_name")                  ?  data.prop_name                                            :  "No-Name-input";
        const prop_title          =        data.hasOwnProperty("prop_title")                 ?  data.prop_title                                           :  "No Title";
        const prop_value          =        data.hasOwnProperty("prop_value")                 ?  data.prop_value                                           :  0;


        const formattedValue =   super.getMethod(data , "formattedValue" , "()" );

        const clearInput    =    super.getMethod(data , "clearInput"     , "(event)" );
        const focustoInput  =    super.getMethod(data , "focustoInput"   , "(event)" );
        const fn_clickBtnTools    =    super.getMethod(data , "fn_clickBtnTools"     , "()" );


        let btnAddItem = "";
        if (prop_btnAddStatus){
            btnAddItem = `
<component-button id="button-tools-component-input-${var_randomId}">
     <component-body>
          <span class="mx-3">
              ${prop_btnAddIcon}
          </span>
          <span class="d-none d-md-inline">
              ${prop_btnAddTitle}
          </span>
     </component-body>
</component-button>
            `
        }


        const changeValue   =    super.getMethod(data , "changeValue"    , "(event)" );
        const handleInput   =    super.getMethod(data , "handleInput"    , "(event)" );
        const formatValue   =    super.getMethod(data , "formatValue"    , "()" );
        const unformatValue =    super.getMethod(data , "unformatValue"  , "()" );

        const inputActions = `
                oninput="${handleInput} ; ${changeValue}"
                onblur="${formatValue}"
                onfocus="${unformatValue}"
                value="${prop_value}"
                `

        return `
<style>
 #${el.id} .icon-clear-input-editor-${var_randomId} {
    z-index: 10;
    margin: 0 !important;
    width: 10px;
    line-height: 40px;
    left: ${prop_btnAddStatus ? "165px" : "10px"};
    cursor: pointer;
}
 #${el.id} .icon-input-editor-${var_randomId} {
    z-index: 10;
    margin: 0 5px !important;
    width: 30px;
    line-height: 35px;
    right: 0;
    cursor: pointer;
    font-size: 20pt;
}
 #${el.id} .input-editor-${var_randomId} {
     padding-right: 30px;
     height: 35px;
     padding-left: ${prop_btnAddStatus ? "180px" : "20px"};
     z-index: 1;
}
</style>

            <section class="component-element-structure form-group mb-2">

                <div class="d-block">
<component-label id="label-component-input-price-${var_randomId}"></component-label>
                </div>

                <div class="position-relative">

                   ${btnAddItem}

                    <span class="icon-clear-input-editor-${var_randomId} position-absolute " 
                           onclick="${clearInput}">
                              &#10540;
                    </span>
                    
                    <span class="icon-input-editor-${var_randomId} position-absolute " 
                           onclick="${focustoInput}">
                              ${prop_icon}
                    </span>

                    <input class="input-editor-${var_randomId} form-control  position-relative "
                           id="${prop_name}-${var_randomId}" 
                           name="${prop_name}"  
                           ${inputActions}
                           />

<component-position-element id="form-information-input-price-${var_randomId}">
</component-position-element>

                </div>

            </section>
`;
    }

    onCreate = (data , el) => {

    }

    onRender = (data , componentSlots , el) => {
        this.readyLabelInput(data , componentSlots , el);
        this.readyButtonTools(data , componentSlots , el);
    }

    readyLabelInput  = (data , componentSlots , el) => {

        const var_randomId    =   data.hasOwnProperty("var_randomId")        ?  data.var_randomId   :  0;

        const prop_name       =   data.hasOwnProperty("prop_name")        ?  data.prop_name      :  "No-Name-input";
        const prop_title      =   data.hasOwnProperty("prop_title")       ?  data.prop_title     :  "No Title";

        new window.ComponentLabel(
            "label-component-input-price-"+var_randomId ,
            {
                prop_title:  prop_title ,
                prop_for  :  prop_name+"-"+var_randomId ,
            }
        )
    }

    readyButtonTools  = (data , componentSlots , el) => {

        const var_randomId    =   data.hasOwnProperty("var_randomId")        ?  data.var_randomId   :  0;
        const prop_btnAddStatus   =   data.hasOwnProperty("prop_btnAddStatus")  ?  data.prop_btnAddStatus   :  false;

        const clickBtnTools    =    super.getMethod(data , "clickBtnTools"     , null );

        const prop_btnAddClass    =   data.hasOwnProperty("prop_btnAddClass")  ?  data.prop_btnAddClass   :  ["btn" , "btn-light"];

        if (prop_btnAddStatus){
            new window.ComponentButton(
                "button-tools-component-input-"+var_randomId ,
                {
                    prop_btnClass: "border shadow-sm position-absolute px-3   " + prop_btnAddClass.join(" ") ,
                    prop_btnBackgroundColor: "",
                    prop_btnColor: "",
                    prop_btnStyles: {
                        "z-index" : "10" ,
                        "left" : "0" ,
                        "top" : "1px" ,
                        "cursor" : "pointer" ,
                        "width" : "160px" ,
                        "height" : "32px" ,
                    },

                    fn_callback: ()=>{
                        window[clickBtnTools]()
                    }
                }
            )
        }
    }

    readyElementPosition  = (var_randomId  , prop_information , var_showInfoInput) => {

        if (prop_information != null && Array.isArray(prop_information)){
            let infoHtml = "";
            for (const indexInfo in prop_information) {
                const itemInfo = prop_information[indexInfo];
                if (itemInfo.hasOwnProperty("title")){
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

            new window.ComponentPositionElement(
                "form-information-input-price-"+var_randomId ,
                {
                    prop_show: var_showInfoInput,
                    prop_width: "250px",
                    prop_height: null,
                    prop_content: infoHtml ,

                    prop_elementClass: [" border" , "shadow-sm" , "bg-white" , "px-2" , "py-1"] ,
                    prop_elementStyles: {
                        'direction' : "rtl" ,
                        'z-index' : "11" ,
                    } ,

                }
            )
        }

    }


    setValue  = (value) => {
       window[this.methods["setValue"]](value)
    }

}





/*-------------------------------------
 Component OTP
-------------------------------------
@prop_name
@prop_length
@prop_input
@prop_langs
@prop_getNewToken
-------------------------------------*/
window.ComponentOtp = class ComponentOtp extends ComponentBase{

    constructor(elId , config) {

        let methods = {};

        methods["getValue"] = {
            name: `getValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {

                const prop_length  =   config.hasOwnProperty("prop_length")   ?  config.prop_length   :  6;
                const prop_name    = config.hasOwnProperty("prop_name")       ?  config.prop_name     :  "otp";

                let resultExp = "";
                for (let i=0 ; i<prop_length; i++){
                    const partEl = document.getElementById(prop_name + i);
                    const partValue = partEl.value;
                    resultExp += partValue;
                }

                return resultExp;
            }
        };

        methods["getNewToken"] = {
            name: `getNewToken${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                if (config.hasOwnProperty("prop_getNewToken") && typeof config.prop_getNewToken != null){
                    config.prop_getNewToken();
                }
            }
        };

        methods["moveToNext"] = {
            name: `moveToNext${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , nextFieldID) => {

                if (event.key !== 'Backspace' && event.target.value !== '') {
                    if (nextFieldID !== '') {
                        const el = nextFieldID; // document.getElementById(nextFieldID);
                        if (el != null){
                            el.focus();
                        }
                    }
                }

            }
        };
        methods["moveToPrev"] = {
            name: `moveToPrev${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , prevFieldID) => {
                if (event.key === 'Backspace' && event.target.value === '') {
                    if (prevFieldID !== '') {
                        const el = document.getElementById(prevFieldID);
                        if (el != null){
                            el.focus();
                        }
                    }
                }
            }
        };
        methods["onFocus"] = {
            name: `onFocus${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , myElId) => {
                const el = document.getElementById(myElId);
                if (el != null){
                    el.value = "";
                }
            }
        };

        methods["setTimeCurrent"] = {
            name: `setTimeCurrent${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (timeCurent , durationForEnd) => {
                config.timeCurrent = new Date().getTime() ;
                const newData = JSON.stringify(config);
                const el = document.getElementById(elId);
                el.setAttribute("data" , newData);
            }
        };

        methods["calculateTimer"] = {
            name: `calculateTimer${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (durationForEnd) => {
                const timeCurrent =    config.hasOwnProperty("timeCurrent")   ?  config.timeCurrent :  0;

                const now = new Date().getTime();
                return (timeCurrent + durationForEnd*60*1000) - now;
            }
        };
        methods["startCountdown"] = {
            name: `startCountdown${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (durationForEnd) => {
                const setTimeCurrent = super.getMethod(this.config , "setTimeCurrent" , null);
                window[setTimeCurrent]();

                const component = document.getElementById(elId)
                const countdown = component.getElementsByClassName("countdown");
                const activeForm = component.getElementsByClassName("pass_active_code_otp");
                const diActiveForm = component.getElementsByClassName("pass_di_active_code_otp");

                activeForm[0].classList.remove("d-none");
                diActiveForm[0].classList.add("d-none");

                const interval = setInterval(() => {
                    const calculateTimer = super.getMethod(this.config , "calculateTimer" , null);
                    const distance = window[calculateTimer](durationForEnd);

                    if (distance < 0) {
                        clearInterval(interval);
                        countdown[0].textContent  = "00:00"
                        activeForm[0].classList.add("d-none");
                        diActiveForm[0].classList.remove("d-none");
                        return;
                    }

                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    minutes = minutes < 10 ? "0"+minutes : minutes;
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    seconds = seconds < 10 ? "0"+seconds : seconds;
                    countdown[0].textContent  = `${minutes}:${seconds}`
                }, 1000);

            }
        };

        super(elId , config , listComponent[ComponentOtp.name] , methods);

        this.config = config;

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_name    =   data.hasOwnProperty("prop_name")     ?  data.prop_name     :  "otp";
        const prop_length  =   data.hasOwnProperty("prop_length")   ?  data.prop_length   :  6;
        const prop_input   =   data.hasOwnProperty("prop_input")    ?  data.prop_input    :  "";
        const prop_langs   =   data.hasOwnProperty("prop_langs")    ?  data.prop_langs    :  {
            _title_otp_description : "کد برای شماره/ایمیل زیر ارسال شد" ,
            _text_timer_after_active_otp : "تا ارسال مجدد کد" ,
            _text_timer_after_di_active_otp : "کد منقضی شده است" ,
            _text_get_new_otp : "کد جدید" ,
        };

        const moveToNext = super.getMethod(data , "moveToNext" , null);
        const moveToPrev = super.getMethod(data , "moveToPrev" , null);
        const onFocus =    super.getMethod(data , "onFocus"    , null);

        const getNewToken =    super.getMethod(data , "getNewToken" );


        let html = `
<style>
.title-otp{
   background-color: ${tools_const.styles.title.backgroundColor};
}
.form-otp{
   direction: ltr !important;
}
</style>

<section class="component-element-structure mb-2">
   <p class="title-otp text-center  mb-0 px-2 mx-2 mt-2 rounded">
      ${prop_langs.hasOwnProperty("_title_otp_description") ? prop_langs._title_otp_description : ""} 
      <b style="display:block; direction: ltr">
        ${prop_input}
      </b>
   </p>

    <div class="form-otp inputs d-flex flex-row justify-content-center">

`
        for (let num=0; num<prop_length; num++){

            let data = {
                id : `${prop_name}${num}` ,
                moveToNext : `${moveToNext}(event , ${num < prop_length-1 ? `${prop_name}${num+1}` : null})` ,
                moveToPrev :  num > 0 ? `${moveToPrev}(event  , '${prop_name}${num-1}')` : null ,
                onfocus :  `${onFocus}(event  , '${prop_name}${num}')` ,
            }

            html += `
<input  id="${data.id}" 
        oninput="${data.moveToNext}" 
        onkeydown="${data.moveToPrev}" 
        onfocus="${data.onfocus}"
        type="text"  maxlength="1"
        class="input-otp my-1 mx-2 text-center  form-control rounded line-height-35px border rounded shadow-sm font-10pt"  />
`;
        }

        html += `


  </div>

  <div class="mt-1  text-center">
      <p  id="form-timer-otp"  class="d-inline-block">
        <span  class="countdown bg-secondary rounded text-white px-2 mx-2">
          00:00
        </span>

        <div class="pass_active_code_otp d-inline-block">
           <span>
              ${prop_langs.hasOwnProperty("_text_timer_after_active_otp") ? prop_langs._text_timer_after_active_otp : ""}
           </span>
        </div>

        <div class="pass_di_active_code_otp d-inline-block d-none">
           <span class="">
              ${prop_langs.hasOwnProperty("_text_timer_after_di_active_otp") ? prop_langs._text_timer_after_di_active_otp : ""}
           </span>
           <span class="mx-1">
             |
           </span>
           <span class="btn-get-new-token mx-1 text-info cursor-pointer" onclick="${getNewToken}">
               ${prop_langs.hasOwnProperty("_text_get_new_otp") ? prop_langs._text_get_new_otp : ""}
           </span>

        </div>
      </p>
    </div>

</section>

</div>
`
        return html;
    }

}




/*-------------------------------------
 Component Date
-------------------------------------
@prop_type

@prop_background1
@prop_background2
@prop_color

@prop_name
@prop_title
@prop_value

@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_prevYears
@prop_nextYears

@prop_langs

@fn_addNewItem
-------------------------------------*/
window.ComponentDate = class ComponentDate extends ComponentBase{

    TYPE_YAER = "YEAR";
    TYPE_MONTH = "MONTH";
    TYPE_DAY = "DAY";

    TYPE_INPUT_ONE_DIGIT = 0;
    TYPE_INPUT_PART_DIGIT = 1;
    TYPE_INPUT_FULL_DIGIT = 2;
    TYPE_INPUT_FRIZE_DIGIT = 3;

    DEFULAT_COLOR = prop_const.colors.White1;
    DEFULAT_BACKGROUND_1 = prop_const.colors.Green1;
    DEFULAT_BACKGROUND_2 = prop_const.colors.Green5;
    DEFULAT_PERV_YEAR = 100;
    DEFULAT_NEXT_YEAR = 25;
    DEFULAT_YEAR = 1400;

    statusChange = null;
    statusChangeDuration = 1000;

    constructor(elId , config) {

        let methods = {};
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        methods["getDaysInJalaliMonth"] = {
            name: `getDaysInJalaliMonth${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (year, month) => {
                return jalaali.jalaaliMonthLength(year, month);
            }
        };

        methods["jalaliToTimeUnix"] = {
            name: `jalaliToTimeUnix${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (jy, jm, jd) => {
                const gDate = jalaali.toGregorian(jy, jm, jd);
                const date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
                const timeUnix = Math.floor(date.getTime() / 1000);

                return {
                    date: date,
                    timeUnix: timeUnix
                };
            }
        };

        methods["getJalaliMonthGrid"] = {
            name: `getJalaliMonthGrid${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (year, month) => {
                const getDaysInJalaliMonth  = super.getMethod(config , "getDaysInJalaliMonth"    , null );
                const daysInMonth = window[getDaysInJalaliMonth](year+1, month+1);

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
        };

        methods["getPartDate"] = {
            name: `getPartDate${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (date = null) => {


                if (date == null){
                    date = config.hasOwnProperty("prop_value") ? new Date(config.prop_value * 1000) : new Date();
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

                const getJalaliMonthGrid  = super.getMethod(config , "getJalaliMonthGrid"    , null );
                const listWeek = window[getJalaliMonthGrid](jalaliYear, jalaliMonth );
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
        };
        methods["readyDatePicker"] = {
            name: `readyDatePicker${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                const var_date  =   config.hasOwnProperty("var_date")     ?  config.var_date    :  null;
                const getPartDate  = super.getMethod(config , "getPartDate"    , null );
                const datePart = window[getPartDate](var_date);

                config.var_selected_date   =   datePart;
                this.changeProperty(config);
            }
        };


        methods["selectDate"] = {
            name: `selectDate${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (status = null) => {
                config.var_showFormSelector = status != null ? status : !config.var_showFormSelector;
                this.changeProperty(config);
            }
        };

        methods["clearInput"] = {
            name: `clearInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const today = new Date();
                const jToday = jalaali.toJalaali(today);

                const todayGregorian = new Date();
                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](jToday.jy, jToday.jm, jToday.jd);
                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                config.var_focusDatePart = null;
                this.changeProperty(config);

                delete config.var_selected_date;
                this.changeProperty(config);

                const readyDatePicker  = super.getMethod(config , "readyDatePicker"    , null );
                window[readyDatePicker]();

            }
        };

        methods["acceptBtnSelected"] = {
            name: `acceptBtnSelected${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const selectDate  = super.getMethod(config , "selectDate"    , null );
                window[selectDate](false);
            }
        };

        methods["nowBtnSelected"] = {
            name: `nowBtnSelected${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (yearNum) => {
                const clearInput  = super.getMethod(config , "clearInput"    , null );
                window[clearInput]();
            }
        };


        methods["goToYearSelected"] = {
            name: `goToYearSelected${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (yearNum) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;
                let   month       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
                let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](yearNum+1 , month+1 , day+1);
                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                config.var_focusDatePart = null;
                this.changeProperty(config);
            }
        };
        methods["goToYear"] = {
            name: `goToYear${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (isNext = false) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;

                let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
                let   month     =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
                let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

                const prop_prevYears     =        config.hasOwnProperty("prop_prevYears")      ?  config.prop_prevYears                :  this.DEFULAT_PERV_YEAR;
                const prop_nextYears     =        config.hasOwnProperty("prop_nextYears")      ?  config.prop_nextYears                :  this.DEFULAT_NEXT_YEAR;

                const getPartDate  = super.getMethod(config , "getPartDate"    , null );
                const datePart = window[getPartDate]();
                const thisYear = datePart != null && datePart.hasOwnProperty("year") ? parseInt(datePart.year) : this.DEFULAT_YEAR;

                if (isNext && year + 1 <= thisYear + prop_nextYears -2){
                    year += 1;
                }
                else if (!isNext && year - 1 >= thisYear - prop_prevYears -1){
                    year -= 1;
                }

                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](year+1 , month+1 , day+1);
                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                config.var_focusDatePart = null;
                this.changeProperty(config);

            }
        };


        methods["goToMonthSelected"] = {
            name: `goToMounthSelected${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (monthNum = null) => {
                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;
                let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
                let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](year+1 , monthNum+1 , day+1);
                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                config.var_focusDatePart = null;
                this.changeProperty(config);
            }
        };
        methods["goToMonth"] = {
            name: `goToMonth${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (isNext = false) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;

                let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ;
                let   month     =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) : -1 ;
                let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) : -1 ;

                const getDaysInJalaliMonth  = super.getMethod(config , "getDaysInJalaliMonth"    , null );
                const maxDay = window[getDaysInJalaliMonth](year+1 , isNext ? month+1 : month -1);

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

                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](year+1 , month+1 , day+1);
                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                config.var_focusDatePart = null;
                this.changeProperty(config);

            }
        };


        methods["goToDaySelected"] = {
            name: `goToDaySelected${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (dayNum , dayName , dayIndex , weekIndex) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;

                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](
                    var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) +1 : -1 ,
                    var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) +1 : -1 ,
                    parseInt(dayNum)
                )
                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                config.var_focusDatePart = null;
                this.changeProperty(config);
            }
        };


        methods["getDigitDatePart"] = {
            name: `getDigitDatePart${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (type=null , digit=null) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date     :  null;
                const prop_type          =   config.hasOwnProperty("prop_type")           ?  config.prop_type             :  this.TYPE_INPUT_ONE_DIGIT;

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
        };

        methods["onChangeDateDigit"] = {
            name: `onChangeDateDigit${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , type=null , index=null) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;
                let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) + 1 : -1 ;
                let   month     =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) + 1: -1 ;
                let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) + 1 : -1 ;

                const prop_type  =   config.hasOwnProperty("prop_type")    ?  config.prop_type   :  this.TYPE_INPUT_ONE_DIGIT;

                const commitNewTime  = super.getMethod(config , "commitNewTime"    , null );

                const valPart = event.target.value;
                let statusChange = null;

                let number="";
                if (prop_type == this.TYPE_INPUT_ONE_DIGIT){

                    if (type == this.TYPE_YAER){
                        number = year.toString();
                        let newNumber = number.split('');
                        newNumber[index-1] = valPart;
                        newNumber = newNumber.join('');
                        year = parseInt(newNumber);
                    }
                    else if( type == this.TYPE_MONTH){
                        number =  month.toString().padStart(2, '0');

                        let newNumber = number.split('');
                        newNumber[index-1] = valPart;
                        newNumber = newNumber.join('');
                        month = parseInt(newNumber);
                    }
                    else if(type == this.TYPE_DAY){
                        number =  day.toString().padStart(2, '0');

                        let newNumber = number.split('');
                        newNumber[index-1] = valPart;
                        newNumber = newNumber.join('');
                        day = parseInt(newNumber);
                    }

                    window[commitNewTime](year , month , day , index);
                }
                else if (prop_type == this.TYPE_INPUT_PART_DIGIT){

                    if (type == this.TYPE_YAER){
                        year = parseInt(valPart);

                        if (valPart.toString().length == 4){
                            window[commitNewTime](year , month , day , index);
                        }

                    }
                    else if( type == this.TYPE_MONTH){
                        month = parseInt(valPart);

                        if (this.statusChange != null){
                            clearTimeout(this.statusChange);
                        }
                        if (valPart.toString().length == 2){
                            window[commitNewTime](year , month , day , index);
                        }
                        else{
                            this.statusChange = setTimeout(()=>{
                                window[commitNewTime](year , month , day , index);
                            } , this.statusChangeDuration)
                        }

                    }
                    else if(type == this.TYPE_DAY){
                       day =  parseInt(valPart);

                        if (this.statusChange != null){
                            clearTimeout(this.statusChange);
                        }
                        if (valPart.toString().length == 2){
                            window[commitNewTime](year , month , day , index);
                        }
                        else{
                            this.statusChange = setTimeout(()=>{
                                window[commitNewTime](year , month , day , index);
                            } , this.statusChangeDuration)
                        }

                    }

                }
                else if (prop_type == this.TYPE_INPUT_FULL_DIGIT){
                    let val = valPart.replace(/\D/g, ''); // فقط عددها

                    if (val.length > 8) val = val.slice(0, 8);

                    if (val.length >= 4) year = parseInt(val.slice(0, 4));
                    if (val.length >= 6) month = parseInt(val.slice(4, 6));
                    if (val.length >= 8) day = parseInt(val.slice(6, 8));
                }


            }
        };

        methods["commitNewTime"] = {
            name: `commitNewTime${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (year , month , day , index) => {

                /// year
                year = parseInt(year);
                const prop_prevYears     =        config.hasOwnProperty("prop_prevYears")      ?  config.prop_prevYears                :  this.DEFULAT_PERV_YEAR;
                const prop_nextYears     =        config.hasOwnProperty("prop_nextYears")      ?  config.prop_nextYears                :  this.DEFULAT_NEXT_YEAR;

                const getPartDate  = super.getMethod(config , "getPartDate"    , null );
                const datePart = window[getPartDate]();
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

                const getDaysInJalaliMonth  = super.getMethod(config , "getDaysInJalaliMonth"    , null );
                const maxDay = window[getDaysInJalaliMonth](year+1 , month+1);
                day =  day > maxDay ? maxDay : day;
                day =  day == 0 ? 1 : day;


                if (year >0 && month>0 && day>0){
                    /// value
                    const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                    const value = window[jalaliToTimeUnix](year , month , day);

                    config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                    this.changeProperty(config);
                }
            }
        };

        methods["moveToNext"] = {
            name: `moveToNext${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , nextFieldID , type=null) => {
                const prop_type          =   config.hasOwnProperty("prop_type")           ?  config.prop_type             :  this.TYPE_INPUT_ONE_DIGIT;

                let statusMove = false;
                const valPart = event.target.value;

                if (prop_type == this.TYPE_INPUT_ONE_DIGIT){
                    statusMove = true;
                }
                else if (prop_type == this.TYPE_INPUT_PART_DIGIT){

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

                                config.var_focusDatePart = nextFieldID;
                                this.changeProperty(config);
                            }
                        }
                    }
                }
            }
        };

        methods["moveToPrev"] = {
            name: `moveToPrev${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , prevFieldID , type=null , digit=null) => {

                const prop_type  =   config.hasOwnProperty("prop_type")    ?  config.prop_type   :  this.TYPE_INPUT_ONE_DIGIT;

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

                                config.var_focusDatePart = prevFieldID;
                                this.changeProperty(config);
                            }
                        }
                    }
                }
            }
        };

        methods["commitNewDate"] = {
            name: `commitNewDate${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event) => {
                const commitNewTime  = super.getMethod(config , "commitNewTime"    , null );

                let year = 0;
                let month = 0;
                let day = 0;
                if (event.key === "Enter") {
                    let val = event.target.value.replace(/\D/g, '');

                    if (val.length > 8) val = val.slice(0, 8);

                    if (val.length >= 4) year = parseInt(val.slice(0, 4));
                    if (val.length >= 6) month = parseInt(val.slice(4, 6));
                    if (val.length >= 8) day = val.slice(6, 8);

                    window[commitNewTime](year , month , day , null);
                }
            }
        };

        methods["onFocus"] = {
            name: `onFocus${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , myElId) => {

                const prop_type  =   config.hasOwnProperty("prop_type")    ?  config.prop_type   :  this.TYPE_INPUT_ONE_DIGIT;

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

                        config.var_focusDatePart = myElId;
                        this.changeProperty(config);
                    }

                }

            }
        };

        super(elId , config , listComponent[ComponentDate.name] , methods);

        this.render();


    }

    templateFn = (data , componentSlots , el) => {

        const var_showFormSelector      =        data.hasOwnProperty("var_showFormSelector")         ?  data.var_showFormSelector       :  false;
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const prop_type                 =        data.hasOwnProperty("prop_type")                    ?  data.prop_type                  :  this.TYPE_INPUT_ONE_DIGIT;

        const prop_background2          =        data.hasOwnProperty("prop_background2")             ?  data.prop_background2           :  this.DEFULAT_BACKGROUND_2;
        const prop_name                 =        data.hasOwnProperty("prop_name")                    ?  data.prop_name                  :  "No-Name-input-"+Math.floor(Math.random() * 10000);
        const prop_value                =        data.hasOwnProperty("prop_value")                   ?  data.prop_value                 :  null;


        const moveToNext                = super.getMethod(data , "moveToNext" , null);
        const moveToPrev                = super.getMethod(data , "moveToPrev" , null);
        const onFocus                   = super.getMethod(data , "onFocus"    , null);
        const onChangeDateDigit         = super.getMethod(data , "onChangeDateDigit"    , null);
        const getDigitDatePart          = super.getMethod(data , "getDigitDatePart"     , null );
        const commitNewDate             = super.getMethod(data , "commitNewDate"     , null );

        const selectDate                = super.getMethod(data , "selectDate" );

        let inputs = "";
        if (prop_type == this.TYPE_INPUT_ONE_DIGIT){

            const yearDigitOne   = window[getDigitDatePart](this.TYPE_YAER , 1);
            const yearDigitTwo   = window[getDigitDatePart](this.TYPE_YAER , 2);
            const yearDigitThree = window[getDigitDatePart](this.TYPE_YAER , 3);
            const yearDigitFour  = window[getDigitDatePart](this.TYPE_YAER , 4);

            const monthDigitOne  = window[getDigitDatePart](this.TYPE_MONTH , 1);
            const monthDigitTwo  = window[getDigitDatePart](this.TYPE_MONTH , 2);

            const dayDigitOne    = window[getDigitDatePart](this.TYPE_DAY , 1);
            const dayDigitTwo    = window[getDigitDatePart](this.TYPE_DAY , 2);

            inputs = `
                    <div class="row parts-form-input-date">
                             <div class="part-form-input-date-1 col-6 row pe-2 ps-0 m-0 position-relative">
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_1-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_2-${var_randomId}'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_1-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , null)"
                                             value="${yearDigitOne}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_2-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_3-${var_randomId}'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_2-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_1-${var_randomId}')"
                                             value="${yearDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_3-${var_randomId}"
                                             oninput="${moveToNext}(event , 'Date_4-${var_randomId}'); ${onChangeDateDigit}(event ,'${this.TYPE_YAER}' , 3)" 
                                             onfocus="${onFocus}(event  , 'Date_3-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_2-${var_randomId}')"
                                             value="${yearDigitThree}"
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_4-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_5-${var_randomId}'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 4)" 
                                             onfocus="${onFocus}(event  , 'Date_4-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_3-${var_randomId}')"
                                             value="${yearDigitFour}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-2 col-3 row pe-2 ps-2 m-0 position-relative">
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input                                           
                                             id="Date_5-${var_randomId}"
                                             oninput="${moveToNext}(event , 'Date_6-${var_randomId}'); ${onChangeDateDigit}(event , '${this.TYPE_MONTH}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_5-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_4-${var_randomId}')"
                                             value="${monthDigitOne}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_6-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_7-${var_randomId}'); ${onChangeDateDigit}(event , '${this.TYPE_MONTH}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_6-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_5-${var_randomId}')"
                                             value="${monthDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-3 col-3 row pe-0 ps-2 m-0 position-relative">
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_7-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_8-${var_randomId}'); ${onChangeDateDigit}(event , '${this.TYPE_DAY}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_7-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_6-${var_randomId}')"
                                             value="${dayDigitOne}"
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_8-${var_randomId}" 
                                             oninput="${moveToNext}(event , null); ${onChangeDateDigit}(event , '${this.TYPE_DAY}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_8-${var_randomId}')"
                                             onkeydown="${moveToPrev}(event  , 'Date_7-${var_randomId}')"
                                             value="${dayDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                         </div>
            `;
        }
        else if (prop_type == this.TYPE_INPUT_PART_DIGIT){

            const yearDigitOne   = window[getDigitDatePart](this.TYPE_YAER);

            const monthDigitOne  = window[getDigitDatePart](this.TYPE_MONTH);

            const dayDigitOne    = window[getDigitDatePart](this.TYPE_DAY);

            inputs = `
                    <div class="row parts-form-input-date">
                             <div class="part-form-input-date-1 col-6 row pe-2 ps-0 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_1-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_2-${var_randomId}'  , '${this.TYPE_YAER}'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_1-${var_randomId}' , '${this.TYPE_YAER}')"
                                             onkeydown="${moveToPrev}(event  , null)"
                                             value="${yearDigitOne}" 
                                             type="text"  maxlength="4" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-2 col-3 row pe-2 ps-2 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <input                                           
                                             id="Date_2-${var_randomId}" 
                                             oninput="${moveToNext}(event , 'Date_3-${var_randomId}'  , '${this.TYPE_MONTH}'); ${onChangeDateDigit}(event , '${this.TYPE_MONTH}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_2-${var_randomId}' , '${this.TYPE_MONTH}' )"
                                             onkeydown="${moveToPrev}(event  , 'Date_1-${var_randomId}')"
                                             value="${monthDigitOne}" 
                                             type="text"  maxlength="2" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-3 col-3 row pe-0 ps-2 m-0 position-relative">
                                  <div class="col-12 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_3-${var_randomId}" 
                                             oninput="${moveToNext}(event , null  , '${this.TYPE_DAY}'); ${onChangeDateDigit}(event , '${this.TYPE_DAY}' , 3)" 
                                             onfocus="${onFocus}(event  , 'Date_3-${var_randomId}' , '${this.TYPE_DAY}' )"
                                             onkeydown="${moveToPrev}(event  , 'Date_2-${var_randomId}')"
                                             value="${dayDigitOne}"
                                             type="text"  maxlength="2" class="inputs-date  form-control text-center"  />
                                  </div>
                             </div>
                     </div>
            `;
        }
        else if (prop_type == this.TYPE_INPUT_FULL_DIGIT){
            const digitAll   = window[getDigitDatePart]();
            inputs = `
                    <div class="row parts-form-input-date">
                    
                           <input
                                 id="Date_1-${var_randomId}" 
                                 oninput="${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 1)" 
                                 onfocus="${onFocus}(event)"
                                 onkeydown="${commitNewDate}(event)"
                                 value="${digitAll}" 
                                 type="text"  maxlength="10" class="inputs-date  form-control text-center "  />
                                 
                    </div>
            `;
        }
        else if (prop_type == this.TYPE_INPUT_FRIZE_DIGIT){
            const yearDigitOne   = window[getDigitDatePart](this.TYPE_YAER);

            const monthDigitOne  = window[getDigitDatePart](this.TYPE_MONTH);

            const dayDigitOne    = window[getDigitDatePart](this.TYPE_DAY);

            inputs = `
                    <div class="row parts-form-input-date" onclick="${selectDate}">
                          
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
<style>
 #${el.id} .icon-clear-input-date{
    z-index: 10;
    margin: 0 !important;
    width: 10px;
    line-height: 35px;
    left: 10px;
    cursor: pointer;
}
 #${el.id} .icon-input-date{
    z-index: 10;
    margin: 0 !important;
    width: 25px;
    line-height: 35px;
    right: 5px;
    cursor: pointer;
    font-size: 15pt;
}
 #${el.id} .form-input-date{
     padding-right: calc(30px + 20%);
     padding-left: calc(20px + 20%);
     padding-top: 2px;
     padding-bottom: 2px;
     height: 38px;
}
 #${el.id} .parts-form-input-date{
     width: 175px;
     margin: auto;
}
 #${el.id} .part-form-input-date-1:after , .part-form-input-date-2:after{
    content: "/";
    right: -5px;
    line-height: 34px;
    position: absolute;
}
 #${el.id} .inputs-date{
     border-color: #ebebeb;
     line-height: 30px;
     padding: 0;
     margin: 0;
     border: none;
     outline: none;
}

 #${el.id} .form-choose-date{
     direction: rtl;
     z-index: 10;
}
 #${el.id} .form-choose-date-info-year{
     width: calc(3*14% + 4px);
}
 #${el.id} .form-choose-date-info-month{
      width: calc(4*14%);
}
 #${el.id} .form-choose-date-info{
     background-color: ${prop_background2};
     height: 40px;
}
 #${el.id} .form-choose-date-title{
     line-height: 35px;
     font-size:12pt;
     cursor: pointer;
}
 #${el.id} .form-choose-date-select-form{
     
}
 #${el.id} .form-choose-date-select-form-inside{
     height: 130px;
}
 #${el.id} .form-choose-date-select-form-item:hover{
     background-color: ${prop_background2};
     color: white;
     cursor: pointer;
}
 #${el.id} .form-choose-date-arrow{
     line-height: 35px;
     font-size:14pt;
     cursor: pointer;
}

 #${el.id} .form-choose-date-middle{
     background-color: ${prop_background2};
}
 #${el.id} .form-choose-date-middle-table{
    
}
 #${el.id} .form-choose-date-middle-table-header{
    
}
 #${el.id} .form-choose-date-middle-days-title{
     font-size: 8pt;
     line-height: 25px;
     border-left: white solid 1px;
     border-bottom: white solid 1px;
     width: 14%;
}
 #${el.id} .form-choose-date-middle-table-body{
      background-color: white;
}
 #${el.id} .form-choose-date-middle-days-num{
    font-size: 10pt;
    line-height: 20px;
    width: 14%;
    cursor: pointer;
}
 #${el.id} .form-choose-date-middle-days-num:hover span{
     background-color: #e1e1e1;
}


 #${el.id} .form-choose-date-bottom{
     background-color: ${prop_background2};
}
</style>
          <section class="<!--component-element-structure--> form-group mb-2">

                <div class="d-block">
<component-label id="label-input-date-${var_randomId}"></component-label>
                </div>

                <div class="position-relative">
                
                <input name="${prop_name}" value="${prop_value}" type="hidden"/>

<component-button id="btn-clear-date-${var_randomId}">
</component-button>  
                    
                   
<component-button id="btn-show-date-form-${var_randomId}">
</component-button>  

                    <div class="form-input-date form-control  line-height-30px  position-relative ">
                         ${inputs}
                    </div>
                    
<component-position-element id="form-position-date-${var_randomId}">
    <component-body>
         
         <section class="form-choose-date-info row p-0 border-bottom border-white ">
                              
                              <div class="form-choose-date-info-year  row  p-0 m-0   ">
                                   <div class="col-3">
<component-button id="prev-year-selected-${var_randomId}">
</component-button>  
                                   </div>
                                   <div class="col-6 position-relative">
<component-select-option id="select-option-year-${var_randomId}">
</component-select-option>
                                   </div>
                                    <div class="col-3">
<component-button id="next-year-selected-${var_randomId}">
</component-button>
                                   </div>
                              </div>
                              
                              <div class="form-choose-date-info-month row  p-0 m-0 row  p-0 m-0 border-end border-white">
                                   <div class="col-3">
<component-button id="prev-month-selected-${var_randomId}">
</component-button>  
                                   </div>
                                   <div class="col-6 position-relative">
<component-select-option id="select-option-month-${var_randomId}">
</component-select-option>
                                   </div>
                                   <div class="col-3">
<component-button id="next-month-selected-${var_randomId}">
</component-button>
                                   </div>
                              </div>
                              
                         </section>
                         
                         
                         <section class="form-choose-date-middle row p-0 border-bottom border-white ">
<component-table id="table-list-days-in-month-${var_randomId}">
</component-table>
                         </section>
                         
                         
                         <section class="form-choose-date-bottom row p-0 border-top border-white  py-1">
                               
                               <div class="col-4">
<component-button id="accept-date-selected-${var_randomId}">
</component-button>
                               </div>
                               
                               <div class="col-4"></div>
                               
                               <div class="col-4">
<component-button id="now-date-selected-${var_randomId}">
</component-button>
                               </div>
                               
                         </section>

    </component-body>
 </component-position-element>

                </div>

            </section>
`;
    }

    onCreate = (data , el) => {

    }

    onRender = (data , componentSlots , el) => {

        const var_focusDatePart  =    data.hasOwnProperty("var_focusDatePart")    ?  data.var_focusDatePart  :  null;
        if (var_focusDatePart != null){
            document.getElementById(var_focusDatePart).focus();
        }


        const readyDatePicker = super.getMethod(data , "readyDatePicker" , null);
        window[readyDatePicker]()

        this.readyElementPosition(data , componentSlots , el);

        this.readyLabelInput(data , componentSlots , el);

        this.readyLabelInput(data , componentSlots , el);

        this.readyBtnShowDateForm(data , componentSlots , el);

        this.readyBtnClearForm(data , componentSlots , el);

        this.readyBtnPrevYear(data , componentSlots , el);
        this.readyBtnNextYear(data , componentSlots , el);
        this.readySelectOptionYear(data , componentSlots , el);

        this.readyBtnPrevMonth(data , componentSlots , el);
        this.readyBtnNextMonth(data , componentSlots , el);
        this.readySelectOptionMonth(data , componentSlots , el);

        this.readyTableDays(data , componentSlots , el);

        this.readyBtnAccept(data , componentSlots , el);
        this.readyBtnNow(data , componentSlots , el);

    }

    readyElementPosition  = (data , componentSlots , el) => {
        const var_randomId              =   data.hasOwnProperty("var_randomId")                ?  data.var_randomId                       :  0;
        const var_showFormSelector      =   data.hasOwnProperty("var_showFormSelector")        ?  data.var_showFormSelector               :  false;

        new window.ComponentPositionElement(
            "form-position-date-"+var_randomId ,
            {
                prop_show: var_showFormSelector,
                prop_height: null,

                prop_elementClass: ["rounded","border","shadow-sm","w-100","overflow-hidden"] ,
                prop_elementStyles: {
                    'direction' : "rtl" ,
                    'z-index' : "10" ,
                } ,

            }
        )
    }



    readyLabelInput  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const prop_title                =   data.hasOwnProperty("prop_title")                  ?  data.prop_title                         :  "No Title";

        const prop_labelClass           =   data.hasOwnProperty("prop_labelClass")             ?  data.prop_labelClass                    :  [];
        const prop_labelStyles          =   data.hasOwnProperty("prop_labelStyles")            ?  data.prop_labelStyles                   :  {};
        const prop_labelHoverStyles     =   data.hasOwnProperty("prop_labelHoverStyles")       ?  data.prop_title                         :  {};

        const selectDate                =   super.getMethod(data , "selectDate"    , null );

        new window.ComponentLabel(
            "label-input-date-"+var_randomId ,
            {
                prop_title:            prop_title ,
                prop_labelClass:       prop_labelClass ,
                prop_labelStyles:      prop_labelStyles ,
                prop_labelHoverStyles: prop_labelHoverStyles ,

                fn_callback: ()=>{
                    window[selectDate]();
                }
            }
        )
    }


    readyBtnShowDateForm  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const selectDate                =    super.getMethod(data , "selectDate"    , null );

        new window.ComponentButton(
            "btn-show-date-form-"+var_randomId ,
            {
                classList: []  ,
                styles: {
                    "height" : "38px"
                }  ,
                prop_btnClass : ["position-absolute"] ,
                prop_btnStyles : {
                    "z-index" : "10",
                    "width" :   "35px",
                    "line-height" : "20px",
                    "right" : "5px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "margin-top" : "3px!important" ,
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#128467;" ,

                fn_callback: ()=>{
                    window[selectDate]();
                }
            }
        )
    }


    readyBtnClearForm  = (data , componentSlots , el) => {
        const var_randomId              =    data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const clearInput                =    super.getMethod(data , "clearInput"    , null);

        const var_showFormSelector      =    data.hasOwnProperty("var_showFormSelector")         ?  data.var_showFormSelector       :  false;

        new window.ComponentButton(
            "btn-clear-date-"+var_randomId ,
            {
                classList: []  ,
                styles: {
                    "height" : "38px"
                }  ,

                prop_show: !var_showFormSelector ,

                prop_btnClass : ["position-absolute"] ,
                prop_btnStyles : {
                    "z-index" : "10",
                    "width" :   "35px",
                    "line-height" : "20px",
                    "left" : "5px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "margin-top" : "3px!important",
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#10540;" ,

                fn_callback: ()=>{
                    window[clearInput]();
                }
            }
        )
    }


    readyBtnPrevYear  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const goToYear  =    super.getMethod(data , "goToYear"  , null );

        const goToYearSelectedPrev   =    super.getMethod(data , "goToYearSelected"   , null );

        new window.ComponentButton(
            "prev-year-selected-"+var_randomId ,
            {
                prop_btnClass : ["text-white  d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer",
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#11166;" ,

                fn_callback: ()=>{
                    window[goToYear]();
                }
            }
        )
    }

    readyBtnNextYear  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const goToYear  =    super.getMethod(data , "goToYear"  , null );

        const goToYearSelectedNext   =    super.getMethod(data , "goToYearSelected" , null );
        new window.ComponentButton(
            "next-year-selected-"+var_randomId ,
            {
                prop_btnClass : ["text-white  d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer",
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#11164;" ,

                fn_callback: ()=>{
                    window[goToYear](true);
                }
            }
        )
    }

    readySelectOptionYear  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const prop_prevYears     =        data.hasOwnProperty("prop_prevYears")      ?  data.prop_prevYears      :  this.DEFULAT_PERV_YEAR;
        const prop_nextYears     =        data.hasOwnProperty("prop_nextYears")      ?  data.prop_nextYears      :  this.DEFULAT_NEXT_YEAR;

        const var_selected_date   =     data.hasOwnProperty("var_selected_date")        ?  data.var_selected_date      :  null;
        const var_selected_year  =   var_selected_date != null && var_selected_date.hasOwnProperty("total") &&  var_selected_date.total.hasOwnProperty("year") ?  parseInt(var_selected_date.total.year)  : -1;

        const getPartDate  = super.getMethod(data , "getPartDate"    , null );
        const datePart = window[getPartDate]();
        const thisYear = datePart != null && datePart.hasOwnProperty("year") ? parseInt(datePart.year) : this.DEFULAT_YEAR;

        let listYear = [];
        for (let i = thisYear - prop_prevYears; i < thisYear + prop_nextYears ; i++) {
            listYear.push(
                {id:i-1 , name: i}
            )
        }

        const goToYearSelected   =    super.getMethod(data , "goToYearSelected" , null );

        new window.ComponentSelectOption(
            "select-option-year-"+var_randomId ,
            {
                prop_type:1 ,
                prop_title:null ,
                prop_optionWidth : "150px" ,
                prop_name:"date-picker-year" ,
                prop_optionIconColor:"#ffffff" ,
                prop_titleClass:"text-white " ,
                prop_optionStyles: {
                    "left" : "-32px"
                } ,
                prop_titleStyles: {
                    "line-height" : "35px!important",
                    "background-color" : "#ffffff00!important"
                } ,
                prop_optionIcon : "" ,
                prop_itemSelected: var_selected_year,
                prop_options: listYear ,
                fn_callback: (index)=>{
                    window[goToYearSelected](index)
                }
            }
        )

    }


    readyBtnPrevMonth  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const goToMonth  =    super.getMethod(data , "goToMonth"  , null );

        new window.ComponentButton(
            "prev-month-selected-"+var_randomId ,
            {
                prop_btnClass : ["text-white  d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer",
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#11166;" ,

                fn_callback: ()=>{
                    window[goToMonth]();
                }
            }
        )
    }

    readyBtnNextMonth  = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const goToMonth  =    super.getMethod(data , "goToMonth"  , null );

        new window.ComponentButton(
            "next-month-selected-"+var_randomId ,
            {
                prop_btnClass : ["text-white  d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer",
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_title : "&#11164;" ,

                fn_callback: ()=>{
                    window[goToMonth](true);
                }
            }
        )
    }

    readySelectOptionMonth = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const var_selected_date   =     data.hasOwnProperty("var_selected_date")        ?  data.var_selected_date      :  null;
        const var_selected_month = var_selected_date != null && var_selected_date.hasOwnProperty("total") &&  var_selected_date.total.hasOwnProperty("month") ?  parseInt(var_selected_date.total.month) : -1;

        const goToMonthSelected   =    super.getMethod(data , "goToMonthSelected" , null );

        const prop_langs       =   data.hasOwnProperty("prop_langs")      ?  data.prop_langs           :  {};

        const listMonth = [
            {id:0 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_0") ? prop_langs._month_0 : "فروردین"} ,
            {id:1 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_1") ? prop_langs._month_1 : "اردیبهشت"},
            {id:2 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_2") ? prop_langs._month_2 : "خرداد"} ,
            {id:3 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_3") ? prop_langs._month_3 : "تیر"}   ,
            {id:4 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_4") ? prop_langs._month_4 : "مرداد"}  ,
            {id:5 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_5") ? prop_langs._month_5 : "شهریور"}  ,
            {id:6 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_6") ? prop_langs._month_6 : "مهر"} ,
            {id:7 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_7") ? prop_langs._month_7 : "آبان"} ,
            {id:8 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_8") ? prop_langs._month_8 : "آذر"} ,
            {id:9 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_9") ? prop_langs._month_9 : "دی"} ,
            {id:10 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_10") ? prop_langs._month_10 : "بهمن"} ,
            {id:11 , name: prop_langs != null && prop_langs.hasOwnProperty("_month_11") ? prop_langs._month_11 : "اسفند"} ,
        ]

        new window.ComponentSelectOption(
            "select-option-month-"+var_randomId ,
            {
                prop_type:1 ,
                prop_title:null ,
                prop_name:"date-picker-month" ,
                prop_optionWidth : "150px" ,
                prop_optionIconColor:"#ffffff" ,
                prop_titleClass:"text-white " ,
                prop_optionStyles: {
                    "left" : "-32px"
                } ,
                prop_titleStyles: {
                    "line-height" : "35px!important" ,
                    "background-color" : "#ffffff00!important"
                } ,
                prop_optionIcon : "" ,
                prop_options: listMonth,
                prop_itemSelected: var_selected_month,
                fn_callback: (index)=>{
                    window[goToMonthSelected](index)
                }
            }
        )

    }


    readyTableDays = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        //---------------
        const var_selected_date  =   data.hasOwnProperty("var_selected_date")   ?  data.var_selected_date  :  null;

        //---------------
        const prop_background1 =   data.hasOwnProperty("prop_background1")   ?  data.prop_background1      :  this.DEFULAT_BACKGROUND_1;
        const prop_background2 =   data.hasOwnProperty("prop_background2")   ?  data.prop_background2      :  this.DEFULAT_BACKGROUND_2;
        const prop_color       =   data.hasOwnProperty("prop_color")         ?  data.prop_color           :  this.DEFULAT_COLOR;

        const prop_langs       =   data.hasOwnProperty("prop_langs")         ?  data.prop_langs           :  {};

        //---------------
        const goToDaySelected  =    super.getMethod(data , "goToDaySelected"    , null );


        const getJalaliMonthGrid = super.getMethod(data , "getJalaliMonthGrid"    , null );
        const listWeek = window[getJalaliMonthGrid](
            var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) : -1 ,
            var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month)   : -1
        );

        new window.ComponentTable(
            "table-list-days-in-month-"+var_randomId ,
            {
                classList: "row p-0 m-0"  ,
                id: "table2" ,

                prop_valueType: 3 ,
                prop_valueRow : var_selected_date != null && var_selected_date.hasOwnProperty("inMonth") && var_selected_date.inMonth.toString("week") ?   parseInt(var_selected_date.inMonth.week) : -1 ,
                prop_valueCol : var_selected_date != null && var_selected_date.hasOwnProperty("inWeek") && var_selected_date.inMonth.toString("inWeek") ?   parseInt(var_selected_date.inWeek.day)   : -1 ,

                prop_valueRow_backgroundColor : prop_background1 ,
                prop_valueCol_backgroundColor : prop_background2 ,
                prop_valueCol_textColor : prop_color ,

                prop_tableClass : ["border-none"] ,
                prop_tableStyles : {
                    "background" : prop_background2 ,
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
                prop_tableBodyClass : [ "bg-white"] ,
                prop_tableItemBodyClass : [ "" , "rounded" , "d-block"] ,
                prop_tableItemBodyStyles: {
                    "color" : "#525252" ,
                },
                prop_tableItemBodyHoverStyles : {
                    "background-color" : "#e1e1e1!important" ,
                    "cursor" : "pointer" ,
                },


                prop_order : ["day_0" , "day_1" , "day_2" , "day_3", "day_4" , "day_5", "day_6" ] ,
                prop_header : [
                    {id:"day_0" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_0") ? prop_langs._day_0 : "شنبه"},
                    {id:"day_1" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_1")  ? prop_langs.day_1  : "یک شنبه"},
                    {id:"day_2" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_2") ? prop_langs._day_2 : "دو شنبه"},
                    {id:"day_3" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_3") ? prop_langs._day_3 : "سه شنبه"},
                    {id:"day_4" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_4") ? prop_langs._day_4 : "چهار شنبه"},
                    {id:"day_5" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_5") ? prop_langs._day_5 : "پنج شنبه"},
                    {id:"day_6" , content: prop_langs != null && prop_langs.hasOwnProperty("_day_6") ? prop_langs._day_6 : "جمعه"},
                ] ,
                prop_data : listWeek,

                fn_callback: (dayNum , dayName , dayIndex , weekIndex)=>{
                    window[goToDaySelected](dayNum , dayName , dayIndex , weekIndex)
                }
            }
        )

    }


    readyBtnAccept = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const acceptBtnSelected    =    super.getMethod(data , "acceptBtnSelected"  , null );
        const prop_langs           =   data.hasOwnProperty("prop_langs")      ?  data.prop_langs           :  {};

        new window.ComponentButton(
            "accept-date-selected-"+var_randomId ,
            {
                prop_btnBackgroundColor : "#1ec9aa" ,
                prop_btnColor : "white" ,
                prop_title : prop_langs != null && prop_langs.hasOwnProperty("_btn_accept_title") ? prop_langs._btn_accept_title : "تایید" ,
                prop_btnStyles : {
                    "border" : "none" ,
                    "outline" : "none" ,
                } ,

                fn_callback: ()=>{
                    window[acceptBtnSelected]();
                }
            }
        )
    }

    readyBtnNow = (data , componentSlots , el) => {
        const var_randomId              =        data.hasOwnProperty("var_randomId")                 ?  data.var_randomId               :  0;

        const nowBtnSelected       =    super.getMethod(data , "nowBtnSelected"  , null );
        const prop_langs           =   data.hasOwnProperty("prop_langs")      ?  data.prop_langs           :  {};

        new window.ComponentButton(
            "now-date-selected-"+var_randomId ,
            {
                prop_btnBackgroundColor : "#1ec9aa" ,
                prop_btnColor : "white" ,
                prop_title : prop_langs != null && prop_langs.hasOwnProperty("_btn_now_title") ? prop_langs._btn_now_title : "اکنون" ,

                fn_callback: ()=>{
                    window[nowBtnSelected]();
                }
            }
        )
    }
}





/*-------------------------------------
 Component label
-------------------------------------
@prop_title
@prop_for
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@fn_callback
-------------------------------------*/
window.ComponentLabel  = class ComponentLabel extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        methods["onClickLabel"] = {
            name: `retry404_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event) => {
                const prop_for    =   config.hasOwnProperty("prop_for")        ?  config.prop_for    :  "";
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback(event , prop_for);
                }
            }
        };

        super(elId , config , listComponent[ComponentLabel.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_title              =   data.hasOwnProperty("prop_title")              ?  data.prop_title              :  (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_for                =   data.hasOwnProperty("prop_for")                ?  data.prop_for                :  "";

        const prop_labelClass         =   data.hasOwnProperty("prop_labelClass")         ?  data.prop_labelClass         :  "shadow-sm px-2 py-1"
        const prop_labelStyles        =   data.hasOwnProperty("prop_labelStyles")        ?  data.prop_labelStyles        :  null;
        const prop_labelHoverStyles   =   data.hasOwnProperty("prop_labelHoverStyles")   ?  data.prop_labelHoverStyles   :  null;

        const onClickLabel = super.getMethod(data , "onClickLabel" , `(event , '${prop_for}')`);

        return `
<style>
     #${el.id} .component-label{
          ${super.renderListStyle(prop_labelStyles)}
          cursor: pointer;
     }
     #${el.id} .component-label:hover{
         ${super.renderListStyle(prop_labelHoverStyles)}
     }
</style>
<section class="component-element-structure mb-2">
     <label for="${prop_for}" class="component-label ${super.renderListClass(prop_labelClass)}   d-block  " onclick="${onClickLabel}">
         ${prop_title}
     </label>
</section>
`;
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

        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["onClickToIcon"] = {
            name: `onClickToIcon${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {

                const var_randomId    =  config.hasOwnProperty("var_randomId")      ?  config.var_randomId      :  0;
                if ( components.hasOwnProperty(var_randomId)) {
                    const componentData = components[var_randomId];

                    if (componentData.hasOwnProperty("fn_callback") && typeof componentData.fn_callback != null){
                        componentData.fn_callback();
                    }
                }
            }
        };

        super(elId , config , listComponent[ComponentIcon.name] , methods , config["var_randomId"]);

        this.render()
    }

    templateFn(data , componentSlots , el){

        //-------------------
        const var_randomId             =        data.hasOwnProperty("var_randomId")              ?  data.var_randomId                                         :  0;


        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_icon                =  componentData.hasOwnProperty("prop_icon")                       ?  data.prop_icon                                            :  "";
            const prop_isItalik            =  componentData.hasOwnProperty("prop_isItalik")                   ?  data.prop_isItalik                                        :  false;

            const prop_iconClass           =   componentData.hasOwnProperty("prop_iconClass")                 ?  data.prop_iconClass                                       :  [];
            const prop_iconStyles          =   componentData.hasOwnProperty("prop_iconStyles")                ?  data.prop_iconStyles                                      :  {};

            const onClickToIcon            =   super.getMethod(componentData , "onClickToIcon"   , "(event)" );

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


    }

}




/*-------------------------------------
 Component Position Element
-------------------------------------
@prop_elementClass
@prop_elementStyles
@prop_content || component-body

@prop_positionTop
@prop_positionLeft
@prop_positionBottom
@prop_positionRight

@prop_width
@prop_height
-------------------------------------*/
window.ComponentPositionElement  = class ComponentPositionElement extends ComponentBase{

    props = {};

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        super(elId , config , listComponent[ComponentPositionElement.name] , methods , config["var_randomId"]);

        //this.props.var_randomId         = Math.floor(Math.random() * 10000);

        this.render()
    }

    templateFn = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_content            =  data.hasOwnProperty("prop_content")                    ?  data.prop_content              :  (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
            const prop_elementClass       =  data.hasOwnProperty("prop_elementClass")               ?  data.prop_elementClass         :  ["border" , "shadow-sm" , "bg-white" ,"px-2" , "py-1" , "rounded"];
            const prop_elementStyles      =  data.hasOwnProperty("prop_elementStyles")              ?  data.prop_elementStyles        :  {};
            const prop_positionTop        =  data.hasOwnProperty("prop_positionTop")                ?  data.prop_positionTop          :  "";
            const prop_positionLeft       =  data.hasOwnProperty("prop_positionLeft")               ?  data.prop_positionLeft         :  "";
            const prop_positionBottom     =  data.hasOwnProperty("prop_positionBottom")             ?  data.prop_positionBottom       :  "";
            const prop_positionRight      =  data.hasOwnProperty("prop_positionRight")              ?  data.prop_positionRight        :  "";
            const prop_width              =  data.hasOwnProperty("prop_width")                      ?  data.prop_width                :  "100%";
            const prop_height             =  data.hasOwnProperty("prop_height")                     ?  data.prop_height               :   "200px";

            return `
<style>
 #${el.id} .component-element-position-${var_randomId}{
     ${super.renderListStyle(prop_elementStyles)}
     z-index: 11;
     width:  ${prop_width};
     height: ${prop_height};
     top:    ${prop_positionTop};
     left:   ${prop_positionLeft };
     bottom: ${prop_positionBottom};
     right:  ${ prop_positionRight};
 }
</style>
<section class="component-element-structure">
   <section class="component-element-position-${var_randomId} position-absolute ${super.renderListClass(prop_elementClass)}">
     ${prop_content}
   </section>
</section>

`;
        }

    }

}





/*-------------------------------------
 Component Info
-------------------------------------
@prop_icon
@prop_title
@prop_iconClass
@prop_iconStyles
-------------------------------------*/
window.ComponentInfo = class ComponentInfo extends ComponentBase{

    props = {};

    constructor(elId , config) {
        config["var_randomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        super(elId , config , listComponent[ComponentInfo.name] , methods , config["var_randomId"]);

        this.render()
    }

    templateFn = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_title          =  componentData.hasOwnProperty("prop_title")             ?  componentData.prop_title          : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
            const prop_iconClass      =  componentData.hasOwnProperty("prop_iconClass")         ?  componentData.prop_iconClass      :  [];
            const prop_iconStyles     =  componentData.hasOwnProperty("prop_iconStyles")        ?  componentData.prop_iconStyles     :  {};
            const prop_icon           =  componentData.hasOwnProperty("prop_icon")              ?  componentData.prop_icon           :  "";

            return `
<style>
 #${el.id} .component-info-text-${ var_randomId }{
       ${super.renderListStyle(prop_iconStyles)}
 }
</style>
<section class="component-element-structure mb-2">
   <p class="component-info-${   var_randomId }">
   
<component-icon id="component-info-icon-${   var_randomId }"></component-icon>
      <section class="component-info-text-${   var_randomId } ${super.renderListClass(prop_iconClass)} ">
         ${prop_title }
      </section>
   </p>
</section>
        `;
        }

    }


    onRender = (data , componentSlots , el) => {
        const var_randomId          =  data.hasOwnProperty("var_randomId")     ?  data.var_randomId        :  0;

        this.readyIconInput(var_randomId);
    }

    readyIconInput = (var_randomId) => {
        if ( components.hasOwnProperty(var_randomId)) {

            const componentData = components[var_randomId];
            const prop_icon           =  componentData.hasOwnProperty("prop_icon")              ?  componentData.prop_icon           :  "";

            new window.ComponentIcon(
                "component-info-icon-"+  var_randomId  ,
                {
                    prop_icon:     prop_icon  ,

                    prop_iconClass : ["font-12pt" , "mx-2" , "float-end"] ,
                    prop_iconStyles : {
                        "margin" : "0",
                        "width" : "25px",
                        "line-height" :   "25px",
                        "right" :   "0",
                        "font-size" : "20pt;",
                        "top" : "0" ,
                    } ,

                }
            )
        }

    }
}