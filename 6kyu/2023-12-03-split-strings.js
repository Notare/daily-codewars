// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str) {
  return str
    ? str.match(/.{1,2}/g).map((pair) => (pair.length < 2 ? `${pair}_` : pair))
    : [];
}
