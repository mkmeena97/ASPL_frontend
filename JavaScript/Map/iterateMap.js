// iterateMap.js

const fruits = new Map([
  ['apple', 50],
  ['banana', 20],
  ['mango', 60]
]);

for (const [key, value] of fruits) {
  console.log(`${key}: ₹${value}`);
}
// Output:
// apple: ₹50
// banana: ₹20
// mango: ₹60
fruits.forEach((value, key) => {
  console.log(`${key}: ₹${value}`);
});
// Output:
// apple: ₹50
// banana: ₹20
// mango: ₹60
const fruitEntries = Array.from(fruits.entries());
// Output: [["apple", 50], ["banana", 20], ["mango", 60]]
console.log(fruitEntries);      
const fruitKeys = Array.from(fruits.keys());
// Output: ["apple", "banana", "mango"]
console.log(fruitKeys);
const fruitValues = Array.from(fruits.values());
// Output: [50, 20, 60]
console.log(fruitValues);
const fruitArray = [...fruits];
// Output: [["apple", 50], ["banana", 20], ["mango", 60]]
console.log(fruitArray);    
const fruitMap = new Map(fruitArray);
// Output: Map(3) { 'apple' => 50, 'banana' => 20, 'mango' => 60 }
console.log(fruitMap);      
const fruitObject = Object.fromEntries(fruits);
// Output: { apple: 50, banana: 20, mango: 60 }
console.log(fruitObject);
const fruitSet = new Set(fruits);
// Output: Set(3) { 'apple', 'banana', 'mango' }
console.log(fruitSet);
const fruitSize = fruits.size;
// Output: 3
console.log(fruitSize);