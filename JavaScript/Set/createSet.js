// createSet.js

const fruits = new Set(["apple", "banana", "mango", "apple"]);
console.log(fruits); // Set(3) { 'apple', 'banana', 'mango' }
console.log(fruits.size); // 3  
console.log(fruits.has("banana")); // true
console.log(fruits.has("grape")); // false  