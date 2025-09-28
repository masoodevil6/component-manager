/*
Name: Tools
Developer: Mehdi Maarefian
Version: 0.1
*/



if (typeof component_props === 'undefined') {
    component_props = {
        directionRtl: false,


        // -----------------------
        primaryColor1: "#f47920",
        primaryColor2: "#faa46c",

        secondaryColor1: "#38e1c3",
        secondaryColor2: "#78f1db",

        errorColor1: "#dc3545",
        errorColor2: "#e8616f",

        warningColor1: "#f47920",
        warningColor2: "#fd9248",

        successColor1: "#9eeaf9",
        successColor2: "#c7f4ff",

        shadowColor1: "rgba(98,98,98,0.2)",
        shadowColor2: "rgba(98,98,98,0.07)",

        darkColor1: "rgb(30,30,30)",
        darkColor2: "rgb(157,157,157)",

        shanColor1: "#ffffff",
        shanColor2: "#f3f3f3",
        // -----------------------

    }
}

if (typeof tools_const === 'undefined') {
    tools_const = {
        botResPath: "bot/run/435/res_v2" ,

        contentTypes : {
            html: "text/html" , json: "application/json" ,
        },
    };
}





tools_init = {
    renderComponentProps : function(config){

        if (config != null && typeof config == "object"){
            Object.keys(config).forEach( (keyConfig) => {
                Object.keys(component_props).forEach( (keyProp) => {
                    if (keyConfig == keyProp){
                        component_props[keyConfig] = config[keyConfig];
                        return;
                    }
                })
            })
        }
        tools_init.renderToolsConst()
    } ,

    renderToolsConst : function(){


        tools_const.styles =  {
            message: {
                success: {
                    backgroundColor: component_props.successColor1 ,
                    color:           component_props.darkColor1 ,
                } ,
                error: {
                    backgroundColor: component_props.errorColor1 ,
                    color:           component_props.shanColor1 ,
                } ,
                warning: {
                    backgroundColor: component_props.warningColor1 ,
                    color:           component_props.darkColor1 ,
                }
            },

            loading: {
                backgroundColor_loading:  component_props.primaryColor1 ,
                backgroundColor_shadow:   component_props.shadowColor1
            },

            state404: {
                backgroundColor_shadow:  component_props.shadowColor1 ,
            },

            title: {
                backgroundColor: component_props.shanColor1
            },

            collapse: {
                backgroundColor: component_props.shanColor1
            },

            button: {
                default:{
                    backgroundColor:       component_props.primaryColor1,
                    backgroundColorHover:  component_props.primaryColor2,
                    color:                 component_props.shanColor1,
                } ,
                error:{
                    backgroundColor:       component_props.errorColor1,
                    backgroundColorHover:  component_props.errorColor2,
                    color:                 component_props.shanColor1,
                }
            },

            table: {
                backgroundColor: component_props.shanColor1 ,
                backgroundColor_rowSelected: component_props.primaryColor1 ,
                backgroundColor_columnSelected: component_props.secondaryColor1 ,
                backgroundColor_textSelected: component_props.shanColor1 ,
            },

            otp: {

            },

            selectOption: {
                backgroundColor_itemNotSelected: component_props.shanColor2 ,
                backgroundColor_itemHover: component_props.primaryColor2 ,
                backgroundColor_itemSelected: component_props.primaryColor1 ,
                color_icon: component_props.darkColor1
            },

            elementLink: {
                normal:{
                    backgroundColor: component_props.shanColor1 ,
                },
                hover:{
                    backgroundColor: component_props.shanColor2 ,
                }
            } ,

            elementBorder: {
                btnMore_backgroundColor : component_props.primaryColor1 ,
                btnMore_color : component_props.shanColor1 ,
            } ,

            label: {
                backgroundColor : component_props.shadowColor2 ,
                color : component_props.darkColor1 ,
            } ,

            inputDate: {
                backgroundColor_main : component_props.primaryColor2 ,

                backgroundColor_btn  : component_props.secondaryColor1 ,
                backgroundColor_btnHover  : component_props.secondaryColor2 ,
                color_btn  : component_props.darkColor1 ,

                backgroundColor_rowSelected  : component_props.secondaryColor1 ,
                backgroundColor_colSelected : component_props.secondaryColor2 ,
                color_columnSelected  : component_props.darkColor1 ,
            } ,

            inputFile: {
                boderColor : component_props.primaryColor1 ,
                boderColorHover : component_props.secondaryColor1 ,
                textColor : component_props.primaryColor1 ,
            } ,

            inputCheckBox: {
                boderColor :                    component_props.darkColor2 ,
                backgroundColor_unSelected :    component_props.shanColor1 ,
                backgroundColor_selected :      component_props.primaryColor1 ,
                backgroundColor_disable :       component_props.darkColor2 ,
            } ,

            inputColor: {
                boderColor :                    component_props.shanColor1 ,
                backgroundColor_body :          component_props.darkColor1 ,
                color_body :                    component_props.shanColor1 ,
            } ,

            window: {
                backgroundColor_blur : component_props.shadowColor1 ,
                backgroundColor_window : component_props.shanColor1 ,
            } ,

            tooltipDescription: {
                backgroundColor_description : component_props.secondaryColor1 ,
                color_description : component_props.darkColor1 ,
            } ,


            breadcrumb: {
                backgroundColor_unactive : component_props.primaryColor1 ,
                color_unactive : component_props.shanColor1 ,
                backgroundColor_active : component_props.secondaryColor1 ,
                color_active : component_props.darkColor1 ,
            } ,


            tree: {
                backgroundColor_unSelected : component_props.shadowColor1 ,
                backgroundColor_selected : component_props.secondaryColor1 ,
            } ,

            mosuseScroller: {
                backgroundColor_dark : component_props.darkColor2 ,
                backgroundColor_light: component_props.shanColor2 ,
                backgroundColor_tools: component_props.darkColor1 ,
            } ,


            backShadow: {
                backgroundColor: component_props.shadowColor1
            },
            buttonError: {
                backgroundColor: component_props.errorColor1 ,
                color: component_props.shanColor1,
            } ,
        };
    }
}




