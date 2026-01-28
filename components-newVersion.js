// Name:      Components
// Developer: Mehdi Maarefian
// date:      01/01/2025
// version9:  [Mehdi_marefiyan][01/28/2026][create element with js and add Observable]
//----------------------------------------------------

if (typeof listComponent === 'undefined') {
    var listComponent = {


        //===============================================================================================================
        // [01 - 10] basic
        //===============================================================================================================
        // [01] text
        ComponentMessages:                   "component-messages" ,                       //01-01
        ComponentIsEmpty:                    "component-is-empty" ,                       //01-02
        ComponentNotify:                     "component-notify" ,                         //01-03
        ComponentHeader:                     "component-header" ,                         //01-04
        ComponentLabel:                      "component-label" ,                          //01-05
        ComponentDescription:                "component-description" ,                    //01-06
        ComponentLink:                       "component-link" ,                           //01-07
        ComponentInfo:                       "component-info" ,                           //01-08
        ComponentCard:                       "component-card" ,                           //01-09
        ComponentCardInfo:                   "component-card-info" ,                      //01-010
        ComponentListSelectedScroller:       "component-list-selected-scroller" ,         //01-011

        // [02] Fetch
        ComponentLoading:                    "component-loading" ,                        //02-01
        Component404:                        "component-404" ,                            //02-02
        ComponentForm:                       "component-form" ,                           //02-03
        ComponentWidget:                     "component-widget" ,                         //02-04
        ComponentIframe:                     "component-iframe" ,                         //02-05

        // [03] progress
        ComponentProgressStepper:            "component-progress-stepper" ,               //03-01



        //===============================================================================================================
        // [10 - 19] button / inputs / tools
        //===============================================================================================================

        // [010] Button and Inputs
        ComponentButton:                     "component-button" ,                         //010-01
        ComponentInput:                      "component-input" ,                          //010-02
        ComponentInputPrice:                 "component-input-price" ,                    //010-03
        ComponentInputEmail:                 "component-input-email" ,                    //010-04
        ComponentInputPassword:              "component-input-password" ,                 //010-05
        ComponentInputFile:                  "component-input-file" ,                     //010-06
        ComponentInputColor:                 "component-input-color" ,                    //010-07
        ComponentInputSize:                  "component-input-size" ,                     //010-08
        ComponentInputAcl:                   "component-input-acl" ,                      //010-09
        ComponentDate:                       "component-date" ,                           //010-010
        ComponentOtp:                        "component-otp" ,                            //010-011
        ComponentSelectOption:               "component-select-option" ,                  //010-012
        ComponentSelectIcon:                 "component-select-icon" ,                    //010-013
        ComponentCheckBox:                   "component-check-box" ,                      //010-014

        // [011] QR CODE
        ComponentQrCode:                     "component-qr-code" ,                        //011-01
        ComponentCameraQrCodeReader:         "component-camera-qr-code-reader" ,          //011-02
        ComponentUploadQrCodeReader:         "component-upload-qr-code-reader" ,          //011-03
        ComponentQrCodeReader:               "component-qr-code-reader" ,                 //011-04

        // [012] Inputs Tools
        ComponentAcceptTerms:                "component-accept-terms" ,                   //012-01
        ComponentSelectColumns:              "component-select-columns" ,                 //012-02
        ComponentValidate:                   "component-validate" ,                       //012-03
        ComponentTooltipDescription:         "component-tooltip-description" ,            //012-04





        //===============================================================================================================
        // [20 - 29] tables and tab view
        //===============================================================================================================
        // [020] Tables
        ComponentTable:                      "component-table" ,                          //020-01
        ComponentTableResponsible:           "component-table-responsible" ,              //020-02

        // [021] page number
        ComponentPageNumber:                "component-page-number" ,                     //021-01
        ComponentPageData:                  "component-page-data" ,                       //021-02

        // [022] Tabs
        ComponentTabs:                       "component-tabs" ,                           //022-01
        ComponentTree:                       "component-tree" ,                           //022-02

        // [023] Charts
        ComponentChart:                      "component-chart" ,                          //023-01
        ComponentChartTreeY:                 "component-chart-tree-y" ,                   //023-02

        // [024] Steppers
        ComponentStepper:                    "component-stepper" ,                        //024-01




        //===============================================================================================================
        // [30 - 39] collapse and windows
        //===============================================================================================================
        // [030] Collapse
        ComponentCollapse:                   "component-collapse" ,                       //030-01

        // [031] Window
        ComponentWindow:                     "component-window" ,                         //031-01
        ComponentWindowConfirm:              "component-window-confirm" ,                 //031-02

        // [032] Slider Shows
        ComponentSliderShowOverlapping:      "component-slider-show-overlapping" ,        //032-01

        // [033] Breadcrumb
        ComponentBreadcrumb :                "component-breadcrumb" ,                     //033-01
        ComponentBreadcrumbWithArrow :       "component-breadcrumb-with-arrow" ,          //033-02







        //===============================================================================================================
        // [80 - 89] views tools
        //===============================================================================================================
        // [080] elements page
        ComponentChangePage:                 "component-change-page" ,                    //080-01
        ComponentPageHeader:                 "component-page-header" ,                    //080-02
        ComponentPageCardInfo:               "component-page-card-info" ,                 //080-03

        // [081] elements spicals
        ComponentDraggableOrders:           "component-draggable-orders" ,               //081-01
        ComponentRecyclerView:              "component-recycler-view" ,                  //081-02

        // [082] elements tools
        ComponentToolsTableConfig:          "component-tools-table-config" ,             //082-01
        ComponentToolsTableToExcel:         "component-tools-table-to-excel" ,           //082-02
        ComponentToolsTableToPrint:         "component-tools-table-to-print" ,           //082-03





        //===============================================================================================================
        // [99] Others
        //===============================================================================================================
        ComponentIcon:                       "component-icon" ,                           //99-01
        ComponentPositionElement:            "component-position-element" ,               //99-02
        ComponentBorder:                     "component-border" ,                         //99-03
        ComponentImage:                      "component-image" ,                          //99-04
        ComponentLayout:                     "component-layout" ,                         //99-05
        ComponentMouseScroller:              "component-mouse-scroller" ,                 //99-06




        //===============================================================================================================
        // [---] Porfisinal
        //===============================================================================================================
        ComponentReport:                     "component-report" ,                         //p-02
        ComponentRender:                     "component-render" ,                         //p-01


    }
}
if (typeof components === 'undefined') {
    // var components = new WeakMap();
    var components = {};
}


