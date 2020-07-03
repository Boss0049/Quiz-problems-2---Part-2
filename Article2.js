const pow = (a, n) => {
  let sum = 1;
  for (let i = 0; i < n; i++) {
    sum *= a;
  }
  return sum;
};
console.log(pow(2, 2));