tools_component = {


    setup: function (container , tree , withPrefix=null){

        tree.forEach(node => {

            const component = node.hasOwnProperty("component") ? (withPrefix || '') +  node.component : "div";
            const props = node.hasOwnProperty("props") ? node.props : {};
            const children = node.hasOwnProperty("children") ? node.children : null;

            if (component.startsWith('Component')){
                const compClass = window[component];
                if (compClass) {

                    const customEl = document.createElement(listComponent[component]);
                    customEl.id = props.id;
                    container.appendChild(customEl);

                    if (children && Array.isArray(children)) {
                        tools_component.setup(customEl , children , "component-");
                    }

                    const compInstance = new compClass(props.id, props);
                    compInstance.render();
                }
            }
            else {
                // المان ساده HTML
                const el = document.createElement(component || 'div');
                if (props.id) el.id = props.id;
                if (props.text) el.textContent = props.text;
                if (props.classList) el.classList = props.classList;

                if (props.attrs) {
                    for (const [key, value] of Object.entries(props.attrs)) {
                        el.setAttribute(key, value);
                    }
                }

                if (props.events) {
                    for (const [event, handler] of Object.entries(props.events)) {
                        el.addEventListener(event, handler);
                    }
                }
                container.appendChild(el);

                if (children && Array.isArray(children)) {
                    tools_component.setup(el , children);
                }
            }

        });

    } ,

    control: function  (componentName , props , prop_show=true){

        if (componentName.startsWith('Component')) {
            const compClass = window[componentName];

            if (compClass) {
                if (props != null && props.hasOwnProperty("elId")){
                    props.prop_show =  props.hasOwnProperty(prop_show) ? props.prop_show : prop_show;
                    const compInstance = new compClass(props.elId, props);
                }
            }
        }

    } ,


    widgetRender: function(element , fetchData=[] , insert=true){
        const closestComponent = element.closest("component-widget");

        if (closestComponent != null){
            const componentRandomId = closestComponent.getAttribute("data-component-id");
            if (componentRandomId != null && components.hasOwnProperty(componentRandomId) ){

                const prop_fetch = components[componentRandomId].get("prop_fetch" , {});
                if (!prop_fetch.hasOwnProperty("data") || Array.isArray(prop_fetch.data)){
                    prop_fetch.data = {};
                }
                if (!prop_fetch.data.hasOwnProperty("data")){
                    prop_fetch.data.data = {};
                }
                console.log(prop_fetch)


                if (insert){

                    for (let x = 0; x < fetchData.length ; x++) {
                        const itemApi = fetchData[x];

                        let exist = false;
                        if (itemApi.hasOwnProperty("name") && itemApi.hasOwnProperty("value") ){
                            for (let i = 0; i < prop_fetch.data.data.length ; i++) {
                                const item = prop_fetch.data.data[i];
                                if (item.hasOwnProperty("name") && item.name == itemApi.name){
                                    prop_fetch.data.data[i] = itemApi;
                                    exist = true;
                                    break;
                                }
                            }
                        }

                        if (!exist){
                            prop_fetch.data.data.push(itemApi);
                        }
                    }
                }

                if ( typeof components[componentRandomId].call_fetchWidget !== "undefined"){
                    components[componentRandomId].call_fetchWidget();
                }
            }

        }

    } ,


    getComponentHtml: function (containerId , ComponentName , ComponentId , ComponentProps){
        const container = document.getElementById(containerId);
        const elForm = document.createElement(tools_converter.toKebabCase(ComponentName));
        elForm.id = ComponentId
        container.appendChild(elForm);

        console.log(containerId , ComponentName , ComponentId , ComponentProps)

        new window[ComponentName](
            ComponentId ,
            ComponentProps
        );

        return elForm.outerHTML;
    }

};



