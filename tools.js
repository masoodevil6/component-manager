/*
Name: Tools
Developer: Mehdi Maarefian
Version: 0.1
*/



if (typeof component_props === 'undefined') {
    component_props = {
        directionRtl: false,
        elementSizes: "m",


        // -----------------------
        primaryColor1: "#15244b",
        primaryColor2: "#334783",
        primaryColor3: "#7887b2",
        primaryColor4: "#e4e9ed",
        primaryColor5: "#ededef",

        secondaryColor1: "#fab01b",
        secondaryColor2: "#f5bf53",
        secondaryColor3: "#f6d086",
        secondaryColor4: "#efdcb3",

        errorColor1: "#691d21",
        errorColor2: "#ab5258",
        errorColor3: "#f6b1b7",
        errorColor4: "#f8d7da",

        warningColor1: "#b4500c",
        warningColor2: "#f47920",
        warningColor3: "#eca574",
        warningColor4: "#ffe4d0",

        infoColor1: "#077af1",
        infoColor2: "#1988fd",
        infoColor3: "#4ba2fd",
        infoColor4: "#74b8ff",

        successColor1: "#06502d",
        successColor2: "#2e9f6b",
        successColor3: "#64c598",
        successColor4: "#ceefe0",

        shadowColor1: "rgba(98,98,98,0.30)",
        shadowColor2: "rgba(98,98,98,0.25)",
        shadowColor3: "rgba(98,98,98,0.15)",

        darkColor1: "rgb(30,30,30)",
        darkColor2: "rgb(157,157,157)",

        shanColor1: "#ffffff",
        shanColor2: "#f4f4f4",
        shanColor3: "#f1f1f1",
        shanColor4: "#e8e8e8",
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
                    backgroundColor:                   component_props.successColor4 ,
                    color:                             component_props.successColor1 ,
                    icon:                              component_props.successColor1 ,
                    border:                            component_props.successColor1 ,
                } ,
                error: {
                    backgroundColor:                   component_props.errorColor4 ,
                    color:                             component_props.errorColor1 ,
                    icon:                              component_props.errorColor1 ,
                    border:                            component_props.errorColor1 ,
                } ,
                warning: {
                    backgroundColor:                   component_props.warningColor4 ,
                    color:                             component_props.warningColor1 ,
                    icon:                              component_props.warningColor1 ,
                    border:                            component_props.warningColor1 ,
                }
            },

            loading: {
                backgroundColor_loading:               component_props.primaryColor1 ,
                backgroundColor_shadow:                component_props.shadowColor1
            },

            state404: {
                backgroundColor_shadow:                component_props.shadowColor1 ,
            },

            form: {
                backgroundColor_title:                 component_props.secondaryColor1 ,
            },

            title: {
                backgroundColor:                       component_props.shanColor1
            },

            listSelectedScroller: {
                borderdColor_form:                     component_props.shadowColor3 ,
                borderdColor_formSelector_item:        component_props.shanColor1 ,
                backgroundColor_formSelector_item:     component_props.primaryColor1 ,
                color_formSelector_item:               component_props.shanColor1 ,
                colorIcon_formSelector_item:           component_props.shanColor1 ,
            },

            pageHeader: {
                backgroundColor_form:                  component_props.primaryColor1 ,
                color_icon:                            component_props.shanColor1 ,
                color_header:                          component_props.shanColor1 ,
            },

            collapse: {
                backgroundColor_title:                 component_props.primaryColor1 ,
                color_title:                           component_props.shanColor1 ,
                color_icon:                            component_props.shanColor1 ,
                backgroundColor_body:                  component_props.shanColor1 ,

            },

            button: {
                submit:{
                    backgroundColor:                   component_props.secondaryColor1,
                    backgroundColorHover:              component_props.secondaryColor2,
                    color:                             component_props.shanColor1,
                } ,
                cancel:{
                    backgroundColor:                   component_props.primaryColor1,
                    backgroundColorHover:              component_props.primaryColor2,
                    color:                             component_props.shanColor1,
                } ,
                back:{
                    backgroundColor:                   component_props.primaryColor1,
                    backgroundColorHover:              component_props.primaryColor2,
                    color:                             component_props.shanColor1,
                }
            },

            input: {
                backgroundColor_form:                  component_props.secondaryColor1 ,
                color_icon:                            component_props.darkColor1 ,
            },

            inputOtp: {

            },

            inputPassword: {
                backgroundColor_form:                  component_props.secondaryColor1 ,
                color_icon:                            component_props.darkColor1 ,
            },

            inputEmail: {
                backgroundColor_form:                  component_props.secondaryColor1 ,
                color_icon:                            component_props.darkColor1 ,
            },

            inputPrice: {
                backgroundColor_form:                  component_props.secondaryColor1 ,
                color_icon:                            component_props.darkColor1 ,
            },

            inputSize: {
                backgroundColor_form:                  component_props.secondaryColor1 ,
                color_icon:                            component_props.darkColor1 ,
            },

            inputAcl: {
                backgroundColor_headerList:            component_props.secondaryColor1 ,
                color_icon:                            component_props.darkColor1 ,
                color_btn:                             component_props.shanColor1 ,
                borderColor_selector:                  component_props.primaryColor1 ,
                backgroundColor_bodyHeader:            component_props.primaryColor1 ,
                backgroundColor_bodyFootrer:           component_props.primaryColor2 ,

                backgroundColor_itemAcl_unSelected:              component_props.secondaryColor3 ,
                color_itemAcl_unSelected:                        component_props.darkColor1 ,
                iconColor_itemAcl_unSelected:                    component_props.darkColor1 ,
                borderColor_itemAcl_unSelected:                  component_props.shadowColor1 ,
                color_itemAcl_unSelected_hover:                  component_props.darkColor1 ,
                backgroundColor_itemAcl_unSelected_hover:        component_props.secondaryColor2 ,

                backgroundColor_itemAcl_selected:                component_props.primaryColor3 ,
                color_itemAcl_selected:                          component_props.shanColor1 ,
                iconColor_itemAcl_selected:                      component_props.shanColor1 ,
                borderColor_itemAcl_Selected:                    component_props.darkColor1 ,
                color_itemAcl_selected_hover:                    component_props.shanColor1 ,
                backgroundColor_itemAcl_selected_hover:          component_props.primaryColor2 ,


            },

            inputColor: {
                boderColor :                           component_props.shanColor1 ,
                backgroundColor_body :                 component_props.darkColor1 ,
                color_body :                           component_props.shanColor1 ,
                color_iconClear :                      component_props.darkColor1 ,
                color_iconEmpty :                      component_props.errorColor1 ,
            } ,

            inputCheckBox: {
                color_icon:                            component_props.darkColor1 ,
                boderColor :                           component_props.darkColor2 ,
                backgroundColor_unSelected :           component_props.shadowColor1 ,
                backgroundColor_selected :             component_props.secondaryColor1 ,
                backgroundColor_disable :              component_props.darkColor2 ,
                color_unSelected :                     component_props.shadowColor1 ,
                color_selected :                       component_props.primaryColor1 ,
                color_disable :                        component_props.darkColor2 ,
            } ,

            inputDate: {
                backgroundColor_header :               component_props.secondaryColor1 ,
                color_icon:                            component_props.primaryColor1 ,

                backgroundColor_main :                 component_props.primaryColor1 ,
                color_iconArrow:                       component_props.shanColor1 ,

                backgroundColor_rowSelected  :         component_props.primaryColor4 ,
                backgroundColor_colSelected :          component_props.secondaryColor2 ,
                color_columnSelected  :                component_props.darkColor1 ,
            } ,

            inputFile: {
                boderColor :                           component_props.primaryColor1 ,
                boderColorHover :                      component_props.secondaryColor1 ,
                textColor :                            component_props.primaryColor1 ,
            } ,



            table: {
                backgroundColor:                       component_props.primaryColor1 ,
                backgroundColor_headerIcon:            component_props.secondaryColor1 ,
                borderColor_headerIcon:                component_props.primaryColor1 ,
                color_headerIcon:                      component_props.primaryColor1 ,
                backgroundColor_rowSelected:           component_props.primaryColor1 ,
                backgroundColor_columnSelected:        component_props.secondaryColor1 ,
                backgroundColor_textSelected:          component_props.shanColor1 ,

                bacKgroundColor_rowOptions:            component_props.secondaryColor1 ,
                color_rowOptions:                      component_props.darkColor1 ,
                bacKgroundColor_rowOptionsItem:        component_props.secondaryColor3 ,
                color_rowOptionsItem:                  component_props.darkColor1 ,
                bacKgroundColor_rowOptionsItemHover:   component_props.secondaryColor2 ,
                color_rowOptionsItemHover:             component_props.darkColor1 ,

                backgroundColor_iconColumnSelector:    component_props.secondaryColor1 ,
                color_iconColumnSelecto:               component_props.darkColor1,
            },


            tabs: {
                backgroundColor_unselected:            component_props.shadowColor1 ,
                backgroundColor_itemBefore:            component_props.shadowColor3 ,
                backgroundColor_itemAfter:             component_props.primaryColor1 ,
                color_itemAfter:                       component_props.shanColor4 ,
            },

            tableResposible: {
                backgroundColor_header:                component_props.primaryColor1 ,
                color_header:                          component_props.shanColor4 ,
                backgroundColor_body:                  component_props.shanColor2 ,
                color_body:                            component_props.darkColor1 ,
                backgroundColor_bodyHover:             component_props.shanColor4 ,
                color_bodyHover:                       component_props.primaryColor1 ,

                backgroundColor_iconColumnSelector:    component_props.shanColor1,
                color_iconColumnSelector:              component_props.shanColor1,

                backgroundColor_iconCardView:          component_props.secondaryColor1,
                color_iconCardView:                    component_props.primaryColor1,
                borderColor_iconCardView:              component_props.primaryColor1,
            },

            pageNumber: {
                backgroundColor_form:                  component_props.primaryColor1 ,

                backgroundColor_unselected:            component_props.primaryColor1 ,
                backgroundColor_unselected2:           component_props.primaryColor2 ,
                color_unselected:                      component_props.shanColor1 ,

                backgroundColor_selected:              component_props.secondaryColor1 ,
                backgroundColor_selected2:             component_props.secondaryColor3 ,
                color_selected:                        component_props.darkColor1 ,

                backgroundColor_icon:                  component_props.primaryColor1 ,
                backgroundColor_icon2:                 component_props.darkColor1 ,
                color_icon:                            component_props.shanColor1 ,
            },


            pageData: {
                color_description:                     component_props.primaryColor1 ,
                color_data:                            component_props.secondaryColor1 ,
            },

            cardInfo: {
                backgroundColor_options:               component_props.secondaryColor3 ,

                backgroundColor_optionItem:            component_props.secondaryColor3 ,
                color_optionItem:                      component_props.darkColor1 ,

                backgroundColor_optionHover:           component_props.secondaryColor2 ,
                color_optionHover:                     component_props.shanColor2 ,
            } ,

            selectOption: {
                backgroundColor_form:                   component_props.secondaryColor1 ,
                color_icon:                             component_props.darkColor1 ,
                backgroundColor_itemNotSelected:        component_props.shanColor1 ,
                backgroundColor_itemHover:              component_props.primaryColor2 ,
                backgroundColor_itemSelected:           component_props.primaryColor2 ,
                color_itemSelected:                     component_props.shanColor1
            },

            draggableOrder: {
                color_border:                          component_props.primaryColor1 ,
                color_borderHover:                     component_props.secondaryColor1 ,
                color_icon:                            component_props.primaryColor1 ,
            } ,

            selectColumn: {
                backgroundColor_icon:                 component_props.secondaryColor1 ,
                color_icon:                           component_props.darkColor1,
            } ,



            elementLink: {
                normal:{
                    backgroundColor:                  component_props.shanColor1 ,
                },
                hover:{
                    backgroundColor:                  component_props.shanColor1 ,
                }
            } ,

            elementBorder: {
                btnMore_backgroundColor :             component_props.primaryColor1 ,
                btnMore_color :                       component_props.shanColor1 ,
            } ,

            label: {
                backgroundColor_label :                     component_props.primaryColor1 ,
                color_label :                               component_props.shanColor1 ,
                color_icon :                          component_props.shanColor1 ,
            } ,

            window: {
                backgroundColor_blur :                component_props.shadowColor1 ,
                backgroundColor_window :              component_props.shanColor1 ,
            } ,

            tooltipDescription: {
                backgroundColor_description :          component_props.secondaryColor1 ,
                color_description :                    component_props.darkColor1 ,
                color_icon :                           component_props.shanColor1 ,
            } ,


            breadcrumb: {
                backgroundColor_unactive :             component_props.primaryColor1 ,
                color_unactive :                       component_props.shanColor1 ,
                backgroundColor_active :               component_props.secondaryColor1 ,
                color_active :                         component_props.darkColor1 ,
            } ,

            breadcrumbWithArrow: {
                backgroundColor_unactive :             component_props.primaryColor1 ,
                color_unactive :                       component_props.darkColor1 ,
                backgroundColor_active :               component_props.secondaryColor1 ,
                color_active :                         component_props.shanColor1 ,
                color_shadow :                         component_props.shadowColor1 ,
            } ,


            tree: {
                backgroundColor_unSelected :           component_props.shadowColor1 ,
                backgroundColor_selected :             component_props.secondaryColor1 ,
            } ,

            mosuseScroller: {
                backgroundColor_dark :                 component_props.darkColor2 ,
                backgroundColor_light:                 component_props.shanColor1 ,
                backgroundColor_tools:                 component_props.darkColor1 ,
            } ,


            backShadow: {
                backgroundColor:                       component_props.shadowColor1
            },
            buttonError: {
                backgroundColor:                       component_props.errorColor1 ,
                color:                                 component_props.shanColor1,
            } ,


            report: {
                backgroundColor_page:                  component_props.primaryColor5 ,
                color_iconPage:                        component_props.infoColor1 ,
                color_iconBtnNewPage:                  component_props.shanColor1 ,
            } ,


            changePage: {
                backgroundColor_shadow:                component_props.shadowColor1 ,
            } ,


        };
    }
}


