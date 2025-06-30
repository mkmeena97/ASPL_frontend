/*
    - Partial Application ka matlab hota hai:
       ek function ko aise call karna ki uske kuch arguments pehle se hi fix kar do,
       baaki later jab zarurat ho tab de skte.
    - bind() bhi partial hi karta hai, but this ke context ke saath.
*/

function multiply(a, b, c) {
  return a * b * c;
}

// Partial application:
function partialMultiplyBy2(b, c) {
  return multiply(2, b, c);
}

console.log(partialMultiplyBy2(3, 4)); // 2 * 3 * 4 = 24


//with closures:
function partial(fn, ...fixedArgs) {
  return function (...laterArgs) {
    return fn(...fixedArgs, ...laterArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5 = partial(add, 2, 3); // a = 2, b = 3
console.log(add5(4)); // 2 + 3 + 4 = 9


//Real-world Example
function log(level, msg) {
  console.log(`[${level}] ${msg}`);
}

const infoLog = partial(log, "INFO");
const errorLog = partial(log, "ERROR");

infoLog("Server started");  // [INFO] Server started
errorLog("Something went wrong"); // [ERROR] Something went wrong
