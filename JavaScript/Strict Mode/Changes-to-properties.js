"use strict";

const obj = {};
Object.defineProperty(obj, "readOnly", {
  value: 100,
  writable: false
});

obj.readOnly = 200; // ❌ TypeError in strict mode
console.log(obj.readOnly); // 100   // Attempting to change a read-only property throws an error in strict mode     
// In non-strict mode, this would silently fail without throwing an error
// console.log(obj.readOnly); // 100   // Attempting to change a read-only property does not throw an error in non-strict mode      
