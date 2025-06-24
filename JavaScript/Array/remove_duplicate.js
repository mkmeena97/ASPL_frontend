//Method 1: Removing Duplicates Without 'Set'
const items = [1, 2, 3, 2, 4, 1, 5];

const uniqueItems = items.reduce((acc, val) => {
  if (!acc.includes(val)) acc.push(val);
  return acc;
}, []);

console.log("Unique Items:", uniqueItems);

//Method 2: Using Set
const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4, 5]

//Method 3: Using filter() + indexOf()
const nums1 = [1, 2, 2, 3];
const unique1 = nums1.filter((item, index) => nums1.indexOf(item) === index);
console.log(unique1); // [1, 2, 3]

//Method 4: Using reduce()
const nums2 = [1, 2, 2, 3];
const unique2 = nums2.reduce((acc, val) => {
  if (!acc.includes(val)) acc.push(val);
  return acc;
}, []);
console.log(unique2); // [1, 2, 3]

//Method 5:  For Array of Objects (Custom Unique)
const users = [
  { id: 1, name: 'Tez' },
  { id: 2, name: 'Raj' },
  { id: 1, name: 'Tez' }
];

const uniqueById = users.filter(
  (user, index, self) =>
    index === self.findIndex(u => u.id === user.id)
);

console.log(uniqueById);
/*
[
  { id: 1, name: 'Tez' },
  { id: 2, name: 'Raj' }
]
*/

