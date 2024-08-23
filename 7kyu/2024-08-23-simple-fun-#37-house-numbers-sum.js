// Task

// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
// Example

// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

// The answer was obtained as 5 + 1 + 2 + 3 = 11.
// Input/Output

//     [input] integer array inputArray

//     Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

//     [output] an integer
function houseNumbersSum(arr) {
  /*
  parameter is an arr of numbers
  return the sum of all numbers that comes before 0
  
  use the slice method to get all the numbers before the 0
  sum them with the reduce method
  return the sum
  */
  const zero = arr.indexOf(0);
  const numbersBeforeZero = arr.slice(0, zero);
  const sum = numbersBeforeZero.reduce(
    (acc, currentNumber) => acc + currentNumber,
    0
  );
  return sum;
}
