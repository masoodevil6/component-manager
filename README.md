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
        ComponentBorder:                     "component-border" ,                         //21
        ComponentImage:                      "component-image" ,                          //22
        ComponentLink:                       "component-link" ,                           //23
    }
}
```




**1) Component Message:**
```
/*-------------------------------------
 1) Component Messages
-------------------------------------
@prop_type                            // success[default] | error | warning | null
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
 2) Component Loading
-------------------------------------
@prop_type                       // circle[default] | null
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
 3) Component 404
-------------------------------------
@prop_type            'simple_animation'
@prop_width
@prop_height

@prop_btnRetry        {prop_type: "submit"  , prop_title: "Retry" , prop_btnClass: ["w-100"]}

@fn_callback
-------------------------------------*/
    new window.Component404(
        "element_id" ,
        {

        }
    )
```



**4) Component Form:**
```
/*-------------------------------------
 4) Component Form
-------------------------------------
@prop_formClass
@prop_formStyles

@prop_btnSubmit    {prop_type , prop_title , prop_btnClass}

@prop_forms
@prop_url
@prop_data
-------------------------------------*/
    new window.ComponentForm(
        "element_id" ,
        {

        }
    )
```







**5) Component Is Empty:**
```
/*-------------------------------------
 5) Component Is Empty
-------------------------------------
@prop_icon
@prop_iconClass
@prop_iconStyles

@prop_title

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





**6) Component Header:**
```
/*-------------------------------------
 Component Header
-------------------------------------
@prop_size
@prop_title
@prop_icon
@prop_classList
-------------------------------------*/
    new window.ComponentHeader(
        "element_id" ,
        {

        }
    )
```




**7) Component Collapse:**
```
/*-------------------------------------
 7) Component Collapse
-------------------------------------
@prop_collapseClass
@prop_collapseStyles

@prop_title

@prop_bodyBackgroundColor
@prop_body
@prop_bodyShow
-------------------------------------*/
    new window.ComponentCollapse(
        "element_id" ,
        {

        }
    )
```







**8) Component Table:**
```
/*-------------------------------------
 Component Table
-------------------------------------
@prop_tableType
@prop_tableBordered
@prop_tableStriped
@prop_tableHover
@prop_tableBorderless
@prop_order
@prop_data
@prop_header
-------------------------------------*/
    new window.ComponentTable(
        "element_id" ,
        {

        }
    )
```






**9) Component Button:**
```
/*-------------------------------------
 Component Button
-------------------------------------
@prop_type
@prop_title
@prop_btnClass

@prop_btnBackgroundColor
@prop_btnBackgroundColor_hover
@prop_btnColor

@fn_callback
-------------------------------------*/
    new window.ComponentButton(
        "element_id" ,
        {

        }
    )
```






**10) Component Tab:**
```
/*-------------------------------------
 Component Tabs
-------------------------------------
@prop_tabs           {id   icon}
@prop_tabSelected
@prop_type

@prop_firstCallBack

@fn_callback
-------------------------------------*/
    new window.ComponentTab(
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

@prop_firstCallBack

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
@prop_structureClass
@prop_structureStyles

@prop_type           0 | 1
@prop_tabs           {id  name  icon}
@prop_tabSelected

@prop_firstCallBack

@fn_callback
-------------------------------------*/
    new window.ComponentTabs(
        "element_id" ,
        {
            
        }
    )
```




**12) Component OTP:**
```
/*-------------------------------------
 12) Component OTP
-------------------------------------
@prop_structureClass
@prop_structureStyles

@prop_name
@prop_length
@prop_input
@prop_langs

@fn_onGetNewToken

//call_startCountdown
-------------------------------------*/
    new window.ComponentOtp(
        "element_id" ,
        {
            
        }
    )
```





**14) Component Input:**
```

/*-------------------------------------
 14) Component Input
-------------------------------------
@prop_inputClass
@prop_inputStyles

@prop_show_label
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles
@prop_title

@prop_inputClass
@prop_inputStyles
@prop_type
@prop_name
@prop_value
@prop_placeholder

@prop_icon

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
 17) Component label
-------------------------------------
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles
@prop_labelBackgroundColor

@prop_title
@prop_for
@prop_labelColor

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




**21) Component Border:**
```
/*-------------------------------------
 Component border
-------------------------------------
@prop_borderClass
@prop_borderStyles
@prop_borderStylesHover
@prop_content

@prop_btnMore_icon
@prop_btnMore_show
@prop_btnMore_link

@fn_elementClick
-------------------------------------*/
    new window.ComponentBorder(
        "element_id" ,
        {
            
        }
    )
```





**22) Component Image:**
```
/*-------------------------------------
 Component image
-------------------------------------
@prop_imageSource
@prop_imageTitle
@prop_imageClass
@prop_imageStyles

@fn_elementClick
-------------------------------------*/
    new window.ComponentImage(
        "element_id" ,
        {
            
        }
    )
```




**23) Component Link:**
```
/*-------------------------------------
 Component link
-------------------------------------
@prop_image source , title , class , styles
@prop_icon  source , title , class , styles
@prop_title content , style , class
@prop_linkClass
@prop_linkStyles
@prop_linkHref
-------------------------------------*/
    new window.ComponentLink(
        "element_id" ,
        {
            
        }
    )
```




**24) Component Description:**
```
/*-------------------------------------
 Component Description
-------------------------------------
@prop_icon
@prop_title
@prop_description
@prop_height
@prop_button   title_more|title_less|prop_show
-------------------------------------*/
    new window.ComponentDescription(
        "element_id" ,
        {
            
        }
    )
```




**25) Component Chart:**
```
/*-------------------------------------
 Component Chart
-------------------------------------
@prop_type
@prop_TypeDirection

@prop_title_text
@prop_title_align

@prop_description_text
@prop_description_align

@prop_y_title_text
@prop_y_title_align

@prop_x_title_text
@prop_x_title_align

@prop_categories
@prop_series

@prop_tooltip_header
@prop_tooltip_format
-------------------------------------*/
    new window.ComponentChart(
        "element_id" ,
        {
            
        }
    )
```

