// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 1:
// function vowels(str) {
//   const regexp = /[AEIOU]/gi;
//   const result = str.match(regexp);
//   return result?.length || 0;
// }

// solution 2:
// function vowels(str) {
//   return str.replace(/[^aeiou]/gi, "").length;
// }

// solution 3:
// function vowels(str) {
//   let count = 0;
//   const checker = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// solution 4:
function vowels(str) {
  return str.split("").reduce((acc, char) => {
    acc += ["a", "e", "i", "o", "u"].includes(char.toLowerCase()) ? 1 : 0;
    return acc;
  }, 0);
}

module.exports = vowels;
