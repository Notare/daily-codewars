// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }

// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color")
function makeClass(...properties) {
  return class {
    constructor(...args) {
      properties.forEach((prop, i) => (this[prop] = args[i]));
    }
  };
}
