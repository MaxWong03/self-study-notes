const { getSubString, MinWindowSubString } = require('./min_window_substring');

describe('getSubString', () => {
  const str = 'Mozilla';
  test('returns oz for str = Mozilla, left = 1, right = 3', () => {
    const subString = getSubString(str, 1, 3);
    expect(subString).toEqual('oz');
  });

  test('returns zilla for str = Mozilla, left = 2, right = 7', () => {
    const subString = getSubString(str, 2, 7);
    expect(subString).toEqual('zilla');
  })
})


describe('MinWindowSubString', () => {
  test('returns dae when strArr is ["aaabaaddae", "aed"]', () => {
    const result = MinWindowSubString(['aaabaaddae', 'aed']);
    expect(result).toEqual('dae');
  });
  test('returns aabd when strArr is ["aabdccdbcacd", "aad"]', () => {
    const result = MinWindowSubString(['aabdccdbcacd', 'aad']);
    expect(result).toEqual('aabd');
  })
});