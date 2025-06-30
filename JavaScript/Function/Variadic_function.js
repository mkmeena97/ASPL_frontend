/*
    - Variadic functions are functions that can accept any number of arguments.
    - JavaScript mein do primary ways hain
        - arguments object (old-school)
        - Rest operator ...args (modern way)
*/

//1. Using arguments (array-like object)
//arguments is not a real array(No map, reduce, etc.)
function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addAll(1, 2, 3)); // 6


//2. Using Rest Operator ...args (ES6+)
//...nums packs all arguments into a real array
function addAll(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

console.log(addAll(1, 2, 3, 4)); // 10


//Example 
function greetAll(greeting, ...names) {
  names.forEach(name => {
    console.log(`${greeting}, ${name}!`);
  });
}

greetAll("Hi", "Tez", "Chattu", "CodeBro");
// Hi, Tez!
// Hi, Chattu!
// Hi, CodeBro!
