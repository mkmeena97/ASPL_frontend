//Option 1: Math.pow(base, exponent)
console.log(Math.pow(2, 3)); // 8 → 2^3
console.log(Math.pow(10, 2)); // 100 → 10^2

//Option 2: Exponentiation Operator ** (ES6+)
//Same output, cleaner syntax. Prefer ** in modern JS.
console.log(2 ** 3);  // 8
console.log(5 ** 0);  // 1
console.log(2 ** -2); // 0.25 → 1 / (2^2)

//Real-World Example: Square & Cube Functions
function square(x) {
  return x ** 2;
}

function cube(x) {
  return x ** 3;
}

console.log("Square",square(4)); // 16
console.log("Square", cube(3));   // 27


//Edge Cases:
console.log((-2) ** 2);   // 4
//console.log(-2 ** 2);     // SyntaxError (JS thinks it's -(2 ** 2))

// Fix with parentheses:
console.log(-(2 ** 2));   // -4
