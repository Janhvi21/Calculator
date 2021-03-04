export default class Calculator {
    constructor(previousOp, currentOp) {
        this.previousOp = previousOp;
        this.currentOp = currentOp;
        this.isNumberNegative = false;
        this.clearAll();
    }
    //Function executes on 'AC' button click
    clearAll() {
        this.current = '';
        this.previous = '';
        this.operation = undefined;
    }
    //Function to delete last character
    delete() {
        this.current = this.current.toString().slice(0, -1);
    }
    //Attach the new character to existing string
    appendNumber(number) {
        if (number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() === "Error" ? number.toString() : this.current.toString() + number.toString();
    }
    //Specify the operation to perform
    chooseOperation(operation) {
        if (this.current === "Error") {
            this.current = ''
            return
        }
        if (this.current === '') {
            if (operation == '-') {
                this.isNumberNegative = true
                return
            } else return
        }
        if (this.previous !== '' || this.isNumberNegative) {
            if (this.isNumberNegative) this.operation = operation
            this.calculateResult()
        }
        this.isNumberNegative = false
        this.operation = operation
        this.previous = this.current
        this.current = ''
    }
    //calculate results on '=' button click
    calculateResult() {
        this.current = this.getCalculationResult(this.operation);
        this.operation = undefined
        this.previous = ''
    }

    getCalculationResult(operation) {
        let result
        const prev = isNaN(parseFloat(this.previous)) ? 0 : parseFloat(this.previous);
        const curr = parseFloat(this.current)
        if (this.operation == undefined && prev == 0 && this.isNumberNegative) {
            this.operation = '-'
        }
        if (isNaN(prev) || isNaN(curr)) return
        var results = {
            '+': function () {
                result = prev + curr;
            },
            '-': function () {
                result = prev - curr;
            },
            '*': function () {
                result = prev * curr;
            },
            '/': function () {
                if (curr == 0) result = "Error";
                else result = prev / curr;
            }
        }
        results[operation]();
        return result;
    }


}
export var __useDefault = true;