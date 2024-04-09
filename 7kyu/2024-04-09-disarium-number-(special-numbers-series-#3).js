// Definition

// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task

// Given a number, Find if it is Disarium or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     Number passed is always Positive .
//     Return the result as String

// Input >> Output Examples

// disariumNumber(89) ==> return "Disarium !!"

// Explanation:

//     Since , 81 + 92 = 89 , thus output is "Disarium !!"

// disariumNumber(564) ==> return "Not !!"

// Explanation:

// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
function disariumNumber(n) {
  //The sum of its digits powered with their respective positions is equal to the number itself
  //[x]split the n to get its digits
  //[x]use the map method to loop through the digits and power them with their indexes
  //[x]sum them
  //[x]use a conditional statement to compare the sum to the n, if it's equal, return disarium, else, return not
  const digits = n.toString().split("").map(Number);
  const digitsPowered = digits.map((digit, i) => digit ** (i + 1));
  const sum = digitsPowered.reduce(
    (acc, currentDigit) => acc + currentDigit,
    0
  );
  return sum === n ? "Disarium !!" : "Not !!";
}
