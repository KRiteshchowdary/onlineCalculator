function convertWeight(){

    var kg = document.getElementById("value_in_KG").value;
    var lbs = document.getElementById("value_in_lbs").value;

    if (kg=="0" && lbs!="0"){
        kg=lbs/2.05;
        document.getElementById("value_in_KG").value = kg;
    }else if(kg!="0" && lbs=="0"){
        lbs=kg*2.205;
        document.getElementById("value_in_lbs").value = lbs;
    }else{
        alert("Give proper values.");
    }
}