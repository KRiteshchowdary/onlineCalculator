<!DOCTYPE html>

<html>

    <head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- RWB -->

        <link rel="stylesheet" type="text/css" href="css/calc.css" /> <!-- Including CSS file-->

        <script src="JavaScript/calc.js"></script> <!-- Including JavaScript file-->

        <title>Calculator-tr</title>

    </head>


    <body>


        <header>Calculator</header>


        <!-- navigation links to home and converter pages -->

        <nav>
            <a href="home.html" title="Go to Home Page" class="nav_links">Home</a>&nbsp&nbsp
            <a href="conv.html" title="Use Converter" class="nav_links">Converter</a>
        </nav>


        <!-- wholeBody is the division thats holds all the divisions of calculator display,operations,calcbuttons -->

        <div class="WholeBody">

            <!-- calcButtons is the class holding numbers,reset and clear buttons -->

            <div class="calcButtons" >

                <!-- Calculator buttons -->
            
                    <div class="cal-keys" style="flex-grow:1"><button id="." type="button" onclick={dot()}> . </button></div>
                    <div class="cal-keys" style="flex-grow:2"><button id="0" type="button" onclick={changeAnswer(0)}> 0 </button></div>
                    <div class="cal-keys"><button id="1" type="button" onclick={changeAnswer(1)}> 1 </button></div>
                    <div class="cal-keys"><button id="2" type="button" onclick={changeAnswer(2)}> 2 </button></div>
                    <div class="cal-keys"><button id="3" type="button" onclick={changeAnswer(3)}> 3 </button></div>
                    <div class="cal-keys"><button id="4" type="button" onclick={changeAnswer(4)}> 4 </button></div>
                    <div class="cal-keys"><button id="5" type="button" onclick={changeAnswer(5)}> 5 </button></div>
                    <div class="cal-keys"><button id="6" type="button" onclick={changeAnswer(6)}> 6 </button></div>
                    <div class="cal-keys"><button id="7" type="button" onclick={changeAnswer(7)}> 7 </button></div>
                    <div class="cal-keys"><button id="8" type="button" onclick={changeAnswer(8)}> 8 </button></div>
                    <div class="cal-keys"><button id="9" type="button" onclick={changeAnswer(9)}> 9 </button></div>
                    <div class="cal-keys" style="flex-grow:1"><button id="reset" type="button" onclick={reset()}> RESET </button></div>
                    <div class="cal-keys" style="flex-grow:1"><button id="ac" type="button" onclick={clearLastEntry()}> AC </button></div>

            </div>

            <!-- Operations is the division holding +,-,*,/ operations -->

            <div class="operations" >

                <!-- Mathematical operations -->

                <div class="cal-oper-keys" ><button id="+" type="button" onclick={addNumbers()}> + </button></div>
                <div class="cal-oper-keys" ><button id="-" type="button" onclick={subNumbers()}> - </button></div>
                <div class="cal-oper-keys" ><button id="*" type="button" onclick={mulNumbers()}> * </button></div>
                <div class="cal-oper-keys" ><button id="/" type="button" onclick={divNumbers()}> / </button></div>
                <div class="cal-oper-keys" ><button id="=" type="button" onclick={equalTo()}> = </button></div>
              

            </div>

            <!-- display is the class that displays history and current answer -->

            <div class="display" >

                <!--  Text box typing Calculator -->

                <div id="text_input" >
                    <p>Enter the Expression to be calculated:</p><br>

                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text" size="30" id="input" ><br><br>

                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id="input" onclick={formValidate()}> = </button>
                    
                    <br>
                    
                    <p id ="input_message"> Enter input to get calculated output</p>

                </div>

                <!-- history class is for previous entries -->

                <div class="history" id="history" >
                    
                    History
                
                </div>

                <!-- answer class is for displaying current answer -->

                <div class="answer" id="answer"> 
                    
                    answer
                
                </div>


            </div>
        </div>


    </body>

</html>
