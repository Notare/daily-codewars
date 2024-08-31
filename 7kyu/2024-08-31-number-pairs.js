// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.
// Example:

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
function getLargerNumbers(a, b) {
  /*
  create a result arr
  loop through arr1
  compare the element from arr1 to the element from arr2
  if the element from arr1 is greater, add it to the result arr
  else, add the element from arr2
  return the result arr
  */
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result.push(a[i]);
    } else {
      result.push(b[i]);
    }
  }

  return result;
}
