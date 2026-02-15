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
        this._eventListeners = [];
        this._states = new Set();
        this._children = [];
        this._hoverHandlers = {};

        this._bindings = [];

        this.element = document.createElement(tagName);
        this._applyOptions();
        this._setupHover();
    }


    _isObservable(value) {
        return value instanceof Observable;
    }

    _applyText(value) {
        const apply = v => {
            if (v == null) return;

            // Node واقعی
            if (v instanceof Node) {
                this.element.innerHTML = "";
                this.element.appendChild(v);
                return;
            }

            // HTML string
            if (typeof v === "string" && v.trim().startsWith("<")) {
                this.element.innerHTML = v;
                return;
            }

            // متن معمولی
            this.element.textContent = v;
        };

        if (this._isObservable(value)) {
            apply(value.get());
            value.subscribe(apply);
        } else if (value !== undefined) {
            apply(value);
        }
    }


    _applyClassName(list = []) {
        list.forEach(item => {

            // 1. string
            if (typeof item === "string") {
                this.element.classList.add(item);
                return;
            }

            // 2. Observable<string>
            if (item instanceof Observable) {
                let prev;

                const apply = v => {
                    if (prev) this.element.classList.remove(prev);
                    if (typeof v === "string" && v) {
                        this.element.classList.add(v);
                        prev = v;
                    }
                    if (Array.isArray(v)) {
                        for (let j = 0; j < v.length; j++) {
                            const itemClass =v[j];
                            this.element.classList.add(itemClass);
                        }
                    }
                };

                apply(item.get());
                item.subscribe(apply);
                return;
            }

            // 3. { className: Observable<boolean> }
            if (typeof item === "object") {
                Object.entries(item).forEach(([cls, obs]) => {
                    if (!(obs instanceof Observable)) return;

                    const apply = v =>
                        this.element.classList.toggle(cls, !!v);

                    apply(obs.get());
                    obs.subscribe(apply);
                });
            }
        });
    }






    _applyStyles(styles = {}) {
        Object.entries(styles).forEach(([key, value]) => {

            // Observable
            if (value instanceof Observable) {
                const current = value.get();

                // اگر خروجی آبجکت است → چند style
                if (current && typeof current === "object" && !Array.isArray(current)) {
                    this._bindStyleObject(value);
                }
                // اگر primitive است → key یک style است
                else {
                    this._bindStyle(key, value);
                }
                return;
            }

            // مقدار ثابت
            this._bindStyle(key, value);
        });
    }

    _bindStyle(key, value) {
        if (value instanceof Observable) {

            this.element.style[key] = value.get();
            value.subscribe(v => {
                this.element.style[key] = v ?? "";
            });
        } else {
            if (value && typeof value === "object" && !Array.isArray(value)) {
                Object.entries(value).forEach(([k, v]) => {

                    if (v instanceof Observable) {
                        this.element.style[k] = v?.get?.() ?? "";
                    }
                    else{
                        this.element.style[k] = v ?? "";
                    }
                });
            }
            else{
                this.element.style[key] = value ?? "";
            }
        }
    }

    _bindStyleObject(obs) {

        const apply = (obj = {}) => {
            Object.entries(obj).forEach(([k, v]) => {
                this.element.style[k] = v ?? "";
            });
        };

        apply(obs.get());
        obs.subscribe(apply);
    }



    _setupHover(stylesHover = null) {
        const hover = stylesHover || this._options.stylesHover;
        if (!hover) return;

        const applyStyles = (obj = {}) => {
            Object.entries(obj).forEach(([k, v]) => {
                this.element.style[k] = v ?? "";
            });
        };

        const applySingle = (key, value) => {
            if (value instanceof Observable) {
                this.element.style[key] = value.get() ?? "";
                value.subscribe(v => {
                    if (!this._states.has('disabled') && !this._states.has('active')) {
                        this.element.style[key] = v ?? "";
                    }
                });
            } else {
                this.element.style[key] = value ?? "";
            }
        };

        this.element.addEventListener('mouseenter', () => {
            if (this._states.has('disabled') || this._states.has('active')) return;

            if (hover instanceof Observable) {
                const val = hover.get();
                if (typeof val === "object") applyStyles(val);
            } else {
                Object.entries(hover).forEach(([k, v]) => {
                    applySingle(k, v);
                });
            }
        });

        this.element.addEventListener('mouseleave', () => {
            if (this._states.has('disabled')) return;

            // ری‌اپلای styles اصلی
            if (this._options.styles) {
                this._applyStyles(this._options.styles);
            }

            if (this._states.has('active') && this._options.styleActive) {
                Object.assign(this.element.style, this._options.styleActive);
            }
        });
    }








    _applyAttrs(attrs) {
        if (!attrs || typeof attrs !== "object") return;

        Object.entries(attrs).forEach(([attr, val]) => {
            const apply = v => {
                if (v === false || v == null) {
                    this.element.removeAttribute(attr);
                } else {
                    this.element.setAttribute(attr, v === true ? "" : v);
                }
            };

            if (this._isObservable(val)) {
                apply(val.get());
                val.subscribe(apply);
            } else {
                apply(val);
            }
        });
    }




    _applyOptions() {
        const o = this._options;

        if (o.children) this._setChildren(o.children);
        if (o.on) this._setEvents(o.on);

        this._applyText(o.text);
        this._applyClassName(o.className);
        this._applyStyles(o.styles);


        this._applyAttrs(o.attrs);

        this._setupHover(o.stylesHover);

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

    setStylesHover(styleObj) {
        this._options.stylesHover = styleObj;
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



    ///----------------------------------------------------
    getElement() {
        return this.element;
    }

    remove(){
        this.element?.remove?.();
    }


    ///----------------------------------------------------
    static create(tagName, options) {
        return new ReactiveElement(tagName, options);
    }

    static div(options)     { return new ReactiveElement('div',      options); }
    static button(options)  { return new ReactiveElement('button',   options); }
    static b(options)       { return new ReactiveElement('b',        options); }
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


    mapBoolean(trueValue, falseValue) {
        const derived = new Observable(
            this.get() ? trueValue : falseValue
        );

        this.subscribe(v => {
            derived.set(v ? trueValue : falseValue);
        });

        return derived;
    }

    mapList(mapping) {
        const currentValue = this.get();
        const initialMappedValue = this._mapValue(currentValue, mapping);
        const derived = new Observable(initialMappedValue);

        this.subscribe(v => {
            const mappedValue = this._mapValue(v, mapping);
            derived.set(mappedValue);
        });



        return derived;
    }

    _mapValue(value, mapping) {
        if (typeof mapping === 'function') {
            // اگر mapping یک تابع است
            return mapping(value);
        } else if (typeof mapping === 'object' && mapping !== null) {
            // اگر mapping یک object است
            if (value in mapping) {
                return mapping[value];
            } else if ('default' in mapping) {
                const value = mapping.default;
                if (value != null && value instanceof Observable) {
                    return value.get();
                }
                else {
                    return value;
                }
            }
            return value;
        }
        return value;
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
   Component config:
------------------------------------- */
class AppConfig {
    static _state = {
        directionRtl: true,
        //language: "fa",
        //font: "IRANSans"
    };

    static _subscribers = new Map();

    static get(key) {
        return this._state[key];
    }

    static set(key, value) {
        if (this._state[key] === value) return;

        this._state[key] = value;
        this._notify(key, value);
    }

    static subscribe(key, callback) {
        if (!this._subscribers.has(key)) {
            this._subscribers.set(key, new Set());
        }

        this._subscribers.get(key).add(callback);

        return () => {
            this._subscribers.get(key).delete(callback);
        };
    }

    static _notify(key, value) {
        if (!this._subscribers.has(key)) return;

        this._subscribers
            .get(key)
            .forEach(fn => fn(value));
    }
}




/* ----------------------------------------------------
   Component Base:
------------------------------------- */
class ComponentBase{

    _COMPONENT_PATTERN = {};
    _COMPONENT_METHODS = {};
    _COMPONENT_TEMPLATES = {};
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
        this._COMPONENT_ELEMENT =         this.#getComponentElement();
    }

    renderComponent(config){

        this.connectedCallback();

        // GET Ready ==> _COMPONENT_TEMPLATES
        this.#getReadyTemplates()

        // GET Ready ==> _COMPONENT_PROPS_BIND
        this.#getReadyComponentParamsWithDefault();

        this.#getReadyParamsBasic(config);

        let realConfig = this.#getReadyRealProps();
        realConfig = this.#getReadyUserConfigAndDefaultConfig(config , realConfig)
        this.#getReadyParamsBinding(realConfig);


        // GET Ready ==> _COMPONENT_METHODS
        this.#getReadyComponentMethods(config)

        // GET Ready ==> _COMPONENT_ELEMENT
        return this.#getReadyTemplateSchma();

    }





    connectedCallback() {
        this.set("directionRtl" , AppConfig.get("directionRtl"))
        this._unsubscribeDirection =
            AppConfig.subscribe("directionRtl", (value) => {
                this.set("directionRtl" , value)
            });
    }


    //--------------------------------------------------
    // GET Ready ==> _COMPONENT_TEMPLATES
    //--------------------------------------------------
    #getReadyTemplates(){
        const listTemplates = this.#getListTemplates();
        if (this._COMPONENT_TEMPLATES != null){
            Object.keys(this._COMPONENT_TEMPLATES).forEach(templateName => {
                const value = this.#getReadyTemplateValueSelected(listTemplates , templateName , this._COMPONENT_TEMPLATES[templateName])
                if (value != null){
                    this._COMPONENT_TEMPLATES[templateName].value = value;
                }
            })
        }
    }

    #getListTemplates(){
        let resultExp = {};

        const component = this.#getComponentElement();

        let hasTemplate = false;
        if (component != null){
            const children = component.children
            let childReal = children;
            if (children.length > 0){
                hasTemplate = children[0] && children[0].tagName === "TEMPLATE"
                if (hasTemplate){
                    childReal = children[0]?.content?.children ?? [];
                }
            }

            const componentSlotNames= Object.values(
                [...childReal]
                    .filter(el => el.tagName.toLowerCase().startsWith('component-'))
                    .reduce((acc, el) => {
                        const tag = el.tagName.toLowerCase();
                        if (!acc[tag]) acc[tag] = { el, list: [] };
                        acc[tag].list.push(el);
                        console.log(el)
                        return acc;
                    }, {})
            );

            if (hasTemplate){
                children[0].remove()
            }

            if (Array.isArray(componentSlotNames)) {
                for (const componentTag of componentSlotNames) {

                    if(componentTag.hasOwnProperty("list") && componentTag.hasOwnProperty("el")){
                        const list = componentTag.list;

                        if(list != null && Array.isArray(list)){
                            const listExp = [];
                            for (const itemComponent of list) {
                                const name = itemComponent.getAttribute("name")
                                listExp.push( this.#getListTemplates_templateData(itemComponent))
                            }
                            resultExp[componentTag.el.tagName.toLowerCase().replace(/^component-/, '')] = listExp
                        }
                    }
                }
            }
        }

        return resultExp;
    }

    #getListTemplates_templateData(el){
        return {
            html:  el.innerHTML ,
            attrs: Object.fromEntries([...el.attributes].map(a => [a.name, a.value]))
        }
    }

    #getReadyTemplateValueSelected(listTemplates , templateName , templateData){
        let resultExp = null;
        if (listTemplates != null){
            Object.keys(listTemplates).forEach(temp => {
                if (temp == templateName){
                    const itemTemplate = listTemplates[templateName];
                    const refrence = templateData.refrence;
                    const isMulti = this.#getReadyTemplateValueSelected_hasMultiTemplate(refrence)

                    if (isMulti){
                        resultExp = itemTemplate;
                    }
                    else{
                        if (itemTemplate.length > 0 && itemTemplate[0] != null && itemTemplate[0].hasOwnProperty("html")){
                            resultExp = itemTemplate[0].html;
                        }
                    }
                    return;
                }
            })
        }
        return resultExp;
    }

    #getReadyTemplateValueSelected_hasMultiTemplate(refrence){
        let resultExp = false;
        if (this._COMPONENT_PATTERN != null){
            Object.keys(this._COMPONENT_PATTERN).forEach(key => {
                if (key == refrence){
                    const refData = this._COMPONENT_PATTERN[key]
                    resultExp = refData.hasOwnProperty("hasMultiTemplate") ? refData.hasMultiTemplate : false;
                    return;
                }
            })
        }
        return resultExp;
    }






    //--------------------------------------------------
    // GET Ready ==> _COMPONENT_PROPS_BIND
    //--------------------------------------------------
    #getReadyComponentParamsWithDefault(){
        if (this._COMPONENT_PROPS.hasOwnProperty("part_component")){
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("directionRtl")){
                this._COMPONENT_PROPS["part_component"].push( {prop: "directionRtl"           , default: component_props.directionRtl} );
            }
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("classList")){
                this._COMPONENT_PROPS["part_component"].push( {prop: "classList"           , default: true});
            }
            if (!this._COMPONENT_PROPS.part_structure.hasOwnProperty("styles")){
                this._COMPONENT_PROPS["part_component"].push( {prop: "styles"           , default: true});
            }
        }
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

    #getReadyParamsBasic(config) {
        this._COMPONENT_PATTERN["directionRtl"] = this.getProp_directionRtl(config) ;
        this._COMPONENT_PATTERN["prop_show"] =    this.getProp_show(config) ;
        this._COMPONENT_PATTERN["classList"] =    this.getProp_classList(config) ;
        this._COMPONENT_PATTERN["styles"] =       this.getProp_classList(config) ;
    }

    #getReadyRealProps() {
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

    #getReadyUserConfigAndDefaultConfig(config , props){
        if (props != null && config != null){

            for (let i = 0; i < props.length; i++) {
                const itemProp = props[i];
                if (itemProp.hasOwnProperty("prop") ){
                    const propName = itemProp.prop;
                    if (config.hasOwnProperty(propName)){
                        props[i].default = config[itemProp.prop]
                    }
                    else{
                        if (this._COMPONENT_TEMPLATES != null){
                            Object.keys(this._COMPONENT_TEMPLATES).forEach(templateName => {
                                const data =this._COMPONENT_TEMPLATES[templateName];
                                const refrence = data.refrence;
                                if (refrence.prop == propName && data.hasOwnProperty("value")){
                                    props[i].default = data.value

                                }
                            })
                        }
                    }
                }
            }
        }

        return props;
    }

    #getReadyParamsBinding(props){
        for (const param of props) {
            if (param != null && param.hasOwnProperty("prop")){
                const defaultValue = param?.default ?? null;
                this._COMPONENT_PROPS_BIND[param.prop] = new Observable(defaultValue);
            }
        }
    }


    //--------------------------------------------------
    // GET Ready ==> _COMPONENT_METHODS
    //--------------------------------------------------
    #getReadyComponentMethods(config){
        if (this._COMPONENT_METHODS != null){
            Object.keys(this._COMPONENT_METHODS).forEach(keyMethodConfig => {
                const method = this.#getMethodDestinationConfig(config , keyMethodConfig);
                if (method != null){
                    this._COMPONENT_METHODS[keyMethodConfig]["destination"] = method;
                }
            })
        }
    }

    #getMethodDestinationConfig(config , methodName){
        let method = null
        if (config != null){
            Object.keys(config).forEach(keyMethod => {
                if (keyMethod == methodName){
                    const fn = config[keyMethod];
                    if (fn != null && typeof fn == "function"){
                        method = fn;
                        return
                    }
                }
            })
        }
        return method;
    }



    //--------------------------------------------------
    // GET Ready ==> _COMPONENT_ELEMENT
    //--------------------------------------------------
    #getReadyTemplateSchma(){
        this._COMPONENT_CONTENT = this.templateBasic_render();

        if (this._COMPONENT_ELEMENT != null){
            const classList = this.get("classList")
            const styles = this.get("styles")
            this._COMPONENT_ELEMENT.className =  tools_public.renderListClass(classList)
            this._COMPONENT_ELEMENT.style =  tools_public.renderListStyle(styles)
            this._COMPONENT_ELEMENT.appendChild(this.getSchema());
        }
    }





    //--------------------------------------------------
    // GET Ready ==> _COMPONENT_SELECTOR
    //--------------------------------------------------
    #getComponentElement(){
        return document.querySelector(this._COMPONENT_SELECTOR);
    }



    //--------------------------------------------------
    // Template Reader
    //--------------------------------------------------
    templateBasic_render(moreClass=["mb-1"]) {
        const partName = "part_component";
        const data = this.getPartProps(partName);

        if (data != null){

            const directionRtl  =  data?.directionRtl ?? null;
            let classList = [];
            let styles = {};
            if (this._COMPONENT_ELEMENT == null){
                classList       =   data?.classList   ?? null;
                styles          =   data?.styles      ?? null;
            }

           return  ReactiveElement.section({
                className:[
                    "component-element-structure" ,
                    moreClass ,
                    classList
                ] ,
                styles :{
                  //  direction: AppConfig.get("direction") ,
                    direction:  directionRtl.mapBoolean( "rtl" , "ltr"),
                    ...styles
                },
                children: [
                    this.template_render_structure()
                ]
            });
        }


        return ReactiveElement.section({
            className: [
                "component-element-structure"
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

            return ReactiveElement.section({
                className: [
                    "position-relative" ,
                    { "d-none": !prop_show }
                ],
                attrs: {
                    "data-part-name": partName,
                    "id": `component-${this._COMPONENT_NAME}-structure-${this._COMPONENT_RANDOM_ID}`,
                },
                style: {
                    prop_structureStyles
                },
                /*stylesHover: {
                    prop_structureHoverStyles
                },*/
                children: [
                    content
                ]
            });

            if (prop_show){



            }
        }

        return ReactiveElement.section({
            attrs: {
                "data-part-name": partName,
            },
        });
    }



    //--------------------------------------------------
    // fix Props
    //--------------------------------------------------

    getProp_directionRtl(config = null){
        return  {
            prop:     "directionRtl",
            default:  config?.directionRtl ?? (component_props?.directionRtl ?? false)
        }
    }
    getProp_show(config = null){
        return  {
            prop:     "prop_show",
            default:   config?.prop_show ?? true
        }
    }

    getProp_classList(config = null){
        return  {
            prop:     "classList",
            default:  config?.classList ?? []
        }
    }

    getProp_styles(config = null){
        return  {
            prop:     "styles",
            default:  config?.styles ?? {}
        }
    }


    //--------------------------------------------------
    // part Props
    //--------------------------------------------------
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

    getSchema(){
        return this._COMPONENT_CONTENT.getElement()
    }


    //--------------------------------------------------
    // Prop
    //--------------------------------------------------
    set(propName , propValue){
        if ( this._COMPONENT_PROPS_BIND != null && this._COMPONENT_PROPS_BIND.hasOwnProperty(propName) ){
            this._COMPONENT_PROPS_BIND[propName].set(propValue);
        }
    }

    get(propName){
        if ( this._COMPONENT_PROPS_BIND != null && this._COMPONENT_PROPS_BIND.hasOwnProperty(propName) ){
            return this._COMPONENT_PROPS_BIND[propName].get();
        }
        return null;
    }




    //--------------------------------------------------
    // Template Reader
    //--------------------------------------------------
    executMethod(methodName, event) {
        const [fn, argsObject] = this.#executMethod_getMethodData(methodName);
        if (typeof fn === "function") {
            fn.call(this, event, argsObject);
        }
    }

    #executMethod_getMethodData(methodName){
        let fn = null;
        let argsObject = {};
        if (this._COMPONENT_METHODS != null){
            Object.keys(this._COMPONENT_METHODS).forEach(key => {
                const methodData = this._COMPONENT_METHODS[key];
                if (
                    key === methodName &&
                    typeof methodData.destination === "function"
                ){
                    fn = methodData.destination;
                    argsObject = this.#executMethod_getMethodData_getArgs(
                        methodData.args || {}
                    );
                }
            });
        }
        return [fn, argsObject];
    }

    #executMethod_getMethodData_getArgs(args){
        let argsExp = {};
        if (args != null){
            Object.keys(args).forEach(keyArg => {
                const argProp = args[keyArg]
                if (argProp != null && argProp.hasOwnProperty("prop") && this._COMPONENT_PROPS_BIND.hasOwnProperty(argProp.prop)){
                    argsExp[keyArg] = this._COMPONENT_PROPS_BIND[argProp.prop].get();
                }
            })
        }
        return argsExp;
    }

}




