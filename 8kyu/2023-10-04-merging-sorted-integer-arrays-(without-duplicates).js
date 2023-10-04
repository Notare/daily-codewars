// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
  return [...new Set(a.concat(b).sort((a, b) => a - b))];
}