tools_submit = {

    fetcth: async function(url='' , args={}){
        let data                  = args.hasOwnProperty("data") ? args.data: {} ;
        let callback              = args.hasOwnProperty("callback") ? args.callback: null ;
        let componentMessagesData = args.hasOwnProperty("componentMessagesData") ? args.componentMessagesData: null ;
        let componentLoadingData  = args.hasOwnProperty("componentLoadingData") ? args.componentLoadingData: null ;
        let component404Data      = args.hasOwnProperty("component404Data") ? args.component404Data: null ;
        if (component404Data != null){
            component404Data["prop_structureClass"] = ["position-absolute"];
            component404Data["prop_structureStyles"] = {
                "width" : "100%" ,
                "height" : "100%" ,
                "left" : "0" ,
                "top" : "0" ,
            };
        }



        const formData = new FormData();

        if (data.hasOwnProperty("type") && data.type != null){
            formData.append("type", data.type);
        }

        let body = data.hasOwnProperty("data") ? data.data : [];
        if ( data.hasOwnProperty("formData") ){
            body.push(...tools_converter.serializeArray(data.formData) )
        }

        if (body != null && Array.isArray(body)){
            for (const itemData of body) {
                if (itemData.hasOwnProperty("name") && itemData.hasOwnProperty("value") && itemData.value != null){
                    const type = itemData.hasOwnProperty("type") ? itemData.type : "text";
                    const name = itemData.name;
                    switch (type){
                        case "file":
                            const file = field.files[0];
                            const files = itemData.hasOwnProperty("files") ? itemData.files : [];
                            for (let i = 0; i < files.length ; i++) {
                                const itemFile = files[i];
                                formData.append(name, itemFile);
                            }
                            formData.append(name, file);
                            break;
                        default:
                            formData.append(name, itemData.hasOwnProperty("value") ? itemData.value : null);
                            break;
                    }
                }
            }
        }


        if (componentLoadingData != null) {
            tools_component.control("ComponentLoading" , componentLoadingData , true);
        }


        return await fetch(
            url ,
            {
                body:  formData ,
                method: data.hasOwnProperty("method") ? data.method : "post" ,
                headers : {
                    //   'Content-Type': contentType
                }
            })
            .then(
                response => {
                    switch (response.status){

                        case 404:

                            if (componentLoadingData != null) {
                                tools_component.control("Component404" , component404Data);
                            }
                            if (componentLoadingData != null) {
                                tools_component.control("ComponentLoading" , componentLoadingData , false);
                            }

                            break;
                        case 200:

                            const contentType = data.hasOwnProperty("contentType") ? data.contentType : tools_const.contentTypes.json
                            switch (contentType){
                                case tools_const.contentTypes.json:
                                    return response.json();
                                case tools_const.contentTypes.html:
                                    return response.text();
                            }

                        case 413:

                            break;
                        case 504:

                            break;
                    }
                }
            )
            .then(
                response => {

                    /// hide loading
                    if (componentLoadingData != null) {
                        tools_component.control("ComponentLoading" , componentLoadingData , false);
                    }

                    /// set messages
                    if (componentMessagesData != null) {
                        componentMessagesData.prop_messages = response.hasOwnProperty("messages") ? response.messages : [];


                        let messageType = "success";
                        if (response.hasOwnProperty("status")){
                            messageType = response.status ? "success" : "error";
                        }
                        componentMessagesData.prop_type = messageType;


                        tools_component.control("ComponentMessages" , componentMessagesData);
                    }

                    /// result callback
                    const resultExp = response.hasOwnProperty("resultExp") ? response.resultExp : response;

                    if (callback != null){
                        callback(resultExp , data);
                    }

                    return {resultExp, data};
                   // return resultExp ,data;
                }
            ).catch(
                e=>{
                    if (componentLoadingData != null) {
                        tools_component.control("Component404" , component404Data);
                    }
                    if (componentLoadingData != null) {
                        tools_component.control("ComponentLoading" , componentLoadingData , false);
                    }

                    /// log error
                    console.error("[FETCH]" , url , data , e);
                }
            )
    } ,

}



