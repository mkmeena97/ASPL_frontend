//1. Sort strings (default behavior)
const names = ['Simran', 'Raj', 'Tez'];
names.sort();
console.log(names); // ['Raj', 'Simran', 'Tez']


// 2. Sort numbers ( default breaks here)
const nums = [10, 5, 20];
nums.sort();
console.log(nums); // [10, 20, 5]  (wrong: sorted as strings!)

//3. Sort numbers (ascending)
const nums1 = [10, 5, 20];
nums.sort((a, b) => a - b);
console.log(nums1); // [5, 10, 20]

 // 4. Sort numbers (descending)
 const nums2 = [10, 5, 20];
nums.sort((a, b) => b - a);
console.log(nums2); // [20, 10, 5]

// 5. Sort objects by numeric property
const products = [
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 800 },
  { name: 'Laptop', price: 1500 }
];

products.sort((a, b) => a.price - b.price);
console.log(products.map(p => p.name)); // ['Phone', 'Tablet', 'Laptop']

// 6. Sort by string property (alphabetical)
const users = [
  { name: 'Simran' },
  { name: 'Raj' },
  { name: 'Tez' }
];

users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users.map(u => u.name)); // ['Raj', 'Simran', 'Tez']



