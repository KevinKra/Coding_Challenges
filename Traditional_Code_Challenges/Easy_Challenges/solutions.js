//1.) Reverse a string

//solution one:
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

//solution two:
function reverseString(str) {
  let reversed = str
    .split("")
    .reduce((accum, letter) => {
      accum.unshift(letter);
      return accum;
    }, [])
    .join("");
  return reversed;
}

//solution three:
function reverser(str) {
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }
  return word;
}
