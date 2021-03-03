const {
    expect
} = require('@jest/globals');
const Calculator = require('../js/Calculator');
test('Add 2 number', () => {
    const cal = new Calculator(2, 3);
    cal.appendNumber(2);
    cal.chooseOperation('+');
    cal.appendNumber(3);
    cal.compute();
    expect(cal.getDisplayNumber(5)).toBe("5");
});