// voidOperator.js

console.log(void 0);          // undefined
console.log(void(2 + 2));     // undefined
console.log(void "Hello");    // undefined
console.log(void true);       // undefined
console.log(void null);       // undefined
console.log(void undefined);  // undefined     
console.log(void NaN);        // undefined  
console.log(void (function() { return "Hello"; })()); // undefined