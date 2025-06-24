// 1. Convert to string (Quick & Dirty)
//Doesn't work with unordered arrays or object elements
const a = [1, 2];
const b = [1, 2];
console.log(JSON.stringify(a) === JSON.stringify(b)); // true ✅

//2. Custom deep comparison (value-wise)
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

console.log(arraysEqual([1, 2], [1, 2])); // true ✅
console.log(arraysEqual([1, 2], [2, 1])); // false

// 3. For unordered arrays (compare sorted versions)
function equalUnordered(a, b) {
  return a.length === b.length &&
         [...a].sort().every((v, i) => v === [...b].sort()[i]);
}

console.log(equalUnordered([1, 2, 3], [3, 1, 2])); // true ✅

//4. Lodash _.isEqual() for deep array/object compare
// if lodash is available
_.isEqual([1, 2], [1, 2]); // true
_.isEqual([{ x: 1 }], [{ x: 1 }]); // true
