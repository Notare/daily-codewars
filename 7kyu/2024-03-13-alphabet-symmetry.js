// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
function solve(arr) {
  //loop through the arr
  //separate the letters
  //convert all to lowercase
  //convert them to their position in the word
  //compare them to their position in the alphabet
  //if true, increase the count for the word
  //return an arr with the counts for the word
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map((word) => {
    return word
      .toLowerCase()
      .split("")
      .filter((letter, i) => i === alphabet.indexOf(letter)).length;
  });
}
