const numberOfJumpFrog = (speed, distance) => {
  return Math.ceil(distance / speed);
};

console.log(numberOfJumpFrog(0, 15));
