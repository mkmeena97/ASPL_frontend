// Equality Comparison Working Examples in JavaScript

console.log("===== 1. Strict Equality (===) =====");
console.log(1 === 1);           // true
console.log(1 === '1');         // false
console.log(NaN === NaN);       // false
console.log(+0 === -0);         // true
// console.log([] === []);         // false (different references)

console.log("\n===== 2. Abstract Equality (==) =====");
console.log(1 == '1');          // true
console.log(0 == false);        // true
console.log(null == undefined); // true
console.log([] == '');          // true
console.log([] == 0);           // true
console.log('' == 0);           // true
console.log(NaN == NaN);        // false

console.log("\n===== 3. Object.is() =====");
console.log(Object.is(1, 1));           // true
console.log(Object.is('1', 1));         // false
console.log(Object.is(NaN, NaN));       // true ✅
console.log(Object.is(+0, -0));         // false (direction Check also)
console.log(Object.is([], []));         // false

console.log("\n===== 4. SameValueZero (includes()) =====");
console.log([NaN].includes(NaN));       // true ✅
console.log([+0].includes(-0));         // true
console.log([1].includes("1"));         // false (no coercion)
console.log([null].includes(undefined));// false

console.log("\n===== 5. Recommended Practices =====");
const userInput = ""; // empty string = falsy
const finalName = userInput || "Guest";
console.log("User name:", finalName);  // Guest

const config = {
  analytics: undefined
};
const analyticsEnabled = config.analytics || false;
console.log("Analytics enabled:", analyticsEnabled);  // false

console.log("\n===== 6. Edge Cases Recap =====");
console.log([1] == "1");       // true — coercion
// console.log([1] === "1");      // false — different types
console.log(null == 0);        // false
console.log(false == "0");     // true
