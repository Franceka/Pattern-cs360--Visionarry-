const charCountInString = require('./charCountInString');
const sum = require('./sum');

describe('correct output', () => {
  test('when a & b characters are undefined return ZERO ', () => {
    // Setup
    const a = 'H';
    const expected = 0;
    // Act
    const output = charCountInString(a);
   
    // Assert
    expect(output) .toBe(expected);
    
  });
  test('when a or b is negative', () => {
    // Setup
    const a = " ";
    const expected = 0;
    // Act
    const output = charCountInString(a);
   
    // Assert
    expect(output) .toBe(expected);
  });
  test('when a & b are contain decimals', () => {
    // Setup
    const a = "Hello there ";
    const expected = 0;
    // Act
    const output = charCountInString(a);
   
    // Assert
    expect(output) .toBe(expected);
  });

  test('when a & b are contain decimals', () => {
    // Setup
    const a = "H ";
    const expected = 0;
    // Act
    const output = charCountInString(a);
   
    // Assert
    expect(output) .toBe(expected);
  });

  
});


describe('handles improper inputs', () => {
  test('when a or b are undefined they are treated as 0', () => {
    // Setup

    // Act

    // Assert
  })
  test('when a or be is not a number "NaN" is returned', () => {
    // Setup

    // Act

    // Assert
  })
})