tools_css = {

    standardSizes: {
        xs: {
            name: "x-s",
            fontSize: 8,
            height: 22,
            icon: 14
        } ,
        s: {
            name: "s" ,
            fontSize: 10 ,
            height: 24,
            icon: 16
        } ,
        m: {
            name: "m" ,
            fontSize: 12,
            height: 26,
            icon: 18
        } ,
        l: {
            name:  "l"  ,
            fontSize: 13,
            height: 28,
            icon: 20
        } ,
        xl: {
            name:  "x-l" ,
            fontSize: 14,
            height: 30,
            icon: 24
        } ,
        xxl: {
            name: "xx-l",
            fontSize: 15 ,
            height: 32,
            icon: 28
        }
    } ,

    standardScreanWidth : {
        xs   : {name:"x-s" ,max:576             } ,
        s    : {name:"s"  ,min:576   , max:768 } ,  /// is for mobile
        m    : {name:"m"  ,min:768   , max:992 } ,  /// is for tablet
        l    : {name:"l"  ,min:992   , max:1200} ,
        xl   : {name:"x-l" ,min:1200  , max:1450} ,  /// is for pc
        xxl  : {name:"xx-l" ,min:1450           } ,
    } ,

    standardZIndex:{
        basic:       {name:"basic"       ,val:1             } ,
        menu_main:   {name:"menu_main"   ,val:2             } ,
        icon_attach: {name:"icon_attach" ,val:3             } ,
        tools:       {name:"tools"       ,val:4             } ,
        tools_btn:   {name:"tools_btn"   ,val:5             } ,


        new_page:    {name:"new_page"    ,val:10             } ,
        blur_popup:  {name:"blur_popup"  ,val:19             } ,
        popup:       {name:"popup"       ,val:20             } ,
    } ,

    //---------------------------------------------------------------------------

    getHeightSize(sizeName){
        let val = 20;
        Object.keys(tools_css.standardSizes).forEach(key=>{
            itemHeight = tools_css.standardSizes[key];
            if(itemHeight.name == sizeName){
                val = itemHeight.height;
                return;
            }
        });
        return val;
    },


    getFontSize(sizeName){
        let val = 10;
        Object.keys(tools_css.standardSizes).forEach(key=>{
            itemFont = tools_css.standardSizes[key];
            if(itemFont.name == sizeName){
                val = itemFont.fontSize;
                return;
            }
        });
        return val;
    },


    getIconSize(sizeName , defaultSize = 16){
        let val = defaultSize;

        Object.keys(tools_css.standardSizes).forEach(key=>{
            itemIcon = tools_css.standardSizes[key];
            if(itemIcon.name == sizeName){
                val = itemIcon.icon;
                return;
            }
        });
        return val;
    } ,


    //---------------------------------------------------------------------------


    getScreenWidth(element=null){
        if (element == null){
            element = window;
        }
        let screanWidth = element.innerWidth;
        let screanWidthType = "";

        Object.keys(tools_css.standardScreanWidth).forEach(key => {
            const sizeType = tools_css.standardScreanWidth[key];
            if (sizeType.hasOwnProperty("name")){
                const sizeName = sizeType.name;

                const checkIsMoreThenMin = sizeType.hasOwnProperty("min") ? screanWidth >= sizeType.min : true;
                const checkIsLessThenMax = sizeType.hasOwnProperty("max") ? screanWidth <= sizeType.max : true;

                if (checkIsMoreThenMin && checkIsLessThenMax){
                    screanWidthType = sizeName;
                    return;
                }
            }
        })

        return screanWidthType;
    } ,


    checkMoreThanScreanWidth(sizeName , element=null){
        if (element == null){
            element = window;
        }
        let screanWidth = element.innerWidth;
        let screanWidthStatus = false;

        Object.keys(tools_css.standardScreanWidth).forEach(key => {
            const sizeType = tools_css.standardScreanWidth[key];
            if (sizeType.hasOwnProperty("name") && sizeType.name == sizeName){
                const point = sizeType.hasOwnProperty("max") ? sizeType.max : (sizeType.hasOwnProperty("min") ? sizeType.min : null);
                screanWidthStatus = point!=null && screanWidth >= point
                return;
            }
        })

        return screanWidthStatus;
    } ,


    //---------------------------------------------------------------------------


    getZIndex(zIndexName , zIndexDefault=1){
        let value = null
        Object.keys(tools_css.standardZIndex).forEach(key=>{
            itemZIndex = tools_css.standardZIndex[key];
            if(itemZIndex.name == zIndexName){
                value = itemZIndex.val;
                return;
            }
        });
        return value != null ? value : zIndexDefault ;
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
        console.log(closestComponent)

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
        let data                  = args.hasOwnProperty("data")                    ? args.data                     : {} ;
        let callback              = args.hasOwnProperty("callback")                ? args.callback                 : null ;
        let componentMessagesData = args.hasOwnProperty("componentMessagesData")   ? args.componentMessagesData    : null ;
        let componentLoadingData  = args.hasOwnProperty("componentLoadingData")    ? args.componentLoadingData     : null ;
        let component404Data      = args.hasOwnProperty("component404Data")        ? args.component404Data         : null ;
        let prop_size             = args.hasOwnProperty("prop_size")               ? args.prop_size                : tools_css.standardSizes.m.name ;
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
            //body.push(...tools_converter.serializeArray(data.formData) )
            body = tools_public.mergeFormArray(body , tools_converter.serializeArray(data.formData))
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
                    return false;
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
                        componentMessagesData.prop_size = prop_size;

                        let messageType = "warning";
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

                    return false;
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
        if (formElement == null) return [];

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
        if (typeof str == "string"){
            const val = str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

            if (isInt){
                return parseInt(val);
            }
            return val;
        }
        return str;
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

    mergeFormArray: function(base, incoming) {
        const map = new Map(base.map(item => [item.name, item.value]));

        for (const { name, value } of incoming) {
            map.set(name, value); // اگر وجود داره → آپدیت میشه
        }

        return Array.from(map, ([name, value]) => ({ name, value }));
    } ,


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
    } ,

    addExcelKeys(list, keyName = 'excelKey') {
        if (!Array.isArray(list)) return [];

        // تابع تبدیل عدد به نام ستون اکسل (A, B, ..., Z, AA, AB, ...)
        const getExcelColumnName = (index) => {
            let name = '';
            while (index >= 0) {
                name = String.fromCharCode((index % 26) + 65) + name;
                index = Math.floor(index / 26) - 1;
            }
            return name;
        };

        return list.map((item, i) => ({
            ...item,
            [keyName]: getExcelColumnName(i)
        }));
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
        if (svgDefs.length == 0){
            svg.innerHTML = svg.innerHTML + "<defs></defs>";
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

            case "shadow":
                markerHtml = `
        <filter id="${markerId}" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="${bgColor}" />
        </filter>
        `;
                break;
        }

        if (markerHtml != null){
            svgDefs.innerHTML = svgDefs.innerHTML + markerHtml;
            return markerId;
        }

        return null;
    } ,





    toPointsString(shape){
        return shape.map(p => `${p.x},${p.y}`).join(" ");
    } ,

    getPointsPolygonElement(shape){
        let rawPoints = shape.getAttribute("points");
        return rawPoints
            .trim()
            .split(" ")
            .map(p => {
                let [x, y] = p.split(",").map(Number);
                return {x, y};
            });
    } ,

    getCenterPolygonElement(shape){
        const shapePoints = tools_svg.getPointsPolygonElement(shape);
        let sumX = 0, sumY = 0;
        shapePoints.forEach(p => { sumX += p.x; sumY += p.y; });
        return {x: sumX/shapePoints.length, y: sumY/shapePoints.length};
    } ,

    getCenterCircleElement(shape){
        return {x: parseInt(shape.getAttribute("cx")), y: parseInt(shape.getAttribute("cy"))};
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
        if (svg != null){
            svg.appendChild(foreign);
        }

        const animY = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animY.setAttribute("attributeName", "y");
        animY.setAttribute("from", point.y - 60);
        animY.setAttribute("to", point.y);
        animY.setAttribute("dur", animDuration + "ms");
        animY.setAttribute("fill", "freeze");

        if (svg != null){
            svg.appendChild(animY);
        }
    } ,

    craeteSvgPolygon(svg , points=[] , attrs={}  , eventListiners={}  , styles={} ){
        let poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        poly.setAttribute("points", tools_svg.toPointsString(points));
        Object.keys(attrs).forEach(key => {
            poly.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            poly.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            poly.style[key] = styles[key];
        });
        if (svg != null){
            svg.appendChild(poly);
        }

        return poly;
    } ,

    craeteSvgCircle(svg  , centerX=0 , centerY=0 ,  radius= 10 , attrs={} , eventListiners={} , styles={} ){
        let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        circle.setAttribute("cx", centerX)
        circle.setAttribute("cy", centerY);
        circle.setAttribute("r", radius);
        Object.keys(attrs).forEach(key => {
            circle.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            circle.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            circle.style[key] = styles[key];
        });
        if (svg != null){
            svg.appendChild(circle);
        }

        return circle;
    } ,






    craeteSvgPathToCenterCircleElement(svg , shapRelatedElement , shapRelatedDefX=0 , shapRelatedDefY=0, draw= "" , attrs={}, eventListiners={} , styles={} ){
        let center = tools_svg.getCenterCircleElement(shapRelatedElement);

        let path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttribute("d", draw);
        path.setAttribute("transform", `translate(${center.x + shapRelatedDefX}, ${center.y + shapRelatedDefY})`);
        Object.keys(attrs).forEach(key => {
            path.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            path.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            path.style[key] = styles[key];
        });
        if (svg != null){
            svg.appendChild(path);
        }

        return path;
    } ,

    craeteSvgTextToCenterCircleElement(svg , shapRelatedElement , shapRelatedDefX=0 , shapRelatedDefY=0 , content , attrs={}, eventListiners={} , styles={} ){
        let center = tools_svg.getCenterCircleElement(shapRelatedElement);

        let text = document.createElementNS("http://www.w3.org/2000/svg","text");
        text.setAttribute("x", center.x + shapRelatedDefX);
        text.setAttribute("y", center.y + shapRelatedDefY);
        Object.keys(attrs).forEach(key => {
            text.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            text.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            text.style[key] = styles[key];
        });
        text.textContent = content;

        if (svg != null){
            svg.appendChild(text);
        }

        return text;
    } ,







    craeteSvgPathToCenterPolygonElement(svg , shapRelatedElement , shapRelatedDefX=0 , shapRelatedDefY=0, draw= "" , attrs={} , eventListiners={} , styles={} ){
        let center = tools_svg.getCenterPolygonElement(shapRelatedElement);

        let path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttribute("d", draw);
        path.setAttribute("transform", `translate(${center.x + shapRelatedDefX}, ${center.y + shapRelatedDefY})`);
        Object.keys(attrs).forEach(key => {
            path.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            path.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            path.style[key] = styles[key];
        });
        svg.appendChild(path);

        return path;
    } ,

    craeteSvgCircleToCenterPolygonElement(svg  , shapRelatedElement , shapRelatedDefX=0 , shapRelatedDefY=0, radius= 10 , attrs={}, eventListiners={} , styles={} ){
        let center = tools_svg.getCenterPolygonElement(shapRelatedElement);

        let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        circle.setAttribute("cx", center.x + shapRelatedDefX)
        circle.setAttribute("cy", center.y + shapRelatedDefY);
        circle.setAttribute("r", radius);
        Object.keys(attrs).forEach(key => {
            circle.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            circle.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            circle.style[key] = styles[key];
        });
        svg.appendChild(circle);

        return circle;
    } ,

    craeteSvgTextToCenterPolygonElement(svg , shapRelatedElement , shapRelatedDefX=0 , shapRelatedDefY=0 , content , attrs={}, eventListiners={} , styles={} ){
        let center = tools_svg.getCenterPolygonElement(shapRelatedElement);

        let text = document.createElementNS("http://www.w3.org/2000/svg","text");
        text.setAttribute("x", center.x + shapRelatedDefX);
        text.setAttribute("y", center.y + shapRelatedDefY);
        Object.keys(attrs).forEach(key => {
            text.setAttribute(key, attrs[key]);
        });
        Object.keys(eventListiners).forEach(key => {
            text.addEventListener(key, eventListiners[key]);
        });
        Object.keys(styles).forEach(key => {
            text.style[key] = styles[key];
        });
        text.textContent = content;
        svg.appendChild(text);

        return text;
    } ,

    createShadowInsidePolygonElement(svg , el , pointStart , pointsLentgh ,  attrs={}, eventListiners={} , styles={} ){
        const points = tools_svg.getPointsPolygonElement(el);
        if (points != null && points.length > 0){
            let shadowPoints = [];
            for (let i = pointStart; i < pointStart + pointsLentgh ; i++) {
                shadowPoints.push(points[i]);
            }
            shadowPoints.push(points[pointStart]);

            let polyShadow = document.createElementNS("http://www.w3.org/2000/svg","polygon");
            polyShadow.setAttribute("points", tools_svg.toPointsString(shadowPoints));
            Object.keys(attrs).forEach(key => {
                polyShadow.setAttribute(key, attrs[key]);
            });
            Object.keys(eventListiners).forEach(key => {
                polyShadow.addEventListener(key, eventListiners[key]);
            });
            Object.keys(styles).forEach(key => {
                polyShadow.style[key] = styles[key];
            });
            svg.appendChild(polyShadow);

            return polyShadow;
        }

        return null;
    } ,

}





