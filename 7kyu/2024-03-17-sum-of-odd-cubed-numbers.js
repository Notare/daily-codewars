// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
  //return undefined if any of the values aren't numbers
  //cube all elements
  //filter odd nums
  //sum them
  console.log(arr);
  return arr.every((n) => n === +n)
    ? arr
        .map((n) => n ** 3)
        .filter((n) => n % 2)
        .reduce((acc, n) => acc + n, 0)
    : undefined;
}
