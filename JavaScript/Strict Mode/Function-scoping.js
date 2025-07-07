"use strict";

if (true) {
  function doSomething() {} // ❌ SyntaxError in some engines
}
// In strict mode, function declarations inside blocks are not allowed.
// This is to prevent confusion and potential bugs that can arise from function hoisting.
// In non-strict mode, this would not throw an error, but it is still considered bad practice to declare functions inside blocks.       
// It is recommended to always declare functions at the top level or inside other functions to avoid confusion and potential bugs in your code. 
// This behavior is part of the ECMAScript 5 specification, which introduced strict mode to help developers write cleaner and more reliable code.   
// It is a best practice to use strict mode in your JavaScript code to catch potential errors and enforce better coding practices.  

