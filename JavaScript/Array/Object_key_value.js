const user = {
  name: 'Tez',
  age: 27,
  role: 'Full Stack Dev'
};

 //1. Convert Keys to Array
 const keys = Object.keys(user);
console.log(keys); // ['name', 'age', 'role']

//2. Convert Values to Array
const values = Object.values(user);
console.log(values); // ['Tez', 27, 'Full Stack Dev']


// 3. Convert Key-Value Pairs to Array (Entries)
const entries = Object.entries(user);
console.log(entries);
// [['name', 'Tez'], ['age', 27], ['role', 'Full Stack Dev']]

//Convert Back to Object from Entries
const newObj = Object.fromEntries(entries);
console.log(newObj);
// { name: 'Tez', age: 27, role: 'Full Stack Dev' }

//Real-Life Example
const formData = {
  username: 'tez_bhai',
  password: 'secure123'
};

const keyValuePairs = Object.entries(formData);
keyValuePairs.forEach(([key, val]) => {
  console.log(`${key}: ${val}`);
});
// username: tez_bhai
// password: secure123
