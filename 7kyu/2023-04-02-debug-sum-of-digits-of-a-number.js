// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
// Example

// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
  var sum = 0;
  var digits = integer.toString().split("").map(Number);

  for (var i = 0; i < digits.length; i++) {
    sum += digits[i];
  }

  return sum;
}
