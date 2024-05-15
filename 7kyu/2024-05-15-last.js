// Find the last element of the given argument(s).
// Examples

// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4

// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
function last(list) {
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
