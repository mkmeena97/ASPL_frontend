//Basic Syntax
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// 1. Skip values
const arr1 = [1, 2, 3, 4];
const [, second, , fourth] = arr1;
console.log(second); // 2
console.log(fourth); // 4

//2. Default values
const arr2 = [5];
const [d, e = 10] = arr2;
console.log(d); // 5
console.log(e); // 10 (default used)

//3. Swap variables (🔥 cleanest swap)
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

// 4. With function return values
function getCoords() {
  return [25.5, 75.3];
}
const [lat, long] = getCoords();
console.log(lat, long); // 25.5 75.3

//5. With rest operator
const nums = [1, 2, 3, 4, 5];
const [first, sec, ...rest] = nums;
console.log(first);  // 1
console.log(sec); // 2
console.log(rest);   // [3, 4, 5]

//6. Destructure in loops
const entries = [['name', 'Tez'], ['age', 27]];
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Tez
// age: 27




