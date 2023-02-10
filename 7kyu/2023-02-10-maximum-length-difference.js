// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// Bash note:

//     input : 2 strings with substrings separated by ,
//     output: number as a string

function mxdiflg(a1, a2) {
  const list1 = a1.map((e) => e.length);
  const list2 = a2.map((e) => e.length);

  if (a1.length === 0 || a2.length === 0) {
    return -1;
  } else {
    return Math.max(
      Math.max(...list1) - Math.min(...list2),
      Math.max(...list2) - Math.min(...list1)
    );
  }
}
