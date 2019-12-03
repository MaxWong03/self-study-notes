const { twoSum } = require('./two-sum');

describe('twoSum', () => {
  
  const numArr = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(numArr, target);

  test('returns an array', () => {
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('returns an array of length 2', () => {
    expect(result.length).toEqual(2);
  });

  test('returns [0, 1] given numArr = [2, 7, 11, 15] and target = 9', () => {
    expect(result).toEqual([0, 1]);
  });
});