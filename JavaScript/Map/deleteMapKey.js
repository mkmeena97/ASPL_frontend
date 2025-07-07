// deleteMapKey.js

const scores = new Map([
  ['Alice', 90],
  ['Bob', 80]
]);

scores.delete('Bob');
console.log(scores.has('Bob')); // Output: false
