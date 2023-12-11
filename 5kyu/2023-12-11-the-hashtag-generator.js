// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {
  //start the string with #
  //split the str
  //loop through it and capitalize first letter
  //join it without spaces between the words

  //if length of the result is > 140, return false
  //if input or result is empty, return false
  if (!str.trim()) {
    return false;
  }

  const result =
    "#" +
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  return result.length > 140 ? false : result;
}
