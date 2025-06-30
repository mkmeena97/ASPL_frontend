/*
    A higher-order function is a function that
        - Takes one or more functions as arguments
        - OR returns a function as result
*/

//Example
function greet(name) {
  return `Hello, ${name}`;
}

function callWithGreeting(fn, value) {
  console.log(fn(value));
}

callWithGreeting(greet, "Tez"); // "Hello, Tez"

