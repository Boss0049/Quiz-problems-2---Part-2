const isTheSameAnagram = (str1, str2) => {
  let output = true;
  for (let i = 0; i < str1.length; i++) {
    output = str2.includes(str1[i]) && output;
  }
  return output;
};

console.log(isTheSameAnagram("node", "deno"));