/* ----------------------------------------------------
   Observable
  ------------------------------------- */
class ReactiveElement {
    constructor(tagName, options = {}) {
        this.tagName = tagName;
        this._options = options;
        this.element = document.createElement(tagName);
        this._eventListeners = [];
        this._states = new Set();
        this._children = []; // برای track کردن children
        this._hoverHandlers = {};

        this._bindings = [];
        this._applyOptions();

        this._setupHover();
    }






    _setupBindings(bindings) {
        for (const [type, config] of Object.entries(bindings)) {
            switch (type) {
                case "text":
                    this._bindText(config);
                    break;

                case "className":
                    this._setupClassName(config);
                    break;

                case "styles":
                    this._setupStyle(config);
                    break;

                case "attr":
                    this._bindAttr(config);
                    break;
            }
        }
    }

    _bindText({ key, default: def }) {
        const observable = key;

        const value = observable.get();
        this.element.textContent =
            value !== undefined && value !== null ? value : def;

        observable.subscribe(newValue => {
            this.element.textContent =
                newValue !== undefined && newValue !== null ? newValue : "";
        });
    }

    _setupClassName(classNameArr) {
        if (!Array.isArray(classNameArr)) return;

        classNameArr.forEach(item => {
            // کلاس ثابت
            if (typeof item === "string") {
                this.element.classList.add(item);
                return;
            }

            // کلاس reactive با key و default
            if (typeof item === "object" && item.key instanceof Observable) {
                const observable = item.key;
                const defaultValue = !!item.default;

                // مقدار اولیه: اگر Observable رشته است، اسم کلاس همون رشته است
                let initialClass = observable.get() ?? defaultValue;
                if (initialClass) this.element.classList.add(initialClass);

                // subscribe برای تغییرات بعدی
                observable.subscribe(value => {
                    // ابتدا همه کلاس‌های قبلی مرتبط با این Observable رو حذف کن
                    if (typeof value === "string") {
                        // remove old class
                        const currentClasses = this.element.className.split(" ");
                        currentClasses.forEach(c => {
                            if (c === initialClass) this.element.classList.remove(c);
                        });
                        initialClass = value;
                        this.element.classList.add(value);
                    } else if (value) {
                        this.element.classList.add(defaultValue);
                    } else {
                        this.element.classList.remove(defaultValue);
                    }
                });
            }
        });
    }


