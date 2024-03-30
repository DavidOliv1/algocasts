// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution 1:
// function capitalize(str) {
//     return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

// solution 2:
// function capitalize(str) {
//     return str.split(" ").map((word) => {
//         let updatedWord = '';
//         for (let i = 0; i < word.length; i++) {
//             if(i === 0) {
//                 updatedWord += word[i].toUpperCase();
//             } else {
//                 updatedWord += word[i];
//             }
//         }
//         return updatedWord;
//     }).join(" ");
// }

// solution 3:
// function capitalize(str) {
//     return str.replace(/\b[a-zA-Z]/g, (match) => {
//        return match.toUpperCase();
//     });
// }

// solution 4:
function capitalize(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase();
      continue;
    }
    str[i - 1] === " " ? (result += str[i].toUpperCase()) : (result += str[i]);
  }

  return result;
}

module.exports = capitalize;
