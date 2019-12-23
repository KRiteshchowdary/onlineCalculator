// calculator javascript program

// this is to initiate total(current total after =) and history (that stores all past operations)

var total = "";
var past = "";

// function to enter digits and display in total

function changeAnswer(entry) {;
  total += entry;
  document.getElementById("answer").innerHTML = total;
  console.log("new_input_" + entry + "added_to_string");
}

// function for giving fractional values like 22.34,43.33 etc (.)

function dot(){
    total = total + ".";
    document.getElementById("answer").innerHTML = total;
    console.log("dot given");

}

// function to add numbers (+)

function addNumbers(){
    total = total + "+";
    console.log("Addition_operation_performed");
    document.getElementById("answer").innerHTML = total;
}

// function to subtract numbers (-)

function subNumbers(){
    total += "-";
    console.log("numbers_subtraction_performed");
    document.getElementById("answer").innerHTML = total;
}

// function to multiply numbers (*)


function mulNumbers(){
    total += "*";
    console.log("numbers_Multiplied");
    document.getElementById("answer").innerHMTL = total;
}

// function to divide numbers(/)

function divNumbers(){
    total += "/";
    console.log("numbers_Divided");
    document.getElementById("answer").innerHTML = total;
}

// equal to function to calculate the entries in total (=)

function equalTo(){

    // eval(<string>) is to evaluate the math in the <string> string
    var calculatedTotal = eval(total);
    past = past  + "<br>" + total + "=" + calculatedTotal;
    console.log(past)
    // after clicking equal to the history is changed to current total string = eval(total)
    document.getElementById("history").innerHTML = past  ;
    // eval(total) is displayed in total
    document.getElementById("answer").innerHTML = calculatedTotal;
    console.log("total_Calculated");
    total= calculatedTotal ; 


}

// function to clear the last entry (Backspace)

function clearLastEntry(){
    var length = total.length;
    // str.slice(start,end) returns the value of the string str from index start(included) to index end (not included)
    total = total.slice(0,length-1);
    document.getElementById("answer").innerHTML=total;
    console.log("last_Entry_cleared");
}

//funtion to clear the calculator both history and total is set back to initial value

function reset(){
    total = 0;
    past = 0;
    document.getElementById("answer").innerHTML = "answer";
    document.getElementById("history").innerHTML = "history";
    console.log("Reset");
}