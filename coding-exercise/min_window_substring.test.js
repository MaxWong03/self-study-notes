const { getHashText, getHashPattern, getSubString, isSatisfyWindow, getMinWindow, MinWindowSubString } = require('./min_window_substring');

describe('getSubString', () => {
  const str = 'Mozilla';
  test('returns oz for str = Mozilla, left = 1, right = 2', () => {
    const subString = getSubString(str, 1, 2);
    expect(subString).toEqual('oz');
  });

  test('returns zilla for str = Mozilla, left = 2, right = 7', () => {
    const subString = getSubString(str, 2, 6);
    expect(subString).toEqual('zilla');
  });

  test('returns M for str = Mozilla, left = 0, right = 0', () => {
    const subString = getSubString(str, 0, 0);
    expect(subString).toEqual('M');
  });
});

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
    const expected = { a: 6, b: 1, d: 2, e: 1 };
    expect(hashText).toEqual(expected);
  });
  test('returns {a: 3, b: 2, d: 3, c: 4} for text = "aabdccdbcacd"', () => {
    const hashText = getHashText('aabdccdbcacd');
    const expected = { a: 3, b: 2, d: 3, c: 4 };
    expect(hashText).toEqual(expected);
  });
});

describe('isSatsifyWindow', () => {
  test('returns true when text = abc and pattern = abc', () => {
    const hashText = getHashText('abc');
    const hashPattern = getHashPattern('abc');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeTruthy();
  });

  test('returns false when text = ab and pattern = abc', () => {
    const hashText = getHashText('ab');
    const hashPattern = getHashPattern('abc');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeFalsy();
  });

  test('returns true when text = banc and pattern = abc', () => {
    const hashText = getHashText('banc');
    const hashPattern = getHashPattern('abc');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeTruthy();
  });

  test('returns true when text = dae and pattern = aed', () => {
    const hashText = getHashText('dae');
    const hashPattern = getHashPattern('aed');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeTruthy();
  });

  test('returns true when text = aabd and pattern = aad', () => {
    const hashText = getHashText('aabd');
    const hashPattern = getHashPattern('aad');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeTruthy();
  });

  test('returns false when text = asxw and pattern = awg', () => {
    const hashText = getHashText('asxw');
    const hashPattern = getHashPattern('awg');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeFalsy();
  });

  test('returns false when text = abdc and pattern = aad', () => {
    const hashText = getHashText('abdc');
    const hashPattern = getHashPattern('aad');
    const result = isSatisfyWindow(hashText, hashPattern);
    expect(result).toBeFalsy();
  });
});

describe('getMinWindow', () => {
  test('return abc if input is ("", abc)', () => {
    const minWindow = getMinWindow('', 'abc');
    expect(minWindow).toEqual('abc');
  });

  test('returns abc if input is (abcd, abc)', () => {
    const minWindow = getMinWindow('abcd', 'abc');
    expect(minWindow).toEqual('abc');
  });

  test('returns abc if input is (abc, abcd)', () => {
    const minWindow = getMinWindow('abc', 'abcd');
    expect(minWindow).toEqual('abc');
  });
});

describe('MinWindowSubString', () => {
  test('returns dae when strArr is ["aaabaaddae", "aed"]', () => {
    const result = MinWindowSubString(['aaabaaddae', 'aed']);
    expect(result).toEqual('dae');
  });
  test('returns aabd when strArr is ["aabdccdbcacd", "aad"]', () => {
    const result = MinWindowSubString(['aabdccdbcacd', 'aad']);
    expect(result).toEqual('aabd');
  });
  test('returns t stri when strArr is ["this is a test string", "tist"]', () => {
    const result = MinWindowSubString(['this is a test string', 'tist']);
    expect(result).toEqual('t stri');
  });
  test('returns ksfor when strArr is ["geeksforgeeks", "ork"]', () => {
    const result = MinWindowSubString(['geeksforgeeks', 'ork']);
    expect(result).toEqual('ksfor');
  });
});