    _setupStyle(style) {
        if (!style || typeof style !== "object") return;

        Object.entries(style).forEach(([prop, value]) => {
            // استایل ثابت
            if (
                typeof value !== "object" ||
                value === null ||
                !value.key
            ) {
                this.element.style[prop] = value;
                return;
            }

            // استایل reactive
            const { key, default: def } = value;
            const observable = key;

            const apply = v => {
                const finalValue =
                    v !== undefined && v !== null ? v : def;

                this.element.style[prop] = finalValue ?? "";
            };

            apply(observable.get());
            observable.subscribe(apply);
        });
    }

    _bindAttr(attrs) {
        Object.entries(attrs).forEach(([attrName, config]) => {
            const { key, default: def } = config;
            const observable = key;

            const apply = value => {
                const v = value !== undefined ? value : def;

                if (v === false || v == null) {
                    this.element.removeAttribute(attrName);
                } else {
                    this.element.setAttribute(
                        attrName,
                        v === true ? "" : v
                    );
                }
            };

            apply(observable.get());
            observable.subscribe(apply);
        });
    }



    _applyOptions() {
        const opts = this._options;



        // کلاس
        if (opts.className) {
            this.element.className = opts.className;
        }

        // ID
        if (opts.id) {
            this.element.id = opts.id;
        }

        // متن
        if (opts.text !== undefined) {
            this.element.textContent = opts.text;
        }

        // HTML
        if (opts.html !== undefined) {
            this.element.innerHTML = opts.html;
        }

        // استایل اصلی
        if (opts.style) {
            Object.assign(this.element.style, opts.style);
        }

        // استایل hover
        if (opts.styleHover) {
            this._options.styleHover = opts.styleHover;
        }

        // استایل active
        if (opts.styleActive) {
            this._options.styleActive = opts.styleActive;
        }

        // استایل disabled
        if (opts.styleDisabled) {
            this._options.styleDisabled = opts.styleDisabled;
        }

        // استایل focus
        if (opts.styleFocus) {
            this._options.styleFocus = opts.styleFocus;
        }

        // attributes
        if (opts.attrs) {
            Object.entries(opts.attrs).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
        }

        // children - مهم!
        if (opts.children) {
            this._setChildren(opts.children);
        }

        // events
        if (opts.on) {
            this._setEvents(opts.on);
        }

        // state اولیه
        if (opts.disabled) {
            this.disable();
        }

        if (opts.active) {
            this.activate();
        }


        if (opts.bind) {
            this._setupBindings(opts.bind);
        }
    }

    _setChildren(children) {
        // پاک کردن children قبلی
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }

        this._children = [];

