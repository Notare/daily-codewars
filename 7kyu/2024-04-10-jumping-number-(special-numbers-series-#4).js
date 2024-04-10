// Definition

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     Number passed is always Positive .

//     Return the result as String .

//     The difference between ‘9’ and ‘0’ is not considered as 1 .

//     All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples

// jumpingNumber(9) ==> return "Jumping!!"

// Explanation:

//     It's single-digit number

// jumpingNumber(79) ==> return "Not!!"

// Explanation:

//     Adjacent digits don't differ by 1

// jumpingNumber(23) ==> return "Jumping!!"

// Explanation:

//     Adjacent digits differ by 1

// jumpingNumber(556847) ==> return "Not!!"

// Explanation:

//     Adjacent digits don't differ by 1

// jumpingNumber(4343456) ==> return "Jumping!!"

// Explanation:

//     Adjacent digits differ by 1

// jumpingNumber(89098) ==> return "Not!!"

// Explanation:

//     Adjacent digits don't differ by 1

// jumpingNumber(32) ==> return "Jumping!!"

// Explanation:

//     Adjacent digits differ by 1
function jumpingNumber(n) {
  let arr = n.toString().split("");
  for (i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}
