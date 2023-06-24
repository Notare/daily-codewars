//  Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
function remove(str, n) {
  let result = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!" || count === n) {
      result += str[i];
    } else {
      count++;
    }
  }

  return result;
}
