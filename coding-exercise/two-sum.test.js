const { twoSum } = require('./two-sum');

describe('twoSum', () => {
  test('returns an array', () => {
    const numArr = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(numArr, target);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('returns [0, 1] given numArr = [2, 7, 11, 15] and target = 9', () => {
    const numArr = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numArr, target)).toEqual([0, 1]);
  });
});