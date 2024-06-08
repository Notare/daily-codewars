// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.
function switcher(x) {
  //[x]create a string with the letters reversed and store it in a var (z will be first index)
  //[x]add the chars !, ? and ' ' in the end of the string
  //[x]loop through the str and return the letter according to their index
  //[x]join the letters
  const alphabet = "zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map((code) => alphabet[code - 1]).join("");
}
