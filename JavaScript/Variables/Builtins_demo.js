// null vs undefined
let a = null;
let b;

console.log("a === null:", a === null);           // true
console.log("b === undefined:", b === undefined); // true
console.log("typeof null:", typeof a);            // "object"
console.log("typeof undefined:", typeof b);       // "undefined"
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// NaN Examples
console.log("\n--- NaN Examples ---");
console.log("0/0 =", 0 / 0);                 // NaN
console.log("'abc' - 1 =", "abc" - 1);       // NaN
console.log("isNaN('abc'):", isNaN("abc"));  // true
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));     // true
console.log("NaN === NaN:", NaN === NaN);     // false

// Infinity Examples
console.log("\n--- Infinity Examples ---");
console.log("1 / 0 =", 1 / 0);               // Infinity
console.log("-1 / 0 =", -1 / 0);             // -Infinity
console.log("1 / -0 =", 1 / -0);             // -Infinity
console.log("Infinity - Infinity =", Infinity - Infinity); // NaN

// Type quirks
console.log("\n--- Type Quirks ---");
console.log("typeof NaN:", typeof NaN);     // "number"
console.log("0 === -0:", 0 === -0);         // true
console.log("1 / 0 === 1 / -0:", 1 / 0 === 1 / -0); // false

// Number constants
console.log("\n--- Number Constants ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("EPSILON:", Number.EPSILON);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN === NaN:", Number.NaN === NaN); // false
