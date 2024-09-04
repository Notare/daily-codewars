// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |

// Examples

// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
function getIssuer(number) {
  const numberLength = number.toString().length;
  const firstNumber = +number.toString()[0];
  const firstTwoNumbers = +number.toString().slice(0, 2);
  const firstFourNumbers = +number.toString().slice(0, 4);

  if (
    (firstTwoNumbers === 34 || firstTwoNumbers === 37) &&
    numberLength === 15
  ) {
    return "AMEX";
  } else if (firstFourNumbers === 6011 && numberLength === 16) {
    return "Discover";
  } else if (
    firstNumber === 4 &&
    (numberLength === 13 || numberLength === 16)
  ) {
    return "VISA";
  } else if (
    firstTwoNumbers >= 51 &&
    firstTwoNumbers <= 55 &&
    (numberLength === 13 || numberLength === 16)
  ) {
    return "Mastercard";
  } else {
    return "Unknown";
  }
}
