//Numeric Addition
let sum = 10 + 5;
console.log(sum); // 15


//String Concatenation (When at least one operand is a string)
let result = "5" + 5;
console.log(result); // "55" (string)

let mixed = 1 + "2" + 3;
console.log(mixed); // "123"

console.log(1 + 2 + "3");   // "33" (number+number=3 → string= "3" → "3" + "3" = "33")
console.log("1" + 2 + 3);   // "123"

//Building dynamic strings
let name = "Tez";
let age = 27;

console.log("Hello " + name + ", you are " + age + " years old.");

//template literals (backticks)
console.log(`Hello ${name}, you are ${age} years old.`);


