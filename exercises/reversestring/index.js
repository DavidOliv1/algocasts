// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1:
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// solution 2:
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// solution 3:
// function reverse(str) {
//   const reversed = [];
//   for (let i = str.length - 1; i > -1; i--) {
//     reversed.push(str[i]);
//   }
//   return reversed.join("");
// }

// solution 4:
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
