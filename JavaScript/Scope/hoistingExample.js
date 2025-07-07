// hoistingExample.js
console.log(greet); // undefined
var greet = "Hello!";

sayHi(); // "Hi there!"

function sayHi() {
  console.log("Hi there!");
}
