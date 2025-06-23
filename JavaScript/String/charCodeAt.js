// 1. charCodeAt() – For Basic Characters
var charCode = "ABCDE".charCodeAt(3); 
console.log(charCode); // 68 ("D")

//2. codePointAt() – For Full Unicode Characters
// Introduced in ES6.
// handle emoji also
// It properly handles characters represented by surrogate pairs.

console.log("😀".codePointAt(0)); // 128512 (the correct full code point)
console.log("𝒳".charCodeAt(0));      // 55349
console.log("𝒳".codePointAt(0));     // 119987
