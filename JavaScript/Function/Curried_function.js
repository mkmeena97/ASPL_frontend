
// Normal function
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

// OR ES6 style
const curriedAddES6 = a => b => a + b;

console.log(add(2, 3));           // 5
console.log(curriedAdd(2)(3));    // 5
console.log(curriedAddES6(4)(5)); // 9



