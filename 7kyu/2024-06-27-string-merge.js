// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
// Examples

// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"
function stringMerge(string1, string2, letter) {
  const word1 = string1.slice(0, string1.indexOf(letter) + 1);
  const word2 = string2.slice(string2.indexOf(letter) + 1);
  return word1 + word2;
}
