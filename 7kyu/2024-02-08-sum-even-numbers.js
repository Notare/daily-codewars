// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.
// Examples

// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0
function sumEvenNumbers(input) {
  // takes an arr of numbers
  // returns the sum of the even numbers
  // e.g: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30
  // loop through the arr and filter out the even numbers
  // sum the even numbers and return it
  return input
    .filter((number) => number % 2 === 0)
    .reduce((acc, currentNum) => acc + currentNum, 0);
}
