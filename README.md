***created components with js pure:***


**List Of Components:**
```
    // [01] text
        ComponentMessages:                   "component-messages" ,                       //01-01
        ComponentIsEmpty:                    "component-is-empty" ,                       //01-02
        ComponentHeader:                     "component-header" ,                         //01-03
        ComponentLabel:                      "component-label" ,                          //01-04
        ComponentDescription:                "component-description" ,                    //01-05
        ComponentLink:                       "component-link" ,                           //01-06
        ComponentInfo:                       "component-info" ,                           //01-07
        
    // [02] Fetch
        ComponentLoading:                    "component-loading" ,                        //02-01
        Component404:                        "component-404" ,                            //02-02
        ComponentForm:                       "component-form" ,                           //02-03
        ComponentWidget:                     "component-widget" ,                         //02-04
        
    // [03] Button and Inputs
        ComponentButton:                     "component-button" ,                         //03-01
        ComponentSelectOption:               "component-select-option" ,                  //03-02
        ComponentOtp:                        "component-otp" ,                            //03-03
        ComponentInput:                      "component-input" ,                          //03-04
        ComponentInputPrice:                 "component-input-price" ,                    //03-05
        ComponentDate:                       "component-date" ,                           //03-06
        
    // [04] Table and Tabs
        ComponentCollapse:                   "component-collapse" ,                       //04-01
        ComponentTable:                      "component-table" ,                          //04-02
        ComponentChart:                      "component-chart" ,                          //04-03
        ComponentTabs:                       "component-tabs" ,                           //04-04
        
    // [99] Others
        ComponentIcon:                       "component-icon" ,                           //99-01
        ComponentPositionElement:            "component-position-element" ,               //99-02
        ComponentBorder:                     "component-border" ,                         //99-03
        ComponentImage:                      "component-image" ,                          //99-04
    
```




/* ====================
[01] TEXT
============================================= */

**01-01) Component Message:**
```
/*-------------------------------------
 1) Component Messages
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**01-02) Component Is Empty:**
```
/*-------------------------------------
 5) Component Is Empty
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**01-03) Component Header:**
```
/*-------------------------------------
 6) Component Header
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_classList

@prop_icon

@prop_size
@prop_title
-------------------------------------*/
    new window.ComponentHeader(
        "element_id" ,
        {

        }
    )
```


**01-04) Component Label:**
```
/*-------------------------------------
 17) Component label
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_labelClass
@prop_labelStyles
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


**01-05) Component Link:**
```
/*-------------------------------------
 22) Component link
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_borderClass
@prop_borderStyles
@prop_borderHoverStyles

@prop_linkHref

@prop_imageSource
@prop_imageTitle
@prop_imageAlt
@prop_imageClass
@prop_imageStyles

@prop_iconSource
@prop_iconIsItalik
@prop_iconClass
@prop_iconStyles

@prop_title
@prop_titleClass
@prop_titleStyles
-------------------------------------*/
    new window.ComponentLink(
        "element_id" ,
        {
            
        }
    )
```


**01-06) Component Description:**
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

**01-07) Component Info:**
```
/*-------------------------------------
 01-07) Component Info
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_icon
@prop_iconClass
@prop_iconStyles

@prop_info
@prop_infoClass
@prop_infoStyles
-------------------------------------*/
    new window.ComponentInfo(
        "element_id" ,
        {
            
        }
    )
```




/* ====================
[02] FETCH
============================================ */

**02-01) Component Loading:**
```
/*-------------------------------------
 2) Component Loading
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**02-02) Component 404:**
```
/*-------------------------------------
 3) Component 404
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**02-03) Component Form:**
```
/*-------------------------------------
 4) Component Form
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**02-04) Component Widget:**
```
/*-------------------------------------
 13) Component Widget
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_widgetClass
@prop_widgetStyles
@prop_widgetMinHeight

@prop_btnMore_icon
@prop_btnMore_show
@prop_btnMore_link

@prop_error404   type   width   height
@prop_fetch      url    data
-------------------------------------*/
    new window.ComponentWidget(
        "element_id" ,
        {
            
        }
    )
```







/* ====================
[03] BUTTONs And INPUTs
================================ */

**03-01) Component Button:**
```
/*-------------------------------------
 9) Component Button
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type
@prop_title

@prop_btnClass
@prop_btnStyles
@prop_btnHoverStyles

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


**03-02 Component Select Option:**
```
/*-------------------------------------
 03-02) Component Select Option
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_name
@prop_itemSelected

@prop_title
@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles

@prop_titleClass
@prop_titleStyles

@prop_icon

@prop_options
@prop_placeholder

@prop_btnAddStatus
@prop_btnAddIcon
@prop_btnAddClass
@prop_btnAddTitle

@prop_optionHeight
@prop_optionWidth
@prop_optionStyles
@prop_positionTop
@prop_positionLeft
@prop_positionBottom
@prop_positionRight

@prop_options
@prop_optionStyles
@prop_optionWidth
@prop_optionItemNotSelectedBackground
@prop_optionItemHoverBackground
@prop_optionItemSelectedBackground

@fn_callback
@fn_clickBtnTools
-------------------------------------*/
    new window.ComponentSelectOption(
        "element_id" ,
        {
            
        }
    )
