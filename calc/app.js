const results = document.getElementById("results");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const add = document.getElementById("add");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const period = document.getElementById("period");
const enter = document.getElementById("enter");
let hey = ""
var firstNumber = 0;
var secondNumber = 0;
operator = "";
first = true;

function addTwoNumbers(x,y){
    return x + y;
}
function subtractTwoNumbers(x,y){
    return x - y;
}
function multiplyTwoNumbers(x,y){
    let num = x * y;
    return num.toFixed();
}
function divideTwoNumbers(x,y){
    let num = x / y;
    return num.toFixed(8);
}

function putOnScreen(x){
    if(results.innerHTML.length < 11){
        if(!firstNumber && !operator){
            results.innerHTML = x;
            firstNumber = parseFloat(results.innerHTML);
        } else if(!operator ){
            results.innerHTML += x;
        } else if(operator && !secondNumber){
            results.innerHTML = x;
            secondNumber = parseFloat(results.innerHTML);
        } else {
            results.innerHTML += x;
        }
    }
}
function operate(){
    secondNumber = parseFloat(results.innerHTML)
    console.log(firstNumber, secondNumber)
    if(firstNumber && secondNumber){
        switch (operator){
            case "+": {
                results.innerHTML = addTwoNumbers(firstNumber, secondNumber);
                clearVars();
                break;
            }
            case "-": {
                results.innerHTML = subtractTwoNumbers(firstNumber, secondNumber);
                clearVars();
                break;
            }
            case "*": {
                results.innerHTML = multiplyTwoNumbers(firstNumber, secondNumber);
                clearVars();
                break;
            }
            case "/": {
                results.innerHTML = divideTwoNumbers(firstNumber, secondNumber);
                clearVars();
                break;
            }
        }
    }
}
function clearVars(){
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    first = true;
}
function handleClick(e){
    if(!operator){
        putOnScreen(e.innerHTML);
    } else {
        putOnScreen(e.innerHTML);
    }
}
function handleOperator(){
    if(!operator){
        operator = event.target.innerHTML;
        firstNumber = parseFloat(results.innerHTML);
    }
}
clear.addEventListener('click', (e) => {
    results.innerHTML = "0.0";
    clearVars();
})
equals.addEventListener('click', operate)
enter.addEventListener('click', operate)

divide.addEventListener('click', handleOperator)
multiply.addEventListener('click', handleOperator)
minus.addEventListener('click', handleOperator)
add.addEventListener('click', handleOperator)
zero.addEventListener('click', (e) => handleClick(e.target))
one.addEventListener('click', (e) => handleClick(e.target))
two.addEventListener('click', (e) => handleClick(e.target))
three.addEventListener('click', (e) => handleClick(e.target))
four.addEventListener('click', (e) => handleClick(e.target))
five.addEventListener('click', (e) => handleClick(e.target))
six.addEventListener('click', (e) => handleClick(e.target))
seven.addEventListener('click', (e) => handleClick(e.target))
eight.addEventListener('click', (e) => handleClick(e.target))
nine.addEventListener('click', (e) => handleClick(e.target))

period.addEventListener('click', (e) => {
    if (!firstNumber){
        results.innerHTML = "0.";
        firstNumber = results.innerHTML;
    } else if (operator && !secondNumber){
        results.innerHTML = "0.";
        secondNumber = results.innerHTML;
    } else if(!results.innerHTML.includes(".") && results.innerHTML != "0.0"){
        results.innerHTML += ".";
        if(first){
            firstNumber = results.innerHTML;
        } else {
            secondNumber = results.innerHTML;
        }
    }
})
