// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
function spacey(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}
