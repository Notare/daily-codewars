// Math Object Madness

// You are a(n) novice/average/experienced/senior/professional/world-class Developer (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever gets hold of your precious computer with all the software and functionality in it and manages to utterly destroy the Javascript Math object! Being the Developer that you are, you decide to recover as much of the functionality as possible.
// Objective

// Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal is to recover the following:

//     Math.ceil(x)
//     Math.floor(x)
//     Math.round(x)
//     Math.abs(x)
//     Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
//     Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
//     Math.pow(x,y) (you may assume the exponent is always a positive integer)

// You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for the other methods will not be tested.
// Credits

// The idea of this Kata is not entirely original; credits go to BattleRattle's "Math Issues" for inspiring me to make this Kata.
Math.ceil = (x) => (x % 1 == 0 ? x : x - (x % 1) + 1);
Math.floor = (x) => x - (x % 1);
Math.round = (x) => (x % 1 == 0 ? x : x - (x % 1) + (x % 1 >= 0.5 ? 1 : 0));
Math.abs = (x) => (x < 0 ? -x : x);
Math.max = function (...x) {
  return x.sort((a, b) => b - a)[0];
};
Math.min = function (...x) {
  return x.sort((a, b) => a - b)[0];
};
Math.pow = function (x, y) {
  var rs = 1;
  while (y--) rs *= x;
  return rs;
};
