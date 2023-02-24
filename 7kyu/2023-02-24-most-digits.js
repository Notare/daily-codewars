// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  let mostDigit = 0;

  array.forEach((e) => {
    if (e.toString().length > mostDigit.toString().length) {
      mostDigit = e;
    }
  });

  return mostDigit;
}
