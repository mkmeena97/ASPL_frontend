//1. By using Object.fromEntries()
const keys = ['name', 'age', 'city'];
const values = ['Tez', 27, 'Jaipur'];

const result = Object.fromEntries(
  keys.map((key, index) => [key, values[index]])
);

console.log(result);
// Output: { name: 'Tez', age: 27, city: 'Jaipur' }

//2. Alternate Approach (using loop):
const keys1 = ['x', 'y'];
const values1 = [10, 20];

const obj = {};
keys1.forEach((key, i) => {
  obj[key] = values1[i];
});
console.log(obj); // { x: 10, y: 20 }

//Edge Cases:
//1. If values.length < keys.length:
const keys2 = ['a', 'b', 'c'];
const values2 = [1];
const result2 = Object.fromEntries(
  keys2.map((k, i) => [k, values2[i]])
);
console.log(result2); // { a: 1, b: undefined, c: undefined }

//2. If values.length > keys.length:
// Extra values will be ignored (kyunki map bas keys pe hi chalta hai)
const keys3 = ['a'];
const values3 = [1,2,3];
const result3 = Object.fromEntries(
  keys3.map((k, i) => [k, values3[i]])
);
console.log(result3); // { a: 1, b: undefined, c: undefined }
