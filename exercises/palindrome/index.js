// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1:
// function palindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// solution 2:
// function palindrome(str) {
//   return str
//     .split("")
//     .every((char, i, str) => char === str[str.length - (i + 1)]);
// }

// solution 3:
// function palindrome(str) {
//   const half = Math.floor(str.length / 2);
//   for (let i = 0; i < half; i++) {
//     if (str[i] !== str[str.length - (i + 1)]) return false;
//   }
//   return true;
// }

// solution 4:
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = palindrome;
