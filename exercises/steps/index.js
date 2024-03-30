// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution 1:
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n - i));
//     }
// }

// solution 2:
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i).padEnd(n));
//     }
// }

// solution 3:
// function steps(n) {
//     for(let i = 1; i <= n; i++) {
//         console.log(new Array(i).fill('#').join('') + new Array(n - i).fill(' ').join(''));
//     }
// }

// solution 4:
// function steps(n) {
//     for(let row = 1; row <= n; row++) {
//         let stair = '';

//         for(let column = 1; column <= n; column++) {
//             if(column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// solution 5:
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps;
