// 1. indexOf() — Exact match (primitive only) (it will return index of given value )
const arr = [1, 2, 3, 4];
console.log(arr.indexOf(3)); // index value of 3 is 2
console.log(arr.indexOf(5)); // -1 (not found)

// 2. includes() — Boolean check
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grapes')); // false

//3. find() — Returns first match (based on condition)
const users = [
  { id: 1, name: 'Tez' },
  { id: 2, name: 'Bholu' },
  {id: undefined ,name:'tabbu'}
];

const result = users.find(user => user.name === 'Tez');
console.log(result); // { id: 1, name: 'Tez' }

//4. findIndex() — Like find but returns index
const idx = users.findIndex(user => user.name === 'Bholu');
console.log(idx); // 1

//5. some() — Checks if any match exists (returns true/false)
const hasBholu = users.some(user => user.name === 'Bholu');
console.log(hasBholu); // true

//6. every() — Checks if all match condition
const allHaveId = users.every(user => user.id !== undefined);
console.log(allHaveId); // true


