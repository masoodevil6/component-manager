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

        darkColor1: "rgb(0,0,0)",
        darkColor2: "rgb(42,42,42)",

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


    widgetRender: function(element , dataForApi=[] , insert=true){
        const closestComponent = element.closest("component-widget");
        if (closestComponent != null){
            const data = closestComponent.getAttribute("data");
            if (data != null){
                try {
                    let dataJson = JSON.parse(data);
                    let var_randomId = dataJson.hasOwnProperty("var_randomId") ? dataJson.var_randomId : null;

                    if (var_randomId != null){
                        const prop_fetch = dataJson.hasOwnProperty("prop_fetch") ? dataJson.prop_fetch : {};
                        let fetchData = dataForApi;
                        if (insert){

                            if (prop_fetch.hasOwnProperty("data") && !Array.isArray(prop_fetch.data)){
                                fetchData = prop_fetch.data.hasOwnProperty("data") ? prop_fetch.data.data : [];

                                for (let x = 0; x < dataForApi.length ; x++) {
                                    const itemApi = dataForApi[x];

                                    let exist = false;
                                    if (itemApi.hasOwnProperty("name") && itemApi.hasOwnProperty("value") ){
                                        for (let i = 0; i < fetchData.length ; i++) {
                                            const item = fetchData[i];
                                            if (item.hasOwnProperty("name") && item.name == itemApi.name){
                                                fetchData[i] = itemApi;
                                                exist = true;
                                                break;
                                            }
                                        }
                                    }

                                    if (!exist){
                                        fetchData.push(itemApi);
                                    }
                                }


                            }
                        }


                        if (!prop_fetch.hasOwnProperty("data") || Array.isArray(prop_fetch.data)){
                            prop_fetch.data = {};
                        }
                        if (!prop_fetch.data.hasOwnProperty("data")){
                            prop_fetch.data.data = {};
                        }
                        prop_fetch.data.data = fetchData;
                        dataJson["prop_fetch"] = prop_fetch;

                        if (typeof components != "undefined"){
                            components[var_randomId] = dataJson;
                        }

                        closestComponent.setAttribute("data" , JSON.stringify(dataJson))
                    }


                }
                catch (e){
                    console.error(e)
                }
            }
        }
    } ,


    getComponentHtml: function (containerId , ComponentName , ComponentId , ComponentProps){
        const container = document.getElementById(containerId);
        const elForm = document.createElement(tools_converter.toKebabCase(ComponentName));
        elForm.id = ComponentId
        container.appendChild(elForm);

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
                if (itemData.hasOwnProperty("name")){
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
                        componentMessagesData.prop_status = response.hasOwnProperty("status") ? response.status : true;
                        tools_component.control("ComponentMessages" , componentMessagesData);
                    }

                    /// result callback
                    const resultExp = response.hasOwnProperty("resultExp") ? response.resultExp : response;

                    if (callback != null){
                        callback(resultExp , data);
                    }

                    return resultExp;
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
    }

}
