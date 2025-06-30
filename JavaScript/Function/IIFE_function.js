/*
    - Is defined, and
    - Immediately invoked (i.e. called) after it's defined.
    - Syntax (classic) =	(function() { ... })();
    - Syntax (arrow) =   	(() => { ... })();
*/


(function () {
  console.log("IIFE executed!");
})();

// Or with arrow functions

(() => {
  console.log("Arrow IIFE executed!");
})();


//example
const config = (() => {
  const apiKey = "abc123";
  const env = "production";

  return {
    getKey: () => apiKey,
    getEnv: () => env
  };
})();

console.log(config.getKey()); // abc123
