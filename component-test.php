<link href="./bootstrap.css" rel="stylesheet" type="text/css">

<section id="template-main" class="row p-0 m-0">

    <component-input-acl  id="input-acl"></component-input-acl>

</section>


<script src="./html5-qrcode.min.js"></script>
<script src="./qrcode.js"></script>
<script src="./jalali.js"></script>
<script src="./highcharts.js"></script>
<script src="./components.js"></script>
<script src="./tools.js"></script>


<script>

    tools_init.renderToolsConst()



    /*-------------------------------------
      03-010)  Component input acl
    -------------------------------------*/
    new window.ComponentInputAcl(
        "input-acl" ,
        {
            classList: "col-md-3 col-12 mt-2"  ,

            prop_name:"acl" ,
            prop_title:"input-acl" ,

            prop_requestUrl: "http://172.20.35.198:8081/component/Requests/Report/acl.php"

            //prop_iconSelected: "" ,

        }
    )


</script>