tools_validtor = {

    validtor_checkList(input , listRules , prop_msgRules=null , directionRtl=true , prop_size=tools_css.standardSizes.m.name) {
        let messages = [];
        let messagesForm = [];
        let rulesHtml = "";
        let isInputCurrect = true;

        const elIconHeight = tools_css.getIconSize(prop_size);
        const elfontSize = tools_css.getFontSize(prop_size);

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
                    isInputCurrect = false;
                    messages.push(description);

                    if (prop_msgRules != null && messagesForm.length != 0 ){
                        messagesForm.push(prop_msgRules)
                    }
                    else if (prop_msgRules == null){
                        messagesForm.push(description)
                    }
                }

                const iconColorError = component_props.errorColor1;
                const iconColorSuccess = component_props.successColor1;
                const icon = isTrue ? tools_icons.icon_is_true(elIconHeight , iconColorSuccess) : tools_icons.icon_is_false(elIconHeight , iconColorError);

                rulesHtml +=
                    `
                    <div style="display: flow-root;font-size: ${elfontSize}; color: ${isTrue ? iconColorSuccess : iconColorError} ;direction: ${directionRtl ? "rtl" : "ltr"}" 
                         class="item_country_code pt-1 ${i < listRules.length-1 ? "border-bottom ": ""}  mx-1 line-height-30px " >
                        <span class="icon-rule "  ms-1">${icon}</span>
                        <span class="ms-3 " > - ${description}</span>
                    </div>
                    `;

            }
        }

        return [messages , messagesForm , rulesHtml , isInputCurrect]
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

    icon_visit(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     aria-label="visit" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <title>visit</title>
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.041-3.362M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1l11.8 11.8M17.94 17.94A9.969 9.969 0 0021.542 12a9.97 9.97 0 00-4.133-5.868" />
</svg>
`;
    } ,



    icon_un_visit(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     aria-label="un visit" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <title>un visit</title>
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



    icon_is_true(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24"
     aria-label="is true" 
     stroke="${color}" 
     width="${size}" height="${size}">
  <title>is true</title>
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M5 13l4 4L19 7" />
</svg>
`;
    } ,



    icon_is_false(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     aria-label="is false"
     stroke="${color}" 
     width="${size}" height="${size}">
  <title>is false</title>
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M6 18L18 6M6 6l12 12" />
</svg>
`;
    } ,



    icon_email(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg class="icon-email outline" 
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none" 
     aria-label="email"
     xmlns="http://www.w3.org/2000/svg" 
     role="img" aria-hidden="false">
  <title>Email</title>
  <rect x="2" y="5" width="20" height="14" rx="2" 
        stroke="${color}" 
        stroke-width="1.5" 
        fill="none"/>
  <path d="M3 7.5L12 13L21 7.5" 
        stroke="${color}" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
`;
    } ,



    icon_lock(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg class="icon-password lock" 
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none"
     aria-label="lock"
     xmlns="http://www.w3.org/2000/svg" 
     aria-hidden="true">
  <title>lock</title>
  <rect x="5" y="10" width="14" height="10" rx="2" 
        stroke="${color}" 
        stroke-width="1.5"/>
  <path d="M8 10V7a4 4 0 0 1 8 0v3" 
        stroke="${color}" 
        stroke-width="1.5" 
        stroke-linecap="round"/>
</svg>
`;
    } ,



    icon_tik(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg class="icon-selected-check" 
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none" 
     aria-label="tik"
     xmlns="http://www.w3.org/2000/svg" 
     role="img" aria-hidden="false" 
     style="padding:2px;">
  <title>tik</title> 
  <path d="M20 6L9 17l-5-5" 
        stroke="${color}" 
        stroke-width="2.2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        filter="url(#shadow)" />
</svg>
`;
    } ,



    icon_plus_badge(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="plus badge"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>plus badge</title>
    <path d="M12 8v8M8 12h8" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,



    icon_minus_badge(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="minus badge"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>minus badge</title>
    <path d="M8 12h8" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,


    icon_arrow_down(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="arrow down"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>arrow down</title>
    <path d="M6 9l6 6 6-6" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    }  ,


    icon_arrow_up(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="arrow up"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>arrow up</title>
    <path d="M18 15l-6-6-6 6" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    },



    icon_arrow_right(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="arrow right"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>arrow right</title>
    <path d="M9 6l6 6-6 6" 
        stroke="${color}" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>`;
    },


    icon_arrow_left(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="arrow left"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>arrow left</title>
    <path d="M15 6l-6 6 6 6" 
        stroke="${color}" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>`;
    },


    icon_clear(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="clear"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>clear</title>
    <path d="M6 6l12 12M6 18L18 6" 
        stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    },



    icon_close(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="close"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <title>close</title>
    <path d="M6 6l12 12M6 18L18 6" 
        stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    },


    icon_exclamation_square(sizeName = component_props.elementSizes, color = "#000") {
        const size = tools_css.getIconSize(sizeName, sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="exclamation square"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <title>exclamation square</title>
  <rect x="3" y="3" width="18" height="18" rx="3" ry="3"/>
  <path d="M12 7v6M12 17h0"/>
</svg>`;
    },



    icon_password(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img"  aria-label="password" 
      width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <title>password</title>
  <rect x="5" y="10" width="14" height="10" rx="2" stroke="${color}" stroke-width="1.5"/>
  <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
</svg>

`;
    } ,

    icon_search(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="search"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>search</title>
    <circle cx="11" cy="11" r="7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,


    icon_pin_close(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" aria-label="pin closed"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <title>pin closed</title>
  <path d="M16 3v4l2 2-4 4 2 2v4H8v-4l2-2-4-4 2-2V3h8z"/>
</svg>`;
    } ,


    icon_pin_open(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" aria-label="pin open"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <title>pin open</title>
  <path d="M16 3v4l2 2-4 4 2 2v4H8v-4l2-2-4-4 2-2V3h8z"/>
  <line x1="4" y1="20" x2="20" y2="4"/>
</svg>`;
    } ,

    icon_pin_open2(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Note"
    width="${size}" height="${size}" viewBox="0 0 201 239" fill="none">
    <title>pin open</title>
    <path fill="#fff" stroke="#000" stroke-width="4" class="st0" d="M94.26,23.64l58.45,36.66c2.34,1.47,5.43,0.76,6.89-1.58l3.72-5.93c1.47-2.34,0.76-5.43-1.58-6.89L103.3,9.24c-2.34-1.47-5.43-0.76-6.89,1.58l-3.72,5.93C91.22,19.09,91.92,22.17,94.26,23.64z"/>
    <rect fill="#fff" stroke="#000" stroke-width="4" x="82.98" y="42.85" transform="matrix(0.8471 0.5314 -0.5314 0.8471 50.5191 -47.9085)"  width="51.1" height="42"/>
    <path fill="#fff" stroke="#000" stroke-width="4"  d="M45.9,105.35l51.33,32.2c7.02,4.4,16.28,2.28,20.68-4.74l6.38-10.17c4.4-7.02,2.28-16.28-4.74-20.68 l-51.33-32.2c-7.02-4.4-16.28-2.28-20.68,4.74l-6.38,10.17C36.76,91.69,38.88,100.95,45.9,105.35z"/>
    <polyline fill="#fff" stroke="#000" stroke-width="4" points="33.6,162.7 18.83,185.43 13.43,215.82 38.68,197.88 79.85,132.65 60,120.2 41.66,149.04 "/>
    <path fill="${bg_color}" d="M136.08,47.57l17.74,11.12c1.87,1.17,4.34,0.61,5.51-1.26l2.76-4.4c1.17-1.87,0.61-4.34-1.26-5.51l-17.74-11.12 L136.08,47.57z"/>
    <path fill=${bg_color} d="M100.19,81.29l17.54,11c0.94,0.59,2.17,0.3,2.76-0.63l18.36-29.27c0.59-0.94,0.3-2.17-0.63-2.76l-17.54-11L100.19,81.29z"/>
    <path fill="${bg_color}" d="M83.19,126.75l17.57,11.02c4.68,2.93,10.85,1.52,13.79-3.16l9.4-14.99c3.23-5.15,1.67-11.94-3.47-15.16l-16.73-10.49L83.19,126.75z"/>
    <polygon fill="${bg_color}" points="21.91,205.13 68.29,131.28 73.99,134.49 35.68,195.88 "/>
</svg>`;
    } ,



    icon_select_columns(sizeName = component_props.elementSizes , color = "#000" ) {
        const size = tools_css.getIconSize(sizeName , sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="select column"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <title>select columns</title>
  
  <rect x="3"  y="4" width="4" height="16" rx="0.8" fill="none" />
  <rect x="10" y="3" width="4" height="18" rx="0.8" fill="${color}" opacity="0.12"/> <!-- ستون انتخاب‌شده -->

  
  <rect x="3"  y="4" width="4" height="16" rx="0.8" stroke="${color}" fill="none"/>
  <rect x="10" y="3" width="4" height="18" rx="0.8" stroke="${color}" fill="none"/>
  <rect x="17" y="4" width="4" height="16" rx="0.8" stroke="${color}" fill="none"/>
</svg>`;


    } ,


    icon_calendar(sizeName =  component_props.elementSizes, bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="calendar"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>calendar</title>
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="16" y1="2" x2="16" y2="6" 
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
  <line x1="8" y1="2" x2="8" y2="6" 
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
  <line x1="3" y1="10" x2="21" y2="10" 
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
</svg>`;
    },


    icon_back_left(sizeName =  component_props.elementSizes, bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="arrow left"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>arrow left</title>
  <path d="M14 6 L8 12 L14 18 Z" fill="${bg_color}"/>
  <line x1="16" y1="12" x2="22" y2="12"
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
</svg>`;
    },


    icon_back_right(sizeName =  component_props.elementSizes,  bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="arrow right"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>arrow right</title>
  <path d="M10 6 L16 12 L10 18 Z" fill="${bg_color}"/>
  <line x1="2" y1="12" x2="8" y2="12"
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
</svg>`;
    },



    icon_excel(sizeName = component_props.elementSizes, bg_color = "#107C41") {
        const size = tools_css.getIconSize(sizeName, sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="excel file"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>excel file with folded corner</title>

  <!-- قاب فایل با گوشه تاخورده -->
  <path d="M3 3 H17 L21 7 V21 H3 V3 Z M17 3 V7 H21"
        stroke="${bg_color}" stroke-width="1.8" fill="none"/>

  <!-- X وسط فایل -->
  <path d="M7 8 L12 16 M12 8 L7 16"
        stroke="${bg_color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,

    icon_print(sizeName =  component_props.elementSizes, bg_color = "#107C41") {
        const size = tools_css.getIconSize(sizeName , sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="print"
    width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>print</title>
  <path d="M6 9V4h12v5" stroke="${bg_color}" stroke-width="2" stroke-linejoin="round"/>
  <rect x="4" y="9" width="16" height="8" rx="2" stroke="${bg_color}" stroke-width="2"/>
  <rect x="7" y="13" width="10" height="7" stroke="${bg_color}" stroke-width="2"/>
  <circle cx="17" cy="12" r="1" fill="${bg_color}"/>
</svg>`;
    },


    icon_filter(sizeName = component_props.elementSizes, bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);

        return `
<svg xmlns="http://www.w3.org/2000/svg" 
     role="img" 
     aria-label="filter"
     width="${size}" height="${size}" 
     viewBox="0 0 24 24" 
     fill="none">
  <title>filter</title>
  <path d="M4 4h16l-6 7v6l-4 3v-9L4 4z"
        stroke="${bg_color}" 
        stroke-width="1.8" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        fill="none"/>
</svg>`;
    },


    icon_clear_broom(sizeName = component_props.elementSizes, bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="clear broom"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <title>clear broom</title>
  
    <path d="M15 2L9 14" stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>

    <path d="M8 14c-1 2-2 4-2 6h12c0-2-1-4-2-6H8z" 
          stroke="${bg_color}" stroke-width="2" fill="none" stroke-linejoin="round"/>

    <path d="M7 20h10" stroke="${bg_color}" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;
    },


    icon_empty(sizeName = component_props.elementSizes, bg_color = "#999") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="empty"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>empty</title>

  <circle cx="12" cy="12" r="9" stroke="${bg_color}" stroke-width="1.8" fill="none"/>

  <path d="M8 16L16 8" stroke="${bg_color}" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;
    },


    icon_inputText(sizeName = component_props.elementSizes, bg_color = "#555") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
  <title>input text</title>
  <rect x="3" y="7" width="18" height="10" rx="2" stroke="${bg_color}" stroke-width="1.8"/>
  <text x="7" y="14" font-size="8" fill="${bg_color}" font-family="Arial" font-weight="bold">A</text>
</svg>`;
    },

    icon_selectOption(sizeName = component_props.elementSizes, bg_color = "#555") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
  <title>select option</title>
  <rect x="3" y="7" width="18" height="10" rx="2" stroke="${bg_color}" stroke-width="1.8"/>
  <path d="M9 11l3 3 3-3" stroke="${bg_color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    },

    icon_inputColor(sizeName = component_props.elementSizes,  bg_color = "#555") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
  <title>input color</title>
  <rect x="3" y="7" width="18" height="10" rx="2" stroke="${bg_color}" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="3" fill="${bg_color}"/>
</svg>`;
    },

    icon_math(sizeName = component_props.elementSizes, bg_color = "#555") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
  <title>math</title>
  <rect x="3" y="3" width="18" height="18" rx="3" stroke="${bg_color}" stroke-width="1.8"/>
  <path d="M8 8l8 8M16 8l-8 8M12 6v4M12 14v4" stroke="${bg_color}" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;
    },



    icon_input_acl(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="input acl"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>input acl</title>
 
  <rect x="3" y="5" width="18" height="14" rx="3" ry="3" stroke="${bg_color}" stroke-width="1.5"/>
  
  <path d="M9 10l3 3 3-3" stroke="${bg_color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

  <circle cx="17" cy="15" r="2" stroke="${bg_color}" stroke-width="1.3"/>
  <line x1="18.5" y1="16.5" x2="20" y2="18" stroke="${bg_color}" stroke-width="1.3" stroke-linecap="round"/>
</svg>`;
    } ,


    icon_selectAllRight(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="select all right"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>select all right</title>
 
  <path d="M4 8l6 4-6 4" stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  <path d="M10 8l6 4-6 4" stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,

    icon_selectAllLeft(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="select all left"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>select all left</title>
 
  <path d="M20 8l-6 4 6 4" stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 
  <path d="M14 8l-6 4 6 4" stroke="${bg_color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } ,





    icon_edit(sizeName = component_props.elementSizes ,  bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="edit"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>edit</title>
  <path d="M3 17.25V21h3.75L17.81 9.94a1 1 0 0 0 0-1.41L15.47 6.19a1 1 0 0 0-1.41 0L3 17.25z" 
        stroke="${bg_color}" stroke-width="2" stroke-linejoin="round" fill="none"/>
  <path d="M14.06 7.02l2.92 2.92" 
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
</svg>`;
    } ,


    icon_delete(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="delete"
     width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  <title>delete</title>
  <path d="M9 3h6l1 2h4v2H4V5h4l1-2z" 
        stroke="${bg_color}" stroke-width="2" stroke-linejoin="round" fill="none"/>
  <path d="M6 7h12l-1 13H7L6 7z" 
        stroke="${bg_color}" stroke-width="2" stroke-linejoin="round" fill="none"/>
  <path d="M10 10v8M14 10v8" 
        stroke="${bg_color}" stroke-width="2" stroke-linecap="round"/>
</svg>`;
    } ,





    icon_wallet(sizeName = component_props.elementSizes, bg_color = "#00AEEF") {
        const size = tools_css.getIconSize(sizeName, sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="wallet"
    width="${size}" height="${size}" viewBox="0 0 346 244"  fill="none">
  <title>wallet</title>
  
    <path fill="${bg_color}" d="M229.73,181.71c-15.74,0-28.5-12.76-28.5-28.5v-4c0-15.74,12.76-28.5,28.5-28.5h41.5V82.65
     c0-13.25-10.75-24-24-24h-207c-13.25,0-24,10.75-24,24v132c0,13.25,10.75,24,24,24h207c13.25,0,24-10.75,24-24v-32.94H229.73z"/>
    <path fill="${bg_color}" d="M225.21,54.36l-21.09-37.72c-5.1-9.8-17.17-13.61-26.97-8.52l-88.9,46.22L225.21,54.36z"/>
    <path fill="${bg_color}" d="M295.98,125.21h-67.8c-11.05,0-20,8.95-20,20v10.88c0,11.05,8.95,20,20,20h67.8c5.52,0,10-4.48,10-10v-30.88
	C305.98,129.69,301.5,125.21,295.98,125.21z M234.65,169.23c-10.26,0-18.58-8.32-18.58-18.58s8.32-18.58,18.58-18.58
	s18.58,8.32,18.58,18.58S244.91,169.23,234.65,169.23z"/>
</svg>`;
    } ,

    icon_wallet2(sizeName = component_props.elementSizes, bg_color = "#00AEEF") {
        const size = tools_css.getIconSize(sizeName, sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="wallet"
    width="${size}" height="${size}" viewBox="0 0 197.43 203.49"  fill="none">
  <title>wallet</title>
    <path fill="none" opacity="0.4" stroke="${bg_color}" stroke-width="5"  d="M142.99,159.38c-9.05,0-16.39-7.34-16.39-16.39s7.34-16.39,16.39-16.39h37.69v32.91L142.99,159.38z"/>
    <path fill="${bg_color}" opacity="0.2" d="M152.66,81.2c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07L119.6,13.62 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,80.95,152.66,81.2,152.66,81.2z"/>
    <path fill="${bg_color}" opacity="0.2" d="M14.78,144v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
    <path fill="none" stroke="${bg_color}" stroke-width="5" d="M14.78,144v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
    <line fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="105.35" x2="184.14" y2="105.35"/>
    <line fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="170.91" x2="184.14" y2="170.91"/>
    <path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M142.99,154.52c-9.05,0-16.39-7.34-16.39-16.39c0-9.05,7.34-16.39,16.39-16.39h37.69v32.91L142.99,154.52z"/>
    <circle fill="none" stroke="${bg_color}" stroke-width="5"  cx="149.91" cy="138.64" r="7.77"/>
    <path fill="none" stroke="${bg_color}" stroke-width="5"  d="M152.66,83.25c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07L119.6,15.67 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,83,152.66,83.25,152.66,83.25z"/>
    <path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M133.5,83.26l10.6-12.38c0,0-5.99-5.32-6.23-9.29c-0.37-6,3.65-8.72,3.65-8.72l-19.4-14.96 c0,0-2.21,4.41-8.07,5.82c-6.34,1.52-11.19-1.95-11.87-2.44c0,0-21.74,25.57-35.11,41.86C90.9,81.95,133.5,83.26,133.5,83.26z"/>
    <path fill="none" stroke="${bg_color}" stroke-width="5"  d="M92.71,78.8c0,6.49,5.26,4.75,11.75,4.75s11.75,1.74,11.75-4.75s-5.26-11.75-11.75-11.75 S92.71,72.31,92.71,78.8z"/>
</svg>`;
    } ,




    icon_cardNumber(sizeName = component_props.elementSizes, bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName, sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="card_number"
    width="${size}" height="${size}" viewBox="0 0 316 221" fill="none">
  <title>Card Number</title>
    <g>
     	<path fill="${bg_color}" d="M271.25,138.17c-22.09,0-40,17.91-40,40c0,22.09,17.91,40,40,40s40-17.91,40-40
		C311.25,156.08,293.34,138.17,271.25,138.17z M289.73,174.17h-6.51l-2.36,8.06h6.87c2.22,0,4.03,1.8,4.03,4.03v0
		c0,2.22-1.8,4.03-4.03,4.03h-9.22l-1.69,5.78c-0.62,2.14-2.86,3.36-5,2.74h0c-2.14-0.62-3.36-2.86-2.74-5l1.03-3.52h-5.73
		l-1.69,5.78c-0.62,2.14-2.86,3.36-5,2.74h0c-2.14-0.62-3.36-2.86-2.74-5l1.03-3.52h-3.21c-2.22,0-4.03-1.8-4.03-4.03v0
		c0-2.22,1.8-4.03,4.03-4.03h5.56l2.36-8.06h-5.92c-2.22,0-4.03-1.8-4.03-4.03s1.8-4.03,4.03-4.03h8.27l1.71-5.85
		c0.62-2.14,2.86-3.36,5-2.74c2.14,0.62,3.36,2.86,2.74,5l-1.05,3.59h5.73l1.71-5.85c0.62-2.14,2.86-3.36,5-2.74
		c2.14,0.62,3.36,2.86,2.74,5l-1.05,3.59h4.16c2.22,0,4.03,1.8,4.03,4.03S291.95,174.17,289.73,174.17z"/>
        <polygon fill="${bg_color}" points="266.73,182.23 272.47,182.23 274.82,174.17 269.09,174.17 	"/>
    </g>
    <g>
	    <path fill="${bg_color}" d="M260.25,6.17h-234c-11.05,0-20,8.95-20,20v140c0,11.05,8.95,20,20,20h194c0-33.14,26.86-60,60-60v-100
		C280.25,15.12,271.3,6.17,260.25,6.17z M63.04,15.21c19.33,0,35,15.67,35,35c0,19.33-15.67,35-35,35s-35-15.67-35-35
		C28.04,30.88,43.71,15.21,63.04,15.21z M232.67,111.41c0,5.44-4.41,9.85-9.85,9.85H37.89c-5.44,0-9.85-4.41-9.85-9.85v0
		c0-5.44,4.41-9.85,9.85-9.85h184.93C228.26,101.56,232.67,105.97,232.67,111.41L232.67,111.41z"/>
        <polygon fill="${bg_color}" points="56.6,68.24 68.73,68.24 68.73,42.17 83.34,42.17 83.34,31.56 42.41,31.56 42.41,42.17 56.6,42.17 	"/>
    </g>
</svg>`;
    },



    icon_note(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Note"
    width="${size}" height="${size}" viewBox="0 0 201 239" fill="none">
  <title>Note</title>
    <path stroke="${bg_color}" stroke-width="10" d="M171.38,228.02h-141c-11.05,0-20-8.95-20-20v-147c0-11.05,8.95-20,20-20h141c11.05,0,20,8.95,20,20v147 C191.38,219.07,182.42,228.02,171.38,228.02z"/>
    <circle fill="${bg_color}" cx="48.59" cy="102.88" r="10"/>
    <path fill="${bg_color}" d="M155.95,108.63H77.76c-3.31,0-6-2.69-6-6v0c0-3.31,2.69-6,6-6h78.19c3.31,0,6,2.69,6,6v0 C161.95,105.95,159.26,108.63,155.95,108.63z"/>
    <circle fill="${bg_color}" cx="49.12" cy="135.28" r="10"/>
    <path fill="${bg_color}" d="M156.48,141.03H78.29c-3.31,0-6-2.69-6-6v0c0-3.31,2.69-6,6-6h78.19c3.31,0,6,2.69,6,6v0 C162.48,138.35,159.79,141.03,156.48,141.03z"/>
    <circle fill="${bg_color}" cx="47.7" cy="167.68" r="10"/>
    <path fill="${bg_color}" d="M155.06,173.43H76.87c-3.31,0-6-2.69-6-6l0,0c0-3.31,2.69-6,6-6h78.19c3.31,0,6,2.69,6,6l0,0 C161.06,170.75,158.37,173.43,155.06,173.43z"/>
    <path stroke="${bg_color}" stroke-width="10" d="M55.33,69.93c-11.05,0-20-13.43-20-30s8.95-30,20-30s20,13.43,20,30"/>
    <path stroke="${bg_color}" stroke-width="10" d="M103.83,69.93c-11.05,0-20-13.43-20-30s8.95-30,20-30s20,13.43,20,30"/>
    <path stroke="${bg_color}" stroke-width="10" d="M143.83,69.93c-11.05,0-20-13.43-20-30s8.95-30,20-30c11.05,0,20,13.43,20,30"/>
</svg>`;
    } ,



    icon_tag(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Title"
    width="${size}" height="${size}" viewBox="0 0 277 300" fill="none">
    <title>Title</title>
    <path stroke="${bg_color}" stroke-width="10" d="M94.38,279.52l111.46-121.67l25.83-101.33c0,0-102.08,29.43-103.26,30.41L16.95,208.59 c-7.46,8.14-6.91,20.8,1.24,28.26l47.93,43.91C74.27,288.22,86.92,287.67,94.38,279.52z"/>
    <path fill="${bg_color}" d="M66.13,199.07l41.81-45.64c1.7-1.85,1.57-4.73-0.28-6.42h0c-1.85-1.7-4.73-1.57-6.42,0.28l-41.81,45.64 c-1.7,1.85-1.57,4.73,0.28,6.42l0,0C61.56,201.05,64.44,200.92,66.13,199.07z"/>
    <path fill="${bg_color}" d="M134.07,213.17l-45.64-41.81c-1.85-1.7-4.73-1.57-6.42,0.28h0c-1.7,1.85-1.57,4.73,0.28,6.42l45.64,41.81 c1.85,1.7,4.73,1.57,6.42-0.28h0C136.05,217.75,135.93,214.87,134.07,213.17z"/>
    <circle stroke="${bg_color}" stroke-width="10" cx="188.52" cy="99.03" r="12.5"/>
    <path stroke="${bg_color}" stroke-width="10" d="M179.21,67.43c-12.1-45.11-0.09-44.43,30.26-53.62c42.13-12.77,46.69-7.12,54.32,38.78 c4.3,25.88-16.7,34.71-62.57,45.91"/>
</svg>`;
    },


    icon_title(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Title"
    width="${size}" height="${size}" viewBox="0 0 230 280" fill="none">
    <title>Title</title>
      <path fill="${bg_color}" d="M83,37.5H50V24c0-8.28-6.72-15-15-15h-7c-8.28,0-15,6.72-15,15v64c0,8.28,6.72,15,15,15h7c8.28,0,15-6.72,15-15 V74.5h33c8.28,0,15-6.72,15-15v-7C98,44.22,91.28,37.5,83,37.5z"/>
      <path fill="${bg_color}" d="M164.21,74.99l33-0.31l0.13,13.5c0.08,8.28,6.86,14.94,15.14,14.86l7-0.07c8.28-0.08,14.94-6.86,14.86-15.14 l-0.61-64c-0.08-8.28-6.86-14.94-15.14-14.86l-7,0.07c-8.28,0.08-14.94,6.86-14.86,15.14l0.13,13.5l-33,0.31 c-8.28,0.08-14.94,6.86-14.86,15.14l0.07,7C149.15,68.41,155.92,75.07,164.21,74.99z"/>
      <path fill="${bg_color}" d="M178.32,225H143V29.97c0-8.28-6.72-15-15-15h-10c-8.28,0-15,6.72-15,15V225H67.68c-8.28,0-15,6.72-15,15v10 c0,8.28,6.72,15,15,15H118h10h50.32c8.28,0,15-6.72,15-15v-10C193.32,231.72,186.61,225,178.32,225z"/>
</svg>`;
    },



    icon_type(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Type"
    width="${size}" height="${size}" viewBox="0 0 150 160" fill="none">
    <title>Type</title>
   <path fill="${bg_color}" d="M133.93,54.3c-1.32-2.25-3.23-3.76-6.21-5.04c-0.07,1.99-0.45,3.8-0.74,5.14c-5.07,22.91-14.5,54.28-16.08,59.54 c-2.85,7.94-9.7,23.63-22.35,26.11c-2.44,0.48-3.95,0.24-10.83-1.02c-31.01-5.66-38.01-7.64-45.98-10.86 c-4.26-1.73-7.32-3.21-9.54-4.49c0.04,2.76,0.65,4.87,1.71,6.79c1,1.8,3.16,4.79,15.66,9.85c7.97,3.23,14.97,5.21,45.98,10.86 c6.89,1.26,8.39,1.5,10.83,1.02c12.65-2.48,19.5-18.17,22.35-26.11c1.59-5.26,11.01-36.63,16.08-59.54 C135.45,63.67,136.48,58.66,133.93,54.3z"/>
    <path fill="${bg_color}" d="M124.97,37.87c-1.32-2.25-3.23-3.76-6.21-5.04c-0.07,1.99-0.45,3.8-0.74,5.14c-5.07,22.91-14.5,54.28-16.08,59.54 c-2.85,7.94-9.7,23.63-22.35,26.11c-2.44,0.48-3.95,0.24-10.83-1.02c-31.01-5.66-38.01-7.64-45.98-10.86 c-4.26-1.73-7.32-3.21-9.54-4.49c0.04,2.76,0.65,4.87,1.71,6.79c1,1.8,3.16,4.79,15.66,9.85c7.97,3.23,14.97,5.21,45.98,10.86 c6.89,1.26,8.39,1.5,10.83,1.02c12.65-2.48,19.5-18.17,22.35-26.11c1.59-5.26,11.01-36.63,16.08-59.54 C126.49,47.24,127.53,42.23,124.97,37.87z"/>
    <path fill="${bg_color}" d="M115.58,21.58c-2.8-4.77-8.21-6.24-21.1-9.22C83.94,9.92,74.99,7.98,68.21,6.55C64.06,5.2,57.57,3.86,50.78,6.06 c-6.74,2.19-10.71,6.87-19.96,21.71C15.04,53.07,10.18,65.85,7.33,74.51C3.03,87.55,3.02,93.19,5.56,97.75 c1,1.8,3.16,4.79,15.66,9.85c7.97,3.23,14.97,5.21,45.98,10.86c6.89,1.26,8.39,1.5,10.83,1.02c12.65-2.48,19.5-18.17,22.35-26.11 c1.59-5.26,11.01-36.63,16.08-59.54C117.1,30.95,118.14,25.94,115.58,21.58z M78.66,95.23c-1.55,0.8-3.45,0.19-4.25-1.36 L59.18,64.25c-1.74,0.67-3.62,1.05-5.59,1.05c-8.62,0-15.61-6.99-15.61-15.61c0-8.62,6.99-15.61,15.61-15.61S69.2,41.06,69.2,49.69 c0,4.37-1.8,8.31-4.68,11.14l15.51,30.15C80.82,92.53,80.21,94.43,78.66,95.23z"/>
</svg>`;
    },



    icon_number(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Type"
    width="${size}" height="${size}" viewBox="0 0 73.77 69.22" fill="none">
    <title>number</title>
    <path fill="${bg_color}" d="M13.29,28.04h54.42c2.76,0,5-2.24,5-5v-1.37c0-2.76-2.24-5-5-5H13.29c-2.76,0-5,2.24-5,5v1.37 C8.29,25.8,10.53,28.04,13.29,28.04z"/>
    <path fill="${bg_color}" d="M8.29,53.56h54.42c2.76,0,5-2.24,5-5v-1.37c0-2.76-2.24-5-5-5H8.29c-2.76,0-5,2.24-5,5v1.37 C3.29,51.32,5.53,53.56,8.29,53.56z"/>
    <path fill="${bg_color}" d="M50.36,61.26L63.19,8.37c0.65-2.68-1-5.39-3.68-6.04l-1.33-0.32c-2.68-0.65-5.39,1-6.04,3.68L39.32,58.58 c-0.65,2.68,1,5.39,3.68,6.04l1.33,0.32C47.01,65.59,49.71,63.94,50.36,61.26z"/>
    <path fill="${bg_color}" d="M23.85,64.26l12.83-52.89c0.65-2.68-1-5.39-3.68-6.04l-1.33-0.32c-2.68-0.65-5.39,1-6.04,3.68L12.8,61.58 c-0.65,2.68,1,5.39,3.68,6.04l1.33,0.32C20.49,68.59,23.2,66.94,23.85,64.26z"/>
</svg>`;
    },



    icon_category(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Category"
    width="${size}" height="${size}" viewBox="0 0 379 344" fill="none">
    <title>category</title>
    <path fill="none" stroke="${bg_color}" stroke-width="20" d="M280.32,131.68c8.11-8.11,8.05-21.32-0.14-29.51l-75.85-74.85c-8.19-8.19-21.4-8.25-29.51-0.14l-75.13,75.13 c-8.11,8.11-8.05,21.32,0.14,29.51L280.32,131.68z"/>
    <circle fill="none" stroke="${bg_color}" stroke-width="20" cx="286.36" cy="246.5" r="75"/>
    <path fill="none" stroke="${bg_color}" stroke-width="20" d="M38.64,321.5h110c11.05,0,20-8.95,20-20v-110c0-11.05-8.95-20-20-20h-110c-11.05,0-20,8.95-20,20v110 C18.64,312.55,27.6,321.5,38.64,321.5z"/>
</svg>`;
    },


    icon_clip(sizeName = component_props.elementSizes , bg_color = "#000") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clip"
    width="${size}" height="${size}" viewBox="0 0 485 458" fill="none">
    <title>clip</title>
     <path fill="${bg_color}" d="M65.41,248.8L344.66,48.46c4.49-3.22,5.52-9.47,2.3-13.95l-5.25-7.31c-3.22-4.49-9.47-5.52-13.95-2.3L48.51,225.23 c-4.49,3.22-5.52,9.47-2.3,13.95l5.25,7.31C54.67,250.99,60.92,252.02,65.41,248.8z"/>
     <path fill="none" stroke="${bg_color}" stroke-width="30"  d="M191.18,420.73c-40.97,29.39-103.8,11.92-140.35-39.02s-32.96-116.06,8.01-145.45"/>
     <path fill="${bg_color}" d="M198.03,433.66l131.5-94.34c4.49-3.22,5.52-9.47,2.3-13.95l-5.25-7.31c-3.22-4.49-9.47-5.52-13.95-2.3l-131.5,94.34 c-4.49,3.22-5.52,9.47-2.3,13.95l5.25,7.31C187.3,435.85,193.54,436.88,198.03,433.66z"/>
     <path fill="${bg_color}" d="M420.27,142.52L150.11,336.33c-4.49,3.22-5.52,9.47-2.3,13.95l5.25,7.31c3.22,4.49,9.47,5.52,13.95,2.3l270.16-193.81 c4.49-3.22,5.52-9.47,2.3-13.95l-5.25-7.31C431.01,140.33,424.76,139.3,420.27,142.52z"/>
     <path fill="none" stroke="${bg_color}" stroke-width="30"  d="M336.87,36.51c36.51-26.19,85.59-20.28,109.61,13.21s13.9,81.87-22.61,108.07"/>
     <path fill="none" stroke="${bg_color}" stroke-width="30"  d="M155.22,350.51c-12.87,9.23-32.62,3.73-44.11-12.28c-11.49-16.02-10.37-36.48,2.5-45.72"/>
     <path fill="${bg_color}" d="M125.41,301.9l216.85-155.57c4.49-3.22,5.52-9.47,2.3-13.95l-5.25-7.31c-3.22-4.49-9.47-5.52-13.95-2.3L108.51,278.33 c-4.49,3.22-5.52,9.47-2.3,13.95l5.25,7.31C114.68,304.09,120.93,305.12,125.41,301.9z"/>
</svg>`;
    },


    icon_withdrawal(sizeName = component_props.elementSizes , bg_color = "#00AEEF") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Withdrawal"
    width="${size}" height="${size}" viewBox="0 0 350.91 358.26" fill="none">
    <title>Withdrawal</title>
<g id="Layer_4">
	<path fill="none" stroke="${bg_color}" stroke-width="5"  d="M321.66,349.33c7.96,0.01,15.33,0.02,15.33,0.02l0,0c3.46,0,6.91,0.01,10.37,0.01"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M34.84,348.92c1.74,0,279.26,0.39,279.3,0.39"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M3.55,348.87c4.67,0.01,9.35,0.01,14.02,0.02"/>
</g>
<g id="Layer_1">
	<path fill="none" stroke="${bg_color}" stroke-width="5" opacity="0.4" d="M142.99,316.64c-9.05,0-16.39-7.34-16.39-16.39s7.34-16.39,16.39-16.39h37.69v32.91L142.99,316.64z"/>
	<path fill="${bg_color}" opacity="0.2" d="M152.66,238.47c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,238.21,152.66,238.47,152.66,238.47z"/>
	<path fill="${bg_color}" opacity="0.2" d="M14.78,301.26v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M14.78,301.26v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
	<line fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="262.61" x2="184.14" y2="262.61"/>
	<line fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="328.17" x2="184.14" y2="328.17"/>
	<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M142.99,311.78c-9.05,0-16.39-7.34-16.39-16.39c0-9.05,7.34-16.39,16.39-16.39h37.69v32.91L142.99,311.78z"/>
	<circle fill="none" stroke="${bg_color}" stroke-width="5" cx="149.91" cy="295.91" r="7.77"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M152.66,240.51c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,240.26,152.66,240.51,152.66,240.51z"/>
	<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M133.5,240.53l10.6-12.38c0,0-5.99-5.32-6.23-9.29c-0.37-6,3.65-8.72,3.65-8.72l-19.4-14.96 c0,0-2.21,4.41-8.07,5.82c-6.34,1.52-11.19-1.95-11.87-2.44c0,0-21.74,25.57-35.11,41.86C90.9,239.21,133.5,240.53,133.5,240.53z"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M92.71,236.06c0,6.49,5.26,4.75,11.75,4.75s11.75,1.74,11.75-4.75c0-6.49-5.26-11.75-11.75-11.75 S92.71,229.58,92.71,236.06z"/>
</g>
<g id="Layer_2">
	<path fill="${bg_color}" opacity="0.2" d="M131.44,70.38l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83c3.44-4.32,2.73-10.61-1.6-14.05 L179.58,9.9c-4.32-3.44-10.61-2.73-14.05,1.6l-35.69,44.83C126.4,60.65,127.12,66.94,131.44,70.38z"/>
	<path fill="${bg_color}" opacity="0.2" d="M327.18,118.34l-25.09,34.76c-1.62,2.24-1.11,5.36,1.13,6.98l5.94,4.29c2.24,1.62,5.36,1.11,6.98-1.13 l25.09-34.76c1.62-2.24,1.11-5.36-1.13-6.98l-5.94-4.29C331.92,115.6,328.79,116.1,327.18,118.34z"/>
	<path fill="${bg_color}" opacity="0.2" d="M274.47,103.99c0,0-29.11,37.98-34.39,42.29c-5.28,4.31-11.38,3.03-16.44-1 c-5.06-4.03-93.51-74.75-93.51-74.75c-3.44,4.32-4.73,13.61-0.4,17.05l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83 C279.5,113.72,278.79,107.42,274.47,103.99"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M131.44,70.38l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83c3.44-4.32,2.73-10.61-1.6-14.05 L179.58,9.9c-4.32-3.44-10.61-2.73-14.05,1.6l-35.69,44.83C126.4,60.65,127.12,66.94,131.44,70.38z"/>
	<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M148.29,73.25l74.18,58.62c2.24,1.78,4.88-2.55,9.31-2.92c4.13-0.34,8.08,4.41,9.74,2.33l20.58-25.4 c1.72-2.16-5.1-6.81-5.89-11.36c-0.79-4.54,4.45-8.98,2.29-10.7l-71.18-55.62c-2.23-1.78-5.87,3.82-10.29,4.45 c-4.14,0.58-9.1-3.94-10.76-1.85l-19.58,23.4c-1.72,2.16,3.6,6.06,3.89,9.86C150.87,67.85,146.13,71.53,148.29,73.25z"/>
	<circle fill="${bg_color}" cx="172.01" cy="55.74" r="6.35"/>
	<circle fill="${bg_color}" cx="235.58" cy="105.92" r="6.35"/>
	<ellipse fill="none" stroke="${bg_color}" stroke-width="5" cx="203.49" cy="81.47" rx="22.23" ry="22.74"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M208.72,81.71c0,0,7.92-2.25,4-8.2c-1.67-2.54-5.56-3.27-7.91-0.88c-2.29,2.33-3.46,4.56-1.2,8.08 c1.98,3.09,2.14,2.91,2.28,5.44c0.25,4.42-3.65,6.57-6.81,5.31c-3.16-1.26-4.66-3.3-4.81-6.95c-0.18-4.42,4.02-5.04,4.02-5.04"/>
	<line fill="none" stroke="${bg_color}" stroke-width="5" x1="213.8" y1="68.72" x2="211.24" y2="72.05"/>
	<line fill="none" stroke="${bg_color}" stroke-width="5" x1="196.29" y1="90.14" x2="193.73" y2="93.48"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M275.87,103.99c0,0-29.11,37.98-34.39,42.29c-5.28,4.31-11.38,3.03-16.44-1 c-5.06-4.03-93.51-74.75-93.51-74.75c-3.44,4.32-4.73,13.61-0.4,17.05l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83 C280.9,113.72,280.19,107.42,275.87,103.99"/>
	<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M323.6,121.25c0,0-10.59-17.67-18.42-27.02s-30.29-27.54-34.59-28.55s-16.44,2.02-16.44,2.02l22.48,18.44 c0,0,1.77,0.51,5.05,2.02c3.28,1.52,26.02,24.51,26.02,24.51S286.12,86,277.13,86.66c-13.63,1-19.46-1.94-26.02-1.16 c-4.54,0.54-6.33,7.46-0.52,9.23c5.81,1.77,16.44,1.52,21.49,4.8c5.05,3.28,1.75,7.32,5.05,13.64c3.3,6.32,13.64,16.68,13.64,16.68 l-11.35-11.36l-11.39,14.89c0,0,9.85,10.36,14.65,11.62c4.8,1.26,22.99,2.53,22.99,2.53L323.6,121.25z"/>
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M327.18,118.34l-25.09,34.76c-1.62,2.24-1.11,5.36,1.13,6.98l5.94,4.29c2.24,1.62,5.36,1.11,6.98-1.13 l25.09-34.76c1.62-2.24,1.11-5.36-1.13-6.98l-5.94-4.29C331.92,115.6,328.79,116.1,327.18,118.34z"/>
</g>
<g id="Layer_3">
	<path fill="none" stroke="${bg_color}" stroke-width="5" d="M118.2,46.96l-39.24,5.29l12.54,4.15c0,0-44.13,14.12-59.45,66.77c-7.22,24.81-7.12,53.12-7.04,58.14 c-4.24,1.8-7.22,6-7.22,10.89c0,6.53,5.29,11.83,11.83,11.83s11.83-5.29,11.83-11.83c0-5.6-3.89-10.27-9.11-11.5 c-0.01-7.72,0.56-26.88,5.53-50.12c11.28-52.75,58.74-68.04,58.74-68.04l-0.35,12.38L118.2,46.96z"/>
</g>
</svg>`;
    },


    icon_deposit(sizeName = component_props.elementSizes , bg_color = "#00AEEF") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deposit"
    width="${size}" height="${size}" viewBox="0 0 350.91 358.26" fill="none">
    <title>Deposit</title>
