const { getHashPattern } = require('./min_window_substring');

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