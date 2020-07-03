const minPairSum = (inputArray) => {
  inputArray.sort((a, b) => a - b);
  return inputArray[0] + inputArray[1];
};

console.log(minPairSum([2, 5, 3, 9, 19, 3, 7, 58]));
