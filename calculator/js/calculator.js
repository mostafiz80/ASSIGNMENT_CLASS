// Organic javascript code ;)
// Function that display result value 
function getInputAndCalculate() {
    let FirstInput = parseInt(document.getElementById("inputnumber_first").value);
    let SecondInputs = parseInt(document.getElementById("inputnumber_second").value);
    let Operator = document.getElementById("operator").value;
    var result = calculation(FirstInput, SecondInputs, Operator);
    document.getElementById("displayresult").innerHTML = "Result "+result;
    document.getElementById("calculator").reset();
}

function calculation(firstInput, secondInputs, operator){
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
    
    document.getElementById("displayresult").reset();
}

function removeclass() {
    var element = document.getElementById("myDIV");
    element.classList.remove("");
    element.classList.add("mystyle");
  }
