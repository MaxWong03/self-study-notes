const { doubleSum } = require('./sum_multiplier');

describe('doubleSum', () => {
  test('returns 84 for arr = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3]', () => {
    const arr = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
    expect(doubleSum(arr)).toEqual(84);
  });
})