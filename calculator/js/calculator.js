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
        echo("Result " + result.toFixed(3), "displayresult");
        //document.getElementById("calculator").reset();
    } else {
        let element = document.getElementById("displayresult");
        element.classList.remove("alert-danger", "alert-primary", "alert-success");
        element.classList.add("alert-danger");
        element.innerHTML = "All the field must be filled";
    }
}

function validateForm(FirstInput, SecondInputs, Operator){
    let element;
    if (!checkInputIisValid(FirstInput)) {
        element = document.getElementById('inputnumber_first')
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
    }else{
        element = document.getElementById('inputnumber_first');
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }
    if (!checkInputIisValid(SecondInputs) ) {
        element = document.getElementById('inputnumber_second');
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
    }else{
        element = document.getElementById('inputnumber_second');
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }
    if (!checkOperatorIsValid(Operator)) {
        element = document.getElementById('operator');
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
    }else{
        element = document.getElementById('operator');
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }

    if (checkInputIisValid(FirstInput) && checkInputIisValid(SecondInputs) && checkOperatorIsValid(Operator)) {
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

function checkInputIisValid(myuserInput){
    if (myuserInput == 0 || myuserInput == "" || myuserInput == null || myuserInput == undefined || isNaN(myuserInput)) {
        return false;
    } else {
        return true;
    }
}
function checkOperatorIsValid(operators){
    if (operators == 0 || operators == "" || operators == null || operators == undefined) {
        return false;
    } else {
        return true;
    }
}
function resetform(){
    document.getElementById("calculator").reset();
    element = document.getElementById('inputnumber_first')
    element.classList.remove("is-valid", "is-invalid");
    
    element = document.getElementById('inputnumber_second');
    element.classList.remove("is-valid", "is-invalid");

    element = document.getElementById('operator');
    element.classList.remove("is-valid", "is-invalid");

    echo("Fill in the form and calculate —> check it out!", "displayresult");
    element = document.getElementById("displayresult");
    element.classList.remove("alert-danger", "alert-primary", "alert-success");
    addClass(element, "alert-primary");
}

function echo(data, element){
    document.getElementById(element).innerHTML = data;
}
function addClass(element, classname){
    element.classList.add(classname);
}




