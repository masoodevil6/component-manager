

window.NavStep = class NavStep {

    _STEP_NAME=null;
    _STEP_URL=null;
    _STEP_PARAMS = null;
    _STEP_COMPONENT_PROP = {};
    _STEP_TYPE = null;
    _STEP_TAG_ID = null;
    _STEP_RELOAD = false;

    _STEP_COMPONENT_WIDGET = null;

    /* ---------------------------------------------
     SETUP
   --------------------------------------------- */
    constructor(stepName , stepUrl , stepParam=[], type=null , tagId=null  ,reload=false , componentProp={} ) {
        this._STEP_NAME = stepName != null ? stepName : "";
        this._STEP_URL =  stepUrl != null ? stepUrl : "";
        this._STEP_PARAMS = stepParam != null ? stepParam : [];
        this._STEP_COMPONENT_PROP = componentProp != null ? componentProp : {};
        this._STEP_TYPE = type;
        this._STEP_TAG_ID = tagId;
        this._STEP_RELOAD = reload;
    }


    /* ---------------------------------------------
     Get Name
   --------------------------------------------- */
    getName(){
        return this._STEP_NAME;
    }


    /* ---------------------------------------------
     Get component prop
   --------------------------------------------- */
    getComponentProp(){
        return this._STEP_COMPONENT_PROP;
    }


    /* ---------------------------------------------
     Get Name
   --------------------------------------------- */
    getUrl(){
        return this._STEP_URL;
    }


    /* ---------------------------------------------
     Get Name
   --------------------------------------------- */
    getIsReload(){
        return this._STEP_RELOAD;
    }


    /* ---------------------------------------------
     Get Name
   --------------------------------------------- */
    getType(){
        return this._STEP_TYPE;
    }


    /* ---------------------------------------------
     Get Name
   --------------------------------------------- */
    getTagId(){
        return this._STEP_TAG_ID;
    }


    /* ---------------------------------------------
     Get/Set componentWidget
   --------------------------------------------- */

    getComponentWidget(){
        return this._STEP_COMPONENT_WIDGET;
    }
    setComponentWidget(widgetElementId , componentProps){
        this._STEP_COMPONENT_WIDGET =  new window.ComponentWidget(widgetElementId ,componentProps)
    }



    /* ---------------------------------------------
     Get/Set Param
   --------------------------------------------- */

    getParams(){
        return this._STEP_PARAMS;
    }

    setEmptyParams(){
        if (this._STEP_PARAMS != null){
            for (let i = 0; i <  this._STEP_PARAMS.length; i++) {
                const itemParam = this._STEP_PARAMS[i];
                if (itemParam != null && itemParam.hasOwnProperty("name")){
                    if (!itemParam.hasOwnProperty("isFix") || !itemParam.isFix){
                        this._STEP_PARAMS[i].value = null;
                    }
                }
            }
        }
    }

    setParam(key , value){
        if (this._STEP_PARAMS != null){
            for (let i = 0; i <  this._STEP_PARAMS.length; i++) {
                const itemParam = this._STEP_PARAMS[i];
                if (itemParam != null && itemParam.hasOwnProperty("name") &&  itemParam.name == key){
                    this._STEP_PARAMS[i].value = value;
                    break;
                }
            }
        }
    }

    getParam(key){
        if (this._STEP_PARAMS != null){
            for (let i = 0; i <  this._STEP_PARAMS.length; i++) {
                const itemParam = this._STEP_PARAMS[i];
                if (itemParam == key && itemParam.hasOwnProperty("value")){
                    return itemParam.value;
                }
            }
        }
        return null;
    }

}




