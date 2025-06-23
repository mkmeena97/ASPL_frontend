// ===============================
// JavaScript Data Types Examples
// ===============================

// Section 1: typeof operator
console.log("== typeof examples ==");
console.log(typeof "String");             // "string"
console.log(typeof 42);                   // "number"
console.log(typeof true);                 // "boolean"
console.log(typeof {});                   // "object"
console.log(typeof []);                   // "object"
console.log(typeof null);                 // "object" (JS ka legacy bug)
console.log(typeof undefined);            // "undefined"
console.log(typeof function () {});       // "function"

// Section 2: instanceof
console.log("\n== instanceof examples ==");
console.log([] instanceof Array);         // true
console.log([] instanceof Object);        // true
console.log(42 instanceof Number);        // false (primitive)
console.log(new Number(42) instanceof Number); // true
console.log('abc' instanceof String);     // false (primitive)

// Section 3: .constructor check
console.log("\n== .constructor check ==");
console.log((42).constructor === Number);       // true
console.log(("abc").constructor === String);    // true
console.log((true).constructor === Boolean);    // true

function isNumber(value) {
    if (value === null || value === undefined) return false;
    return value.constructor === Number;
}
console.log(isNumber(0));               // true
console.log(isNumber(NaN));             // true
console.log(isNumber('abc'));           // false

// Section 4: Object.prototype.toString.call()
console.log("\n== Object.prototype.toString.call() ==");
console.log(Object.prototype.toString.call("Hello"));         // [object String]
console.log(Object.prototype.toString.call(123));             // [object Number]
console.log(Object.prototype.toString.call(true));            // [object Boolean]
console.log(Object.prototype.toString.call([]));              // [object Array]
console.log(Object.prototype.toString.call({}));              // [object Object]
console.log(Object.prototype.toString.call(null));            // [object Null]
console.log(Object.prototype.toString.call(undefined));       // [object Undefined]
console.log(Object.prototype.toString.call(new Date()));      // [object Date]
console.log(Object.prototype.toString.call(/abc/));           // [object RegExp]
console.log(Object.prototype.toString.call(function () {}));  // [object Function]
