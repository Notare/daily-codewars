// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).
function insertDash(num) {
  //[x]convert to str
  //[x]split it
  //[x]loop through it
  //[x]check if the current num and the next num are odds
  //[x]if yes, add a dash to the current num
  //[x]join them
  const numArr = num.toString().split("");

  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] % 2 && numArr[i + 1] % 2) {
      numArr[i] += "-";
    }
  }

  return numArr.join("");
}
