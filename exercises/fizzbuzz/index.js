// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// solution 1:
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// solution 2:
// function fizzBuzz(n) {
//     let i = 1;

//     while(i <= n) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// solution 3:
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let word = '';
//         word += i % 3 === 0 ? 'fizz' : ''
//         word += i % 5 === 0 ? 'buzz' : ''
//         console.log(word || i);
//     }
// }

// solution 4:
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = '';
//         if (i % 3 === 0 ) str+='fizz'
//         if (i % 5 === 0 ) str+='buzz'
//         console.log(str || i)
//     }
// }

// solution 5:
function fizzBuzz(n) {
  if (n === 0) return;

  fizzBuzz(n - 1);

  let str = "";
  if (!(n % 3)) str += "fizz";
  if (!(n % 5)) str += "buzz";

  console.log(str || n);
}

module.exports = fizzBuzz;