//===============================================================================================================
// [01 - 10] basic ->  [01] text
//===============================================================================================================

/*-------------------------------------
 01-01) Component Messages
-------------------------------------*/
class ComponentMessagesBase extends ComponentBase{

    _MESSAGE_TYPE_SUCCESS = "success";
    _MESSAGE_TYPE_WARNING = "warning";
    _MESSAGE_TYPE_ERROR =   "error";

    /* ---------------------------------------------
      PROPERTYs Pattern
      --------------------------------------------- */
    _COMPONENT_PATTERN = {
        prop_size: {
            prop: "prop_size",
            default: tools_css.standardSizes.m.name
        },
        prop_type : {
            prop: "prop_type" ,
            default: "success"
        } ,
        prop_colorIcon: {
            prop: "prop_colorIcon",
            default: null
        },
        prop_colorBorder: {
            prop: "prop_colorBorder",
            default: null
        },
        prop_msgBackgroundColor: {
            prop: "prop_msgBackgroundColor" ,
            default: null
        },
        prop_msgColor: {
            prop: "prop_msgColor" ,
            default: null
        } ,
        prop_message: {
            prop: "prop_message" ,
            default: null ,
            hasMultiTemplate: false
        } ,
    }



    /* ---------------------------------------------
      PROPERTYs Props
      --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_component: [],
        part_structure: [],
        part_message: [
            this._COMPONENT_PATTERN.prop_type ,
            this._COMPONENT_PATTERN.prop_msgBackgroundColor ,
            this._COMPONENT_PATTERN.prop_msgColor ,
            this._COMPONENT_PATTERN.prop_message ,
            this._COMPONENT_PATTERN.prop_size ,
            this._COMPONENT_PATTERN.prop_colorBorder ,

            super.getProp_directionRtl() ,
        ] ,
        part_icon: [
            this._COMPONENT_PATTERN.prop_message ,
            this._COMPONENT_PATTERN.prop_size ,
            this._COMPONENT_PATTERN.prop_colorIcon ,
            this._COMPONENT_PATTERN.prop_type ,

            super.getProp_directionRtl() ,
        ]
    }

    /* ---------------------------------------------
    PROPERTYs Pattern
     --------------------------------------------- */
    _COMPONENT_METHODS= {
        fn_onCloseMessage: {
            description: "on close message selected" ,
            args: {}
        },
    };

