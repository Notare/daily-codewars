// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
function bingo(arr) {
  /*
  parameter is an arr of numbers
  return WIN or LOSE
  
  loop through the arr
  convert each number to its alphabetical letter
  check if the letters corresponds to the bingo word
  if the arr has all the letter, return WIN
  */
  const numbersConvertedToTheirLetterArr = arr.map((number) =>
    String.fromCharCode(number + 64)
  );
  const bingoWord = "BINGO";
  let bingoCheck = 0;

  for (let i = 0; i < numbersConvertedToTheirLetterArr.length; i++) {
    if (numbersConvertedToTheirLetterArr.includes(bingoWord[i])) {
      bingoCheck++;
    }
  }

  return bingoCheck > 4 ? "WIN" : "LOSE";
}
