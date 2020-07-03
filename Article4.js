const evenArraySum = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      sum += input[i];
    }
  }
  return sum;
};

console.log(evenArraySum([5, 8, 6, 7, 1]));
