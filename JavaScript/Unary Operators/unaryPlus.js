// unaryPlus.js

console.log(+"42");   // 42 (string to number)
console.log(+true);   // 1
console.log(+false);  // 0
console.log(+null);   // 0
console.log(+undefined); // NaN (undefined cannot be converted to a number)
console.log(+"");     // 0 (empty string to number)     
console.log(+"3.14"); // 3.14 (string to number)
console.log(+Infinity); // Infinity