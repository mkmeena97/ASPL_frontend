//1. new Array(length) – Creates empty slots (Not filled with values)
const arr = new Array(5);
console.log(arr);        // [ <5 empty items> ]
console.log(arr.length); // 5

// 2. Array(length).fill(value) – Pre-fill values
const arr1 = new Array(5).fill(0);
console.log(arr1); // [0, 0, 0, 0, 0]

//3. Using .map() for custom values (like index-wise)
const arr2 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr2); // [1, 2, 3, 4, 5]

// 4. Spread with keys() – Index generation
const arr3 = [...Array(5).keys()];
console.log(arr3); // [0, 1, 2, 3, 4]

//5. Initialize 2D Array (Matrix-style)
const rows = 3;
const cols = 4;
const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0).map((_, i) => i + 1));
console.log(matrix);
// [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]

//6. Array Pre-fill values
var arr4 = [1, 2, 3, 4];
var arr5 = new Array(1, 2, 3, 4);

//7 Using Array.of()
var arr6 = Array.of(21, "Hello", "World");
// [21, "Hello", "World"]