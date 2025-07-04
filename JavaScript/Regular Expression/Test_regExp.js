/*
    - .test() is a method on a RegExp object that returns true or false(Does this string contain the pattern?)
    - \S+ = One or more non-whitespace characters
*/

//Example 
const emailRegex = /\S+@\S+\.\S+/;
console.log(emailRegex.test("tez@example.com")); // true
console.log(emailRegex.test("not-an-email"));    // false
