/*
Name: Components
Developer: Mehdi Maarefian
Version: 0.1
*/


if (typeof listComponent === 'undefined') {
    var listComponent = {
        ComponentMessages:          "component-messages" ,       //1
        ComponentLoading:           "component-loading" ,        //2
        Component404:               "component-404" ,            //3
        ComponentForm:              "component-form" ,           //4
        ComponentIsEmpty:           "component-is-empty" ,       //5
        ComponentHeader:            "component-header" ,         //6
        ComponentCollapse:          "component-collapse" ,       //7
        ComponentTable:             "component-table" ,          //8
        ComponentButton:            "component-button" ,         //9
        ComponentSelectOption:      "component-select-option" ,  //10
        ComponentTabs:              "component-tabs" ,           //11
        ComponentOtp:               "component-otp" ,            //12
        ComponentWidget:            "component-widget" ,         //13
        ComponentInput:             "component-input" ,          //14
        ComponentDate:              "component-date" ,           //15
    }
}




/* -------------------------------------
 Component Make:
------------------------------------- */
class ComponentMaker {
    define( props , componentName, templateFn , onCreate , onRender) {

        if (!customElements.get(componentName)) {

            customElements.define(
                componentName,
                class extends HTMLElement {

                    constructor() {
                        super();
                        this.el = document.createElement("div");

                       //  this.el.className = className;

                        // UID یکتا تنظیم می‌کنیم
                        //const uid = Math.floor(Math.random() * 1000000);
                       // this.setAttribute('data-uid', uid);
                        return this;
                    }


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

                        const componentSlotNames = [...this.querySelectorAll('*')].filter(el => el.tagName.toLowerCase().startsWith('component-'));
                        if (componentSlotNames != null && Array.isArray(componentSlotNames)){
                            for (const index in componentSlotNames) {
                                const componentTag = componentSlotNames[index];
                                componentSlots[componentTag.tagName.toLowerCase().replace(/^component-/, '')] = componentTag.innerHTML
                            }
                        }

                        if (data.hasOwnProperty("prop_show") && data.prop_show){
                            this.innerHTML = templateFn(data, componentSlots , this);
                        }
                        else {
                            this.innerHTML = "<!--hidden-component-->";
                        }

                        setTimeout(
                            ()=>{
                                if (typeof onRender === 'function') {
                                    onRender(data , componentSlots , this );
                                }
                            } , 0)
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

    constructor(elId , config , componentName , methods) {

        this.elId = elId;
        this.config = this.readyStaticConfig(config);
        this.componentName = componentName // +"-" + Math.floor(Math.random() * 10000);

     /*   let el = document.getElementById(elId);
        el = this.replaceTag(elId , this.componentName)*/

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
        const el = document.getElementById(this.elId);

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
            if (this.config.classList) el.classList = this.renderListClass(this.config.classList);

            if (this.config.styles) {
                Object.entries(this.config.styles).forEach(([key, value]) => {
                    el.style[key] = value;
                });
            }
        }


    }

    render(){
        this.readyAttrs();

        const maker = new ComponentMaker()
        /*setTimeout(()=>{

        }, 0)*/
        return maker.define(
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
            }
        )
    }


}




/*-------------------------------------
 Component Messages
-------------------------------------
@prop_status
@prop_messages
-------------------------------------*/
window.ComponentMessages = class ComponentMessages extends ComponentBase{

    constructor(elId , config) {

        let methods = {};
        methods["closeMessage"] = {
            name: `closeMessage_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: () => {
                const el = document.getElementById(elId);
                const formMessage = el.getElementsByClassName("form-message");
                if (formMessage != null){
                    formMessage[0].remove();
                }
            }
        };

        super(elId , config , listComponent[ComponentMessages.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){
        const messageStatusClass = data.hasOwnProperty("prop_status") && data.prop_status ? 'element-info alert alert-info' : 'element-errors alert alert-danger';

        if (data.hasOwnProperty("prop_messages")){
            let html = ``;
            html += `<div class="mx-2 px-2 ">`;

            const closeMessage = super.getMethod(data , "closeMessage");

            for (const index in data.prop_messages) {
                html += `
<style>
#${el.id} .icon-message{
    cursor: pointer;
}
</style>
<div class="form-message ${messageStatusClass} text-direction mt-2" role="alert">
     ${data.prop_messages[index]}
      <span class="icon-message  float-end me-1 " onclick="${closeMessage}">&#10005;</span>
</div>
`;
            }

            html += `</div>`;

            return html;
        }
        return  "";
    }

    onCreate(el){

    }

    onRender(data ,slots , el){

    }

}




/*-------------------------------------
 Component Loading
-------------------------------------
@prop_bgColor
@prop_color
-------------------------------------*/
window.ComponentLoading = class ComponentLoading extends ComponentBase{

    constructor(elId , config) {
        super(elId , config , listComponent[ComponentLoading.name]);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_bgColor = data.hasOwnProperty("prop_bgColor") ? data.bgColor : tools_const.styles.backShadow.backgroundColor;
        const prop_color = data.hasOwnProperty("prop_color") ? data.color : tools_const.styles.loading.backgroundColor;

        return  `
<style>
#${el.id} .form-loading{
    left: 0;
    top: 0;
    z-index: 5000;
    background-color: ${prop_bgColor};
}

#${el.id} .lds-ring {
    z-index: 12;
    color: ${prop_color};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
#${el.id} .lds-ring,
#${el.id} .lds-ring div {
    box-sizing: border-box;
}
#${el.id} .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
#${el.id} .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
}
#${el.id} .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
#${el.id} .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
#${el.id} .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

