//1. Convert Argument In Array Using Array.prototype.slice.call(arguments)
function logArguments() {
  // `arguments` is array-like, not a real array
  console.log("Original arguments:", arguments);

  const argsArray = Array.prototype.slice.call(arguments);
  console.log("Converted to real array:", argsArray);

  // Now you can use array methods
  const doubled = argsArray.map(x => x * 2);
  console.log("Doubled:", doubled);
}

logArguments(1, 2, 3, 4);

//2. Convert Argument In Array Using Array.from(arguments); 
function logArgsModern() {
  const args = Array.from(arguments); // Cleaner ES6+
  console.log("Converted with Array.from():", args);
}

logArgsModern(10, 20, 30);

//3. Spread operator for conversion
function convertWithSpread() {
  const args = [...arguments]; // Also works!
  console.log("Converted using spread:", args);
}

convertWithSpread(5, 10, 15);

