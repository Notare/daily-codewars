// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
function arr2bin(arr) {
  if (arr.includes(NaN)) {
    return "NaN";
  }

  return arr.reduce((acc, n) => acc + (n !== +n ? 0 : n), 0).toString(2);
}
