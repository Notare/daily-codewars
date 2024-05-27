// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
// Examples

// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
function modifiedSum(arr, n) {
  //[x]loop through the arr
  //[x]calculate each vlaue to the nth power
  //[x]store it in a variable
  //[]sum the og arr and store it in a variable
  //[]subtract each var and return it
  const sumOfEachValue = arr.reduce((acc, value) => acc + value ** n, 0);
  const sumOfOgArr = arr.reduce((acc, n) => acc + n, 0);
  return sumOfEachValue - sumOfOgArr;
}
