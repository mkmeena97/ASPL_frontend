//Method 1: Spread Operator ...
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone); // [1, 2, 3]

//Method 2: Array.slice()
const arr1 = [4, 5, 6];
const clone1 = arr1.slice();
console.log(clone1); // [4, 5, 6]

//Method 3: Array.from()
const arr2 = [7, 8, 9];
const clone2 = Array.from(arr2);
console.log(clone2); // [7, 8, 9]

//Important : Nested reference stays shared
const original = [{ a: 1 }, { b: 2 }];
const clone3 = [...original];

clone3[0].a = 99;
console.log(original[0].a); // 99 (Shallow copy → nested object shared)





