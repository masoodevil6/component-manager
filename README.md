created components with js pure:

**List Of Components:**
```
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
        ComponentInputPrice:        "component-input-price" ,    //14
        ComponentDate:              "component-date" ,           //15
        ComponentLabel:             "component-label" ,          //16
    }
}
```





**Component Collapse:**
```
   /*-------------------------------------
    Component Collapse
    -------------------------------------
    @prop_title
    @prop_body
    @prop_bodyShow
    -------------------------------------*/
    new window.ComponentCollapse(
        "element_id" ,
        {

        }
    )
```







**Component Input Price:**
```
   /*-------------------------------------
    Component Input price
    -------------------------------------
    @prop_btnAddStatus
    @prop_btnAddIcon
    @prop_icon
    @prop_name
    @prop_title
    @prop_langs
    @prop_default

    @fn_addNewItem
    -------------------------------------*/
    new window.ComponentButton(
        "element_id" ,
        {

        }
    )
```   






**Component Select Option:**
```
    /*-------------------------------------
     Component Select Option
    -------------------------------------
    @prop_type
    @prop_name
    @prop_title
    @prop_options
    @prop_formClass
    @prop_titleClass
    @prop_optionHeight
    @prop_optionItemBackground
    @prop_optionIcon
    @prop_optionIconColor
    @prop_itemSelected

    @fn_callback
    -------------------------------------*/
    new window.ComponentSelectOption(
        "element_id" ,
        {
            
        }
    )
```








**Component Date:**
```
    /*-------------------------------------
     Component Date
    -------------------------------------
    @prop_background1
    @prop_background2
    @prop_color
    
    @prop_name
    @prop_title
    @prop_value
    
    @prop_prevYears
    @prop_nextYears
    
    @prop_langs
    
    @fn_addNewItem
    -------------------------------------*/
    new window.ComponentDate(
        "element_id" ,
        {
            
        }
    )
```






**Component Label:**
```
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
    new window.ComponentLabel(
        "element_id" ,
        {
            
        }
    )
```




