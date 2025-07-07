// 62.1-intro.js
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3)); // Output: Sum: 8
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // Output: Hello, Alice!
const square = x => x * x;
console.log("Square of 4:", square(4)); // Output: Square of 4
// Arrow functions can also be used for methods
const person = {
    name: "John",
    sayHello: () => console.log(`Hello, my name is ${this.name}.`) // Note: 'this' won't refer to 'person' here
};
person.sayHello();