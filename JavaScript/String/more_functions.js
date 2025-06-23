//  1. indexOf()
console.log('Hellow World'.indexOf('Wor')); // 7
// With Starting Position:
console.log("harr dee harr dee harr".indexOf("dee", 10)); // 14
// Case Sensitivity:
console.log('Hellow World'.indexOf('WOR')); // -1 ❌

// 2. Convert to Upper Case
console.log('qwerty'.toUpperCase()); // 'QWERTY'

// 3. Convert to Lower Case
console.log('QWERTY'.toLowerCase()); // 'qwerty'

// 4. Repeat a String
console.log("abc".repeat(3));  // "abcabcabc"
console.log("abc".repeat(0));  // ""
console.log("abc".repeat(-1)); // RangeError

// Pre-ES6 Trick (Polyfill Style):
var myString = "abc";
var n = 3;
console.log(new Array(n + 1).join(myString)); // "abcabcabc"
