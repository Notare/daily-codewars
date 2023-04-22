// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

function average(scores) {
  return Math.round(scores.reduce((acc, n) => acc + n, 0) / scores.length);
}