```


**03-03) Component OTP:**
```
/*-------------------------------------
 03-03) Component OTP
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_name
@prop_length
@prop_input
@prop_langs

@fn_onGetNewToken

//call_startCountdown
//call_getValue
-------------------------------------*/
    new window.ComponentOtp(
        "element_id" ,
        {
            
        }
    )
```


**03-04) Component Input:**
```
/*-------------------------------------
 14) Component Input
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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

@fn_clickBtnTools
-------------------------------------*/
    new window.ComponentInput(
        "element_id" ,
        {

        }
    )
```


**03-05) Component Input Price:**
```
/*-------------------------------------
 03-04) Component Input
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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

@fn_clickBtnTools
//call_setValue
-------------------------------------*/
    new window.ComponentInputPrice(
        "element_id" ,
        {

        }
    )
```   


**03-06) Component Date:**
```
/*-------------------------------------
 16) Component Date
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_backgroundMain

@prop_labelClass
@prop_labelStyles
@prop_labelHoverStyles
@prop_title

@prop_name
@prop_value

@prop_prevYears
@prop_nextYears

@prop_backgroundRowSelected
@prop_backgroundColumnSelected
@prop_colorColumnSelected

@prop_titleBtnAccept
@prop_backgroundBtnAccept
@prop_backgroundBtnHoverAccept
@prop_colorBtnAccept

@prop_titleBtnNow
@prop_backgroundBtnNow
@prop_backgroundBtnHoverNow
@prop_colorBtnNow

@prop_titleMonth0
@prop_titleMonth1
@prop_titleMonth2
@prop_titleMonth3
@prop_titleMonth4
@prop_titleMonth5
@prop_titleMonth6
@prop_titleMonth7
@prop_titleMonth8
@prop_titleMonth9
@prop_titleMonth10
@prop_titleMonth11

@prop_titleDay0
@prop_titleDay1
@prop_titleDay2
@prop_titleDay3
@prop_titleDay4
@prop_titleDay5
@prop_titleDay6
-------------------------------------*/
    new window.ComponentDate(
        "element_id" ,
        {
            
        }
    )
```





/* ====================
[04] TABLEs And TABs
==================================== */

**04-01) Component Collapse:**
```
/*-------------------------------------
 7) Component Collapse
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**04-02) Component Table:**
```
/*-------------------------------------
 8) Component Table
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_tableClass
@prop_tableStyles
@prop_tableType                      // 1) table-dark  |  2) table-primary  | 3) table-secondary  | 4) table-success  | 5) table-danger  | 6) table-warning  | 7) table-info  | 8) table-light  | 0(default)
@prop_tableBordered                  // 1) border-dark |  2) border-primary | 3) border-secondary | 4) border-success | 5) border-danger | 6) border-warning | 7) border-info | 8) border-light | 0(default)
@prop_tableStriped
@prop_tableHover
@prop_tableBorderless

@prop_tableHeadClass
@prop_tableHeadStyles
@prop_tableItemHeadClass
@prop_tableItemHeadStyles

@prop_order
@prop_data
@prop_header

@prop_tableBodyClass
@prop_tableBodyStyles
@prop_tableItemBodyClass
@prop_tableItemBodyStyles
@prop_tableItemBodyHoverStyles

@prop_valueType
@prop_valueRow_backgroundColor
@prop_valueCol_backgroundColor
@prop_valueCol_textColor

@prop_valueRow
@prop_valueCol
-------------------------------------*/
    new window.ComponentTable(
        "element_id" ,
        {

        }
    )
```


**04-03) Component Tab:**
```
/*-------------------------------------
 11) Component Tabs
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_type           0 | 1
@prop_tabs           {id  name  icon}
@prop_tabSelected

@prop_firstCallBack

@fn_callback
-------------------------------------*/
    new window.ComponentTab(
        "element_id" ,
        {

        }
    )
```


**04-03) Component Chart:**
```
/*-------------------------------------
 24) Component Chart
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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







/* ====================
[99] OTHERs
=========================================== */


**99-01) Component Icon:**
```
/*-------------------------------------
 18) Component Icon
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

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


**99-02) Component Position Element:**
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


**99-03) Component Border:**
```
/*-------------------------------------
 20) Component border
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_borderClass
@prop_borderStyles
@prop_content

@prop_btnMore_icon
@prop_btnMore_show
@prop_btnMore_link

@fn_callback
-------------------------------------*/
    new window.ComponentBorder(
        "element_id" ,
        {
            
        }
    )
```


**99-04) Component Image:**
```
/*-------------------------------------
 21) Component image
-------------------------------------
@prop_show
@prop_structureClass
@prop_structureStyles

@prop_imageSource
@prop_imageTitle
@prop_imageAlt
@prop_imageClass
@prop_imageStyles

@fn_callback
-------------------------------------*/
    new window.ComponentImage(
        "element_id" ,
        {
            
        }
    )
```






