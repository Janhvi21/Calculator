class Calculator {
    constructor(previousOp, currentOp) {
        this.previousOp = previousOp;
        this.currentOp = currentOp;
        this.clear();
        this.isNumberNegative = false;
    }
    clear() {
        this.current = '';
        this.previous = '';
        this.operation = undefined;
    }
    delete() {
        this.current = this.current.toString().slice(0, -1);
    }
    appendNumber(number) {
        if (number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() === "Error" ? number.toString() : this.current.toString() + number.toString();
    }
    chooseOperation(operation) {
        if(this.current==="Error"){
            this.current='';
            return;
        }
        if (this.current === '') {
            if (operation == '-') {
                this.isNumberNegative = true;
                return
            } else
                return
        }

        if (this.previous !== '' || this.isNumberNegative) {
            if (this.isNumberNegative) this.operation = operation;
            this.compute();
        }
        this.operation = operation
        if (this.isNumberNegative == true) {

            this.isNumberNegative = false
        }
        this.previous = this.current

        this.current = ''

    }
    compute() {
        let result
        const prev = isNaN(parseFloat(this.previous)) ? 0 : parseFloat(this.previous);
        const curr = parseFloat(this.current)
        if (this.operation == undefined && prev == 0 && this.isNumberNegative) {
            this.operation = '-'
        }
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                result = prev + curr;
                break
            case '-':
                result = prev - curr;
                break
            case '*':
                result = prev * curr;
                break
            case '/':
                if (curr == 0) result = "Error";
                else result = prev / curr;
                break
            default:
                return
        }
        this.current = result
        this.operation = undefined
        this.previous = ''
    }
    getDisplayNumber(number) {

        const stringNumber = number.toString()
        if (stringNumber == "Error") return stringNumber;
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]

        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    updateDisplay() {
        this.currentOp.innerText = this.getDisplayNumber(this.current);
        if (this.operation != null) {
            this.previousOp.innerText = `${this.getDisplayNumber(this.previous)} ${this.operation}`
        } else {
            this.previousOp.innerText = ''
        }
    }
}
export {
    Calculator
};