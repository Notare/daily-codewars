// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.
function sumNoDuplicates(numList) {
  return numList
    .filter((n) => numList.indexOf(n) === numList.lastIndexOf(n))
    .reduce((acc, n) => acc + n, 0);
}
