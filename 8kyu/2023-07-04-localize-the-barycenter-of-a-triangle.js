// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

// You know that the coordinates of the barycenter are given by the following formulas.

// [source: imgur.com]

// For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

// Let's see some cases:

// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

// barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]

// The given points form a real or a degenerate triangle but in each case the above formulas can be used.
function barTriang(p1, p2, p3) {
  //output must be up to 4 decimals and rounded
  const x0 = +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
  const y0 = +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
  return [x0, y0];
}
