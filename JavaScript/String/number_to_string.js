// Convert Number → String in Different Bases
// Use .toString(radix):
var b10 = 12;
var b16 = b10.toString(16); // "c" (12 in base 16)
console.log(b16); // "c"

var b2 = b10.toString(2); // "1100" (binary)
console.log(b2); // "1100"

// Convert String (in base X) → Number
//2. Use parseInt(string, radix):
var b16 = 'c';
var b10 = parseInt(b16, 16); // 12
console.log(b10); // 12

var binary = '1100';
console.log(parseInt(binary, 2)); // 12

//3. Handling Floating-Point (Decimal) Base 16 Strings
let b16 = '3.243f3e0370cdc';

// Split integer and fractional parts
let [i16, f16] = b16.split('.');

// Convert both parts
let i10 = parseInt(i16, 16); // 3
let f10 = parseInt(f16, 16) / Math.pow(16, f16.length); // approx 0.14159

let b10 = i10 + f10; // ≈ 3.14159
console.log(b10); // 3.1415899999999998
