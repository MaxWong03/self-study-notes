/**
 * Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K.
 * 
 *  For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
 */

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
    if (!hashText[currentTextChar]) hashText[currentTextChar] = 0;
  }
  return hashText;
}

const MinWindowSubString = strArr => {
  const [text, pattern] = strArr;
  const hashText = getHashText(text);
  const hashPattern = getHashPattern(pattern);
  let count = 0;
  let left = 0;
  let right = text.length - 1;

  //filling up hashText
  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];
    if (!hashPattern[currentChar]) hashText[currentChar] += 1; //if currentChar is not part of the pattern, increase its value in hashText
    else { //if its part of the pattern
      //and its value in hashText has not yet exceed the required occurence in hashPattern
      if (hashText[currentChar] <= hashPattern[currentChar]) {
        hashText[currentChar] += 1;
        count++;
      } else { //its value exceed the required occurence in hashPattern
        hashText[currentChar] += 1;
      }
    }
  }

  //finding left indices for substring
  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];
    if (!hashPattern[currentChar]) { //if currentChar is not part of the pattern
      left += 1; //move the left indice by 1
      hashText[currentChar] -= 1; //decrease its value in hashText by 1
    } else { //if its part of the pattern
      //and we could shift the left indices and still have enough characters to satisfiy the pattern
      if (hashText[currentChar] > hashPattern[currentChar]) {
        left += 1;
        hashText[currentChar] -= 1;
      }
    }
  }

  return text.substring(left)

}

// ["aaabaaddae", "aed"]
// hashPattern = { a: 1, e: 1, d: 1 }
// hashText = { a: 6, b: 1, d: 2, e: 1 }
// left = 0

// ["aabdccdbcacd", "aad"]
// hashPattern = { a: 2, d: 1 }
// hashText = { a: 3, b: 2, d: 3, c: 4 }
// left = 0

["aabdccdbcacd", "aad"]
hashPattern = { a: 2, d: 1 }
hashText = { a: 2, b: 2, d: 2, c: 3 }
left = 1
right = 9

module.exports = {
  getHashPattern,
  getHashText,
  MinWindowSubString
}