    /* ---------------------------------------------
        PROPERTYs Pattern
     --------------------------------------------- */
    _COMPONENT_TEMPLATES= {
        body: {
            description: "for list messages" ,
            refrence: this._COMPONENT_PATTERN.prop_message
        },
    };



    /* ---------------------------------------------
         PROPERTYs Schema
     --------------------------------------------- */
    _COMPONENT_SCHEMA = {
        part_component: {
            part_structure: {
                part_message: {} ,
                part_icon: {}
            }
        }
    }

}
window.ComponentMessages = class ComponentMessages extends ComponentMessagesBase{

    _ELEMENT_MESSGEE = false;

    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor() {
        let elId = null;
        let config = null;
        if (arguments.length === 1) {
            config = arguments[0];
        } else if (arguments.length === 2) {
            elId = arguments[0];
            config = arguments[1];
        }

        super(
            "component-message" ,
            elId
        );
        super.renderComponent(config);
    }


    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    templateFn(){
        return this.templateBasic_render();
    }

    template_render_structure() {
        const partName = "part_structure";

        return this.templateBasic_render_structure(
            ReactiveElement.section({
                children: [
                    this.#template_render_messages() ,
                ]
            })
        );
    }

    #template_render_messages() {
        const partName = "part_message";
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_message    =   data?.prop_message   ??  null;
            const prop_type       =   data?.prop_type      ??  null;
            const prop_size       =   data?.prop_size      ??  null;

            const elfontSize = tools_css.getFontSize(this.get("prop_size"));

            let msgBackgroundColor = {};
            msgBackgroundColor[this._MESSAGE_TYPE_SUCCESS] = tools_const?.styles?.message?.success?.backgroundColor ?? "";
            msgBackgroundColor[this._MESSAGE_TYPE_ERROR] = tools_const?.styles?.message?.error?.backgroundColor ?? "";
            msgBackgroundColor[this._MESSAGE_TYPE_WARNING] = tools_const?.styles?.message?.warning?.backgroundColor ?? "";
            msgBackgroundColor["default"] = data?.prop_msgBackgroundColor ?? "";

            let msgColor = {};
            msgColor[this._MESSAGE_TYPE_SUCCESS] = tools_const?.styles?.message?.success?.color ?? "";
            msgColor[this._MESSAGE_TYPE_ERROR] = tools_const?.styles?.message?.error?.color ?? "";
            msgColor[this._MESSAGE_TYPE_WARNING] = tools_const?.styles?.message?.warning?.color ?? "";
            msgColor["default"] = data?.prop_msgColor ?? "";

            let msgBorderColor = {};
            msgBorderColor[this._MESSAGE_TYPE_SUCCESS] = tools_const?.styles?.message?.success?.border ?? "";
            msgBorderColor[this._MESSAGE_TYPE_ERROR] = tools_const?.styles?.message?.error?.border ?? "";
            msgBorderColor[this._MESSAGE_TYPE_WARNING] = tools_const?.styles?.message?.warning?.border ?? "";
            msgBorderColor["default"] = data?.prop_colorBorder ?? "";



            return ReactiveElement.section(
                {
                    attrs: {
                        "id":  `component-messages-${this._COMPONENT_RANDOM_ID}`,
                    },
                    children: [
                        ReactiveElement.section(
                            {
                                attrs: {
                                    "id":     `component-messages-item-${this._COMPONENT_RANDOM_ID}`,
                                    "role" :  "alert"
                                },
                                styles: {} ,
                                className: [] ,
                                children: [
                                    ReactiveElement.div(
                                        {
                                            attrs: {
                                                "id":  `component-messages-item-${this._COMPONENT_RANDOM_ID}-body`,
                                            },
                                            styles: {
                                                backgroundColor:  prop_type.mapList(msgBackgroundColor) ,
                                                borderColor:      prop_type.mapList(msgBorderColor) ,
                                                color:            prop_type.mapList(msgColor) ,
                                                fontSize :        elfontSize ,
                                                borderWidth:      "2px" ,
                                                borderStyle:      "solid"
                                            } ,
                                            className: [
                                                "mb-2" , "mt-2" , "rounded" , "shadow-sm"
                                            ] ,
                                            children: [
                                                ReactiveElement.div(
                                                    {
                                                        attrs: {
                                                            "id":  `component-messages-item-${this._COMPONENT_RANDOM_ID}-body-message`,
                                                        },
                                                        //
                                                        styles: {

                                                        } ,
                                                        className: [
                                                            "alert" ,
                                                        ] ,
                                                        children: [
                                                            ReactiveElement.b(
                                                                {
                                                                    text: prop_message,
                                                                }
                                                            ),
                                                            this.#componentFn_render_icon()
                                                        ]
                                                    })
                                            ]
                                        })
                                ]
                            })
                    ]
                });
        }


        return ReactiveElement.section({
            attr: {
                "data-part-name":  partName
            }
        });
    }

    #componentFn_render_icon () {
        const partName = "part_icon";
        const data = this.getPartProps(partName)

        if (data != null){
            const prop_type    =   data?.prop_type     ??  null;
            const directionRtl =   data?.directionRtl  ??  null;
            const prop_size    =   data?.prop_size     ??  null;

            let prop_colorIcon = {};
            prop_colorIcon[this._MESSAGE_TYPE_SUCCESS] = tools_const?.styles?.message?.success?.icon ?? "";
            prop_colorIcon[this._MESSAGE_TYPE_ERROR] = tools_const?.styles?.message?.error?.icon ?? "";
            prop_colorIcon[this._MESSAGE_TYPE_WARNING] = tools_const?.styles?.message?.warning?.icon ?? "";
            prop_colorIcon["default"] = data?.prop_msgColor ?? "";

            const elheight = tools_css.getHeightSize(prop_size);

            let styles = {
                "top" :               elheight ,
                "inset-inline-end" :  directionRtl.mapBoolean( "20px" , ""),
            }

            return new ComponentIcon(
                {
                    classList: "position-absolute"  ,
                    styles: styles,

                    prop_iconClass : ["mx-2" ] ,
                    prop_iconStyles : {
                        "cursor" : "pointer"
                    } ,
                    prop_icon: tools_icons.icon_close({size: this.get("prop_size") , colors:{primary: prop_type.mapList(prop_colorIcon)?.get?.()} }) ,

                    fn_callback: function (event , args)  {
                        this._COMPONENT_CONTENT.remove()
                        this.executMethod("fn_onCloseMessage" , event , [])
                    }.bind(this) ,
                }
            ).getSchema();

        }

        return ReactiveElement.section({
            attr: {
                "data-part-name":  partName
            }
        });
    }

}






