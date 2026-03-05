const { calculate, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });
});

describe('Calculator edge cases', () => {
  test('division by zero returns null', () => {
    expect(calculate(10, '/', 0)).toBeNull();
  });

  test('unsupported operation returns null', () => {
    expect(calculate(2, '^', 3)).toBeNull();
  });

  test('string numbers: "8" + "2" = 10', () => {
    expect(calculate('8', '+', '2')).toBe(10);
  });

  test('negative numbers: -5 + 3 = -2', () => {
    expect(calculate(-5, '+', 3)).toBe(-2);
  });
});

describe('Calculator extended operations', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero returns null', () => {
    expect(modulo(5, 0)).toBeNull();
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power: 4 ^ 0.5 = 2', () => {
    expect(power(4, 0.5)).toBe(2);
  });

  test('square root: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of negative returns null', () => {
    expect(squareRoot(-9)).toBeNull();
  });

  test('square root: sqrt(0) = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });
});