tools_vue = {

    renderDynamicComponent: function(view, createViewComponent = true) {
        let {template, script} = this.extractComponentParts(view);
        script = this.getComponentOptions(script);
        if (createViewComponent){
            return this.buildDynamicComponent(template, script);
        }
        return {template, script};
    },

    buildDynamicComponent: function (template, script) {
        const compiled = Vue.compile(template);

        // تولید یک نام یکتا برای کامپوننت
        const componentName = "dynamic-component-" + Math.random().toString(36).substr(2, 9);

        // تعریف کامپوننت با نام خاص
        Vue.component(componentName, {
            ...script,
            render: compiled.render,
            staticRenderFns: compiled.staticRenderFns
        });

        return componentName; // فقط نام کامپوننت برگشت داده میشه
    },

    extractComponentParts: function (htmlString) {
        let templateMatch;
        let scriptMatch;
        if (htmlString != null) {
            templateMatch = htmlString.match(/<component>([\s\S]*?)<\/component>/i);
            scriptMatch = htmlString.match(/<script[^>]*>([\s\S]*?)<\/script>/i);

            if (!templateMatch || !scriptMatch) {
                console.warn("template یا script پیدا نشد", {templateMatch, scriptMatch});
            }

        }

        return {
            template: templateMatch ? templateMatch[1].trim() : '<div></div>',
            script: scriptMatch ? scriptMatch[1].trim() : 'module.exports = {};'
        };

    },

    getComponentOptions: function (scriptCode) {
        let componentOptions = {};
        try {
            if (!scriptCode.includes('export default')) {
                console.warn("کد export default ندارد:", scriptCode);
            }

            const exports = {};
            const module = {exports};
            const normalizedCode = scriptCode.replace(/export\s+default/, 'module.exports =');
            const wrappedCode = `(function(exports, module){ ${normalizedCode} })(exports, module);`;

            eval(wrappedCode);
            componentOptions = module.exports;
        } catch (e) {
            console.error("خطا در اجرای script:", e);
        }
        return componentOptions;
    },

};



tools_converter = {

    serializeArray: function (formElement){
        const result = [];
        const elements = formElement.elements;

        for (let i = 0; i < elements.length; i++) {
            const field = elements[i];

            if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].includes(field.type)) {
                continue;
            }

            if (field.type === 'select-multiple') {
                for (let j = 0; j < field.options.length; j++) {
                    const option = field.options[j];
                    if (option.selected) {
                        result.push({ name: field.name, value: option.value });
                    }
                }
            } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                result.push({ name: field.name, value: field.value , type: field.type });
            }
        }

        return result;
    } ,

    convertPriceToString: function(value) {
        if (typeof value !== 'string' && typeof value !== 'number') return null;

        if (typeof value === 'number'){
            value = value.toString()
        }

        let val =value
            .replace(/,/g, '')        // حذف کاماها
            .replace(/[^\d.]/g, '')   // فقط عدد و نقطه مجازن
            .replace(/(\..*)\./g, '$1'); // فقط اولین نقطه باقی بمونه

        let [intPart, decimalPart] = val.split('.');
        intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return  decimalPart !== undefined
            ? `${intPart}.${decimalPart}`
            : intPart;

        return  value;
    },
    convertStringToPrice: function(input) {
        if (typeof input !== 'string' && typeof input !== 'number') return null;

        const cleaned = String(input).replace(/,/g, '');

        if (!/^\d+(\.\d+)?$/.test(cleaned)) return null;

        return Number(cleaned);
    },



    customSerialize: function (obj){
        return Object.entries(obj)
            .map(([key, value]) => `${key}=${value}`)
            .join(";");
    },


    customUnSerialize: function (input ){
        const str = String(input);
        const obj = {};
        str.split(";").forEach(pair => {
            if (pair.includes("=")) {
                const [key, value] = pair.split("=");
                if (key) obj[key] = value || "";
            }
        });

        return obj;
    },



    numPersianToEnglish: function (str, isInt=false){
        const val = str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

        if (isInt){
            return parseInt(val);
        }
        return val;
    } ,


    numEnglishToPersian: function (str, isInt=false){
        if (typeof str !== 'string') str = String(str);

        const persianNums = '۰۱۲۳۴۵۶۷۸۹';
        const arabicNums  = '٠١٢٣٤٥٦٧٨٩';

        const val = str.replace(/[۰-۹٠-٩]/g, d => {
            const index = persianNums.indexOf(d);
            if (index > -1) return index;
            return arabicNums.indexOf(d);
        });

        return isInt ? parseFloat(val) : val;
    } ,


    toKebabCase: function (str){
        return str
            .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // تبدیل camelCase به kebab-case
            .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // برای Capital پشت سر هم
            .toLowerCase();
    } ,


    convertStrToNum: function(str){

        const pattern = /^-?\d*(\.\d*)?$/;

        if (!pattern.test(str)) {
            str = str.replace(/[^0-9.-]/g, "");

            str = str.replace(/(?!^)-/g, "");

            const parts = str.split(".");
            if (parts.length > 2) {
                str = parts[0] + "." + parts.slice(1).join("");
            }
        }

        return str;
    }

};



