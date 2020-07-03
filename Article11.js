const dotProduct = (vector1, vector2) => {
  let count;
  let total = 0;
  if (vector1.length < vector2.length) {
    count = vector2.length;
  } else {
    count = vector1.length;
  }
  for (let i = 0; i < count; i++) {
    if (vector1[i] !== undefined && vector2[i] !== undefined) {
      total += vector1[i] * vector2[i];
    } else if (vector1[i] === undefined) {
      total += 0 * vector2[i];
    } else if (vector2[i] === undefined) {
      total += vector1[i] * 0;
    }
  }
  return total;
};

console.log(dotProduct([3, 4], [2, 8, 9, 11]));
