// Number Types
var myInteger = 12;                     // Integer number (whole number)
var myLong = 9310141419482;            // Large integer (still just 'number' in JS)
var myFloat = 5.5;                     // Floating-point number
var myDouble = 9310141419482.22;       // Double-precision float (no separate 'float' type in JS)

// Boolean Types
var myBoolean = true;                  // Boolean: true
var myBoolean2 = false;                // Boolean: false

// Special Number Types
var myNotANumber = NaN;                // Not a Number (invalid math result)
var NaN_Example = 0 / 0;               // Will also result in NaN

// Undefined
var notDefined;                        // Declared but not assigned = undefined
console.log(notDefined);              // undefined

// Null
var myNull = null;                     // null value (intentional absence)

// Undefined variable (accessing undeclared variable)
window.alert(aRandomVariable);         // ReferenceError (not just undefined!)

// Only use alert on variables that are declared
alert(aRandomVariable);

console.log(typeof myInteger);       // "number"
console.log(typeof myBoolean);       // "boolean"
console.log(typeof myNotANumber);    // "number" (yes! NaN is still a number 🤯)
console.log(typeof notDefined);      // "undefined"
console.log(typeof myNull);          // ⚠️ "object" (JS bug, historical legacy)

