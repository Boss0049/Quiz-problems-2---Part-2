const CharacterCheck = (stringInput) => {
  for (let i = 0; i < stringInput.length; i++) {
    if (stringInput == stringInput.toUpperCase()) {
      return "All character are capital.";
    } else if (stringInput == stringInput.toLowerCase()) {
      return "All character are small.";
    } else {
      return "All character are mix.";
    }
  }
};

console.log(CharacterCheck("bOss"));
