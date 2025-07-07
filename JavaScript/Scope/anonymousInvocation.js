// anonymousInvocation.js
(function () {
  console.log("IIFE running!");
})();

// This is an Immediately Invoked Function Expression (IIFE).
// It is a function that runs as soon as it is defined.
// IIFEs are often used to create a new scope, preventing variables from polluting the global scope.
// This is particularly useful in JavaScript to avoid conflicts with other scripts or libraries.
// The function is defined and immediately executed, logging "IIFE running!" to the console.
// IIFEs can also accept parameters, allowing for more flexible and reusable code.  
// Example with parameters:
(function (name) {
  console.log(`Hello, ${name}!`);
})("World");    
// This IIFE takes a parameter `name` and logs a greeting to the console.
// It is executed immediately with the argument "World", resulting in "Hello, World!" being logged.




