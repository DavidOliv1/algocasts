// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution 1:
// function fib(n) {
//     const result = [];

//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     for(let i = 0; i <= n; i++) {
//         if(i === 0) {
//             result[i] = 0;
//             continue;
//         }
//         if(i === 1) {
//             result[i] = 1;
//             continue;
//         }
//         result[i] = result[i - 1] + result[i - 2];
//     }

//     return result[n];
// }

// solution 2:
// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i ++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }

//     return result[n];
// }

// solution 3:
// function fib(n) {
//     let index = 2
//     let lastNum = 1;
//     let prevNum = 0;
//     if (n < 2) {
//         return n;
//     }

//     while (index <= n) {
//         lastNum = lastNum + prevNum;
//         prevNum = lastNum - prevNum;
//         index++;
//     }

//     return lastNum;
// }

// solution 4:
// function fib(n, i = 2, arr = [0, 1]) {
//     if ( n < 2) return n;

//     let index = i;

//     const result = [...arr, arr[index - 2] + arr[index - 1]];

//     if( index <= n ) {
//         return fib(n, ++index, result)
//     }

//     return result[n];
// }

// solution 5:
// function fib(n) {
//     if ( n < 2) return n;

//     return fib(n - 1) + fib(n - 2);
// }

// solution 6:
// function fib(n, i = 1, current = 1, prev = 0) {
//     if (n === i) {
//         return current;
//     }

//     return fib(n, i + 1, current + prev, current);
// }

// solution 7:
// function fib(n) {
//     const fibOn = (i = 1, current = 1, prev = 0) => {
//       if (n === i) {
//         return current;
//       }

//       return fibOn(i + 1, current + prev, current);
//     }

//     return fibOn();
//   }

// solution 8:
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
