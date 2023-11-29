// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
  //create an array for the normal numbers and other for the zeros
  //loop through the array
  //use a conditional to check if the element is not a zero, add it to the first arr, else, add it to the zeros array
  //concatenate these two arrays
  const notZeros = [];
  const zeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      notZeros.push(arr[i]);
    } else {
      zeros.push(arr[i]);
    }
  }

  return notZeros.concat(zeros);
}
