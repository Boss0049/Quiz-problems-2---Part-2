const squareRoot = (number) => {
  let result;
  for (let i = number; i >= 2; i--) {
    if (number % (i * i) === 0) {
      number /= i * i;
      result = i;
    }
  }
  if (result === undefined) {
    return `root ${number}`;
  } else if (number === 1) {
    return `${result}`;
  } else {
    return `${result} root ${number} `;
  }
};
console.log(squareRoot(2));
