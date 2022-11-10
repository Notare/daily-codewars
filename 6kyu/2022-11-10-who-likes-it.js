// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names.join()} likes this`;
    case 2:
      return `${names.join(' and ')} like this`;
    case 3:
      return `${names[0]}, ${names.slice(1).join(' and ')} like this`;
    default:
      return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
  }
}