/*
Name: Tools
Developer: Mehdi Maarefian
Version: 0.1
*/

prop_const = {
    colors: {
        Glass1: "rgba(255,255,255,0.1)" ,

        White1: "#fff" ,
        White2: "#efefef" ,
        White3: "#ececec" ,

        Orange1: "#fcd4b9" ,
        Orange2: "#faa46c" ,
        Orange3: "#f47920" ,

        Green1: "rgba(197,245,236,0.50)" ,
        Green2: "rgba(145,238,218,0.75)" ,
        Green3: "rgb(77,227,195)" ,
        Green4: "#38e1c3" ,
        Green5: "#20d0b0" ,


    } ,
}


tools_const = {
    botResPath: "bot/run/435/res_v2" ,


    styles: {
        public:{
          selected_none_backgroundColor      : prop_const.colors.Glass1 ,
          selected_num1_backgroundColor      : prop_const.colors.Orange1 ,
          selected_num2_backgroundColor      : prop_const.colors.Orange2 ,
          selected_num3_backgroundColor      : prop_const.colors.Orange3 ,

          selected_none_color                : prop_const.colors.Glass1 ,
          selected_num1_color                : prop_const.colors.White1 ,
          selected_num2_color                : prop_const.colors.White2 ,
          selected_num3_color                : prop_const.colors.White3 ,
        },


        table: {
            backgroundColor: "#e7e7e791"
        },
        title: {
            backgroundColor: "#e7e7e791"
        },
        collapse: {
            backgroundColor: "#e7e7e75c"
        },
        backShadow: {
            backgroundColor: "#e7e7e7b5"
        },
        loading: {
            backgroundColor: "#f47920"
        },
        button: {
            backgroundColor: "#f47920",
            color: "#ffffff",
        },
        buttonError: {
            backgroundColor: "#dc3545",
            color: "#ffffff",
        },
    } ,



    contentTypes : {
        html: "text/html" , json: "application/json" ,
    } ,
};



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

};



