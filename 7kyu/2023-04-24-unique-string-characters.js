// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.

// Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a, b) {
  const a1 = [...a].filter((e) => ![...b].includes(e)).join("");
  const b1 = [...b].filter((e) => ![...a].includes(e)).join("");

  return a1 + b1;
}