        // اضافه کردن children جدید
        children.forEach((child, index) => {
            if (child instanceof ReactiveElement) {
                this._children[index] = child;
                this.element.appendChild(child.element);
            } else if (child instanceof HTMLElement) {
                this.element.appendChild(child);
                this._children[index] = child;
            } else if (typeof child === 'string') {
                const textNode = document.createTextNode(child);
                this.element.appendChild(textNode);
                this._children[index] = textNode;
            } else if (child === null || child === undefined) {
                // ignore
            } else {
                // سعی کن به string تبدیل کنی
                const textNode = document.createTextNode(String(child));
                this.element.appendChild(textNode);
                this._children[index] = textNode;
            }
        });
    }

    _setupHover() {
        if (this._options.styleHover) {
            const originalStyle = { ...this.element.style };

            this.element.addEventListener('mouseenter', () => {
                if (!this._states.has('disabled') && !this._states.has('active')) {
                    Object.assign(this.element.style, this._options.styleHover);
                }
            });

            this.element.addEventListener('mouseleave', () => {
                if (!this._states.has('disabled') && !this._states.has('active')) {
                    Object.assign(this.element.style, originalStyle);

                    if (this._states.has('active') && this._options.styleActive) {
                        Object.assign(this.element.style, this._options.styleActive);
                    }
                }
            });
        }
    }

    _setEvents(events) {
        this._eventListeners.forEach(({ event, handler }) => {
            this.element.removeEventListener(event, handler);
        });

        this._eventListeners = [];

        Object.entries(events).forEach(([event, handler]) => {
            const wrappedHandler = (e) => {
                if (this._states.has('disabled') && event !== 'mouseenter' && event !== 'mouseleave') {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                handler(e);
            };
            this.element.addEventListener(event, wrappedHandler);
            this._eventListeners.push({ event, handler: wrappedHandler });
        });
    }

    // ========== Children Management ==========

    appendChild(child) {
        if (child instanceof ReactiveElement) {
            this._children.push(child);
            this.element.appendChild(child.element);
        } else if (child instanceof HTMLElement) {
            this._children.push(child);
            this.element.appendChild(child);
        } else if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            this._children.push(textNode);
            this.element.appendChild(textNode);
        }
        return this;
    }

    prependChild(child) {
        if (child instanceof ReactiveElement) {
            this._children.unshift(child);
            this.element.prepend(child.element);
        } else if (child instanceof HTMLElement) {
            this._children.unshift(child);
            this.element.prepend(child);
        } else if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            this._children.unshift(textNode);
            this.element.prepend(textNode);
        }
        return this;
    }

    removeChild(child) {
        const index = this._children.indexOf(child);
        if (index > -1) {
            this._children.splice(index, 1);

            if (child instanceof ReactiveElement) {
                this.element.removeChild(child.element);
            } else if (child instanceof HTMLElement || child.nodeType === 3) {
                this.element.removeChild(child);
            }
        }
        return this;
    }

    clearChildren() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this._children = [];
        return this;
    }

    getChildren() {
        return [...this._children];
    }

    // ========== State Management ==========

    enableHover() {
        this._states.delete('no-hover');
        return this;
    }

    disableHover() {
        this._states.add('no-hover');
        return this;
    }

    activate() {
        this._states.add('active');
        if (this._options.styleActive) {
            Object.assign(this.element.style, this._options.styleActive);
        }
        return this;
    }

    deactivate() {
        this._states.delete('active');
        const opts = this._options;
        if (opts.style) {
            Object.assign(this.element.style, opts.style);
        }
        return this;
    }

    disable() {
        this._states.add('disabled');
        if (this._options.styleDisabled) {
            Object.assign(this.element.style, this._options.styleDisabled);
        }
        this.element.style.cursor = 'not-allowed';
        return this;
    }

    enable() {
        this._states.delete('disabled');
        const opts = this._options;
        if (opts.style) {
            Object.assign(this.element.style, opts.style);
        }
        this.element.style.cursor = '';
        return this;
    }

    focus() {
        this.element.focus();
        if (this._options.styleFocus) {
            Object.assign(this.element.style, this._options.styleFocus);
        }
        return this;
    }

    blur() {
        this.element.blur();
        const opts = this._options;
        if (opts.style) {
            Object.assign(this.element.style, opts.style);
        }
        return this;
    }

    toggleActive() {
        if (this._states.has('active')) {
            this.deactivate();
        } else {
            this.activate();
        }
        return this;
    }

    toggleDisabled() {
        if (this._states.has('disabled')) {
            this.enable();
        } else {
            this.disable();
        }
        return this;
    }

    isActive() {
        return this._states.has('active');
    }

    isDisabled() {
        return this._states.has('disabled');
    }

    isHoverEnabled() {
        return !this._states.has('no-hover');
    }

    // ========== Public API ==========

    setText(text) {
        this.element.textContent = text;
        return this;
    }

    setHtml(html) {
        this.element.innerHTML = html;
        return this;
    }

    setStyle(styleObj) {
        Object.assign(this.element.style, styleObj);
        this._options.style = { ...this._options.style, ...styleObj };
        return this;
    }

    setStyleHover(styleObj) {
        this._options.styleHover = styleObj;
        this._setupHover();
        return this;
    }

    setStyleActive(styleObj) {
        this._options.styleActive = styleObj;
        return this;
    }

    setStyleDisabled(styleObj) {
        this._options.styleDisabled = styleObj;
        return this;
    }

    setStyleFocus(styleObj) {
        this._options.styleFocus = styleObj;
        return this;
    }

    setChildren(children) {
        this._setChildren(children);
        this._options.children = children;
        return this;
    }

    addClass(className) {
        this.element.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.element.classList.remove(className);
        return this;
    }

    toggleClass(className) {
        this.element.classList.toggle(className);
        return this;
    }

    getElement() {
        return this.element;
    }

    // متدهای استاتیک
    static create(tagName, options) {
        return new ReactiveElement(tagName, options);
    }

    static div(options)     { return new ReactiveElement('div',      options); }
    static button(options)  { return new ReactiveElement('button',   options); }
    static section(options) { return new ReactiveElement('section',  options); }
    static span(options)    { return new ReactiveElement('span',     options); }
    static a(options)       { return new ReactiveElement('a',        options); }
    static input(options)   { return new ReactiveElement('input',    options); }
    static h1(options)      { return new ReactiveElement('h1',       options); }
    static h2(options)      { return new ReactiveElement('h2',       options); }
    static h3(options)      { return new ReactiveElement('h3',       options); }
    static p(options)       { return new ReactiveElement('p',        options); }
    static ul(options)      { return new ReactiveElement('ul',       options); }
    static li(options)      { return new ReactiveElement('li',       options); }
    static img(options)     { return new ReactiveElement('img',      options); }
    static i(options)       { return new ReactiveElement('i',        options); }
}