window.NavStepper = class NavStepper  {

    _ELEMENT_ID = null;
    _ELEMENT = null;
    _WORK_FLOW = [];
    _LAST_STEP_ACTIVE = null;
    /// ------------------------------





    /* ---------------------------------------------
       SETUP
     --------------------------------------------- */
    constructor(elementId , workflow) {
        this._ELEMENT_ID = elementId;
        this._ELEMENT = document.getElementById(elementId);
        if ( this._ELEMENT != null){
            this._WORK_FLOW = workflow;

            this.start()
        }
    }






    /* ---------------------------------------------
       get nav step (CLASS)
     --------------------------------------------- */
    getNavStep_self(stepName = null){
        if (stepName != null){
            const result = this.getNavStep_selfRecycle(this._WORK_FLOW, stepName);
            if (result != null && result.hasOwnProperty("found")){
                return result.found;
            }
        }
        else {
            if (this._WORK_FLOW != null && this._WORK_FLOW.hasOwnProperty("step")){
                return this._WORK_FLOW.step;
            }
        }

        return null;
    }

    getNavStep_selfRecycle(node, targetName, path = []) {
        if (node.step?.getName() === targetName) {
            return { found: node.step, path: [...path, "step"] };
        }

        if (Array.isArray(node.workflow)) {
            for (let i = 0; i < node.workflow.length; i++) {
                const child = node.workflow[i];
                const result = this.getNavStep_selfRecycle(child, targetName, [...path, "workflow", i]);
                if (result) return result;
            }
        }

        return null;
    }





    /* ---------------------------------------------
      get nav step -- parent (CLASS)
     --------------------------------------------- */
    getNavStep_parent(tree, targetName, parent = null) {
        if (tree.step?.getName() === targetName) {
            return parent;
        }

        if (tree.workflow && Array.isArray(tree.workflow)) {
            for (const child of tree.workflow) {
                const result = this.getNavStep_parent(child, targetName, tree.step);
                if (result) return result;
            }
        }

        return null;
    }




    /* ---------------------------------------------
       get nav step (PATH)
     --------------------------------------------- */
    getNavStep_path(stepName = null){
        const result = this.markActiveSteps_simple(this._WORK_FLOW, stepName);
        if (result != null){
            return result;
        }

        return null;
    }

    markActiveSteps_simple(node, targetName) {
        // مسیر رسیدن به target رو پیدا می‌کنیم
        const path = [];

        function findPath(n, name, currentPath = []) {
            if (!n || !n.step) return false;

            const stepName = n.step.getName();
            const newPath = [...currentPath, stepName];

            if (stepName === name) {
                path.push(...newPath);
                return true;
            }

            if (Array.isArray(n.workflow)) {
                for (const child of n.workflow) {
                    if (findPath(child, name, newPath)) {
                        return true;
                    }
                }
            }

            return false;
        }

        findPath(node, targetName);

        // حالا تروارسل برای مشخص کردن active بودن هر step
        const result = [];

        function traverse(n) {
            if (!n || !n.step) return;

            const stepName = n.step.getName();
            const isActive = path.includes(stepName);

            result.push({
                step: n.step,
                active: isActive
            });

            if (Array.isArray(n.workflow)) {
                for (const child of n.workflow) {
                    traverse(child);
                }
            }
        }

        traverse(node);

        return result;
    }



    /* ---------------------------------------------
       direction path
     --------------------------------------------- */
    isDirectionForwardNext(steps , stepData){
        if (this._LAST_STEP_ACTIVE != null){
            if (steps != null){
                for (let i = 0; i < steps.length ; i++) {
                    const item = steps[i];
                    if (item.hasOwnProperty("step") && this._LAST_STEP_ACTIVE == item.step.getName() &&
                        item.hasOwnProperty("active") && item.active ){

                        return true;
                    }
                }
            }
            return  false;
        }
        else {
            return true;
        }
    }



    /* ---------------------------------------------
       set/get param widget
     --------------------------------------------- */
    setParam(stepName , key , value){
        const stepData = this.getNavStep_self(stepName);
        if (stepData != null){
            stepData.setParam(key , value)
        }
    }

    getParam(stepName , key){
        const stepData = this.getNavStep_self(stepName);
        if (stepData != null){
            return stepData.getParam(key)
        }
        return null;
    }






    /* ---------------------------------------------
       step run
     --------------------------------------------- */
    getComponentMessagesId(){
        return this._ELEMENT_ID + "-component-messages-stepper";
    }
    getComponent404Id(){
        return this._ELEMENT_ID + "-component-404-stepper";
    }
    getComponentLoadingId(){
        return this._ELEMENT_ID + "-component-loading-stepper";
    }

    createMainStepper(){
        const componentMessages = document.createElement('component-messages');
        componentMessages.id= this.getComponentMessagesId();
        this._ELEMENT.appendChild(componentMessages);

        const component404 = document.createElement('component-404');
        component404.id= this.getComponent404Id();
        this._ELEMENT.appendChild(component404);

        const componentLoading = document.createElement('component-loading');
        componentLoading.id= this.getComponentLoadingId();
        this._ELEMENT.appendChild(componentLoading);
    }






    /* ---------------------------------------------
       widget creator
     --------------------------------------------- */
    getWidgetId( parentStep= null){
        if (parentStep != null){


            return this._ELEMENT_ID + "-component-widget-step-"+parentStep.getName();
        }
        return this._ELEMENT_ID;
    }

    getWidgetElement(parentStep=null){
        const id = this.getWidgetId(parentStep);
        return document.getElementById(id);
    }

    createComponentWidget(stepData, stepParentData){
        // widget id
        const widgetElementId =  this.getWidgetId(stepData);
        const newWidget = `<component-widget id="${widgetElementId}"></component-widget>`;

        if (stepParentData != null){
            const componentWidget = stepParentData.getComponentWidget();
            if (componentWidget != null){
                const componentLayout = componentWidget.call_getComponentLayout()

                componentLayout.call_addElement( newWidget , stepData.getTagId());
            }

        }
        else{
            const elParent =  this.getWidgetElement(stepParentData);

            if (elParent != null){
                elParent.innerHTML = newWidget;
            }
        }

        return widgetElementId;
    }



    createStep(stepParentData , stepData , data = {}){
        if (stepData != null){
            const url = stepData.getUrl();
            const type = stepData.getType();
            const componentProps = stepData.getComponentProp();


            // create widget
            const widgetElementId = this.createComponentWidget(stepData , stepParentData);


            // create component
            componentProps.prop_fetch = {
                url ,
                data: {
                    type: type ,
                    data: data
                }
            };
            stepData.setComponentWidget(widgetElementId ,componentProps);




           /* if (hasView){
                // create widget
                this.createComponentWidget(widgetId , stepData.getName());

                // create component
                componentProps.prop_fetch = {
                    url ,
                    data: {
                        type: type ,
                        data: data
                    }
                };
                new window.ComponentWidget(widgetId ,componentProps)
            }
            else {
                tools_submit.fetcth(
                    url ,
                    {
                        data: {
                            type: type ,
                            data: data
                        },
                        componentMessagesData: {
                            elId : this.getComponentMessagesId()
                        },
                        componentLoadingData: {
                            elId : this.getComponentLoadingId()
                        },
                        component404Data: {
                            elId : this.getComponent404Id() ,
                            prop_type : "simple_animation" ,
                            fn_callback: () =>{
                                this.goToStep(stepData.getName());
                            }
                        },
                    }
                )
            }*/
        }
    }





    /* ---------------------------------------------
        run
     --------------------------------------------- */
    start(){
        this.createMainStepper();
        this.goToStep();
    }

    goToStep(stepActive = null , forceForward=false){
        let data = [];

        const stepData = this.getNavStep_self(stepActive);
        const stepParentData = this.getNavStep_parent(this._WORK_FLOW, stepActive);
        const steps = this.getNavStep_path(stepActive);
        const isForwardNext = this.isDirectionForwardNext(steps , stepData);

        /// masir ==> all params
        /// others ==> delete
        if (steps != null){
            for (let i = 0; i < steps.length ; i++) {
                const item = steps[i];
                if (item.hasOwnProperty("step") &&
                    item.hasOwnProperty("active")){

                    if (item.active){
                        const params = item.step.getParams();
                        if (Array.isArray(params)){
                            data.push(...params)
                        }
                    }
                    else {
                        // empty params widget
                        item.step.setEmptyParams();

                        // delete params widget
                        const elWidget = this.getWidgetElement(item.step);
                        if (elWidget != null){
                            elWidget.remove();
                        }
                    }
                }
            }
        }


        this._LAST_STEP_ACTIVE = stepData.getName();
        if ((stepData.getIsReload() || isForwardNext || forceForward)){
            this.createStep(stepParentData , stepData , data);
        }

    }

}