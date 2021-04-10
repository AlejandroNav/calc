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
    switch (operator) {
        case 1:
            return (sumy(a, b));
            break;
        case 2:
            return (suby(a, b));
            break;
        case 3:
            return (multy(a, b));
            break;
        case 4:
            return (divy(a, b));
            break;
        default:
            return ("this error should never show");
    }
}

const display = document.querySelector("#textyScreen")

display.value = " 546 55.8 45656"