tools_validate = {

    isEmpty: function (value){
        return (
            value == null || // null یا undefined
            (Array.isArray(value) && value.length === 0) || // آرایه خالی
            (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) // آبجکت خالی
        );
    }

}



tools_public = {

    renderListClass: function (data){
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
    } ,

    renderListStyle: function (data){
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
    } ,

    getScriptJson(scriptJsonId){
        const dataScript = document.getElementById(scriptJsonId);
        if (dataScript) {
            try {
                return JSON.parse(dataScript.textContent);
            } catch (e) {
                console.error("json.encode for" ,jsonId ,  e)
            }
        }

        return  null;
    } ,

    parseJson(jsonStr){
        try {
            return JSON.parse(jsonStr);
        }
        catch (e){
            console.error("json pareser error" , jsonStr  , e)
        }
        return  null;
    } ,

    getCopyText(txt){
        navigator.clipboard.writeText(txt).then(() => {
            console.log('متن کپی شد: ' , txt);
        }).catch(err => {
            console.error('خطا در کپی کردن متن: ', err);
        });
    } ,

    replaceInTextWithPatternParams(template, params) {
        return template.replace(/{{(.*?)}}/g, (match, key) => {
            return params[key.trim()] ?? match;
        });
    }

}



tools_stepper = {

    createStepper(elementId , manifest , botUrl){
        steps = [];
        workFlow = {};
        if (manifest != null){
            if (manifest.hasOwnProperty("steps")){
                steps = tools_stepper.readyListSteps(manifest.steps , botUrl)
            }
            if (manifest.hasOwnProperty("workflow")){
                workFlow = tools_stepper.readyListStepperWorkflow(manifest.workflow , steps);
            }
        }

        return new NavStepper(elementId , workFlow);
    } ,


    readyListSteps(steps , botUrl) {
        let resultExp = [];
        Object.keys(steps).forEach(key => {
            const itemStep = steps[key];

            if (itemStep.hasOwnProperty("name")){
                const name = itemStep.name;
                const type = itemStep.hasOwnProperty("type") ? itemStep.type : null;
                const params = itemStep.hasOwnProperty("params") ? itemStep.params : null;
                const tagId = itemStep.hasOwnProperty("tagId") ? itemStep.tagId : null;
                const reload = itemStep.hasOwnProperty("reload") ? itemStep.reload : false;
                const componentProp = itemStep.hasOwnProperty("componentProp") ? itemStep.componentProp : {};

                resultExp.push(
                    new window.NavStep(
                        name , botUrl  , params , type , tagId , reload, componentProp
                    )
                )
            }
        })
        return resultExp;
    } ,

    readyListStepperWorkflow(node, steps) {
        if (node.step) {
            const found = steps.find(s => s.getName() === node.step);
            if (found) {
                node.step = found;
            }
        }
        if (Array.isArray(node.workflow)) {
            for (let child of node.workflow) {
                tools_stepper.readyListStepperWorkflow(child, steps);
            }
        }
        return node;
    }
}