//===============================================================================================================
// [10 - 19] button / inputs / tools -> [010] Button and Inputs
//===============================================================================================================

/*-------------------------------------
 03-01) Component Button
-------------------------------------*/
class ComponentButtonBase extends ComponentBase{

    _BUTTON_TYPE_SUBMIT = "submit";
    _BUTTON_TYPE_CANCEL = "cancel";
    _BUTTON_TYPE_BACK = "back";

    /* ---------------------------------------------
       PROPERTYs Pattern
    --------------------------------------------- */
    _COMPONENT_PATTERN = {
        prop_type: {
            prop: "prop_type",
            default: this._BUTTON_TYPE_SUBMIT
        },
        prop_btnType: {
            prop: "prop_btnType",
            default: null
        },
        prop_title: {
            prop: "prop_title",
            default: "BTN"
        },
        prop_btnClass: {
            prop: "prop_btnClass",
            default: ["w-100"]
        },
        prop_size: {
            prop: "prop_size",
            default: tools_css.standardSizes.m.name
        },
        prop_btnStyles: {
            prop: "prop_btnStyles",
            default: {}
        },
        prop_btnHoverStyles: {
            prop: "prop_btnHoverStyles",
            default: {}
        },
        prop_btnBackgroundColor: {
            prop: "prop_btnBackgroundColor",
            default: null
        },
        prop_btnBackgroundColor_hover: {
            prop: "prop_btnBackgroundColor_hover",
            default: null
        },
        prop_btnColor: {
            prop: "prop_btnColor",
            default: null
        }
    };

