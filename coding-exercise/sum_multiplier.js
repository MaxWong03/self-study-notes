/**
 * Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. 
 * 
 * For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.
 */


const reducer = (accumlator, currentValue) => accumlator + currentValue;

const doubleSum = arr => arr.reduce(reducer) * 2;

const SumMultiplier = arr => {
  const targetVal = doubleSum(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];
      if (num1 * num2 > targetVal) return true
    }
  }

  return false;
}

module.exports = {
  doubleSum,
  SumMultiplier
}