class Observable {
    constructor(value) {
        this._value = value;
        this._subscribers = new Set();
    }

    get() {
        return this._value;
    }

    set(value) {
        if (this._value === value) return;
        this._value = value;
        this._notify();
    }

    subscribe(fn) {
        this._subscribers.add(fn);
        return () => this._subscribers.delete(fn);
    }

    _notify() {
        this._subscribers.forEach(fn => fn(this._value));
    }
}



/* ----------------------------------------------------
   Component Base:
------------------------------------- */
class ComponentBase{

    _COMPONENT_PATTERN = {};
    _COMPONENT_PROPS = null;
    _COMPONENT_SCHEMA = null;

    _COMPONENT_PROPS_BIND = {};

    _COMPONENT_RANDOM_ID = 0;
    _COMPONENT_ID = null;
    _COMPONENT_NAME = null;
    _COMPONENT_SELECTOR = null;
    _COMPONENT_ELEMENT = null;
    _COMPONENT_CONTENT = "";
    _COMPONENT_SLOTS = [];






    //--------------------------------------------------
    // cunstruct
    //--------------------------------------------------
    constructor(componentName , elId) {
        this._COMPONENT_NAME =            componentName;
        this._COMPONENT_ID =              elId;

        this._COMPONENT_RANDOM_ID =       Math.floor(Math.random() * 10000);
        this._COMPONENT_SELECTOR =        this._COMPONENT_NAME+"#"+this._COMPONENT_ID;
        this._COMPONENT_ELEMENT =         this.getComponentElement();
    }

