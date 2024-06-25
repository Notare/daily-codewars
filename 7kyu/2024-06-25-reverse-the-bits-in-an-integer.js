// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.
function reverseBits(n) {
  /*
  parameter is a number
  return the number from the reversed binary
  e.g: 417 returns 267
  convert n to binary
  reverse the binary
  convert the binary to number again
  */
  const nBinary = n.toString(2);
  const nBinaryReversed = nBinary.split("").reverse().join("");
  const nBinaryReversedToNumber = parseInt(nBinaryReversed, 2);
  return +nBinaryReversedToNumber;
}