tools_svg = {

    addDefsForMarker(svg){
        let svgDefs = svg.getElementsByTagName("defs");
        if (svgDefs == null){
            svg.innerText = svg.innerText + "<defs></defs>";
        }
        return svg.getElementsByTagName("defs")[0];
    } ,

    addMarker(svg , markerName, bgColor){
        let svgDefs = tools_svg.addDefsForMarker(svg);
        let markerHtml = null;
        let markerId = `${markerName}_${Math.random()*1000}`;
        switch (markerName){
            case "arrow":
                markerHtml = `
        <marker id="${markerId}" markerWidth="10" markerHeight="10" refX="3" refY="3" orient="auto">
          <path d="M0,0 L3,3 L0,6 L9,3 z" fill="${bgColor}" />
        </marker>
        `;
                break;
            case "circle":
                markerHtml = `
        <marker id="${markerId}" markerWidth="20" markerHeight="20" refX="10" refY="10" orient="auto" markerUnits="strokeWidth" >
          <circle cx="10" cy="10" r="3" fill="white" stroke="${bgColor}" stroke-width="1"  style="pointer-events:none; cursor:pointer;" />
        </marker>
        `;
                break;
        }

        if (markerHtml != null){
            svgDefs.innerHTML = svgDefs.innerHTML + markerHtml;
            return markerId;
        }

        return null;
    } ,








    getPointInLinWithPercent(pointA , pointB , isStart=true , percent=0.1){
        return {
            x: (isStart ? percent : (1-percent)) * (pointB.x - pointA.x) + pointA.x ,
            y: (isStart ? percent : (1-percent)) * (pointB.y - pointA.y) + pointA.y ,
        }
    } ,

    getPointInLinWithLength(pointA , pointB , isStart=true , length=10){
        const d = Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
        const p = length/d;
        return tools_svg.getPointInLinWithPercent(pointA , pointB , isStart , p);
    } ,









    connectDirectionPoint(svg , points , lineWidth=2 , animDuration=250 , bgColor="#9b9b9b"){
        const pointsProgressed = [];
        if (points != null && Array.isArray(points)){
            for (let i = 0; i < points.length ; i++) {
                const pointSelected = points[i];

                let isJoin = true;
                if (i == 0 || i == points.length -1){
                    isJoin = false;
                }

                if (isJoin){
                    const pointAB = tools_svg.getPointInLinWithLength(points[i-1] , points[i]  , false);
                    pointSelected.isJoin = true;
                    const pointBC = tools_svg.getPointInLinWithLength(points[i]  , points[i+1] , true);
                    pointsProgressed.push(...[pointAB , pointSelected , pointBC])
                }
                else {
                    pointsProgressed.push(pointSelected)
                }
            }
        }

        let animTimer = 0;
        for (let i = 0; i < pointsProgressed.length-1 ; i++) {
            const pointPrevious = pointsProgressed[i-1];
            const pointSelected = pointsProgressed[i];
            const pointNext = pointsProgressed[i+1];

            if (!pointNext.hasOwnProperty("isJoin") || !pointNext.isJoin){
                if (pointSelected.hasOwnProperty("isJoin") && pointSelected.isJoin){
                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    const d = `
             M ${pointPrevious.x},${pointPrevious.y}
             Q ${pointSelected.x},${pointSelected.y}
               ${pointNext.x},${pointNext.y}`;
                    path.setAttribute("d", d);
                    path.setAttribute("stroke", bgColor);
                    path.setAttribute("stroke-width", lineWidth);
                    path.setAttribute("fill", "none");
                    svg.appendChild(path);

                    const length = path.getTotalLength();
                    path.setAttribute("stroke-dasharray", length);
                    path.setAttribute("stroke-dashoffset", length);

                    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
                    animate.setAttribute("attributeName", "stroke-dashoffset");
                    animate.setAttribute("from", length);
                    animate.setAttribute("to", 0);
                    animate.setAttribute("dur", animDuration/2+"ms");
                    animate.setAttribute("fill", "freeze");
                    animate.setAttribute("begin", "indefinite"); // ❌
                   // animate.setAttribute("begin", animTimer+"ms");
                    requestAnimationFrame(() => {
                        path.getBoundingClientRect(); // force reflow
                        path.style.transition = `stroke-dashoffset ${animDuration}ms linear`;
                        path.style.strokeDashoffset = '0';
                    });
                    path.appendChild(animate);

                    animTimer +=animDuration/2
                }
                else {
                    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                    polyline.setAttribute("points", `${pointSelected.x},${pointSelected.y}  ${pointNext.x},${pointNext.y}`);
                    polyline.setAttribute("stroke", bgColor);
                    polyline.setAttribute("stroke-width", lineWidth);
                    polyline.setAttribute("fill", "none");

                    svg.appendChild(polyline);

                    const length = polyline.getTotalLength();
                    polyline.setAttribute("stroke-dasharray", length);
                    polyline.setAttribute("stroke-dashoffset", length);

                    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
                    animate.setAttribute("attributeName", "stroke-dashoffset");
                    animate.setAttribute("from", length);
                    animate.setAttribute("to", 0);
                    animate.setAttribute("dur", animDuration+"ms");
                    animate.setAttribute("fill", "freeze");
                    animate.setAttribute("begin", animTimer+"ms");
                    animate.setAttribute("begin", "indefinite"); // ❌
                    //polyline.appendChild(animate);

                    requestAnimationFrame(() => {
                        polyline.getBoundingClientRect(); // force reflow
                        polyline.style.transition = `stroke-dashoffset ${animDuration}ms linear`;
                        polyline.style.strokeDashoffset = '0';
                    });

                    animTimer +=animDuration;
                    if (pointSelected.hasOwnProperty("markerStart") && pointSelected.markerStart != null){
                        const markerId = tools_svg.addMarker(svg , pointSelected.markerStart , bgColor)
                        if (markerId != null ){
                            polyline.setAttribute("marker-start", `url(#${markerId})`);
                        }
                    }
                    if (pointNext.hasOwnProperty("markerEnd") && pointNext.markerEnd != null){

                        setTimeout(()=>{
                            const markerId = tools_svg.addMarker(svg , pointNext.markerEnd , bgColor)

                            if (markerId != null ){
                                polyline.setAttribute("marker-end", `url(#${markerId})`);
                            }
                        } , animTimer-animDuration*3)
                    }
                }
            }
        }
    } ,

    createHtmlOnPoint(svg , html , point , animDuration=100 ){
        const foreign = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreign.setAttribute("x", point.x);   // مختصات X
        foreign.setAttribute("y", point.y);   // مختصات Y
        foreign.setAttribute("width", point.width);
        foreign.setAttribute("height", point.height);
        foreign.style.position = "relative";
        foreign.style.zIndex = 2;

        foreign.insertAdjacentHTML('beforeend', html);
        svg.appendChild(foreign);

        const animY = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animY.setAttribute("attributeName", "y");
        animY.setAttribute("from", point.y - 60);
        animY.setAttribute("to", point.y);
        animY.setAttribute("dur", animDuration + "ms");
        animY.setAttribute("fill", "freeze");

        foreign.appendChild(animY);
    }

}





