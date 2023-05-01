// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  if (!s1 || /[^a-z]/i.test(s1)) {
    s1 = "";
  }

  if (!s2 || /[^a-z]/i.test(s2)) {
    s2 = "";
  }

  const sum1 = [...s1].reduce(
    (acc, n) => acc + n.toUpperCase().charCodeAt(),
    0
  );
  const sum2 = [...s2].reduce(
    (acc, n) => acc + n.toUpperCase().charCodeAt(),
    0
  );

  return sum1 === sum2;
}
