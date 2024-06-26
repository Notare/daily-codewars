// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'
function boredom(staff) {
  /*
  parameter is an obj
  keys = staff names
  values = department
  
  return:
  <=80: 'kill me now'
  < 100 & > 80: 'i can handle this'
  100 or over: 'party time!!'

  store the assessment scores in a separate variable
  loop through the staff
  compare their department to their assessment score
  sum all the scores
  return the appropriate sentiment based on the sum
  */
  const assessmentScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  const scoreSum = Object.keys(staff).reduce(
    (acc, name) => acc + assessmentScores[staff[name]],
    0
  );

  if (scoreSum <= 80) {
    return "kill me now";
  } else if (scoreSum < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}
