// setOps.js

const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Intersection
const intersection = new Set([...a].filter(x => b.has(x)));
console.log("Intersection:", intersection); // Set { 3, 4 }

// Difference
const difference = new Set([...a].filter(x => !b.has(x)));
console.log("Difference:", difference); // Set { 1, 2 }