    renderComponent(config){

        this.getReadyComponentParamsWithDefault();

        let realConfig = this.getReadyRealProps();
        realConfig = this.getReadyParamsBasic(config , realConfig);
        this.getReadyParamsBinding(realConfig);

        this.getReadyTemplateSchma();
    }









    //--------------------------------------------------
    // GET Ready
    //--------------------------------------------------
    getReadyComponentParamsWithDefault(){
        if (this._COMPONENT_PROPS.hasOwnProperty("part_structure")){
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("prop_show")){
                this._COMPONENT_PROPS["part_structure"].push( {prop: "prop_show"           , default: true});
            }
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("prop_structureClass")){
                this._COMPONENT_PROPS["part_structure"].push( {prop: "prop_structureClass" , default: []});
            }
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("prop_structureStyles")){
                this._COMPONENT_PROPS["part_structure"].push( {prop: "prop_structureStyles", default: {}});
            }
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("prop_structureHoverStyles")){
                this._COMPONENT_PROPS["part_structure"].push( {prop: "prop_structureHoverStyles", default: {}});
            }
        }
        if (this._COMPONENT_PROPS.hasOwnProperty("part_label")){
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_title")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_title"                       , default: null});
            }
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_labelShow")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_labelShow"                   , default: true});
            }
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_labelTooltipDescription")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_labelTooltipDescription"     , default: null});
            }
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_labelClass")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_labelClass"                  , default:  ["shadow-sm" , "px-2" , "d-block" , "rounded"]});
            }
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_labelStyles")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_labelStyles"                 , default:  { "font-size" : "10pt"}});
            }
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_labelHoverStyles")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_labelHoverStyles"             , default: null});
            }
            if (!this._COMPONENT_PROPS.part_label.hasOwnProperty("prop_labelSize")){
                this._COMPONENT_PROPS["part_label"].push( {prop: "prop_labelSize"                    , default: tools_css.standardSizes.m.name});
            }
        }
    }

    getReadyRealProps() {
        const props = [];
        Object.entries(this._COMPONENT_PROPS).forEach(([partName, partParams]) => {
            for (const param of partParams) {
                if (param != null){
                    props.push(param)
                }
            }
        });

        return props;
    }

    getReadyParamsBasic(config , props) {
        props.push({prop: "directionRtl", default: config.hasOwnProperty("directionRtl") ? config.directionRtl : (component_props != null && component_props.hasOwnProperty("directionRtl") ? component_props.directionRtl : false)})   ;
        props.push({prop: "prop_show"   , default: config.hasOwnProperty("prop_show")    ? config.prop_show    : true});
        props.push({prop: "classList"   , default: config.hasOwnProperty("classList")    ? config.classList    : []});
        props.push({prop: "styles"      , default: config.hasOwnProperty("styles")       ? config.styles       : {}});

        return props;
    }

    getReadyParamsBinding(props){
        for (const param of props) {
            if (param != null && param.hasOwnProperty("prop")){
                const defaultValue = param?.default ?? null;
                this._COMPONENT_PROPS_BIND[param.prop] = new Observable(defaultValue);
            }
        }
    }

    getReadyTemplateSchma(){
        if (typeof this.templateFn !== "undefined"){
            this._COMPONENT_CONTENT = this.templateFn();
            this._COMPONENT_ELEMENT.appendChild(this._COMPONENT_CONTENT.getElement());
        }
    }









    //--------------------------------------------------
    // Getter
    //--------------------------------------------------
    getComponentElement(){
        return document.querySelector(this._COMPONENT_SELECTOR);
    }

    getPartProps(partName){
        let resultExp = null
        if (this._COMPONENT_PROPS != null){
            Object.keys(this._COMPONENT_PROPS).forEach(key => {
                if (key == partName){

                    resultExp={};
                    const props = this._COMPONENT_PROPS[key];
                    for (const param of props) {
                        if (param != null && param.hasOwnProperty("prop")){
                            const defaultValue = param?.default ?? null;
                            resultExp[param.prop] = this._COMPONENT_PROPS_BIND[param.prop];
                        }
                    }

                }
            })
        }
        return resultExp;
    }

    get(propName){
        if ( this._COMPONENT_PROPS_BIND != null && this._COMPONENT_PROPS_BIND.hasOwnProperty(propName) ){
            return this._COMPONENT_PROPS_BIND[propName].get();
        }
        return null;
    }







    //--------------------------------------------------
    // Setter
    //--------------------------------------------------
    set(propName , propValue){
        if ( this._COMPONENT_PROPS_BIND != null && this._COMPONENT_PROPS_BIND.hasOwnProperty(propName) ){
            console.log(propValue , this._COMPONENT_PROPS_BIND[propName])
            this._COMPONENT_PROPS_BIND[propName].set(propValue);
        }
    }







    //--------------------------------------------------
    // Template Reader
    //--------------------------------------------------
    templateBasic_render(moreClass="mb-1") {
        return ReactiveElement.section({
            className: `component-element-structure  ${tools_public.renderListClass(moreClass)}`,
            children: [
                this.template_render_structure()
            ]
        });
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

                return ReactiveElement.section({
                    className: "position-relative",
                    attrs: {
                        "data-part-name": partName,
                        "id": `component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}`,
                    },
                    style: {
                        ...prop_structureStyles
                    },
                    styleHover: {
                        ...prop_structureHoverStyles
                    },
                    children: [
                        content
                    ]
                });

            }
        }

        return ReactiveElement.section({
            attrs: {
                "data-part-name": partName,
            },
        });
    }

}