tools_submit = {

    fetcth: async function(url='' , args={}){
        let data                  = args.hasOwnProperty("data") ? args.data: {} ;
        let callback              = args.hasOwnProperty("callback") ? args.callback: null ;
        let componentMessagesData = args.hasOwnProperty("componentMessagesData") ? args.componentMessagesData: null ;
        let componentLoadingData  = args.hasOwnProperty("componentLoadingData") ? args.componentLoadingData: null ;
        let component404Data      = args.hasOwnProperty("component404Data") ? args.component404Data: null ;

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

        tools_component.control("ComponentLoading" , componentLoadingData , true);

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
                            tools_component.control("Component404" , component404Data);
                            tools_component.control("ComponentLoading" , componentLoadingData , false);

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
                    tools_component.control("ComponentLoading" , componentLoadingData , false);

                    /// set messages
                    componentMessagesData.prop_messages = response.hasOwnProperty("messages") ? response.messages : [];
                    componentMessagesData.prop_status = response.hasOwnProperty("status") ? response.status : true;
                    tools_component.control("ComponentMessages" , componentMessagesData);

                    /// result callback
                    const resultExp = response.hasOwnProperty("resultExp") ? response.resultExp : response;

                    if (callback != null){
                        callback(resultExp , data);
                    }

                    return resultExp;
                }
            ).catch(
                e=>{

                    tools_component.control("Component404" , component404Data);
                    tools_component.control("ComponentLoading" , componentLoadingData , false);

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

    convertPriceToString: function(value, createViewComponent = true) {

        let val =value
            .replace(/,/g, '')        // حذف کاماها
            .replace(/[^\d.]/g, '')   // فقط عدد و نقطه مجازن
            .replace(/(\..*)\./g, '$1'); // فقط اولین نقطه باقی بمونه

        let [intPart, decimalPart] = val.split('.');
        intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return  decimalPart !== undefined
            ? `${intPart}.${decimalPart}`
            : intPart;
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
    }



};





/*
tools_const = {

    botResPath: "bot/run/435/res_v2" ,


    styles: {
        title: {
            backgroundColor: "#e7e7e791"
        },
        collapse: {
            backgroundColor: "#e7e7e75c"
        },
        backShadow: {
            backgroundColor: "#e7e7e7b5"
        },
        loading: {
            backgroundColor: "#f47920"
        },
        button: {
            backgroundColor: "#f47920",
            color: "#ffffff",
        },
        buttonError: {
            backgroundColor: "#dc3545",
            color: "#ffffff",
        },
    } ,



    contentTypes : {
        html: "text/html" , json: "application/json" ,
    } ,

}


tools_components = {



    /!*
     * @data[prop_show]
     *!/
    component404: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.Component404(
                data.elId ,
                data
            )
        }
    } ,











    /!*
    * @data[prop_show]
    *!/
    ComponentMessages: function (data , prop_show){

        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentMessages(
                data.elId ,
                data
            )
        }
    } ,




    /!*
    * @data[prop_show]
    *!/
    componentLoading: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentLoading(
                data.elId ,
                data
            )
        }

    } ,









    /!*
    * @data[prop_show]
    *!/
    componentForm: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentForm(
                data.elId ,
                data
            )
        }

    } ,




    /!*
    * @data[prop_show]
    *!/
    componentIsEmpty: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentIsEmpty(
                data.elId ,
                data
            )
        }
    } ,



    /!*
    * @data[prop_show]
    *!/
    componentHeader: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentHeader(
                data.elId ,
                data
            )
        }
    } ,




    /!*
    * @data[prop_show]
    *!/
    componentCollapse: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentCollapse(
                data.elId ,
                data
            )
        }
    } ,






    /!*
    * @data[prop_show]
    *!/
    componentTable: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentTable(
                data.elId ,
                data
            )
        }
    } ,




    /!*
    * @data[prop_show]
    *!/
    componentButton: function (data , prop_show){
        if (data != null && data.hasOwnProperty("elId")){
            new window.ComponentButton(
                data.elId ,
                data
            )
        }
    } ,
}


tools_method = {


    submitData_oneObject: function (args){
        return this.submitData(
            args.hasOwnProperty("url") ? args.url: '' ,
            args.hasOwnProperty("data") ? args.data: {} ,
            args.hasOwnProperty("callback") ? args.callback: null ,
            args.hasOwnProperty("componentMessagesData") ? args.componentMessagesData: null ,
            args.hasOwnProperty("componentLoadingData") ? args.componentLoadingData: null ,
            args.hasOwnProperty("component404Data") ? args.component404Data: null ,
        );
    },

    submitData: async function(
        url ,
        data = {
            type: null ,
            data: [] ,
            method: "post" ,
            contentType: tools_const.contentTypes.json ,
        },
        callback = null ,
        componentMessagesData=null ,
        componentLoadingData=null ,
        component404Data=null ,
    ){
        const formData = new FormData();

        if (data.hasOwnProperty("type") && data.type != null){
            formData.append("type", data.type);
        }

        let body = data.hasOwnProperty("data") ? data.data : [];
        if ( data.hasOwnProperty("formData") ){
            body.push(...tools_method.serializeArray(data.formData) )
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

        this.componentManager_control("ComponentLoading" , componentLoadingData , true);

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
                            this.componentManager_control("Component404" , component404Data);
                            this.componentManager_control("ComponentLoading" , componentLoadingData , false);

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
                    this.componentManager_control("ComponentLoading" , componentLoadingData , false);

                    /// set messages
                    componentMessagesData.prop_messages = response.hasOwnProperty("messages") ? response.messages : [];
                    componentMessagesData.prop_status = response.hasOwnProperty("status") ? response.status : true;
                    this.componentManager_control("ComponentMessages" , componentMessagesData);

                    /// result callback
                    const resultExp = response.hasOwnProperty("resultExp") ? response.resultExp : response;

                    if (callback != null){
                        callback(resultExp , data);
                    }

                    return resultExp;
                }
            ).catch(
                e=>{

                    this.componentManager_control("Component404" , component404Data);
                    this.componentManager_control("ComponentLoading" , componentLoadingData , false);

                    /// log error
                    console.error("[FETCH]" , url , data , e);
                }
            )
    },










    componentManager_setup: function (container , tree , withPrefix=null) {
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
                        this.componentManager_setup(customEl , children , "component-");
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
                    this.componentManager_setup(el , children);
                }
            }

        });
    } ,


    componentManager_control: function (componentName , props , prop_show=true){

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












}*/