<g id="Layer_4">
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M321.66,349.33c7.96,0.01,15.33,0.02,15.33,0.02l0,0c3.46,0,6.91,0.01,10.37,0.01"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M34.84,348.92c1.74,0,279.26,0.39,279.3,0.39"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M3.55,348.87c4.67,0.01,9.35,0.01,14.02,0.02"/>
</g>
<g id="Layer_1">
	<path  fill="none" stroke="${bg_color}" stroke-width="5" opacity="0.4" d="M142.99,316.64c-9.05,0-16.39-7.34-16.39-16.39s7.34-16.39,16.39-16.39h37.69v32.91L142.99,316.64z"/>
	<path  fill="${bg_color}" opacity="0.2" d="M152.66,238.47c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,238.21,152.66,238.47,152.66,238.47z"/>
	<path  fill="${bg_color}" opacity="0.2" d="M14.78,301.26v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M14.78,301.26v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
	<line  fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="262.61" x2="184.14" y2="262.61"/>
	<line  fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="328.17" x2="184.14" y2="328.17"/>
	<path  fill="#fff" stroke="${bg_color}" stroke-width="5"  d="M142.99,311.78c-9.05,0-16.39-7.34-16.39-16.39c0-9.05,7.34-16.39,16.39-16.39h37.69v32.91L142.99,311.78z"/>
	<circle  fill="none" stroke="${bg_color}" stroke-width="5" cx="149.91" cy="295.91" r="7.77"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M152.66,240.51c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,240.26,152.66,240.51,152.66,240.51z"/>
	<path  fill="#fff" stroke="${bg_color}" stroke-width="5" d="M133.5,240.53l10.6-12.38c0,0-5.99-5.32-6.23-9.29c-0.37-6,3.65-8.72,3.65-8.72l-19.4-14.96 c0,0-2.21,4.41-8.07,5.82c-6.34,1.52-11.19-1.95-11.87-2.44c0,0-21.74,25.57-35.11,41.86C90.9,239.21,133.5,240.53,133.5,240.53z"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M92.71,236.06c0,6.49,5.26,4.75,11.75,4.75s11.75,1.74,11.75-4.75c0-6.49-5.26-11.75-11.75-11.75 S92.71,229.58,92.71,236.06z"/>
