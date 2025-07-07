// logicalNot.js

console.log(!true);     // false
console.log(!false);    // true
console.log(!0);        // true
console.log(!"Raj");    // false (non-empty string is truthy)
console.log(!"");       // true (empty string is falsy)
console.log(!null);     // true (null is falsy)
console.log(!undefined); // true (undefined is falsy)
console.log(!NaN);      // true (NaN is falsy)
console.log(!Infinity); // false (Infinity is truthy)
console.log(!{});       // false (empty object is truthy)   
console.log(![]);       // false (empty array is truthy)
console.log(!function(){}); // false (function is truthy)   
console.log(!Symbol('sym')); // false (symbol is truthy)
console.log(!BigInt(123)); // false (BigInt is truthy)  
console.log(!new Date()); // false (Date object is truthy)
console.log(!/regex/);  // false (regular expression is truthy)

//Double NOT !!value to convert anything into a boolean
console.log(!!0);     // false
console.log(!!"");    // false
console.log(!!123);   // true
