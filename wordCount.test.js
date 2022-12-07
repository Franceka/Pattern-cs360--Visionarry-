const sum = require('./sum');
const wordCount = require('./wordCount');

describe('correct output', () => {
  test('returns proper count for a simple sentence', () => {
    // Setup
    const a = "Hi there how are you";
    const expected = 5;
    
    // Act
    const output = wordCount(a);
    
    // Assert
    expect(output) .toBe(expected);
    
  });


  test('returns proper count when a single word is string', () => {
    // Setup
    const a = "Hello";
    const expected = 1;

    // Act
    const output = wordCount(a);

    // Assert
    expect(output) .toBe(expected);
  });


  test('returns proper count when double space is included', () => {
    // Setup
    const a = "Good  morning";
    const expected = 2;

    // Act
    const output = wordCount(a);

    // Assert
    expect(output) .toBe(expected);
  });
});


describe('handles improper inputs', () => {
  test('counts hyphenated words as a single word', () => {
    // Setup
    const a = "ice-cream";
    const expected = 1;

    // Act
    const output = wordCount(a);

    // Assert
    expect(output) .toBe(expected);
  })

  test('returns 0 for undefined input string', () => {
    // Setup
    const a = " ";
    const expected = 0; 

    // Act
    const output = wordCount(a);

    // Assert
    expect(output). toBe(expected);
  })


  test('returns 0 for empty input string', () => {
    // Setup
    const a = " ";
    const expected = 0; 

    // Act
    const output = wordCount(a);

    // Assert
    expect(output). toBe(expected);
  })
})
