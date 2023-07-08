// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
function duckDuckGoose(players, goose) {
  for (let i = 0; i < players.length; i++) {
    if (goose > players.length) {
      return players[(goose - 1) % players.length].name;
    } else {
      return players[goose - 1].name;
    }
  }
}
