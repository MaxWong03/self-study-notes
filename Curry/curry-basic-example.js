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

const increment = add(1);
/**
 * returns the function
 *  y => {
 *  1 + y
 * }
 */

increment(2);
//3, same as add(1)(2)

const addTen = add(10);
/**
 * returns the function
 * y => {
 *  10 + y
 * }
 */

addTen(2);
//12, same as add(10)(2)