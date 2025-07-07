console.log(Boolean(0));       // false
console.log(Boolean("text")); // true
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean({}));      // true
console.log(Boolean([]));      // true  

// Boolean(value) converts any value to a boolean.
// Commonly used in conditions to check truthiness or falsiness.