// This Kata is intended as a small challenge for my students

// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// Example (Input --> Output)

// "drake" --> "drk"
// "aeiou" --> ""

// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""
var removeVowels = function (str) {
  return str.replace(/[aeiou]/gi, "");
};
