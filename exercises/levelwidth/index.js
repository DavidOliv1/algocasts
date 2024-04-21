// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// solution 1:
// function levelWidth(root) {
//     let arr = [];
//     let counters = [0];
//     arr.push(root, 's');

//     while(arr.length >= 2) {
//         let removed = arr.shift();
//         if(removed.children) {
//             arr.push(...removed.children);
//             counters[counters.length - 1]++;
//         }

//         if(removed === 's') {
//             arr.push('s');
//             counters.push(0);
//             continue;
//         }
//     }

//     return counters;
// }

// solution 2:
function levelWidth(root) {
  const counters = [];
  let arr = [root];
  while (arr.length) {
    counters.push(arr.length);
    arr.forEach(node => arr.push(...node.children));
    arr = arr.slice(counters[counters.length - 1]);
  }
  return counters;
}

module.exports = levelWidth;