/*----------------------------------------------------
 030-01) Component Collapse
-------------------------------------*/
class ComponentTestBase extends ComponentBase{


    /* ---------------------------------------------
           PROPERTYs Pattern
    --------------------------------------------- */
    _COMPONENT_PATTERN = {
        prop_title : {
            prop: "prop_title" ,
            default: "Hello World" ,
        } ,
    };

    /* ---------------------------------------------
           PROPERTYs Props
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [],

        part_one: [
            this._COMPONENT_PATTERN.prop_title ,
        ],
    };


    /* ---------------------------------------------
   PROPERTYs Schema
   --------------------------------------------- */
    _COMPONENT_SCHEMA = {
        part_structure: {
            part_one: {

            } ,
        }
    }

}
window.ComponentTest = class ComponentTest extends ComponentTestBase{

    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            "component-test" ,
            elId ,
        );
        super.renderComponent(config);
    }


    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){

    }

    templateFn(partName = null){
        return this.templateBasic_render();
    }

    template_render_structure() {
        const partName = "part_structure";
        return this.templateBasic_render_structure(
            ReactiveElement.section({
                children: [
                    this.template_render_one() ,
                ]
            })
        );
    }

    template_render_one() {
        const partName = "part_one";
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_title                =   data.hasOwnProperty("prop_title")                 ?  data.prop_title               :  null;

            return ReactiveElement.section({
                className: "position-relative",
                attrs: {
                    "data-part-name": partName,
                    "id": `component-collapse-header-${this._COMPONENT_RANDOM_ID}`,
                },
                bind:{
                    text: { key: prop_title, default: "1" },
                } ,
                on: {
                    click: (e) => {
                        this.set("prop_title" , "clicked")
                        //e.target.set("")
                        alert("کلیک شد!");
                    },
                },
            });
        }


        return ReactiveElement.section({
            attr: {
                "data-part-name":  partName
            }
        });
    }

}