    <section class="form-loading position-absolute  w-100 h-100" >
        <div class="lds-ring position-absolute"><div></div><div></div><div></div><div></div></div>
    </section>
        `;
    }

    onCreate(data , el){

    }

    onRender(data ,slots , el){

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
        config["prop_remdomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["button404Retry"] = {
            name: `retry404_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: () => {
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback();
                }
            }
        };

        super(elId , config , listComponent[Component404.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){
        const prop_type =      data.hasOwnProperty("prop_type")      ?   data.prop_type : 0;

        const prop_width = data.hasOwnProperty("prop_width") ? data.prop_width : 250;
        const prop_height = data.hasOwnProperty("prop_height") ? data.prop_height : 100;

        const prop_remdomId = data.hasOwnProperty("prop_remdomId") ? data.prop_remdomId : 0;

        const button404Retry = super.getMethod(data , "button404Retry");

        if (prop_type == 0){

            return `
<style>
#${el.id} .form-404-animation{
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${tools_const.styles.backShadow.backgroundColor};
}

#${el.id} .btn-404-animation{
    background-color: ${tools_const.styles.button.backgroundColor};
    color:            ${tools_const.styles.button.color};
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

     <section class="form-404-animation w-100 h-100 rounded ">

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
           <component-button id="form-button-404-${prop_remdomId}" ></component-button>
        </section>
         

    </section>
            `
        }
        else if (prop_type == 1){


            return `
<style>
 #${el.id} .btn-404-animation{
    background-color: ${tools_const.styles.button.backgroundColor};
    color:            ${tools_const.styles.button.color};
}
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
            
          <section class="section-404-space-bot position-absolute w-100 rounded py-2">
              <img class="img-404-space-bot d-block mx-auto rounded" src='${tools_const.botResPath}/bot-404.png'/>
            
              <section class="d-block mt-2 mx-5">
                 <component-button id="form-button-404-${prop_remdomId}"></component-button>
              </section>
          </section>
`
        }

        return "[404]"
    }

    onCreate(data , el){

    }

    onRender(data , componentSlots , el){
        const prop_remdomId = data.hasOwnProperty("prop_remdomId") ? data.prop_remdomId : 0;
        const prop_btnRetry =  data.hasOwnProperty("prop_btnRetry")  ?   data.prop_btnRetry : {};

        const button404Retry = super.getMethod(data , "button404Retry" , null);
        new window.ComponentButton(
            "form-button-404-"+prop_remdomId ,
            {
                prop_text:       prop_btnRetry != null && prop_btnRetry.hasOwnProperty("prop_text")      ? prop_btnRetry.prop_text           : "Retry" ,
                prop_btnClass:   prop_btnRetry != null && prop_btnRetry.hasOwnProperty("prop_btnClass")  ? prop_btnRetry.prop_btnClass       : "w-100" ,
                prop_type:       prop_btnRetry != null && prop_btnRetry.hasOwnProperty("prop_type")      ? prop_btnRetry.prop_type           : null ,
                fn_callback: ()=>{
                    window[button404Retry]();
                }
            }
        )
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

        let methods = {};
        methods["button404Retry"] = {
            name: `retry404_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {

                tools_component.control(
                    "Component404" ,
                    {
                        elId : "template-error-404"
                    },
                    false
                )
            }
        };
        methods["buttonSubmitForm"] = {
            name: `submitForm_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn:() => {
                const elementForm = document.getElementById(elId).getElementsByClassName("form-data");
                let formData = [] ;
                if (elementForm != null && elementForm.length > 0){
                    formData = elementForm[0] ;
                }


                tools_submit.fetcth(
                    config.hasOwnProperty("url") ? config.url : "" ,
                    {
                        data:{
                            formData : formData ,
                            data : config.hasOwnProperty("data") ? config.data : []
                        } ,
                        componentMessagesData: { elId : "list-message"},
                        componentLoadingData: { elId : "template-loading"},
                        component404Data: {
                            elId : "template-error-404" ,
                            fn_callback: window[methods.button404Retry.name]
                        },
                    });
            }
        };

        super(elId , config , listComponent[ComponentForm.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){
        const prop_forms =     data.hasOwnProperty("prop_forms")       ? data.bgColor           : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_formClass = data.hasOwnProperty("prop_formClass")   ? data.prop_formClass    : "border shadow-sm round mx-2 my-2 bg-white py-2 px-3";

        const methodSubmit = super.getMethod(data , "buttonSubmitForm");

        return  `
<style>
  #${el.id} .form-parent{
    min-hight: 100px
}
</style>

<section class="form-parent position-relative ${prop_formClass}">
    <component-messages id="list-message"></component-messages>
    
    <form class="form-data">
       ${prop_forms}
    </form>
    
    <section class="row">
         <component-button id="form-button-submit"></component-button>
    </section>

    <component-404 id="template-error-404"></component-404>

    <component-loading id="template-loading"></component-loading>
</section>
        `;
    }

    onCreate(data , el){

    }

    onRender(data ,slots , el){
        const buttonSubmitForm = super.getMethod(data , "buttonSubmitForm" , null);
        const prop_btnSubmit =  data.hasOwnProperty("prop_btnSubmit")  ?   data.prop_btnSubmit : {};

        new window.ComponentButton(
            "form-button-submit" ,
            {
                prop_text:       prop_btnSubmit != null && prop_btnSubmit.hasOwnProperty("prop_text")      ? prop_btnSubmit.prop_text           : "submit" ,
                prop_btnClass:   prop_btnSubmit != null && prop_btnSubmit.hasOwnProperty("prop_btnClass")  ? prop_btnSubmit.prop_btnClass       : "d-inline-block" ,
                prop_type:       prop_btnSubmit != null && prop_btnSubmit.hasOwnProperty("prop_type")      ? prop_btnSubmit.prop_type           : null ,

                fn_callback: ()=>{
                    window[buttonSubmitForm]();
                }
            }
        )
    }

}





/*-------------------------------------
 Component Is Empty
-------------------------------------
@prop_text
@prop_iconClass
-------------------------------------*/
window.ComponentIsEmpty = class ComponentIsEmpty extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        super(elId , config , listComponent[ComponentIsEmpty.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_text =      data.hasOwnProperty("prop_text")      ?  data.prop_text        : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_iconClass = data.hasOwnProperty("prop_iconClass") ?  data.prop_iconClass   : " font-30pt text-danger";

        return `
<style>

#${el.id} .icon-warning-not-exist-response{
    font-size: 30px;
    display: block;
}

</style>

    <section >
        <p class="border border-danger text-danger text-center rounded shadow-sm">
            <span class="icon-warning-not-exist-response  ${prop_iconClass}">&#9888;</span>
            ${prop_text}
        </p>
    </section>
            `;

    }
}



/*-------------------------------------
 Component Header
-------------------------------------
@prop_size
@prop_text
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
        const prop_text =      data.hasOwnProperty("prop_text")       ?  data.prop_text  : (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_classList = data.hasOwnProperty("prop_classList")  ?  data.prop_classList  : "pb-0 px-2 mb-1 mt-3 border-bottom";

        return `<h${prop_size} class=" ${prop_classList ?? ''} ">${prop_text ?? ''}</h${prop_size}>`;
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
        const prop_valueRow_backgroundColor   =   data.hasOwnProperty("prop_valueRow_backgroundColor") ?  data.prop_valueRow_backgroundColor : tools_const.styles.public.selected_num1_backgroundColor;
        const prop_valueCol_backgroundColor   =   data.hasOwnProperty("prop_valueCol_backgroundColor") ?  data.prop_valueCol_backgroundColor : tools_const.styles.public.selected_num3_backgroundColor;
        const prop_valueCol_textColor         =   data.hasOwnProperty("prop_valueCol_textColor")       ?  data.prop_valueCol_textColor       : tools_const.styles.public.selected_num1_color;

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
<table class="element-table ${prop_tableClass} ${tableType} ${tableBordered}
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
           <section class="row m-0 mb-2">
               ${tabHtml}
           </section>
        `
    }
}





/*-------------------------------------
 Component Collapse
-------------------------------------
@prop_text
@prop_body
@prop_bodyShow
-------------------------------------*/
window.ComponentCollapse = class ComponentCollapse extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        methods["showOrHideCollapse"] = {
            name: `showOrHideCollapse_${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: () => {
                const el = document.getElementById(elId);
                const body = el.getElementsByClassName("body-collapse");
                const icon = el.getElementsByClassName("icon-collapse");
                if (body != null){
                    if ( body[0].classList.contains('d-none')){
                        body[0].classList.remove('d-none');

                        icon[0].classList.remove('tyf-arrow-down1');
                        icon[0].classList.add('tyf-arrow-up1');
                    }
                    else {
                        body[0].classList.add('d-none');

                        icon[0].classList.remove('tyf-arrow-up1');
                        icon[0].classList.add('tyf-arrow-down1');
                    }

                }
            }
        };

        super(elId , config , listComponent[ComponentCollapse.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){
        const tabType  =    data.hasOwnProperty("tabType")      ?  data.tabType      : 0;

        const prop_text =        data.hasOwnProperty("prop_text")       ?  data.prop_text           : null;
        const prop_body =        data.hasOwnProperty("prop_body")       ?  data.prop_body           :  (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');
        const prop_bodyShow =    data.hasOwnProperty("prop_bodyShow")   ?  data.prop_bodyShow       : false;


        const showOrHideCollapse = super.getMethod(data , "showOrHideCollapse");

        if (prop_text != null){

            if (tabType == 0){

                return `
<style>
     #${el.id} .title-collapse{
        cursor: pointer;
    }
     #${el.id} .icon-collapse{
        
    }
     #${el.id} .body-collapse{
        background-color: ${tools_const.styles.collapse.backgroundColor};
    }