</g>
<g id="Layer_2">
	<path  fill="${bg_color}" opacity="0.2" d="M131.44,70.38l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83c3.44-4.32,2.73-10.61-1.6-14.05 L179.58,9.9c-4.32-3.44-10.61-2.73-14.05,1.6l-35.69,44.83C126.4,60.65,127.12,66.94,131.44,70.38z"/>
	<path  fill="${bg_color}" opacity="0.2"  d="M327.18,118.34l-25.09,34.76c-1.62,2.24-1.11,5.36,1.13,6.98l5.94,4.29c2.24,1.62,5.36,1.11,6.98-1.13 l25.09-34.76c1.62-2.24,1.11-5.36-1.13-6.98l-5.94-4.29C331.92,115.6,328.79,116.1,327.18,118.34z"/>
	<path  fill="${bg_color}" opacity="0.2" d="M274.47,103.99c0,0-29.11,37.98-34.39,42.29c-5.28,4.31-11.38,3.03-16.44-1 c-5.06-4.03-93.51-74.75-93.51-74.75c-3.44,4.32-4.73,13.61-0.4,17.05l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83 C279.5,113.72,278.79,107.42,274.47,103.99"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M131.44,70.38l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83c3.44-4.32,2.73-10.61-1.6-14.05 L179.58,9.9c-4.32-3.44-10.61-2.73-14.05,1.6l-35.69,44.83C126.4,60.65,127.12,66.94,131.44,70.38z"/>
	<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M148.29,73.25l74.18,58.62c2.24,1.78,4.88-2.55,9.31-2.92c4.13-0.34,8.08,4.41,9.74,2.33l20.58-25.4 c1.72-2.16-5.1-6.81-5.89-11.36c-0.79-4.54,4.45-8.98,2.29-10.7l-71.18-55.62c-2.23-1.78-5.87,3.82-10.29,4.45 c-4.14,0.58-9.1-3.94-10.76-1.85l-19.58,23.4c-1.72,2.16,3.6,6.06,3.89,9.86C150.87,67.85,146.13,71.53,148.29,73.25z"/>
	<circle fill="${bg_color}" cx="172.01" cy="55.74" r="6.35"/>
	<circle fill="${bg_color}" cx="235.58" cy="105.92" r="6.35"/>
	<ellipse  fill="none" stroke="${bg_color}" stroke-width="5" cx="203.49" cy="81.47" rx="22.23" ry="22.74"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M208.72,81.71c0,0,7.92-2.25,4-8.2c-1.67-2.54-5.56-3.27-7.91-0.88c-2.29,2.33-3.46,4.56-1.2,8.08 c1.98,3.09,2.14,2.91,2.28,5.44c0.25,4.42-3.65,6.57-6.81,5.31c-3.16-1.26-4.66-3.3-4.81-6.95c-0.18-4.42,4.02-5.04,4.02-5.04"/>
	<line  fill="none" stroke="${bg_color}" stroke-width="5" x1="213.8" y1="68.72" x2="211.24" y2="72.05"/>
	<line  fill="none" stroke="${bg_color}" stroke-width="5" x1="196.29" y1="90.14" x2="193.73" y2="93.48"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M275.87,103.99c0,0-29.11,37.98-34.39,42.29c-5.28,4.31-11.38,3.03-16.44-1 c-5.06-4.03-93.51-74.75-93.51-74.75c-3.44,4.32-4.73,13.61-0.4,17.05l96.6,76.89c4.32,3.44,10.61,2.73,14.05-1.6l35.69-44.83 C280.9,113.72,280.19,107.42,275.87,103.99"/>
	<path  fill="#fff" stroke="${bg_color}" stroke-width="5" d="M323.6,121.25c0,0-10.59-17.67-18.42-27.02s-30.29-27.54-34.59-28.55s-16.44,2.02-16.44,2.02l22.48,18.44 c0,0,1.77,0.51,5.05,2.02c3.28,1.52,26.02,24.51,26.02,24.51S286.12,86,277.13,86.66c-13.63,1-19.46-1.94-26.02-1.16 c-4.54,0.54-6.33,7.46-0.52,9.23c5.81,1.77,16.44,1.52,21.49,4.8c5.05,3.28,1.75,7.32,5.05,13.64c3.3,6.32,13.64,16.68,13.64,16.68 l-11.35-11.36l-11.39,14.89c0,0,9.85,10.36,14.65,11.62c4.8,1.26,22.99,2.53,22.99,2.53L323.6,121.25z"/>
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M327.18,118.34l-25.09,34.76c-1.62,2.24-1.11,5.36,1.13,6.98l5.94,4.29c2.24,1.62,5.36,1.11,6.98-1.13 l25.09-34.76c1.62-2.24,1.11-5.36-1.13-6.98l-5.94-4.29C331.92,115.6,328.79,116.1,327.18,118.34z"/>
</g>
<g id="Layer_3">
	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M202.57,315.81l39.42,3.73l-11.27-6.88c0,0,46.18-3.76,73.03-51.57c12.66-22.53,18.97-50.12,20.03-55.03 c4.54-0.79,8.39-4.21,9.5-8.98c1.48-6.36-2.48-12.72-8.84-14.2s-12.72,2.48-14.2,8.84c-1.27,5.45,1.46,10.89,6.27,13.27 c-1.74,7.52-6.64,26.05-16.74,47.56c-22.94,48.82-72.63,52.96-72.63,52.96l3.15-11.98L202.57,315.81z"/>
