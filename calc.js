const display = document.querySelector("#textyScreen")

const clear = document.getElementById('clear')
const equals = document.getElementById('equals')

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;


// -**-*-*-*-*-*-*-*-*-*-*-*-*-* LISTENERS *-*-*-*-*-*-*-*-*-*-*-*-*

clear.addEventListener('click', clearScreen)
equals.addEventListener('click', evaluate)


numberButtons.forEach((button) =>
    button.addEventListener("click", () => {
        appendNumber(button.value)
        console.log("prueba de boton " + button.value);
    })
);
operatorButtons.forEach((button) =>
    button.addEventListener("click", () => {
        setOperation(button.value)
        console.log("prueba de boton " + button.value);
    })
);

// -*-*-*-*-* THEN ALL THE BASIC FUNCTIONS -**-*-*-*-*-*-*-*-*-*-*-*-*

function appendNumber(number) {
    if (screen.textContent === "0" || shouldResetScreen) resetScreen();
    display.value += number;
}
//-*-*-*-*-*-*-*-*-* SCREEN FUNCTIONS -*-*-*-*-*-*-*-*-*-*-*

function resetScreen() {
    display.value = ""
    shouldResetScreen = false;
}
function clearScreen() {
    display.value = ""
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}


function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();
    } else {
        firstOperand = display.value;
        console.log("1 numero1 " + firstOperand + " ahora la operacion " + currentOperation + " ahora el num2 " + secondOperand);
        currentOperation = operator;
        console.log("1 numero1 " + firstOperand + " ahora la operacion " + currentOperation + " ahora el num2 " + secondOperand);
        shouldResetScreen = true;
    }
}


function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === "÷" && display.value === "0") {
        alert("You can't divide by 0!");
        clearScreen();
        return;
    }
    secondOperand = display.value;
    console.log("1 numero1 " + firstOperand + " ahora la operacion " + currentOperation + " ahora el num2 " + secondOperand);
    display.value = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function sumy(a, b) {
    return a + b;
}
function suby(a, b) {
    return a - b;
}
function multy(a, b) {
    return a * b;
}
function divy(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return (sumy(a, b));
            break;
        case "-":
            return (suby(a, b));
            break;
        case "*":
            return (multy(a, b));
            break;
        case "/":
            return (divy(a, b));
            break;
        default:
            return ("this error should never show");
    }
}

