//Named
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Named
function sayHi() {
  console.log("Hi!");
}

// Anonymous (as variable)
const sayHello = function () {
  console.log("Hello!");
};

