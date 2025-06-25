// Example 1: One-Level Flatten
const nested = [1, 2, [3, 4]];
console.log(nested.flat()); // [1, 2, 3, 4]

// Example 2: Two-Level Flatten
const deeplyNested = [1, 2, [3, 4, [5, 6]]];
console.log(deeplyNested.flat(2)); // [1, 2, 3, 4, 5, 6]


//Example 3: Infinite Flatten
const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
