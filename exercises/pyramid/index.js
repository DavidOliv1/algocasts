// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution 1:
// function pyramid(n) {
//     for(let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '#'.repeat(2*i - 1) + ' '.repeat(n - i));
//     }
// }

// solution 2:
// function pyramid(n) {
//     for(let row = 1; row <= n; row++) {
//         let level = '';
//         for(let col = 1; col <= 2*n - 1; col++) {
//             if(col <= n - row || col >= n + row) {
//                 level += ' ';
//             } else {
//                 level += '#';
//             }
//         }
//         console.log(level);
//     }
// }

// solution 3:
// function pyramid(n) {
//     const midpoint = Math.floor((2*n - 1) / 2);
//     for(let row = 0; row < n; row++) {
//         let level = '';
//         for(let col = 0; col < 2*n - 1; col++) {
//             if(midpoint - row <= col && midpoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }

// solution 4:
function pyramid(n, row = 1, str = "", col = 1) {
  if (row > n) {
    return;
  }

  if (col > 2 * n - 1) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  if (col <= n - row || col >= n + row) {
    str += " ";
  } else {
    str += "#";
  }

  pyramid(n, row, str, col + 1);
}

module.exports = pyramid;
