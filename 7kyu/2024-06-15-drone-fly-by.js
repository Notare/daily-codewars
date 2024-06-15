// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.
function flyBy(lamps, drone) {
  /*
  inputs are str
  lamp off = x
  lamp on = o
  drone position = T
  
  convert lamps to arr
  loop through it using the map method
  get the index of the drone and change it on the lamp index
  */
  const droneIndex = drone.indexOf("T");
  const numOfLampsAffected = lamps.slice(0, droneIndex + 1);
  const lampsTurnedOn = numOfLampsAffected.replace(/x/g, "o");
  return lampsTurnedOn + lamps.slice(lampsTurnedOn.length);
}
