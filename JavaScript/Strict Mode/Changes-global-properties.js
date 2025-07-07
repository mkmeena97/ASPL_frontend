"use strict";

undefined = 123; // ❌ TypeError
NaN = "not a number"; // ❌ TypeError
Infinity = 1e100; // ❌ TypeError
console.log("undefined:", undefined); // undefined
console.log("NaN:", NaN); // NaN
console.log("Infinity:", Infinity); // Infinity     
// Attempting to change global properties like undefined, NaN, and Infinity throws a TypeError in strict mode
// In non-strict mode, these assignments would silently fail without throwing an error      
// This behavior helps prevent accidental changes to fundamental global properties, ensuring code reliability and predictability
// It is a best practice to avoid modifying these global properties, as they are intended to be constants in JavaScript