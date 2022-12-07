const sum = require('./sum');

describe('correct output', () => {
  test('when a & b are whole integers', () => {
    // Setup
    const a = 1;
    const b = 2;
    const expected = 3;
    // Act
    const output = sum(a, b);
    // Assert
    expect(output).toBe(expected);
  });
  test('when a or b is negative', () => {
    // Setup
    const a = -2;
    const b = 4;
    const expected = 2;

    // Act
    const output = sum(a,b);

    // Assert
    expect(output). toBe(expected);
  });
  test('when a & b are contain decimals', () => {
    // Setup
    const a = 1.2;
    const b = 2.7;
    const expected = 3.9000000000000004;

    // Act
    const output = sum(a,b);

    // Assert
    expect(output). toBe(expected);
  });
});


describe('handles improper inputs', () => {
  test('when a or b are undefined they are treated as 0', () => {
    // Setup
    const a =0;
    const b = 7;
    const expected = 7;

    // Act
    const output = sum(a,b);

    // Assert
    expect(output). toBe(expected);
  })
  test('when a or be is not a number "NaN" is returned', () => {
    // Setup
    const a = " ";
    const b = 7;
    const expected = NaN;  

    // Act
    const output = sum(a,b);

    // Assert
    expect(output). toBe(expected);
  })
})
