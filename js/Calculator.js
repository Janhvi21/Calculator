export default class Calculator {
    constructor() {
        this.clearAll();
    }
    //Function executes on 'AC' button click
    clearAll() {
        this.current = '';
        this.previous = '';
        this.operation = undefined;
        this.isNumberNegative = false;
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
        debugger;
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
            this.calculateResult()
        }
        this.isNumberNegative = false
        this.operation = operation
        this.previous = this.current
        this.current = ''
    }
    //calculate results on '=' button click
    calculateResult() {
        this.current = this.getCalculationResult();
        this.operation = undefined
        this.previous = ''
    }

    getCalculationResult() {
        debugger;
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
        results[this.operation]();
        return result;
    }
}
export var __useDefault = true;