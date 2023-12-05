// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
function rgb(r, g, b) {
  const numSystem = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;

  let rHex = Math.floor(r / 16);
  let rRemainder = ((r / 16) % 1) * 16;
  rHex < 10 ? rHex : (rHex = numSystem[rHex]);
  rRemainder < 10 ? rRemainder : (rRemainder = numSystem[rRemainder]);

  let gHex = Math.floor(g / 16);
  let gRemainder = ((g / 16) % 1) * 16;
  gHex < 10 ? gHex : (gHex = numSystem[gHex]);
  gRemainder < 10 ? gRemainder : (gRemainder = numSystem[gRemainder]);

  let bHex = Math.floor(b / 16);
  let bRemainder = ((b / 16) % 1) * 16;
  bHex < 10 ? bHex : (bHex = numSystem[bHex]);
  bRemainder < 10 ? bRemainder : (bRemainder = numSystem[bRemainder]);

  return `${rHex}${rRemainder}${gHex}${gRemainder}${bHex}${bRemainder}`;
}
