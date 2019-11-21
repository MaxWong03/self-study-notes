/**
 * Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K.
 * 
 *  For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
 */


/**
 * 
 * @param {*} str the string that we are taking sub strings of 
 * @param {*} left the left index, inclusive
 * @param {*} right the right index inclusive
 */
const getSubString = (str, left, right) => {
  //right + 1 to make the substring right index inclusive
  return str.substring(left, right + 1);
}

const getHashPattern = pattern => {
  const hashPattern = {};
  for (let i = 0; i < pattern.length; i++) {
    const currentPatternChar = pattern[i];
    if (!hashPattern[currentPatternChar]) hashPattern[currentPatternChar] = 1; //if this is the first time encountering that char in pattern
    else hashPattern[currentPatternChar] += 1; // if it isnt the first time
  }
  return hashPattern;
}

const getHashText = text => {
  const hashText = {};
  for (let i = 0; i < text.length; i++) {
    const currentTextChar = text[i];
    if (!hashText[currentTextChar]) hashText[currentTextChar] = 1;
    else hashText[currentTextChar] += 1;
  }
  return hashText;
}

/**
 * 
 * @param {*} hashText - the current window determined by left and right pointers
 * @param {*} hashPattern - the pattern
 */
const isSatisfyWindow = (hashText, hashPattern) => {
  for (const keyChar in hashPattern) {
    // the window does not contain the char that makes up the pattern
    if (!hashText[keyChar]) return false;
    //the window does contain the char that makes up the pattern
    else {
      if (hashText[keyChar] < hashPattern[keyChar]) return false;
    }
  }
  return true;
};

const getMinWindow = (minSub, curMinWindow) => {
  //if minSub is an empty string, return curMinWindow
  if (!minSub) return curMinWindow;
  else {
    if (minSub.length > curMinWindow.length) return curMinWindow;
    else return minSub;
  }
}

/**
 * abc , c
 * 
 * 1st iteration
 * subString = ''
 * window = a, not satisfied, subString stays the same, increase right, left = 0, right = 1
 * 
 * 2nd iteration
 * subString = ''
 * window = ab, not satisfied, subString stays the same, increase right, left = 0, right = 2
 * 
 * 3rd iteration
 * subString = 'abc'
 * window = abc, satifsied, subStrings becomes 'abc' increase left, left = 1, right = 2
 * 
 * 4th iteration
 * subString = 'abc'
 * window = bc, satifsied, subString becomes 'bc', increase left, left = 2, right = 2
 * 
 * 5th iteration
 * window = c, satisfied, subString becomes 'c', increase left, left = 3, right = 2
 */
const MinWindowSubString = strArr => {
  const [text, pattern] = strArr;
  const hashPattern = getHashPattern(pattern);
  let [left, right] = [0, 0]; //init the pointers
  let minSubString = '';
  //Run until there is no more expansion that the right pointer can do
  while (left != text.length && right != text.length) {
    //expand the window with right pointer until we have a satisfying window
    const currentMinWindow = getSubString(text, left, right);
    const hashText = getHashText(currentMinWindow);
    if (!isSatisfyWindow(hashText, hashPattern)) right++;
    //if we have a satisfying window 
    else {
      minSubString = getMinWindow(minSubString, currentMinWindow);
      left++;
    }
  }
  return minSubString;

}

module.exports = {
  getSubString,
  getHashPattern,
  getHashText,
  isSatisfyWindow,
  getMinWindow,
  MinWindowSubString
}