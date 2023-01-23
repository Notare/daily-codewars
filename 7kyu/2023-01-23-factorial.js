// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  let arr = [];

  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }

  return arr.reduce((acc, n) => acc * n, 1);
}
