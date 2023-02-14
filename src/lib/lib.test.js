import { exponent, multiplication, division, addition, subtraction, modulo } from './calc-lib';

describe(`Function Library`, () => {
  describe(`Math Library`, () => {
    describe(`exponent(num1, num2)`, () => {
      test(`it should return a number`, () => {
        expect(typeof(exponent(2, 2))).toBe('number');
      });

      test(`it should raise num1 to the power of num2`, () => {
        expect(exponent(2, 2)).toBe(4);
      })
    });
    describe(`multiplication(num1, num2)`, () => {
      test(`it should return a number`, () => {
        expect(typeof(multiplication(2, 3))).toBe('number');
      });
      test(`it should return the product of num1 and num2`, () => {
        expect(multiplication(2, 3)).toBe(6);
      });
    });
    describe(`division(num1, num2)`, () => {
      test(`it should return a number`, () => {
        expect(typeof(division(4, 2))).toBe('number');
      });
      test(`it should return the division of num1 and num2`, () => {
        expect(division(4, 2)).toBe(2);
        expect(division(10, 5)).toBe(2);
      })
    });
    describe(`addition(num1, num2)`, () => {
      test(`it should return a number`, () => {
        expect(typeof(addition(2, 3))).toBe('number');
      });
      test(`should return the sum of num1 and num2`, () => {
        expect(addition(2, 3)).toBe(5);
        expect(addition(50, 3)).toBe(53);
      })
    });
    describe(`subtraction(num1, num2)`, () => {
      test(`it should return a number`, () => {
        expect(typeof(subtraction(2, 3))).toBe('number');
      });
      test(`should return the difference between num1 and num2`, () => {
        expect(subtraction(3, 2)).toBe(1);
        expect(subtraction(50, 3)).toBe(47);
      })
    })
    describe(`modulo(num1, num2)`, () => {
      test(`it should return a number`, () => {
        expect(typeof(modulo(2, 3))).toBe('number');
      });
      test(`should return the remainder after dividing num1 and num2`, () => {
        expect(modulo(3, 2)).toBe(1);
        expect(modulo(50, 2)).toBe(0);
      })
    })
  })
})