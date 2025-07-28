
<link href="./bootstrap.css" rel="stylesheet" type="text/css">

<section class="m-2" id="stepper"></section>


<script src="./html5-qrcode.min.js"></script>
<script src="./qrcode.js"></script>
<script src="./jalali.js"></script>
<script src="./highcharts.js"></script>
<script src="./components.js"></script>
<script src="./tools.js"></script>

<script src="./Stepper.js"></script>

<script>

    tools_init.renderToolsConst()





    const step1Name = "GET_SELECT";
    const step2Name = "GET_INPUT1";
    const step3Name = "GET_INPUT2";


    const NavStep_1 = new NavStep(
        step1Name ,
        "https://localhost/component/Requests/RequestA/ComponentA.php" ,
        [
            {
                name: "select",
                type: String
            }
        ],
        null ,
         null ,
        false
    );
    const NavStep_2 = new NavStep(
        step2Name ,
        "https://localhost/component/Requests/RequestB/ComponentB.php" ,
        [
            {
                name: "name1",
                type: String
            }
        ],
        null ,
        "responseId" ,
        true
    );
    const NavStep_3 = new NavStep(
        step3Name ,
        "https://localhost/component/Requests/RequestC/ComponentC.php" ,
        [
            {
                name: "name2",
                type: String
            }
        ],
        null ,
        null ,
        true
    );



    const workflow = {
        step: NavStep_1,
        workflow: [
            {
                step: NavStep_2,
            } ,
            {
                step: NavStep_3,
            }
        ]
    }


    const stepper = new NavStepper(
        "stepper" ,
        workflow
    );
</script>