
if (typeof listComponentCategory === 'undefined') {
    var listComponentCategory = [
        {
            id  : 1 ,
            category: "text" ,
            components: [
                listComponent["ComponentMessages"] ,
                listComponent["ComponentIsEmpty"] ,
                listComponent["ComponentHeader"] ,
                listComponent["ComponentLabel"] ,
                listComponent["ComponentDescription"] ,
                listComponent["ComponentLink"] ,
                listComponent["ComponentInfo"] ,
                listComponent["ComponentCard"] ,
            ]
        } ,
        {
            id  : 2 ,
            category: "Fetch" ,
            components: [
                listComponent["ComponentLoading"] ,
                listComponent["Component404"] ,
                listComponent["ComponentForm"] ,
                listComponent["ComponentWidget"] ,
                listComponent["ComponentIframe"] ,
            ]
        },
        {
            id  : 3 ,
            category: "Button and Inputs" ,
            components: [
                listComponent["ComponentButton"] ,
                listComponent["ComponentOtp"] ,
                listComponent["ComponentInput"] ,
                listComponent["ComponentInputPrice"] ,
                listComponent["ComponentInputPassword"] ,
                listComponent["ComponentInputEmail"] ,
                listComponent["ComponentInputFile"] ,
                listComponent["ComponentDate"] ,
                listComponent["ComponentSelectOption"] ,
                listComponent["ComponentValidate"] ,
            ]
        },
        {
            id  : 4 ,
            category: "tooltips" ,
            components: [
                listComponent["ComponentTooltipDescription"] ,
            ]
        },

        {
            id  : 10 ,
            category: "Tables" ,
            components: [
                listComponent["ComponentTable"] ,
            ]
        },
        {
            id  : 11 ,
            category: "tabs" ,
            components: [
                listComponent["ComponentTabs"] ,
                listComponent["ComponentTree"] ,
            ]
        },
        {
            id  : 12 ,
            category: "Collapse" ,
            components: [
                listComponent["ComponentCollapse"] ,
            ]
        },
        {
            id  : 13 ,
            category: "Window" ,
            components: [
                listComponent["ComponentWindow"] ,
                listComponent["ComponentWindowConfirm"] ,
            ]
        },
        {
            id  : 14 ,
            category: "Slider Shows" ,
            components: [
                listComponent["ComponentSliderShowOverlapping"] ,
            ]
        },
        {
            id  : 15 ,
            category: "Breadcrumb" ,
            components: [
                listComponent["ComponentBreadcrumb"] ,
            ]
        },


        {
            id  : 20 ,
            category: "Charts" ,
            components: [
                listComponent["ComponentChart"] ,
                listComponent["ComponentChartTreeY"] ,
            ]
        },
        {
            id  : 21 ,
            category: "QR CODE" ,
            components: [
                listComponent["ComponentQrCode"] ,
                listComponent["ComponentCameraQrCodeReader"] ,
                listComponent["ComponentUploadQrCodeReader"] ,
                listComponent["ComponentQrCodeReader"] ,
            ]
        },


        {
            id  : 99 ,
            category: "QR Others" ,
            components: [
                listComponent["ComponentIcon"] ,
                listComponent["ComponentPositionElement"] ,
                listComponent["ComponentBorder"] ,
                listComponent["ComponentQrCodeReader"] ,
                listComponent["ComponentImage"] ,
                listComponent["ComponentLayout"] ,
                listComponent["ComponentMouseScroller"] ,
            ]
        }


    ]
}








/*-------------------------------------
A-01) Component Render
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

-------------------------------------*/
window.ComponentRender = class ComponentRender extends ComponentBase{

    /* ---------------------------------------------
    PROPERTYs
    --------------------------------------------- */
    _COMPONENT_PROPS = {
        part_structure: [

        ] ,

    }

    _COMPONENT_SCHEMA = {
        part_structure: {

        }
    }



    /* ---------------------------------------------
       SETUP
   --------------------------------------------- */
    constructor(elId , config) {
        super(
            listComponent[ComponentRender.name] ,
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
            default:
                return this.templateBasic_render();
        }
    }



    template_render_structure(partName) {
        const content = `
                  iiii
                `;
        return this.templateBasic_render_structure(content);
    }

    /* ---------------------------------------------
       FUNCTIONs
    --------------------------------------------- */

}

