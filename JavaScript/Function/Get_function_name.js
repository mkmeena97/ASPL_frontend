//Example 1: Named Function
function greet() {
  return "Hello!";
}

console.log(greet.name); // "greet"



//Example 3: Function Expression with a Name
const sayHi = function welcome() {
  return "Hi!";
};

console.log(sayHi.name); // "welcome" (not sayHi!)


//Example 3: Anonymous Function Expression
const sayHello = function() {
  return "Hello!";
};

console.log(sayHello.name); // "sayHello" (inferred from variable name)


//Example 4: Arrow Function
const add = (a, b) => a + b;

console.log(add.name); // "add"


//Real Life Use
//Logging / Debugging:
function logFnName(fn) {
  console.log("Running:", fn.name);
  fn();
}

logFnName(greet); // Running: greet


