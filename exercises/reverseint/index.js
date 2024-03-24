// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution 1:
// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");
//   return Math.sign(n) * parseInt(reversed);
// }

// solution 2:
// function reverseInt(n) {
//   let number = Math.abs(n);
//   let reversed = 0;

//   while (number >= 1) {
//     reversed = 10 * reversed + (number % 10);
//     number = Math.floor(number / 10);
//   }

//   return Math.sign(n) * reversed;
// }

// solution 3:
// function reverseInt(n) {
//   let number = n;
//   let reversed = 0;

//   while (number !== 0) {
//     const lastDigit = number % 10;
//     reversed = reversed * 10 + lastDigit;
//     number = Math.trunc(number / 10);
//   }
//   return reversed;
// }

// solution 4:
function reverseInt(n) {
  let reversed = 0;
  while (n) {
    reversed = reversed * 10 + (n % 10);
    n = (n / 10) | 0;
  }
  return reversed;
}

module.exports = reverseInt;
