//1: Sum of all numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

//2.Flatten nested arrays
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, val) => acc.concat(val), []);
console.log("Flattened array:", flat);

//3.Count occurrences of elements
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit Count:", count);

// 4: Group objects by property
const people = [
  { name: "Tez", age: 25 },
  { name: "Raj", age: 30 },
  { name: "Simran", age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
  (acc[person.age] = acc[person.age] || []).push(person);
  return acc;
}, {});

console.log("Grouped by age:", groupedByAge);

//5: Convert array to object
const keys = ["name", "age", "country"];
const values = ["Tez", 27, "India"];

const result = keys.reduce((obj, key, index) => {
  obj[key] = values[index];
  return obj;
}, {});

console.log("Object:", result);