/*-------------------------------------
 99-01) Component Icon
-------------------------------------*/
class ComponentIconBase extends ComponentBase{

    /* ---------------------------------------------
        PROPERTYs Pattern
     --------------------------------------------- */
    _COMPONENT_PATTERN = {
        prop_icon: {
            prop: "prop_icon",
            default: ""
        },
        prop_title: {
            prop: "prop_title",
            default: ""
        },
        prop_isItalik: {
            prop: "prop_isItalik",
            default: false
        },
        prop_iconClass: {
            prop: "prop_iconClass",
            default: []
        },
        prop_iconStyles: {
            prop: "prop_iconStyles",
            default: {}
        },
        fn_callback: {
            prop: "fn_callback",
            default: null
        }
    };

    /* ---------------------------------------------
           PROPERTYs Props
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [],
        part_icon: [
            this._COMPONENT_PATTERN.prop_icon,
            this._COMPONENT_PATTERN.prop_title,
            this._COMPONENT_PATTERN.prop_isItalik,
            this._COMPONENT_PATTERN.prop_iconClass,
            this._COMPONENT_PATTERN.prop_iconStyles,
            this._COMPONENT_PATTERN.fn_callback
        ]
    };



    /* ---------------------------------------------
   PROPERTYs Schema
   --------------------------------------------- */
    _COMPONENT_SCHEMA = {
        part_structure: {
            part_icon: {} ,
        }
    }

}
window.ComponentIcon  = class ComponentIcon extends ComponentIconBase{

    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentIcon.name] ,
            elId
        );
        super.renderComponent(config);
    }


    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    componentFn(){

    }

    templateFn(partName = null){
        return this.templateBasic_render();
    }

    template_render_structure() {
        const partName = "part_structure";
        return this.templateBasic_render_structure(
            ReactiveElement.section({
                children: [
                    this.templateFn_render_icon() ,
                ]
            })
        );
    }

    templateFn_render_icon(){
        const partName="part_icon";
        const data = this.getPartProps(partName);

        if (data != null){
            const prop_title         =  data.hasOwnProperty("prop_title")         ?  data.prop_title        : "" ;

            const prop_icon         =  data.hasOwnProperty("prop_icon")           ?  data.prop_icon         :  "";
            const prop_isItalik     =  data.hasOwnProperty("prop_isItalik")       ?  data.prop_isItalik     :  false;

            const prop_iconClass    =   data.hasOwnProperty("prop_iconClass")     ?  data.prop_iconClass    :  [];
            const prop_iconStyles   =   data.hasOwnProperty("prop_iconStyles")    ?  data.prop_iconStyles   :  {};

            console.log(prop_icon);

            return ReactiveElement.i(
                {
                    className: "",
                    attrs: {
                        "data-part-name":     partName,
                        "title":              prop_title,
                        "id":                `component-icon-icon-${this._COMPONENT_RANDOM_ID}`,
                   },
                   bind:{
                       text: { key: prop_icon, default: "" },
                       styles: {
                           ... prop_iconStyles
                       }
                       /*className: [
                           { key: prop_iconClass, default: "" }
                       ]*/
                   } ,
                   on: {
                       click: (event) => {
                           this.fn_onCLickIcon(event)
                       },
                       mouseenter: (event) => {
                           this.fn_onHoverIcon(event)
                       },
                       mouseleave: (event) => {
                           this.fn_onBlurIcon(event)
                       },
                   },
            });

        }


        return ReactiveElement.section({
            attr: {
                "data-part-name":  partName
            }
        });
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




