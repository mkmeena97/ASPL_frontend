"use strict";

function bad(a, a) { // ❌ SyntaxError
  return a;
}
function good(a, b) {
  return a + b;
}   
console.log(bad(1, 2)); // ❌ SyntaxError: Duplicate parameter name not allowed in this context
console.log(good(1, 2)); // 3       

// In strict mode, duplicate parameter names are not allowed, which helps prevent potential bugs and confusion in function definitions.
// In non-strict mode, this would not throw an error, but it is still considered bad practice to have duplicate parameter names.    
// This behavior is part of the ECMAScript 5 specification, which introduced strict mode to help developers write cleaner and more reliable code.   
// It is recommended to always use unique parameter names in function definitions to avoid confusion and potential bugs in your code.   
