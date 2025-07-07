console.log(String(123));  // "123"
console.log((456).toString()); // "456"
console.log(String(true)); // "true"
console.log((false).toString()); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"
console.log(({}).toString()); // "[object Object]"

// String(value) converts any value to a string.
// Commonly used for concatenation or display purposes.