let firstNumber;
let secondNumber;
let currentStep = 0;
let operation;
let result = 0;
let firstNumArray = []
let secondNumArray = []
let display = document.querySelector('#display');

function getNumber(number) {
    if (currentStep === 0 || currentStep === 1) {
        firstNumArray.push(number)
        currentStep = 1;
        firstNumber = Number(firstNumArray.join(''));
        display.value = firstNumber
    } else if (currentStep === 2) {
        secondNumArray.push(number);
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber;
    }
}

function getOperater(operator) {
    currentStep = 2
    operation = operator;
}


const clear = document.querySelector('#clear');
const keys = document.querySelector('.keys')
keys.addEventListener('click', () => {
    if (display.value === '0') {
        clear.textContent = 'AC'
    } else {
        clear.textContent = 'C'
    }
})
    

function clearDisplay () {
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    operation = null;
    firstNumArray = [];
    secondNumArray = [];
    currentStep = 0;
}  

function shortClear() {
    display.value  = result;
    firstNumber = null;
    secondNumber = null;
    operation = null;
    firstNumArray = [];
    secondNumArray = [];
    currentStep = 0;
}

const calculate = () => {
    if (currentStep === 2) {
        if (operation === '+') {
            result = firstNumber + secondNumber;
            display.value  = result;
            shortClear();
        } else if (operation === '-') {
            result = firstNumber - secondNumber;
            display.value  = result;
            shortClear();
        } if (operation === 'x') {
            result = firstNumber * secondNumber;
            display.value  = result;
            shortClear();
        } if (operation === '➗') {
            result = firstNumber / secondNumber;
            display.value  = result;
            shortClear();
        }
    } else return display.value="Error!"

}

function deleteChar() {
    if (currentStep === 0 || currentStep === 1) {
        firstNumber = Math.floor(firstNumber / 10);
        display.value = firstNumber
        currentStep = 1;
        firstNumArray.pop();
    } else if (currentStep === 2) {
        secondNumber = Math.floor(secondNumber / 10);
        display.value = secondNumber
        currentStep = 2;
        secondNumArray.pop();
    } return
}

function getPercentage() {
    result = display.value / 100;
    shortClear();
}


