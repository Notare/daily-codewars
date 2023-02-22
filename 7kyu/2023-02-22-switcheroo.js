// letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb

function switcheroo(x) {
  return [...x]
    .map((e) => {
      if (e === "a") {
        return "b";
      } else if (e === "b") {
        return "a";
      } else {
        return e;
      }
    })
    .join("");
}
