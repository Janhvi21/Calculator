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

calculatorArea.addEventListener("keyup", function (event) {  //Event triggered on KeyBoard Number pressed
    if (event.keyCode >= Key.ZERO && event.keyCode <= Key.NINE) {   //if numbers 0 - 9 pressed
        calculator.appendNumber(event.keyCode - 48);
        updateDisplay();
    } else if (event.keyCode == Key.DOT) {   //if . pressed
        calculator.appendNumber('.');
        updateDisplay();
    }
})
numberButtons.forEach(button => {   //Event on 1 - 9 button clicks
    button.addEventListener('click', (event) => {
        calculator.appendNumber(button.innerText)
        updateDisplay();

    })
})
operationButtons.forEach(button => { //Event on operation / + * - clicks
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        updateDisplay();
    })
})
equalOp.addEventListener('click', button => {  // Event on '=' click
    calculator.calculateResult()
    updateDisplay()
})
allClearOp.addEventListener('click', button => { // Event triggered on 'AC' button click
    calculator.clearAll();
    updateDisplay();
})
deleteOp.addEventListener('click', button => { // Event triggered on 'DEL' button click
    calculator.delete();
    updateDisplay();
})
// Update Display for results and operation inserted
const updateDisplay = function () {
    calculator.currentOp.innerText = calculator.current;
    if (calculator.operation != null) {
        calculator.previousOp.innerText = calculator.previous + ' ' + calculator.operation;
    } else {
        calculator.previousOp.innerText = ''
    }
}