</style>
<div class="mx-2 mb-3">
    <p class="title-collapse px-2  border-bottom mx-0 mb-1" onclick="${showOrHideCollapse}">
        ${prop_text}
        <span class="icon-collapse float-end mt-1 tyf ${prop_bodyShow ? "tyf-arrow-up1" : "tyf-arrow-down1"}"></span>
    </p>

    <div class="body-collapse shadow-sm p-2 ${prop_bodyShow ? "" : "d-none"}">
        ${prop_body}
    </div>

</div>      
                `;
            }

        }

        return body;
    }
}







/*-------------------------------------
 Component Button
-------------------------------------
@prop_type
@prop_text
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
            fn: () => {
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){
                    config.fn_callback();
                }
            }
        };

        super(elId , config , listComponent[ComponentButton.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_type  =          data.hasOwnProperty("prop_type")                 ?  data.prop_type          :  null;
        const prop_text  =          data.hasOwnProperty("prop_text")                 ?  data.prop_text          :  (componentSlots != null && componentSlots.hasOwnProperty("body") ? componentSlots.body : '');

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


        const buttonClick = super.getMethod(data , "buttonClick");


        return `
<style>
     #${el.id} .btn-action{
          ${super.renderListStyle(prop_btnStyles)}
          background-color: ${btnBackgroundColor};
          color:            ${btnColor};
          
     }
     #${el.id} .btn-action:hover{
         ${super.renderListStyle(prop_btnHoverStyles)}
     }
</style>
<div class="">
     <button class=" ${super.renderListClass(prop_btnClass)} btn-action  shadow-sm border-0 px-2 py-1 rounded " onclick="${buttonClick}">
         ${prop_text}
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
@prop_options

