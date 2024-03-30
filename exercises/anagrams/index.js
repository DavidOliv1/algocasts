// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(string) {
  const charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// solution 1:
// function anagrams(stringA, stringB) {
//     const formatedStringA = stringA.replace(/[^\w]+/g, '').toLowerCase();
//     const formatedStringB = stringB.replace(/[^\w]+/g, '').toLowerCase();

//     const charMapA = buildCharMap(formatedStringA);
//     const charMapB = buildCharMap(formatedStringB);

//     for (let key in charMapA) {
//         if(charMapB[key] !== charMapA[key]) return false;
//     }

//     for (let key in charMapB) {
//         if(charMapA[key] !== charMapB[key]) return false;
//     }

//     return true;
// }

// solution 2:
// function anagrams(stringA, stringB) {
//     const formatedStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const formatedStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     const charMapA = buildCharMap(formatedStringA);
//     const charMapB = buildCharMap(formatedStringB);

//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }

//     for (let key in charMapA) {
//         if(charMapA[key] !== charMapB[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// solution 3:
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
