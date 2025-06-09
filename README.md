***created components with js pure:***


**List Of Components:**
```
if (typeof listComponent === 'undefined') {
    var listComponent = {
        ComponentMessages:                   "component-messages" ,                       //1
        ComponentLoading:                    "component-loading" ,                        //2
        Component404:                        "component-404" ,                            //3
        ComponentForm:                       "component-form" ,                           //4
        ComponentIsEmpty:                    "component-is-empty" ,                       //5
        ComponentHeader:                     "component-header" ,                         //6
        ComponentCollapse:                   "component-collapse" ,                       //7
        ComponentTable:                      "component-table" ,                          //8
        ComponentButton:                     "component-button" ,                         //9
        ComponentSelectOption:               "component-select-option" ,                  //10
        ComponentTabs:                       "component-tabs" ,                           //11
        ComponentOtp:                        "component-otp" ,                            //12
        ComponentWidget:                     "component-widget" ,                         //13
        ComponentInput:                      "component-input" ,                          //14
        ComponentInputPrice:                 "component-input-price" ,                    //15
        ComponentDate:                       "component-date" ,                           //16
        ComponentLabel:                      "component-label" ,                          //17
        ComponentIcon:                       "component-icon" ,                           //18
        ComponentPositionElement:            "component-position-element" ,               //19
        ComponentInfo:                       "component-info" ,                           //20
    }
}
```




**1) Component Message:**
```
/*-------------------------------------
 Component Messages
-------------------------------------
@prop_status
@prop_background
@prop_color
@prop_messages
-------------------------------------*/
    new window.ComponentMessages(
        "element_id" ,
        {

        }
    )
```





**2) Component Loading:**
```
/*-------------------------------------
 Component Loading
-------------------------------------
@prop_background_loading
@prop_background_shadow
-------------------------------------*/
    new window.ComponentLoading(
        "element_id" ,
        {

        }
    )
```




**3) Component 404:**
```
/*-------------------------------------
 Component 404
-------------------------------------
@prop_type
@prop_btnRetry    prop_type  prop_title  prop_btnClass
@prop_width
@prop_height

@fn_callback
-------------------------------------*/
    new window.Component404(
        "element_id" ,
        {

        }
    )
```







**5) Component Is Empty:**
```
   /*-------------------------------------
    Component Collapse
    -------------------------------------
    @prop_title
    @prop_icon
    @prop_iconClass

    @prop_btnAddStatus
    @prop_btnAddIcon
    @prop_btnAddTitle
    @prop_btnAddClass

    @fn_callback
    -------------------------------------*/
    new window.ComponentIsEmpty(
        "element_id" ,
        {

        }
    )
```




**7) Component Collapse:**
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







**10) Component Select Option:**
```
/*-------------------------------------
 Component Select Option
-------------------------------------
@prop_type
@prop_name
@prop_title
@prop_placeholder

@prop_options
@prop_optionStyles
@prop_optionWidth
@prop_optionHeight
@prop_optionIcon
@prop_optionIconColor
@prop_optionItemBackground

@prop_itemSelected
@prop_selectOptionClass
@prop_titleClass
@prop_titleStyles

@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddClass
@prop_btnAddTitle

@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@fn_callback
@fn_clickBtnTools
-------------------------------------*/
    new window.ComponentSelectOption(
        "element_id" ,
        {
            
        }
    )
```


**11) Component Tabs:**
```
   /*-------------------------------------
     Component Tabs
   -------------------------------------
   @prop_tabs           {id   icon}
   @prop_tabSelected

   @fn_callback
   -------------------------------------*/
    new window.ComponentTabs(
        "element_id" ,
        {
            
        }
    )
```


**14) Component Input:**
```
/*-------------------------------------
 Component Input
-------------------------------------
@prop_type
@prop_name
@prop_title
@prop_icon
@prop_value

@prop_inputClass
@prop_inputStyles

@fn_oninput
@fn_onfocus
@fn_onblur
-------------------------------------*/
    new window.ComponentInput(
        "element_id" ,
        {

        }
    )
```



**15) Component Input Price:**
```
   /*-------------------------------------
    Component Input price
    -------------------------------------
    @prop_btnAddStatus
    @prop_btnAddIcon
    @prop_btnAddClass
    @@prop_btnAddClass
    @prop_icon
    @prop_name
    @prop_title
    @prop_default

    @fn_addNewItem
    -------------------------------------*/
    new window.ComponentInputPrice(
        "element_id" ,
        {

        }
    )
```   






**16) Component Date:**
```
    /*-------------------------------------
     Component Date
    -------------------------------------
    @prop_type
    
    @prop_background1
    @prop_background2
    @prop_color
    
    @prop_name
    @prop_title
    @prop_value
    
    @prop_labelClass
    @prop_labelStyles
    @prop_labelHoverStyles
    
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






**17) Component Label:**
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




**18) Component Icon:**
```
/*-------------------------------------
 Component Icon
-------------------------------------
@prop_icon
@prop_isItalik

@prop_iconClass
@prop_iconStyles

@fn_callback
-------------------------------------*/
    new window.ComponentIcon(
        "element_id" ,
        {
            
        }
    )
```




**19) Component Position Element:**
```
/*-------------------------------------
 Component Position Element
-------------------------------------
@prop_elementClass
@prop_elementStyles
@prop_content || component-body

@prop_positionTop
@prop_positionLeft
@prop_positionBottom
@prop_positionRight

@prop_width
@prop_height
-------------------------------------*/
    new window.ComponentPositionElement(
        "element_id" ,
        {
            
        }
    )
```


**20) Component Info:**
```

/*-------------------------------------
 Component Info
-------------------------------------
@prop_icon
@prop_title
@prop_iconClass
@prop_iconStyles
-------------------------------------*/
    new window.ComponentInfo(
        "element_id" ,
        {
            
        }
    )
```

