// Organic javascript code ;)
// Function that display result value 
function getInputAndCalculate() {
    let FirstInput = parseFloat(document.getElementById("inputnumber_first").value);
    let SecondInputs = parseFloat(document.getElementById("inputnumber_second").value);
    let Operator = document.getElementById("operator").value;

    if (validateForm(FirstInput, SecondInputs, Operator)) {
        var result = calculators(FirstInput, SecondInputs, Operator);
        let element = document.getElementById("displayresult");
        element.classList.remove("alert-danger", "alert-primary", "alert-success");
        element.classList.add("alert-success");
        document.getElementById("displayresult").innerHTML = "Result "+result.toFixed(3);
        //document.getElementById("calculator").reset();
    } else {
        let element = document.getElementById("displayresult");
        element.classList.remove("alert-danger", "alert-primary", "alert-success");
        element.classList.add("alert-danger");
        element.innerHTML = "All the field must be filled";
    }


}

function validateForm(FirstInput, SecondInputs, Operator){
    if (FirstInput == "") {
        document.getElementById('inputnumber_first').classList.remove("is-valid");
        document.getElementById('inputnumber_first').classList.add("is-invalid");
    }else{
        document.getElementById('inputnumber_first').classList.remove("is-invalid");
        document.getElementById('inputnumber_first').classList.add("is-valid");
    }
    if (SecondInputs =="") {
        document.getElementById('inputnumber_second').classList.remove("is-valid");
        document.getElementById('inputnumber_second').classList.add("is-invalid");
    }else{
        document.getElementById('inputnumber_second').classList.remove("is-invalid");
        document.getElementById('inputnumber_second').classList.add("is-valid");
    }
    if (Operator == "") {
        document.getElementById('operator').classList.remove("is-valid");
        document.getElementById('operator').classList.add("is-invalid");
    }else{
        document.getElementById('operator').classList.remove("is-invalid");
        document.getElementById('operator').classList.add("is-valid");
    }



   if ((FirstInput != "" &&  SecondInputs != "") && (Operator != "")) {
    return true;
   } else {
    return false;
   }
 
}

function calculators(firstInput, secondInputs, operator){
    let result;
    switch(operator) {
        case "addition":
            result = (firstInput + secondInputs);

          break;
        case "subtraction":
            result =  (firstInput - secondInputs);

          break;
        case "multiplication":
            result =  (firstInput * secondInputs);

          break;
        case "division":
            result =  (firstInput / secondInputs);
          break;

      }

      return result;
      
}
function resetform(){
    //document.getElementById("calculator").reset();
}



