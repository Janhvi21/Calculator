import
Calculator
from './Calculator.js';
import {
    Key
} from './KeyCode.enum.js';
const calculatorArea = document.getElementById('data-calculator');
const numberButtons = document.querySelectorAll("[id='data-number']");
const operationButtons = document.querySelectorAll("[id='data-operation']");
const previousOp = document.getElementById('data-previous');
const currentOp = document.getElementById('data-current');
const deleteOp = document.getElementById('data-delete');
const allClearOp = document.getElementById('data-all-clear');
const equalOp = document.getElementById('data-equals');

const calculator = new Calculator(previousOp, currentOp);
calculatorArea.addEventListener("keyup", function (event) {
    if (event.keyCode >= Key.ZERO && event.keyCode <= Key.NINE) {
        calculator.appendNumber(event.keyCode - 48);
        updateDisplay();
    } else if (event.keyCode == Key.DOT) {
        calculator.appendNumber('.');
        updateDisplay();
    }

})
numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        calculator.appendNumber(button.innerText)
        updateDisplay();

    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        updateDisplay();
    })
})
equalOp.addEventListener('click', button => {
    calculator.calculateResult()
    updateDisplay()
})
allClearOp.addEventListener('click', button => {
    calculator.clearAll();
    updateDisplay();
})
deleteOp.addEventListener('click', button => {
    calculator.delete();
    updateDisplay();
})

const updateDisplay = function () {
    calculator.currentOp.innerText = calculator.current;
    if (calculator.operation != null) {
        calculator.previousOp.innerText = calculator.previous + ' ' + calculator.operation;
    } else {
        calculator.previousOp.innerText = ''
    }
}