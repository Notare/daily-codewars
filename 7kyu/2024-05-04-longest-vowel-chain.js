// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
function solve(str) {
  const vowels = str
    .replace(/[^aeiou]/gi, " ")
    .split(" ")
    .filter((ch) => ch);

  return Math.max(...vowels.map((ch) => ch.length));
}
