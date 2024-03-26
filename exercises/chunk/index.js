// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution 1:
// function chunk(array, size) {
//     let chunked = [];
//     let i = 0;
//     while (i < array.length) {
//         const chunks = array.slice(i, size + i);
//         chunked.push(chunks);
//         i = size + i;
//     }
//     return chunked;
// }

// solution 2:
// function chunk(array, size) {
//     const chunked = [];

//     for(let element of array) {
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

// solution 3:
// function chunk(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }

//   return [array.slice(0, size), ...chunk(array.slice(size), size)];
// }

// solution 4:
function chunk(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );
}

module.exports = chunk;
