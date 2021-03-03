const {
    expect,
    beforeEach
} = require('@jest/globals');
const Calculator = require('../js/Calculator');
let cal;
beforeEach(() => {
    cal = new Calculator(2, 3);
})
it('Test on Delete Operation', () => {

    cal.current = '1234';
    cal.delete();
    expect(cal.current).toBe('123');
});
it('Test on Append Operation', () => {
    cal.current = '1234';
    cal.appendNumber('5');
    expect(cal.current).toBe('12345');
});
it('Test on Append Operation', () => {
    cal.current = '1234';
    cal.appendNumber('5');
    expect(cal.current).toBe('12345');
});
it('Test on Add Operation Whole', () => {
    cal.appendNumber('5');
    cal.chooseOperation('+');
    cal.appendNumber('6');
    cal.compute()
    expect(cal.current).toBe(11);
});
it('Test on Multiply Operation Whole', () => {
    cal.appendNumber('5');
    cal.chooseOperation('*');
    cal.appendNumber('6');
    cal.compute()
    expect(cal.current).toBe(30);
});
it('Test on Divide Operation Whole', () => {
    cal.appendNumber('30');
    cal.chooseOperation('/');
    cal.appendNumber('6');
    cal.compute()
    expect(cal.current).toBe(5);
});
it('Test on Subtraction Operation Whole', () => {
    cal.appendNumber('30');
    cal.chooseOperation('-');
    cal.appendNumber('6');
    cal.compute()
    expect(cal.current).toBe(24);
});
test('Test on Clear Operation Whole', () => {
    cal.appendNumber('30');
    cal.chooseOperation('-');
    cal.appendNumber('6');
    cal.clear()
    expect(cal.current).toBe('');
});