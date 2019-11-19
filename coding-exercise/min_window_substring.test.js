const { getHashPattern, getHashText } = require('./min_window_substring');

describe('getHashPattern', () => {
  test('returns {a: 1, e: 1, d: 1} for pattern = "aed"', () => {
    const hashPattern = getHashPattern('aed');
    const expected = { a: 1, e: 1, d: 1 };
    expect(hashPattern).toEqual(expected);
  });

  test('returns {a: 2, d: 1} for pattern = "aad"', () => {
    const hashPattern = getHashPattern('aad');
    const expected = { a: 2, d: 1 };
    expect(hashPattern).toEqual(expected);
  });
});

describe('getHashText', () => {
  test('returns {a: 0, b: 0, d: 0, e: 0} for text = "aaabaaddae"', () => {
    const hashText = getHashText('aaabaaddae');
    const expected = { a: 0, b: 0, d: 0, e: 0 };
    expect(hashText).toEqual(expected);
  });
  test('returns {a: 3, b: 2, d: 3, c: 4} for text = "aabdccdbcacd"', () => {
    const hashText = getHashText('aabdccdbcacd');
    const expected = { a: 0, b: 0, d: 0, c: 0 };
    expect(hashText).toEqual(expected);
  });
});