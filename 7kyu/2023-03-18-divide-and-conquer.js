// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  const nonStr = x.filter((e) => e === +e).reduce((acc, n) => acc + +n, 0);
  const strInts = x.filter((e) => e !== +e).reduce((acc, n) => acc + +n, 0);

  return nonStr - strInts;
}