tools_validtor = {

    validtor_checkList(input , listRules , directionRtl) {
        let messages = [];
        let rulesHtml = "";
        let isInputCurrect = true;

        for (let i = 0; i < listRules.length; i++) {
            const itemRule = listRules[i];
            if (itemRule.hasOwnProperty("description") && itemRule.hasOwnProperty("params") && itemRule.hasOwnProperty("rule")) {
                let description = itemRule.description;
                const rule = itemRule.rule;
                const params = itemRule.params;

                let isTrue = false;
                switch (rule) {
                    case "_is_email" :
                        [isTrue , description] = tools_validtor.validtor_checkIsEmail(input, params , description)
                        break;
                    case "_not_empty" :
                        [isTrue , description] = tools_validtor.validtor_checkNotEmpty(input, params , description)
                        break;
                    case "_char_length" :
                        [isTrue , description] = tools_validtor.validtor_checkInputChar(input, params , description)
                        break;
                    case "_num_length" :
                        [isTrue , description] = tools_validtor.validtor_checkInputNum(input, params , description)
                        break;
                    case "_text_length" :
                        [isTrue , description] = tools_validtor.validtor_checkInputText(input, params , description)
                        break;
                    case "_text_forbidden" :
                        [isTrue , description] = tools_validtor.validtor_checkInputForbidden(input, params , description)
                        break;
                    case "_text_char_upper" :
                        [isTrue , description] = tools_validtor.validtor_checkExistChartUpper(input, params , description)
                        break;
                }

                if (!isTrue) {
                    messages.push(description)
                    isInputCurrect = false;
                }

                const icon = isTrue ? tools_icons.icon_is_true() : tools_icons.icon_is_false();
                const color = isTrue ? "text-success" : "text-danger";

                rulesHtml +=
                    `
                    <div style="display: flow-root"  class="item_country_code pt-1 border-bottom mx-1 line-height-30px font-12pt ${color}" >
                        <span class="icon-rule  ${directionRtl ? "float-end" : "float-start"}"   ms-1">${icon}</span>
                        <span class="ms-3 ${directionRtl ? "float-end" : "float-start"}"> - ${description}</span>
                    </div>
                    `;

            }
        }

        return [messages , rulesHtml , isInputCurrect]
    } ,

    validtor_checkIsEmail(input , params , description) {
        let isValid = true;

        if (!input) {
            isValid = false;
        } else {
            const value = input.trim();

            // regex ساده برای فرمت ایمیل
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            isValid = emailRegex.test(value);
        }

        return [isValid, tools_public.replaceInTextWithPatternParams(description, params)];
    } ,

    validtor_checkNotEmpty(input , params , description) {
        let isNotEmpty = true;
        if (!input) isNotEmpty = false;
        else{
            const value = input.trim(); // حذف فاصله‌های ابتدا/انتها
            isNotEmpty = value.length > 0;
        }
        return [isNotEmpty , tools_public.replaceInTextWithPatternParams(description , params) ];
    } ,

    validtor_checkInputChar(input , params , description) {
        let min = 4;
        if (params != null && params.hasOwnProperty("min")){
            min = params.min
        }
        const nonDigitChars = input.split('').filter(char => !/\d/.test(char));
        return [nonDigitChars.length >= min , tools_public.replaceInTextWithPatternParams(description , params)];
    } ,

    validtor_checkInputNum(input , params , description) {
        let min = 1;
        if (params != null && params.hasOwnProperty("min")){
            min = params.min
        }
        const digitChars = input.split('').filter(char => /\d/.test(char));
        return [digitChars.length >= min , tools_public.replaceInTextWithPatternParams(description , params)];
    } ,

    validtor_checkInputText(input , params , description) {
        let min = 8;
        if (params != null && params.hasOwnProperty("min")){
            min = params.min
        }
        return [input.length >= min , tools_public.replaceInTextWithPatternParams(description , params)];
    } ,

    validtor_checkInputForbidden(input , params , description) {
        let validPattern = /^[a-zA-Z0-9]*$/;
        if (params != null && params.hasOwnProperty("chars")){
            const escapedParams = params.chars.map(c => '\\' + c).join('');
            validPattern = new RegExp(`^[a-zA-Z0-9${escapedParams}]*$`);
        }
        return [validPattern.test(input) , tools_public.replaceInTextWithPatternParams(description , params)];
    } ,

    validtor_checkExistChartUpper(input , params , description) {
        let min = 1;
        if (params != null && params.hasOwnProperty("min")){
            min = params.min
        }
        const regex = new RegExp(`(?:.*[A-Z]){${min},}`);
        return [regex.test(input) , tools_public.replaceInTextWithPatternParams(description , params)];
    } ,

}








