// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net
function solution(digits) {
  //takes a string of only digits
  //returns the greatest sequence of five consecutive digits found within the number given
  //e.g: solution('1234567898765'), 98765
  //create a variable of the five consecutive digits separated
  //loop through the string
  //compare the current loop with the variable
  //if the current loop is a five consecutive digits, update the variable to it
  //return the current loop as a number
  console.log(digits);
  let fiveConsecutiveDigits = digits.slice(0, 5);

  for (let i = 0; i <= digits.length - 5; i++) {
    const currentLoop = digits.slice(i, i + 5);
    if (currentLoop > fiveConsecutiveDigits) {
      fiveConsecutiveDigits = currentLoop;
    }
  }

  return +fiveConsecutiveDigits;
}
