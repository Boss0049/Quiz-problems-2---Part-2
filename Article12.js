const maxPairSum = (inputArray) => {
  inputArray.sort((a, b) => b - a);
  return inputArray[0] + inputArray[1];
};

console.log(maxPairSum([2, 5, 3, 9, 19, 3, 7, 58]));