</g>
</svg>`;
    },


    icon_transition(sizeName = component_props.elementSizes , bg_color = "#00AEEF") {
        const size = tools_css.getIconSize(sizeName , sizeName);
        return `
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transition"
    width="${size}" height="${size}" viewBox="0 0 350.91 358.26" fill="none">
    <title>Transition</title>
    <g id="Layer_4">
		<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M321.66,349.33c7.96,0.01,15.33,0.02,15.33,0.02l0,0c3.46,0,6.91,0.01,10.37,0.01"/>
		<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M34.84,348.92c1.74,0,279.26,0.39,279.3,0.39"/>
		<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M3.55,348.87c4.67,0.01,9.35,0.01,14.02,0.02"/>
	</g>
	<g id="Layer_1">
		<path fill="none" stroke="${bg_color}" stroke-width="5" opacity="0.4" d="M142.99,316.64c-9.05,0-16.39-7.34-16.39-16.39s7.34-16.39,16.39-16.39h37.69v32.91L142.99,316.64z"/>
		<path fill="${bg_color}" opacity="0.2" d="M152.66,238.47c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,238.21,152.66,238.47,152.66,238.47z"/>
		<path fill="${bg_color}" opacity="0.2" d="M14.78,301.26v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
		<path fill="none" stroke="${bg_color}" stroke-width="5" d="M14.78,301.26v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20H34.78 c-11.05,0-20,8.95-20,20v24.72"/>
		<line fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="262.61" x2="184.14" y2="262.61"/>
		<line fill="none" stroke="${bg_color}" stroke-width="5" x1="17.78" y1="328.17" x2="184.14" y2="328.17"/>
		<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M142.99,311.78c-9.05,0-16.39-7.34-16.39-16.39c0-9.05,7.34-16.39,16.39-16.39h37.69v32.91L142.99,311.78z"/>
		<circle fill="none" stroke="${bg_color}" stroke-width="5" cx="149.91" cy="295.91" r="7.77"/>
		<path fill="none" stroke="${bg_color}" stroke-width="5" d="M152.66,240.51c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C84.94,240.26,152.66,240.51,152.66,240.51z"/>
		<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M133.5,240.53l10.6-12.38c0,0-5.99-5.32-6.23-9.29c-0.37-6,3.65-8.72,3.65-8.72l-19.4-14.96 c0,0-2.21,4.41-8.07,5.82c-6.34,1.52-11.19-1.95-11.87-2.44c0,0-21.74,25.57-35.11,41.86C90.9,239.21,133.5,240.53,133.5,240.53z"/>
		<path fill="none" stroke="${bg_color}" stroke-width="5" d="M92.71,236.06c0,6.49,5.26,4.75,11.75,4.75s11.75,1.74,11.75-4.75c0-6.49-5.26-11.75-11.75-11.75 S92.71,229.58,92.71,236.06z"/>
	</g>
    <g id="Layer_5">
    	<path fill="none" stroke="${bg_color}" stroke-width="5" opacity="0.4"  d="M267.98,156.03c-9.05,0-16.39-7.34-16.39-16.39s7.34-16.39,16.39-16.39h37.69v32.91L267.98,156.03z"/>
	    <path fill="${bg_color}" opacity="0.2" d="M277.65,77.85c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C209.93,77.6,277.65,77.85,277.65,77.85z"/>
    	<path fill="${bg_color}" opacity="0.2" d="M139.77,140.65v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20 H159.77c-11.05,0-20,8.95-20,20v24.72"/>
    	<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M139.77,140.65v27.75c0,11.05,8.95,20,20,20h129.77c11.05,0,20-8.95,20-20v-68.38c0-11.05-8.95-20-20-20 H159.77c-11.05,0-20,8.95-20,20v24.72"/>
	    <line  fill="none" stroke="${bg_color}" stroke-width="5" x1="142.77" y1="102" x2="309.13" y2="102"/>
	    <line  fill="none" stroke="${bg_color}" stroke-width="5" x1="142.77" y1="167.56" x2="309.13" y2="167.56"/>
	    <path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M267.98,151.17c-9.05,0-16.39-7.34-16.39-16.39c0-9.05,7.34-16.39,16.39-16.39h37.69v32.91L267.98,151.17z"/>
	    <circle  fill="none" stroke="${bg_color}" stroke-width="5" cx="274.89" cy="135.29" r="7.77"/>
	    <path  fill="none" stroke="${bg_color}" stroke-width="5" d="M277.65,79.9c0,0,8.67-11.56,13-16.83c3.5-4.27,2.88-10.57-1.38-14.07l-44.68-36.68 c-4.27-3.5-10.57-2.88-14.07,1.38c-18.15,22.11-36.3,44.21-54.45,66.32C209.93,79.65,277.65,79.9,277.65,79.9z"/>
    	<path fill="#fff" stroke="${bg_color}" stroke-width="5" d="M258.49,79.91l10.6-12.38c0,0-5.99-5.32-6.23-9.29c-0.37-6,3.65-8.72,3.65-8.72l-19.4-14.96 c0,0-2.21,4.41-8.07,5.82c-6.34,1.52-11.19-1.95-11.87-2.44c0,0-21.74,25.57-35.11,41.86C215.89,78.6,258.49,79.91,258.49,79.91z"/>
	    <path  fill="none" stroke="${bg_color}" stroke-width="5" d="M217.69,75.45c0,6.49,5.26,4.75,11.75,4.75c6.49,0,11.75,1.74,11.75-4.75s-5.26-11.75-11.75-11.75	C222.95,63.7,217.69,68.96,217.69,75.45z"/>
    </g>
	<g id="Layer_3">
		<path  fill="none" stroke="${bg_color}" stroke-width="5" d="M202.57,315.81l39.42,3.73l-11.27-6.88c0,0,46.18-3.76,73.03-51.57c12.66-22.53,18.97-50.12,20.03-55.03 c4.54-0.79,8.39-4.21,9.5-8.98c1.48-6.36-2.48-12.72-8.84-14.2s-12.72,2.48-14.2,8.84c-1.27,5.45,1.46,10.89,6.27,13.27 c-1.74,7.52-6.64,26.05-16.74,47.56c-22.94,48.82-72.63,52.96-72.63,52.96l3.15-11.98L202.57,315.81z"/>
		<path fill="none" stroke="${bg_color}" stroke-width="5" d="M118.2,46.96l-39.24,5.29l12.54,4.15c0,0-44.13,14.12-59.45,66.77c-7.22,24.81-7.12,53.12-7.04,58.14 c-4.24,1.8-7.22,6-7.22,10.89c0,6.53,5.29,11.83,11.83,11.83s11.83-5.29,11.83-11.83c0-5.6-3.89-10.27-9.11-11.5 c-0.01-7.72,0.56-26.88,5.53-50.12c11.28-52.75,58.74-68.04,58.74-68.04l-0.35,12.38L118.2,46.96z"/>
	</g>
</svg>`;
    },



}

