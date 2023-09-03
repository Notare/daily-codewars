// However, I myself find the for loop very complex and unreadable. Think about it - would you know what the for loop does if you've never learned computer programming? For example, if you've never coded before, would you have any idea what this thing in the for loop: i = 0; i < number; i++ means?

// Therefore, I would like you to define a method callable on integers, Number.prototype.times, that effectively replaces the for loop. It should work like this:

// // Prints "Hello World" to the console 100 times
// // Isn't this much more readable?  At least a non-programmer
// // knows that something is being executed 100 times!
// (100).times(_ => {
//   console.log("Hello World");
// });

// Sometimes, we also want to loop through an array. For example, if we have an array example = [1,2,3,4], we could use our newly defined method to loop over the array like this:

// example.length.times(_ => {
//   // Code to be executed
// });

// However, here lies the problem - since the function does not accept any arguments, how can we use this method to loop over every element in the array? Therefore, your Number.prototype.times method should supply the iteration variable i to the anonymous function being executed to support this feature of looping through every element in an array, like such:

// example.length.times(i => {
//   console.log(example[i]);
// });
// /* Prints the following to the console:
// 1
// 2
// 3
// 4
// */

// The iteration variable supplied to the anonymous function could also be used like this:

// (100).times(i => {
//   console.log(i);
// });
// /* Prints all integers from 0 (inclusive) to 100 (exclusive) */

// Task Summary

// In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times). The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.
Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
};
