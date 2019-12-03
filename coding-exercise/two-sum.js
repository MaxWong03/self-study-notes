/**
 * @param {number[]} numsArr
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numArr, target) => {
  const hashTable = new Map();
  for (let i = 0; i < numArr.length; i++) {
    const curEl = numArr[i];
    const complement = target - curEl;
    const complementIndex = hashTable.get(complement);
    if (complementIndex !== undefined) return [i, complementIndex].sort();
    else hashTable.set(curEl, i);
  }
};

module.exports = {
  twoSum
};