    /* ---------------------------------------------
      PROPERTYs Props
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_component: [],

        part_structure: [],

        part_button: [
            this._COMPONENT_PATTERN.prop_type,
            this._COMPONENT_PATTERN.prop_btnType,
            this._COMPONENT_PATTERN.prop_title,
            this._COMPONENT_PATTERN.prop_btnClass,
            this._COMPONENT_PATTERN.prop_btnStyles,
            this._COMPONENT_PATTERN.prop_btnHoverStyles,
            this._COMPONENT_PATTERN.prop_btnBackgroundColor,
            this._COMPONENT_PATTERN.prop_btnBackgroundColor_hover,
            this._COMPONENT_PATTERN.prop_btnColor,
            this._COMPONENT_PATTERN.prop_size,
            this._COMPONENT_PATTERN.fn_callback
        ]
    };

    /* ---------------------------------------------
        PROPERTYs methods
    --------------------------------------------- */
    _COMPONENT_METHODS= {
        fn_callback: {
            description: "on click btn" ,
            args: {}
        },
    };

    /* ---------------------------------------------
        PROPERTYs templates
     --------------------------------------------- */
    _COMPONENT_TEMPLATES= {
        body: {
            description: "for content button" ,
            refrence: this._COMPONENT_PATTERN.prop_title
        },
    };

