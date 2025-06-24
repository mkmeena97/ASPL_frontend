// Spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

//rest operator
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

// Spread = “Expand into parts”

// Rest = “Collect leftovers into one box”

// ... is the Swiss Army Knife of arrays — copying, merging, destructuring, arg-handling — sab karta hai!
