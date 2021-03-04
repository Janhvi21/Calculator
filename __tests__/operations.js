const {
    expect,
    beforeEach
} = require('@jest/globals');
import Calculator from '../js/Calculator';
let cal;
describe('Testing Functionality of Calculator', () => {
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
        cal.calculateResult()
        expect(cal.current).toBe(11);
    });
    it('Test on Multiply Operation Whole', () => {
        cal.appendNumber('5');
        cal.chooseOperation('*');
        cal.appendNumber('6');
        cal.calculateResult()
        expect(cal.current).toBe(30);
    });
    it('Test on Divide Operation Whole', () => {
        cal.appendNumber('30');
        cal.chooseOperation('/');
        cal.appendNumber('6');
        cal.calculateResult()
        expect(cal.current).toBe(5);
    });
    it('Test on Subtraction Operation Whole', () => {
        cal.appendNumber('30');
        cal.chooseOperation('-');
        cal.appendNumber('6');
        cal.calculateResult()
        expect(cal.current).toBe(24);
    });
    it('Test on Clear Operation Whole', () => {
        cal.appendNumber('30');
        cal.chooseOperation('-');
        cal.appendNumber('6');
        cal.clearAll()
        expect(cal.current).toBe('');
    });
})