    /* ---------------------------------------------
       PROPERTYs Schema
     --------------------------------------------- */
    _COMPONENT_SCHEMA = {
        part_component: {
            part_structure: {
                part_button: {} ,
            }
        },
    }

}
window.ComponentButton = class ComponentButton extends ComponentButtonBase{

    /* ---------------------------------------------
        SETUP
    --------------------------------------------- */
    constructor() {
        let elId = null;
        let config = null;
        if (arguments.length === 1) {
            config = arguments[0];
        } else if (arguments.length === 2) {
            elId = arguments[0];
            config = arguments[1];
        }

        super(
            "component-button" ,
            elId
        );
        super.renderComponent(config);
    }


    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    templateFn(){
        return this.templateBasic_render();
    }

    template_render_structure() {
        const partName = "part_structure";
        return this.templateBasic_render_structure(
            ReactiveElement.section({
                children: [
                    this.#template_render_button() ,
                ]
            })
        );
    }

    #template_render_button() {
        const partName = "part_button";
        const data = this.getPartProps(partName)

        if (data != null){

            const prop_type             =   data?.prop_type           ?? null;
            const prop_btnType          =   data?.prop_btnType        ?? null;
            const prop_title            =   data?.prop_title          ?? null;

            const prop_btnClass         =   data?.prop_btnClass       ?? null;
            const prop_size             =   data?.prop_size           ?? null;
            const prop_btnStyles        =   data?.prop_btnStyles      ?? null;
            const prop_btnHoverStyles   =   data?.prop_btnHoverStyles ?? null;

            let btnBackgroundColor = {};
            btnBackgroundColor[this._BUTTON_TYPE_SUBMIT] = tools_const?.styles?.button?.submit?.backgroundColor ?? "";
            btnBackgroundColor[this._BUTTON_TYPE_CANCEL] = tools_const?.styles?.button?.cancel?.backgroundColor ?? "";
            btnBackgroundColor[this._BUTTON_TYPE_BACK] =   tools_const?.styles?.button?.back?.backgroundColor ?? "";
            btnBackgroundColor["default"] = data?.prop_btnBackgroundColor ?? "";

            let btnBackgroundColor_hover = {};
            btnBackgroundColor_hover[this._BUTTON_TYPE_SUBMIT] = tools_const?.styles?.button?.submit?.backgroundColorHover ?? "";
            btnBackgroundColor_hover[this._BUTTON_TYPE_CANCEL] = tools_const?.styles?.button?.cancel?.backgroundColorHover ?? "";
            btnBackgroundColor_hover[this._BUTTON_TYPE_BACK] =   tools_const?.styles?.button?.back?.backgroundColorHover ?? "";
            btnBackgroundColor_hover["default"] = data?.prop_btnBackgroundColor_hover ?? "";

            let btnColor = {};
            btnColor[this._BUTTON_TYPE_SUBMIT] = tools_const?.styles?.button?.submit?.color ?? "";
            btnColor[this._BUTTON_TYPE_CANCEL] = tools_const?.styles?.button?.cancel?.color ?? "";
            btnColor[this._BUTTON_TYPE_BACK] =   tools_const?.styles?.button?.back?.color ?? "";
            btnColor["default"] = data?.prop_btnColor ?? "";

            const btnHeight = tools_css.getHeightSize(prop_size);
            const btnfontSize = tools_css.getFontSize(prop_size);


            return ReactiveElement.section(
                {
                    attrs: {
                        "data-part-name":     partName,
                        "id":                `component-buttn-form-${this._COMPONENT_RANDOM_ID}`,
                        "type":               prop_btnType
                    },
                    styles: {} ,
                    className: [] ,
                    children: [
                        ReactiveElement.button(
                            {
                                attrs: {
                                    "id":     `component-button-${this._COMPONENT_RANDOM_ID}`,
                                },
                                className: [
                                    "shadow-sm" , "border-0" , "rounded",
                                    prop_btnClass
                                ] ,
                                text: prop_title,
                                styles: {
                                    backgroundColor:    prop_type.mapList(btnBackgroundColor) ,
                                    color:              prop_type.mapList(btnColor) ,
                                    height :            btnHeight ,
                                    lineHeight :        btnHeight ,
                                    fontSize :          btnfontSize ,
                                    prop_btnStyles
                                } ,
                                stylesHover: {
                                    transition:         "background-color 200ms ease" ,
                                    backgroundColor:    prop_type.mapList(btnBackgroundColor_hover) ,
                                    prop_btnHoverStyles
                                } ,
                                on: {
                                    click: (event) => {
                                        this.executMethod("fn_callback" , event )
                                    },
                                },
                            }
                        )
                    ]
                });

        /*    return `
<section data-part-name="${partName}">

   <style>
      #${this._COMPONENT_ID} #component-button-${this._COMPONENT_RANDOM_ID}{
          background-color: ${btnBackgroundColor};
          color:            ${btnColor};
          height:           ${btnHeight}px;
          line-height:      ${btnHeight}px;
          font-size:        ${btnfontSize}px;
          ${tools_public.renderListStyle(prop_btnStyles)}
     }
      #${this._COMPONENT_ID} #component-button-${this._COMPONENT_RANDOM_ID}:hover{
          transition: background-color 200ms ease;
          background-color: ${btnBackgroundColor_hover};
          ${tools_public.renderListStyle(prop_btnHoverStyles)}
     }
   </style>

   <button id="component-button-${this._COMPONENT_RANDOM_ID}"  
           ${prop_btnType !=null ? `type=${prop_btnType}` : ""}
           class="shadow-sm border-0 rounded ${tools_public.renderListClass(prop_btnClass)}  "
            onclick="${this.getFn('fn_onCLickBtn' , "event")}">
      ${prop_title}
   </button>

</section>
            `*/
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
    fn_onCLickBtn(event){
        event.stopPropagation()
        const data = this._COMPONENT_CONFIG;
        if (data.hasOwnProperty("fn_callback") && typeof data.fn_callback != null){
            data.fn_callback(event);
        }
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
            default: "" ,
            hasMultiTemplate: false ,
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
        }
    };

    /* ---------------------------------------------
        PROPERTYs Pattern
     --------------------------------------------- */
    _COMPONENT_METHODS= {
        fn_callback: {
            description: "on click icon" ,
            args: {
                icon: this._COMPONENT_PATTERN.prop_icon
            }
        },
        fn_onHoverIcon: {
            description: "on hover icon" ,
            args: {}
        },
        fn_onBlurIcon: {
            description: "on blur icon" ,
            args: {}
        },
    };

    /* ---------------------------------------------
        PROPERTYs Pattern
     --------------------------------------------- */
    _COMPONENT_TEMPLATES= {
        body: {
            description: "for show icon" ,
            refrence: this._COMPONENT_PATTERN.prop_icon
        },
    };

    /* ---------------------------------------------
           PROPERTYs Props
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_component: [],
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
        part_component: {
            part_structure: {
                part_icon: {} ,
            }
        }
    }

}
window.ComponentIcon  = class ComponentIcon extends ComponentIconBase{

    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor() {
        let elId = null;
        let config = null;
        if (arguments.length === 1) {
            config = arguments[0];
        } else if (arguments.length === 2) {
            elId = arguments[0];
            config = arguments[1];
        }

        super(
            "component-icon" ,
            elId
        );
        super.renderComponent(config);
    }


    /* ---------------------------------------------
       TEMPLATEs
    --------------------------------------------- */
    templateFn(){
        return this.templateBasic_render();
    }

    template_render_structure() {
        const partName = "part_structure";
        return this.templateBasic_render_structure(
            ReactiveElement.section({
                children: [
                    this.#templateFn_render_icon() ,
                ]
            })
        );
    }

    #templateFn_render_icon(){
        const partName="part_icon";
        const data = this.getPartProps(partName);

        if (data != null){
            const prop_title         =  data.hasOwnProperty("prop_title")         ?  data.prop_title        : "" ;

            const prop_icon         =  data.hasOwnProperty("prop_icon")           ?  data.prop_icon         :  "";
            const prop_isItalik     =  data.hasOwnProperty("prop_isItalik")       ?  data.prop_isItalik     :  false;

            const prop_iconClass    =   data.hasOwnProperty("prop_iconClass")     ?  data.prop_iconClass    :  [];
            const prop_iconStyles   =   data.hasOwnProperty("prop_iconStyles")    ?  data.prop_iconStyles   :  {};

            return ReactiveElement.i(
                {
                    attrs: {
                        "data-part-name":     partName,
                        "title":              prop_title,
                        "id":                `component-icon-icon-${this._COMPONENT_RANDOM_ID}`,
                   },
                    text: prop_icon,
                    styles: {
                        prop_iconStyles
                    } ,
                    className: [
                        prop_iconClass
                    ] ,
                    on: {
                        click: (event) => {
                            this.executMethod("fn_callback" , event )
                        },
                        mouseenter: (event) => {
                            this.executMethod("fn_onHoverIcon" , event , [])
                        },
                        mouseleave: (event) => {
                            this.executMethod("fn_onBlurIcon" , event , [])
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


}