tools_icons = {

    icon_visit(color = "#ffffff", size = 24) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.041-3.362M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1l11.8 11.8M17.94 17.94A9.969 9.969 0 0021.542 12a9.97 9.97 0 00-4.133-5.868" />
</svg>
`;
    } ,



    icon_un_visit(color = "#ffffff", size = 24) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
`;
    } ,



    icon_is_true(color = "#4caf50", size = 24) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M5 13l4 4L19 7" />
</svg>
`;
    } ,



    icon_is_false(color = "#f44336", size = 24) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M6 18L18 6M6 6l12 12" />
</svg>
`;
    } ,



    icon_email(bg_color = "#e7e7e7", size = 24) {
        return `
<svg class="icon-email outline" 
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg" 
     role="img" aria-hidden="false">
  <title>ایمیل</title>
  <rect x="2" y="5" width="20" height="14" rx="2" 
        stroke="${bg_color}" 
        stroke-width="1.5" 
        fill="none"/>
  <path d="M3 7.5L12 13L21 7.5" 
        stroke="${bg_color}" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
`;
    } ,



    icon_lock(bg_color = "#e7e7e7", size = 24) {
        return `
<svg class="icon-password lock" 
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none"
     xmlns="http://www.w3.org/2000/svg" 
     aria-hidden="true">
  <rect x="5" y="10" width="14" height="10" rx="2" 
        stroke="${bg_color}" 
        stroke-width="1.5"/>
  <path d="M8 10V7a4 4 0 0 1 8 0v3" 
        stroke="${bg_color}" 
        stroke-width="1.5" 
        stroke-linecap="round"/>
</svg>
`;
    } ,



    icon_tik(bg_color = "#e7e7e7", size = 20) {
        return `
<svg class="icon-selected-check" 
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg" 
     role="img" aria-hidden="false" 
     style="padding:2px;">
     
  <title>selected</title>
 
  <defs>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="-1.5" stdDeviation="1" flood-color="rgba(0,0,0,0.35)" />
    </filter>
  </defs>

  <path d="M20 6L9 17l-5-5" 
        stroke="${bg_color}" 
        stroke-width="2.2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        filter="url(#shadow)" />
        
</svg>
`;
    } ,



    icon_plus_badge(bg_color = "#fff", size = 28) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="add"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <path d="M12 8v8M8 12h8" stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,



    icon_minus_badge(bg_color = "#fff" , size = 28) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="remove"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <path d="M8 12h8" stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,

}


