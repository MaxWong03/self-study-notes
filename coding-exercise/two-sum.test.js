const { twoSum } = require('./two-sum');

describe('twoSum', () => {
  test('returns [0, 1] given numArr = [2, 7, 11, 15] and target = 9', () => {
    const numArr = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numArr, target)).toEqual([0, 1]);
  });
});