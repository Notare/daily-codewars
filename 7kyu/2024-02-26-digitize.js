// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]
function digitize(n) {
  //takes a non negative number
  //returns an array of the individual digits in order
  //e.g: digitize(8675309), [8,6,7,5,3,0,9]
  //convert the n to a str
  //split the str to an arr
  //convert the arr to number
  return n.toString().split("").map(Number);
}
