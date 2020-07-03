const numberOfSquare = (height, width) => {
  let valueMin = 0;
  let gcd = 1;
  let newHeight = height;
  let newWidth = width;
  if (height < width) {
    valueMin = height;
  } else if (height > width) {
    valueMin = width;
  } else {
    return 1;
  }
  for (let i = valueMin; i > 0; i--) {
    if (height % i === 0) {
      if (width % i === 0) {
        height /= i;
        width /= i;
        gcd = gcd * i;
      }
    }
  }
  return (newHeight * newWidth) / (gcd * gcd);
};

console.log(numberOfSquare(3, 14));
