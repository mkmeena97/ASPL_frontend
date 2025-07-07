// unaryNegation.js

console.log(-5);       // -5
console.log(-(-10));   // 10
console.log(-"7");     // -7 (string converted to number then negated)
console.log(-true);    // -1 (true is converted to 1, then negated)
console.log(-false);   // 0 (false is converted to 0, then negated)
console.log(-null);    // 0 (null is converted to 0, then negated)
console.log(-undefined); // NaN (undefined cannot be converted to a number)     
console.log(-"");      // 0 (empty string is converted to 0, then negated)
console.log(-"3.14");  // -3.14 (string converted to number then negated)
console.log(-Infinity); // -Infinity (negation of Infinity) 