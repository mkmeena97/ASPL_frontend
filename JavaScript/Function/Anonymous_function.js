//Example 1: Function assigned to a variable
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Tez")); // Hello, Tez!

//Example 2: As callback (direct use)
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);


//Example 3: Immediately Invoked (IIFE)
(function() {
  console.log("I run immediately");
})();

// Example 4: Arrow function (anonymous by default)
const square = (x) => x * x;
console.log(square(4)); // 16
