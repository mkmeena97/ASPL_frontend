//1. Double all numbers
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// 2. Convert string to uppercase
const names = ['tez', 'raj', 'simran'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ['TEZ', 'RAJ', 'SIMRAN']

//3. Extract specific property from array of objects
const users = [
  { id: 1, name: 'Tez' },
  { id: 2, name: 'Raj' }
];

const names1 = users.map(user => user.name);
console.log(names1); // ['Tez', 'Raj']

//4. Add index or custom format
const fruits = ['apple', 'banana', 'cherry'];
const withIndex = fruits.map((fruit, index) => `${index + 1}: ${fruit}`);
console.log(withIndex); // ['1: apple', '2: banana', '3: cherry']

//5. Transform to HTML-like strings (for frontend rendering)
const items = ['bread', 'milk', 'eggs'];
const htmlList = items.map(item => `<li>${item}</li>`);
console.log(htmlList.join('\n'));

//6. Conditional mapping (add flag)
const marks = [65, 90, 45];
const status = marks.map(score => ({
  score,
  status: score >= 50 ? 'Pass' : 'Fail'
}));
console.log(status);
/*
[
  { score: 65, status: 'Pass' },
  { score: 90, status: 'Pass' },
  { score: 45, status: 'Fail' }
]
*/


