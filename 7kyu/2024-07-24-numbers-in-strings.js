// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!
function solve(s) {
  /*
  parameter is a str
  returns the largest number
  e.g: solve("gh12cdy695m1") = 695
  
  loop through the str
  separate the numbers from the letters
  return the largest number
  */
  const numsArr = s.match(/\d+/g).map(Number);
  return Math.max(...numsArr);
}
