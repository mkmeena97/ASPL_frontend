// typeofOperator.js

console.log(typeof 123);          // number
console.log(typeof 'hello');      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (quirk!)
console.log(typeof {});           // object
console.log(typeof function(){}); // function
console.log(typeof Symbol('sym')); // symbol
console.log(typeof BigInt(123));  // bigint
console.log(typeof NaN);          // number (NaN is a special numeric value)
console.log(typeof [1, 2, 3]);    // object (arrays are also
// considered objects in JavaScript)
console.log(typeof new Date());   // object (Date is an object type)    
console.log(typeof /regex/);      // object (regular expressions are also objects)
console.log(typeof new Map());    // object (Map is an object type)
console.log(typeof new Set());    // object (Set is an object type)