@fn_callback
-------------------------------------*/
window.ComponentSelectOption = class ComponentSelectOption extends ComponentBase{
    constructor(elId , config) {

        let methods = {};
        methods["showlistOptions"] = {
            name: `showlistOptions${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (status=null) => {
                config.var_showFormSelector = status != null ? status : !config.var_showFormSelector;
                this.changeProperty(config);
            }
        };
        methods["selectItemOption"] = {
            name: `selectItemOption${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (id) => {

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
                window[setTitleItemSelected](id);

                const showlistOptions       =    super.getMethod(config , "showlistOptions"  ,null );
                window[showlistOptions](false);
            }
        };
        methods["setTitleItemSelected"] = {
            name: `selectItemOption${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (id = null) => {

                if (id != null){
                    const prop_options = config.hasOwnProperty("prop_options")       ?  config.prop_options      :  null;

                    let itemSelected = "---";
                    if (prop_options != null && Array.isArray(prop_options)){
                        for (let i=0; i < prop_options.length; i++){
                            const item = prop_options[i];
                            if (item.hasOwnProperty("name")){
                                let value = item.hasOwnProperty('id') ? item.id : 0;
                                if (item.hasOwnProperty('id') && item.hasOwnProperty('name') && item.id == id ){
                                    itemSelected = item.name;
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
            fn: (id=null) => {
                if (config.hasOwnProperty("fn_callback") && typeof config.fn_callback != null){

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

                        config.fn_callback( elSelect != null ? elSelect.value : null );
                    }
                    else {
                        config.fn_callback( id);
                    }

                }
            }
        };

        super(elId , config , listComponent[ComponentSelectOption.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        //------------------
        const var_showFormSelector      =     data.hasOwnProperty("var_showFormSelector")      ?      data.var_showFormSelector    :  false;
        let   var_titleItemSelected      =     data.hasOwnProperty("var_titleItemSelected")      ?      data.var_titleItemSelected    :  "---";

        //------------------
        const prop_type                 =     data.hasOwnProperty("prop_type")                 ?      data.prop_type               :  0;

        const prop_name                 = data.hasOwnProperty("prop_name")                     ?  data.prop_name                   :  "";
        const prop_title                = data.hasOwnProperty("prop_title")                    ?  data.prop_title                  :  "";
        const prop_options              = data.hasOwnProperty("prop_options")                  ?  data.prop_options                :  (componentSlots != null && componentSlots.hasOwnProperty("options") ? componentSlots.options : '');

        const prop_formClass            = data.hasOwnProperty("prop_formClass")                ?  data.prop_formClass              :  "";
        const prop_titleClass           = data.hasOwnProperty("prop_titleClass")               ?  data.prop_titleClass             :  "text-dark text-center border shadow-sm";
        const prop_optionHeight         = data.hasOwnProperty("prop_optionHeight")             ?  data.prop_optionHeight           :   130;
        const prop_optionItemBackground = data.hasOwnProperty("prop_optionItemBackground")     ?  data.prop_optionItemBackground   :  "#13b799";

        const prop_optionIcon           = data.hasOwnProperty("prop_optionIcon")               ?  data.prop_optionIcon             :  "&#129171";
        const prop_optionIconColor      = data.hasOwnProperty("prop_optionIconColor")          ?  data.prop_optionIconColor        :  "#000000";

        const prop_itemSelected         = data.hasOwnProperty("prop_itemSelected")             ?  data.prop_itemSelected           :  null;

        //------------------
        const showlistOptions           =    super.getMethod(data , "showlistOptions"     , "()" );
        const selectItemOption          =    super.getMethod(data , "selectItemOption"    , null );
        const changeItemSelected        =    super.getMethod(data , "changeItemSelected"  , "()" );


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
 #${el.id} .arrow-selector-option {
   font-size: 20pt;
   line-height: 40pt;
   margin: 0 10px;  
   color: ${prop_optionIconColor}
}

</style>
 <section class="form-group mb-4">
        <div class="d-block text-end">
            <label for="${prop_name}">
                ${prop_title}
            </label>
        </div>
        
        <div class="position-relative">
              <span class="arrow-selector-option icon-input-arrow position-absolute font-16pt cursor-pointer">${prop_optionIcon}</span>
            
              <select name="${prop_name}" 
                      id="${prop_name}"
                      value="${prop_itemSelected}"
                      class="form-control custom-select w-100 rounded line-height-30px px-2 text-end"
                      onchange="${changeItemSelected}">
                 ${optionsStr}
              </select>   
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
                        // let disabled =  !item.hasOwnProperty('id') ? "style={color:red}" : "" ;

                        optionsStr += `
<div class="select-title-inside-title rounded text-center ${prop_itemSelected != null && value == prop_itemSelected ? 'select-title-inside-item_active': ''}"
   onclick="${selectItemOption+`(${item.id})`}"> ${item.name} 
</div>
                `
                        if (prop_itemSelected != null && value == prop_itemSelected ){
                            var_titleItemSelected = item.name;
                        }
                    }
                }
            }


            return  `
<style>
 #${el.id} .select-title{
    width: 10px;
    line-height: 35px;
    cursor: pointer;
}
 #${el.id} .select-title-form{
     
}
#${el.id} .arrow-selector-option {
   font-size: 20pt;
   line-height: 40pt;
   margin: 0 10px;
   top: 0;
   color: ${prop_optionIconColor};
   left: 0;
}
 #${el.id} .select-title-inside{
     height: ${prop_optionHeight}px;
}
 #${el.id} .select-title-inside-title:hover{
     background-color: ${prop_optionItemBackground};
     color: white;
     cursor: pointer;
}
 #${el.id} .select-title-inside-item_active{
     background-color: ${prop_optionItemBackground};
     color: ${prop_optionIconColor};
}
</style>
<div class="position-relative ${prop_formClass}">
        <div class="d-block text-end">
            <label for="${prop_name}">
                ${prop_title}
            </label>
        </div>
       <input name="${prop_name}" value="${prop_itemSelected}" type="hidden"/>
       <b class="select-title w-100 d-block position-relative ${prop_titleClass}" onclick="${showlistOptions}">
           ${var_titleItemSelected}
              
           <span class="arrow-selector-option position-absolute ">${prop_optionIcon}</span>
       </b>
  
       <section class="select-title-form position-absolute border shadow rounded bg-white w-100 p-1 ${var_showFormSelector ? '' : 'd-none'}">
            <section class="select-title-inside bg-white overflow-auto">
                 ${optionsStr}
            </section>
       </section>
