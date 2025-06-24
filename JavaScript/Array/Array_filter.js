// 1. Filter students who passed
const students = [
  { name: 'Tez', score: 85 },
  { name: 'Raj', score: 45 },
  { name: 'Simran', score: 75 }
];

const passed = students.filter(s => s.score >= 50);
console.log(passed);
/*
[
  { name: 'Tez', score: 85 },
  { name: 'Simran', score: 75 }
]
*/

//2. Filter products in stock
const products = [
  { name: 'Phone', inStock: true },
  { name: 'Laptop', inStock: false }
];

const available = products.filter(p => p.inStock);
console.log(available); // [{ name: 'Phone', inStock: true }]


//3. Filter by property match
const users = [
  { name: 'Tez', role: 'admin' },
  { name: 'Raj', role: 'user' }
];

const admins = users.filter(u => u.role === 'admin');
console.log(admins); // [{ name: 'Tez', role: 'admin' }]

//4. Filter strings by length
const words = ['js', 'react', 'node', 'ai'];
const longWords = words.filter(w => w.length > 2);
console.log(longWords); // ['react', 'node']


//5. Filter numbers (even/odd)
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4, 6]

//  Remove falsy values
const mixed = [0, null, "hello", undefined, "", 42];
const cleaned = mixed.filter(Boolean);
console.log(cleaned); // ['hello', 42]

//Remove duplicates (with indexOf)
const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(unique); // [1, 2, 3, 4]
