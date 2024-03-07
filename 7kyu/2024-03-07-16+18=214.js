// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.
// Examples
// 16+1821426+39515\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad+​112​6814​​+​235​6915​​

// 122+81110372+9711\large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array} \qquad \large \begin{array}{lll} & 7 & 2 \\ + & & 9 \\ \hline & 7 & 11 \\ \end{array} +​11​2810​213​​+​77​2911​​
function add(num1, num2) {
  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");

  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }

  var returnString = "";
  for (var i = 0; i < num1.length; i++) {
    var int1 = parseInt(num1[i]);
    var int2 = parseInt(num2[i] || 0);

    returnString = (int1 + int2).toString() + returnString;
  }

  return parseInt(returnString);
}
