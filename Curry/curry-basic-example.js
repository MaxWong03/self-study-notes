/**
 * Curry Concepts
 *
 * 1) Call a function with fewer arguments than it expects
 *
 * 2) return a function that takes the remaining argument
 */

const add = x => {
  return y => {
    return x + y;
  };
};

//its the same as

const addShortHand = x => y => x + y;

console.log(add(3)(4) === addShortHand(3)(4));