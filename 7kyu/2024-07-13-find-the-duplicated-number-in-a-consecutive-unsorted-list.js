// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.
function findDup(arr) {
  /*
  parameter is an arr
  return the duplicated number
  e.g: findDup([1,2,2,3]), 2)
  loop through the arr
  check if the current element is equal to the next
  if yes, return it
  */
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
}
