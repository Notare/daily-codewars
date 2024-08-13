// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]

// the function should return :

// [1,4,3,8]
function doubleEveryOther(integersArr) {
  /*
  parameter is an arr of numbers
  return a new arr with every second integer doubled
  
  loop through the arr
  check if the index of the element is odd
    if yes, then double it
  return the arr
  */
  const integersDoubledArr = integersArr.map((number, i) =>
    i % 2 === 1 ? number * 2 : number
  );
  return integersDoubledArr;
}
