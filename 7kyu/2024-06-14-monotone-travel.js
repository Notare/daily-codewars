// Story

// Peter lives on a hill, and he always moans about the way to his home. "It's always just up. I never get a rest". But you're pretty sure that at least at one point Peter's altitude doesn't rise, but fall. To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way back at the next day.
// Task

// You're given a list of compareable elements:

// heights = [h1, h2, h3, …, hn]

// Your job is to check whether for any x all successors are greater or equal to x.

// isMonotone([1,2,3]) == true
// isMonotone([1,1,2]) == true
// isMonotone([1])     == true
// isMonotone([3,2,1]) == false
// isMonotone([3,2,2]) == false

// If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:

// isMonotone([])     == True

// Such a sequence is also called monotone or monotonic sequence, hence the name isMonotone.
var isMonotone = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};
