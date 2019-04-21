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

////

//2.)First Factorial
function firstFactorial(num) {
  if (num < 0) return NaN;
  return num > 0 ? num * firstFactorial(num - 1) : 1;
}
