// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// solution 1:
// function maxChar(str) {
//   const mappedChars = {};

//   for (let char of str) {
//     mappedChars[char] = mappedChars[char] + 1 || 1;
//   }

//   let maxChar = "";
//   let countMaxChar = 0;
//   for (char in mappedChars) {
//     if (mappedChars[char] > countMaxChar) {
//       maxChar = char;
//       countMaxChar = mappedChars[char];
//     }
//   }

//   return maxChar;
// }

// solution 2:
// function maxChar(str) {
//   const mappedChars = {};
//   let maxChar = "";
//   let countMaxChar = 0;

//   for (let char of str) {
//     mappedChars[char] = mappedChars[char] + 1 || 1;

//     if (mappedChars[char] > countMaxChar) {
//       maxChar = char;
//       countMaxChar = mappedChars[char];
//     }
//   }

//   return maxChar;
// }

// solution 3:
function maxChar(str) {
  let mappedChars = {};
  for (let char of str) {
    mappedChars[char] = mappedChars[char] + 1 || 1;
  }

  return Object.keys(mappedChars).reduce((a, b) =>
    mappedChars[a] > mappedChars[b] ? a : b
  );
}

module.exports = maxChar;
