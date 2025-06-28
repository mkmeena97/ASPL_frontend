//Square Root – Math.sqrt(x)
console.log(Math.sqrt(25));   // 5
console.log(Math.sqrt(144));  // 12
console.log(Math.sqrt(2));    // 1.414...
console.log(Math.sqrt(-9));   // NaN (JavaScript doesn’t handle imaginary numbers)

//Cube Root – Math.cbrt(x)
console.log(Math.cbrt(27));   // 3
console.log(Math.cbrt(64));   // 4
console.log(Math.cbrt(-8));   // -2 (supports negatives too)

//General Nth Root
function nthRoot(x, n) {
  return Math.pow(x, 1 / n);
}

console.log(nthRoot(81, 4));  // 3 (4th root of 81)
console.log(nthRoot(32, 5));  // 2 (5th root of 32)


//Edge Cases
Math.sqrt(undefined);  // NaN
Math.cbrt("27");       // 3 (coerced to number)
Math.sqrt(null);       // 0 
Math.sqrt("abc");      // NaN
