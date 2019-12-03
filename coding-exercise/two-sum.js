/**
 * @param {number[]} numsArr
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numArr, target) => {
  for (let i = 0; i < numArr.length; i++) {
    const num1  = numArr[i];
    for (let j = i + 1; j < numArr.length; j++) {
      const num2 = numArr[j];
      if (num1 + num2 === target) return [i, j];
    }
  }
};

module.exports = {
  twoSum
};