</div>
            `
        }

    }

    onRender(data , componentSlots , el){

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
        config["prop_rendomId"]= Math.floor(Math.random() * 10000);

        let methods = {};
        methods["retry404"] = {
            name: `retry404_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                const prop_rendomId = config.hasOwnProperty("prop_rendomId") ? config.prop_rendomId : 0;

                const onFetchWidget = super.getMethod(config , "onFetchWidget" , null);
                window[onFetchWidget]();

                tools_component.control(
                    "Component404" ,
                    {
                        elId : "widget-component-404-"+prop_rendomId
                    },
                    false
                )

            }
        };
        methods["readyResponse"] = {
            name: `readyResponse_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (response) => {
                const prop_rendomId = config.hasOwnProperty("prop_rendomId") ? config.prop_rendomId : 0;

                const el = document.getElementById(elId);
                const responseEl = el.getElementsByClassName("response-widget-component-"+prop_rendomId);
                responseEl[0].innerHTML = response
            }
        };''
        methods["onFetchWidget"] = {
            name: `onFetchWidget_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                const prop_rendomId = config.hasOwnProperty("prop_rendomId") ? config.prop_rendomId : 0;
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
                                elId : "widget-component-loading-"+prop_rendomId
                            },
                            component404Data: {
                                elId : "widget-component-404-"+prop_rendomId ,
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

        const prop_rendomId = data.hasOwnProperty("prop_rendomId") ? data.prop_rendomId : 0;
        //---------------

        const prop_classList = data.hasOwnProperty("prop_classList") ? data.prop_classList : "shadow-sm rounded border";
        const prop_minHeight = data.hasOwnProperty("prop_minHeight") ? Math.max(data.prop_minHeight , 120) : 120;
        //---------------

        return `
<style>
 #${el.id} .widget-component{
    min-height: ${prop_minHeight}px;
}
</style>
<section class="widget-component position-relative ${ prop_classList }" >

    <section class="response-widget-component-${prop_rendomId}"></section>
    
    <component-404 id="widget-component-404-${prop_rendomId}"></component-404>

    <component-loading id="widget-component-loading-${prop_rendomId}"></component-loading>
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
@prop_inputType
@prop_btnAddStatus
@prop_btnAddIcon
@prop_icon
@prop_name
@prop_langs
@prop_default

@fn_addNewItem
-------------------------------------*/
window.ComponentInput = class ComponentInput extends ComponentBase{

    isFocused= false;
    value= "";

    constructor(elId , config) {

        let methods = {};
        methods["handleInput"] = {
            name: `handleInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                event.target.value =  tools_converter.convertPriceToString(event.target.value);
            }
        };
        methods["formattedValue"] = {
            name: `formattedValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (this.isFocused) return this.value;

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
                this.isFocused = false;
            }
        };
        methods["unformatValue"] = {
            name: `unformatValue${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: () => {
                this.isFocused = true;
            }
        };

        methods["clearInput"] = {
            name: `clearInput${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                const element = event.target;
                const parent = element.parentElement;
                const inputs = parent.getElementsByTagName("input");
                if (inputs != null){
                    inputs[0].value = "";
                }
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

        methods["addNewItem"] = {
            name: `addNewItem${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                if (config.hasOwnProperty("fn_addNewItem") && typeof config.fn_addNewItem != null){
                    config.fn_addNewItem();
                }
            }
        };

        super(elId , config , listComponent[ComponentInput.name] , methods);

        this.render()
    }

    templateFn(data , componentSlots , el){

        const prop_inputType      =        data.hasOwnProperty("prop_inputType")            ?  data.prop_inputType                                        :  0;
        const prop_btnAddStatus   =        data.hasOwnProperty("prop_btnAddStatus")          ?  data.prop_btnAddStatus                                    :  false;
        const prop_btnAddIcon     =        data.hasOwnProperty("prop_btnAddIcon")            ?  data.prop_btnAddIcon                                      :  "&plus;";
        const prop_icon           =        data.hasOwnProperty("prop_icon")                  ?  data.prop_icon                                            :  "";
        const prop_name           =        data.hasOwnProperty("prop_name")                  ?  data.prop_name                                            :  "No-Name-input-"+Math.floor(Math.random() * 10000);
        const prop_title          =        data.hasOwnProperty("prop_title")                 ?  data.prop_title                                           :  "No Title";
        const prop_langs          =        data.hasOwnProperty("prop_langs")                 ?  data.prop_langs                                           :
            {
                _input_btn_add : "add item" ,
            };


        const formattedValue =   super.getMethod(data , "formattedValue" , "()" );

        const clearInput    =    super.getMethod(data , "clearInput"     , "(event)" );
        const focustoInput  =    super.getMethod(data , "focustoInput"   , "(event)" );
        const addNewItem    =    super.getMethod(data , "addNewItem"     , "()" );


        let btnAddItem = "";
        if (prop_btnAddStatus){
            btnAddItem = `
            <button class="btn-tools-input btn btn-light border shadow-sm rounded position-absolute px-3 line-height-40px text-center "
                          onclick="${addNewItem}">
                   <span class="mx-3">
                        ${prop_btnAddIcon}
                   </span>
                   <span class="d-none d-md-inline">
                         ${prop_langs != null && prop_langs.hasOwnProperty("_input_btn_add") ? prop_langs._input_btn_add : "addd item"}
                    </span>
            </button>
            `
        }

        let inputActions = "";
        switch (prop_inputType){
            case 0:
                const handleInput   =    super.getMethod(data , "handleInput"    , "(event)" );
                const formatValue   =    super.getMethod(data , "formatValue"    , "()" );
                const unformatValue =    super.getMethod(data , "unformatValue"  , "()" );
                const prop_default  =    data.hasOwnProperty("prop_default")     ?  tools_converter.convertPriceToString(data.prop_default)   :  "";

                inputActions = `
                oninput="${handleInput}"
                onblur="${formatValue}"
                onfocus="${unformatValue}"
                value="${prop_default}"
                `
                break;
        }


        return `
<style>
 #${el.id} .icon-clear-input-editor{
    z-index: 10;
    margin: 0 !important;
    width: 10px;
    line-height: 35px;
    left: ${prop_btnAddStatus ? "165px" : "10px"};
    cursor: pointer;
}
 #${el.id} .icon-input-editor{
    z-index: 10;
    margin: 0 !important;
    width: 30px;
    line-height: 35px;
    right: 0;
    cursor: pointer;
    font-size: 20pt;
}
 #${el.id} .input-editor{
     padding-right: 30px;
     padding-left: ${prop_btnAddStatus ? "180px" : "20px"};
}
 #${el.id} .btn-tools-input{
     z-index: 10;
     left: 0;
     top: 0;
     line-height: 25px;
     width: 160px;
     cursor: pointer;
}
</style>

            <section class="form-group mb-4">

                <div class="d-block">
                    <label for="${prop_name}" class="d-block text-end">
                        ${prop_title}
                    </label>
                </div>

                <div class="position-relative">

                   ${btnAddItem}

                    <span class="icon-clear-input-editor position-absolute " 
                           onclick="${clearInput}">
                              &#10540;
                    </span>
                    
                    <span class="icon-input-editor position-absolute text-center" 
                           onclick="${focustoInput}">
                              ${prop_icon}
                    </span>

                    <input class="input-editor form-control line-height-30px  position-relative text-center"
                           id="${prop_name}"  name="${prop_name}"  
                           ${inputActions}
                           />

                </div>

            </section>
`;
    }

    onCreate(data , el){

    }

    onRender(data , componentSlots , el){

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

<section>
   <p class="title-otp text-center mb-0 mx-2 mt-2 rounded">
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
        class="input-otp my-1 mx-2  text-center form-control rounded line-height-35px border rounded shadow-sm font-10pt"  />
`;
        }

        html += `


  </div>

  <div class="mt-1 text-center text-direction">
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
 Component Input
-------------------------------------
@prop_background1
@prop_background2
@prop_name
@prop_title

@fn_addNewItem
-------------------------------------*/
window.ComponentDate = class ComponentDate extends ComponentBase{

    TYPE_YAER = "YEAR";
    TYPE_MONTH = "MONTH";
    TYPE_DAY = "DAY";

    DEFULAT_COLOR = prop_const.colors.White1;
    DEFULAT_BACKGROUND_1 = prop_const.colors.Green1;
    DEFULAT_BACKGROUND_2 = prop_const.colors.Green5;
    DEFULAT_PERV_YEAR = 100;
    DEFULAT_NEXT_YEAR = 25;
    DEFULAT_YEAR = 1400;

    constructor(elId , config) {

        let methods = {};


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

                const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                });

                const persianDate = formatter.format(date);
                const [year, month, day] = persianDate.split('/');

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



        methods["getDisgitDatePart"] = {
            name: `getDisgitDatePart${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (type , digit) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;
                let number = 0;
                let value = 0;
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

                return value;
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
        methods["showListyears"] = {
            name: `showListyears${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                config.var_showFormSelector_year = !config.var_showFormSelector_year;
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
        methods["showListMonths"] = {
            name: `showListMonths${Date.now()}_${Math.floor(Math.random() * 10000)}`,
            fn: (event) => {
                config.var_showFormSelector_month = !config.var_showFormSelector_month;
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


        methods["onChangeDateDigit"] = {
            name: `onChangeDateDigit${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , type , index) => {

                const var_selected_date  =   config.hasOwnProperty("var_selected_date")   ?  config.var_selected_date  :  null;
                let   year      =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("year") ?   parseInt(var_selected_date.total.year) + 1 : -1 ;
                let   month     =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("month") ?   parseInt(var_selected_date.total.month) + 1: -1 ;
                let   day       =   var_selected_date != null && var_selected_date.hasOwnProperty("total") && var_selected_date.total.toString("day") ?   parseInt(var_selected_date.total.day) + 1 : -1 ;

                const valPart = event.target.value;

                let number="";
                if (type == this.TYPE_YAER){
                    number = year.toString();
                    let newNumber = number.split('');
                    newNumber[index-1] = valPart;
                    newNumber = newNumber.join('');
                    year = parseInt(newNumber);

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

                }
                else if( type == this.TYPE_MONTH){
                    number =  month.toString().padStart(2, '0');

                    let newNumber = number.split('');
                    newNumber[index-1] = valPart;
                    newNumber = newNumber.join('');
                    month = parseInt(newNumber);
                    month = month > 12 ? 12 : month;
                    month = month == 0 ? 1 : month;

                }
                else if(type == this.TYPE_DAY){
                    number =  day.toString().padStart(2, '0');

                    let newNumber = number.split('');
                    newNumber[index-1] = valPart;
                    newNumber = newNumber.join('');
                    day = parseInt(newNumber);

                    const getDaysInJalaliMonth  = super.getMethod(config , "getDaysInJalaliMonth"    , null );
                    const maxDay = window[getDaysInJalaliMonth](year+1 , month+1);
                    day =  day > maxDay ? maxDay : day;
                    day =  day == 0 ? 1 : day;
                }

                const jalaliToTimeUnix  = super.getMethod(config , "jalaliToTimeUnix"    , null );
                const value = window[jalaliToTimeUnix](year , month , day);

                config.prop_value = value != null && value.hasOwnProperty("timeUnix") ? value.timeUnix : null;
                this.changeProperty(config);

            }
        };


        methods["moveToNext"] = {
            name: `moveToNext${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , nextFieldID) => {

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
        };
        methods["moveToPrev"] = {
            name: `moveToPrev${Date.now()}_${Math.floor(Math.random() * 10000)}` ,
            fn: (event , prevFieldID) => {
                if (event.key === 'Backspace' && event.target.value === '') {
                    if (prevFieldID !== '') {
                        const el = document.getElementById(prevFieldID);
                        if (el != null){
                            el.focus();

                            config.var_focusDatePart = nextFieldID;
                            this.changeProperty(config);
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
        };

        super(elId , config , listComponent[ComponentDate.name] , methods);

        this.render();


    }

    templateFn = (data , componentSlots , el) => {

        const var_showFormSelector          =        data.hasOwnProperty("var_showFormSelector")         ?  data.var_showFormSelector                    :  false;

        const prop_background1          =        data.hasOwnProperty("prop_background1")          ?  data.prop_background1                               :  this.DEFULAT_BACKGROUND_1;
        const prop_background2          =        data.hasOwnProperty("prop_background2")             ?  data.prop_background2                               :  this.DEFULAT_BACKGROUND_2;
        const prop_color                =        data.hasOwnProperty("prop_color")                 ?  data.prop_color                                    :  this.DEFULAT_COLOR;
        const prop_name                 =        data.hasOwnProperty("prop_name")                  ?  data.prop_name                                     :  "No-Name-input-"+Math.floor(Math.random() * 10000);
        const prop_title                =        data.hasOwnProperty("prop_title")                 ?  data.prop_title                                    :  "No Title";
        const prop_value                =        data.hasOwnProperty("prop_value")                 ?  data.prop_value                                    :  null;


        const prop_langs                =        data.hasOwnProperty("prop_langs")                 ?  data.prop_langs                                    : {};


        const moveToNext = super.getMethod(data , "moveToNext" , null);
        const moveToPrev = super.getMethod(data , "moveToPrev" , null);
        const onFocus =    super.getMethod(data , "onFocus"    , null);
        const onChangeDateDigit =    super.getMethod(data , "onChangeDateDigit"    , null);

        const getDisgitDatePart  = super.getMethod(data , "getDisgitDatePart"    , null );
        const yearDigitOne   = window[getDisgitDatePart](this.TYPE_YAER , 1);
        const yearDigitTwo   = window[getDisgitDatePart](this.TYPE_YAER , 2);
        const yearDigitThree = window[getDisgitDatePart](this.TYPE_YAER , 3);
        const yearDigitFour  = window[getDisgitDatePart](this.TYPE_YAER , 4);

        const monthDigitOne  = window[getDisgitDatePart](this.TYPE_MONTH , 1);
        const monthDigitTwo  = window[getDisgitDatePart](this.TYPE_MONTH , 2);

        const dayDigitOne  = window[getDisgitDatePart](this.TYPE_DAY , 1);
        const dayDigitTwo  = window[getDisgitDatePart](this.TYPE_DAY , 2);



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
     padding-right: calc(30px + 10%);
     padding-left: calc(20px + 10%);
     padding-top: 2px;
     padding-bottom: 2px;
     height: 38px;
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
}

 #${el.id} .form-choose-date{
     direction: rtl;
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
          <section class="form-group mb-4">

                <div class="d-block">
                    <label for="${prop_name}" class="d-block text-end">
                        ${prop_title}
                    </label>
                </div>

                <div class="position-relative">
                
                <input name="${prop_name}" value="${prop_value}" type="hidden"/>

<component-button id="btn-clear-date">
</component-button>  
                    
                   
<component-button id="btn-show-date-form">
</component-button>  

                    <div class="form-input-date form-control  line-height-30px  position-relative text-center">
                         <div class="row ">
                             <div class="part-form-input-date-1 col-6 row pe-2 ps-0 m-0 position-relative">
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_1" 
                                             oninput="${moveToNext}(event , 'Date_2'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_1')"
                                             onkeydown="${moveToPrev}(event  , null)"
                                             value="${yearDigitOne}" 
                                             type="text"  maxlength="1" class="inputs-date text-center form-control "  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input
                                             id="Date_2" 
                                             oninput="${moveToNext}(event , 'Date_3'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_2')"
                                             onkeydown="${moveToPrev}(event  , 'Date_1')"
                                             value="${yearDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_3"
                                             oninput="${moveToNext}(event , 'Date_4'); ${onChangeDateDigit}(event ,'${this.TYPE_YAER}' , 3)" 
                                             onfocus="${onFocus}(event  , 'Date_3')"
                                             onkeydown="${moveToPrev}(event  , 'Date_2')"
                                             value="${yearDigitThree}"
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                                  <div class="col-3 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_4" 
                                             oninput="${moveToNext}(event , 'Date_5'); ${onChangeDateDigit}(event , '${this.TYPE_YAER}' , 4)" 
                                             onfocus="${onFocus}(event  , 'Date_4')"
                                             onkeydown="${moveToPrev}(event  , 'Date_3')"
                                             value="${yearDigitFour}" 
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-2 col-3 row pe-2 ps-2 m-0 position-relative">
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input                                           
                                             id="Date_5"
                                             oninput="${moveToNext}(event , 'Date_6'); ${onChangeDateDigit}(event , '${this.TYPE_MONTH}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_5')"
                                             onkeydown="${moveToPrev}(event  , 'Date_4')"
                                             value="${monthDigitOne}" 
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_6" 
                                             oninput="${moveToNext}(event , 'Date_7'); ${onChangeDateDigit}(event , '${this.TYPE_MONTH}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_6')"
                                             onkeydown="${moveToPrev}(event  , 'Date_5')"
                                             value="${monthDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                             </div>
                             
                             <div class="part-form-input-date-3 col-3 row pe-0 ps-2 m-0 position-relative">
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_7" 
                                             oninput="${moveToNext}(event , 'Date_8'); ${onChangeDateDigit}(event , '${this.TYPE_DAY}' , 1)" 
                                             onfocus="${onFocus}(event  , 'Date_7')"
                                             onkeydown="${moveToPrev}(event  , 'Date_6')"
                                             value="${dayDigitOne}"
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                                  <div class="col-6 pe-0 ps-1 m-0">
                                       <input 
                                             id="Date_8" 
                                             oninput="${moveToNext}(event , null); ${onChangeDateDigit}(event , '${this.TYPE_DAY}' , 2)" 
                                             onfocus="${onFocus}(event  , 'Date_8')"
                                             onkeydown="${moveToPrev}(event  , 'Date_7')"
                                             value="${dayDigitTwo}" 
                                             type="text"  maxlength="1" class="inputs-date text-center form-control"  />
                                  </div>
                             </div>
                         </div>
                    </div>
                    
                    <section class="form-choose-date position-absolute rounded border shadow-sm w-100  overflow-hidden ${var_showFormSelector ? '' : 'd-none'}">
                    
                    
                         <section class="form-choose-date-info row p-0 border-bottom border-white px-2">
                              
                              <div class="form-choose-date-info-year  row  p-0 m-0 border-end border-white ">
                                   <div class="col-3">
<component-button id="prev-year-selected">
</component-button>  
                                   </div>
                                   <div class="col-6 position-relative">
<component-select-option id="select-option-year">
</component-select-option>
                                   </div>
                                    <div class="col-3">
<component-button id="next-year-selected">
</component-button>
                                   </div>
                              </div>
                              
                              <div class="form-choose-date-info-month row  p-0 m-0 row  p-0 m-0 border-end border-white">
                                   <div class="col-3">
<component-button id="prev-month-selected">
</component-button>  
                                   </div>
                                   <div class="col-6 position-relative">
<component-select-option id="select-option-month">
</component-select-option>
                                   </div>
                                   <div class="col-3">
<component-button id="next-month-selected">
</component-button>
                                   </div>
                              </div>
                              
                         </section>
                         
                         
                         <section class="form-choose-date-middle row p-0 border-bottom border-white px-2">
<component-table id="table-list-days-in-month">
</component-table>
                         </section>
                         
                         
                         <section class="form-choose-date-bottom row p-0 border-top border-white px-2 py-1">
                               
<div class="col-4">
      <component-button id="accept-date-selected">
      </component-button>
 </div>
                               
 <div class="col-4">
 </div>
                               
 <div class="col-4">
        <component-button id="now-date-selected">
        </component-button>
 </div>
                               
                         </section>
                         
                    </section>

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



    readyBtnShowDateForm  = (data , componentSlots , el) => {
        const selectDate         =    super.getMethod(data , "selectDate"    , null );

        new window.ComponentButton(
            "btn-show-date-form" ,
            {
                classList: []  ,
                styles: {
                    "height" : "38px"
                }  ,
                prop_btnClass : ["position-absolute"] ,
                prop_btnStyles : {
                    "z-index" : "11",
                    "width" :   "35px",
                    "line-height" : "20px",
                    "right" : "5px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "margin-top" : "3px!important"
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_text : "&#128467;" ,

                fn_callback: ()=>{
                    window[selectDate]();
                }
            }
        )
    }



    readyBtnClearForm  = (data , componentSlots , el) => {
        const clearInput         =    super.getMethod(data , "clearInput"    , null);

        const var_showFormSelector  =    data.hasOwnProperty("var_showFormSelector")    ?  data.var_showFormSelector  :  false;

        new window.ComponentButton(
            "btn-clear-date" ,
            {
                classList: []  ,
                styles: {
                    "height" : "38px"
                }  ,

                prop_show: !var_showFormSelector ,

                prop_btnClass : ["position-absolute"] ,
                prop_btnStyles : {
                    "z-index" : "11",
                    "width" :   "35px",
                    "line-height" : "20px",
                    "left" : "5px",
                    "cursor" : "pointer",
                    "height" : "30px" ,
                    "margin-top" : "3px!important"
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_text : "&#10540;" ,

                fn_callback: ()=>{
                    window[clearInput]();
                }
            }
        )
    }




    readyBtnPrevYear  = (data , componentSlots , el) => {
        const goToYear  =    super.getMethod(data , "goToYear"  , null );

        const goToYearSelectedPrev   =    super.getMethod(data , "goToYearSelected"   , null );

        new window.ComponentButton(
            "prev-year-selected" ,
            {
                prop_btnClass : ["text-white text-center d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer"
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_text : "&#11166;" ,

                fn_callback: ()=>{
                    window[goToYear]();
                }
            }
        )
    }

    readyBtnNextYear  = (data , componentSlots , el) => {
        const goToYear  =    super.getMethod(data , "goToYear"  , null );

        const goToYearSelectedNext   =    super.getMethod(data , "goToYearSelected" , null );
        new window.ComponentButton(
            "next-year-selected" ,
            {
                prop_btnClass : ["text-white text-center d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer"
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_text : "&#11164;" ,

                fn_callback: ()=>{
                    window[goToYear](true);
                }
            }
        )
    }

    readySelectOptionYear  = (data , componentSlots , el) => {

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
            "select-option-year" ,
            {
                prop_type:1 ,
                prop_name:"date-picker-year" ,
                prop_optionIconColor:"#ffffff" ,
                prop_titleClass:"text-white text-center" ,
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
        const goToMonth  =    super.getMethod(data , "goToMonth"  , null );

        new window.ComponentButton(
            "prev-month-selected" ,
            {
                prop_btnClass : ["text-white text-center d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer"
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_text : "&#11166;" ,

                fn_callback: ()=>{
                    window[goToMonth]();
                }
            }
        )
    }

    readyBtnNextMonth  = (data , componentSlots , el) => {
        const goToMonth  =    super.getMethod(data , "goToMonth"  , null );

        new window.ComponentButton(
            "next-month-selected" ,
            {
                prop_btnClass : ["text-white text-center d-block"] ,
                prop_btnStyles : {
                    "line-height" : "35px" ,
                    "font-size" : "14pt" ,
                    "cursor" : "pointer"
                } ,
                prop_btnBackgroundColor : "#ffffff00" ,
                prop_btnColor : "" ,
                prop_text : "&#11164;" ,

                fn_callback: ()=>{
                    window[goToMonth](true);
                }
            }
        )
    }

    readySelectOptionMonth = (data , componentSlots , el) => {
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
            "select-option-month" ,
            {
                prop_type:1 ,
                prop_name:"date-picker-month" ,
                prop_optionIconColor:"#ffffff" ,
                prop_titleClass:"text-white text-center" ,
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
            "table-list-days-in-month" ,
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
                prop_tableItemHeadClass : [ "text-center" , "text-white"]  ,
                prop_tableItemHeadStyles : {
                    "font-size" : "8pt" ,
                    "line-height" : "25px" ,
                    "border-left" : "white solid 1px" ,
                    "border-bottom" : "white solid 1px" ,
                    "width" : "14%" ,
                },
                prop_tableBodyClass : [ "bg-white"] ,
                prop_tableItemBodyClass : [ "text-center" , "rounded" , "d-block"] ,
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
        const acceptBtnSelected    =    super.getMethod(data , "acceptBtnSelected"  , null );
        const prop_langs           =   data.hasOwnProperty("prop_langs")      ?  data.prop_langs           :  {};

        new window.ComponentButton(
            "accept-date-selected" ,
            {
                prop_btnBackgroundColor : "#1ec9aa" ,
                prop_btnColor : "white" ,
                prop_text : prop_langs != null && prop_langs.hasOwnProperty("_btn_accept_title") ? prop_langs._btn_accept_title : "تایید" ,

                fn_callback: ()=>{
                    window[acceptBtnSelected]();
                }
            }
        )
    }

    readyBtnNow = (data , componentSlots , el) => {
        const nowBtnSelected       =    super.getMethod(data , "nowBtnSelected"  , null );
        const prop_langs           =   data.hasOwnProperty("prop_langs")      ?  data.prop_langs           :  {};

        new window.ComponentButton(
            "now-date-selected" ,
            {
                prop_btnBackgroundColor : "#1ec9aa" ,
                prop_btnColor : "white" ,
                prop_text : prop_langs != null && prop_langs.hasOwnProperty("_btn_now_title") ? prop_langs._btn_now_title : "اکنون" ,

                fn_callback: ()=>{
                    window[nowBtnSelected]();
                }
            }
        )
    }

}










