import {
    Calculator
} from './Calculator.js';
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
        calculator.updateDisplay();
    } else if (event.keyCode == Key.DOT) {
        calculator.appendNumber('.');
        calculator.updateDisplay();
    }

})
numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();

    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})
equalOp.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
allClearOp.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
deleteOp.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})