// splice() – Syntax

//array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: Kahaan se kaam start karna hai

// deleteCount: Kitne elements hataane hain

// item1, item2, ...: (optional) Naye elements jo insert karne hain

//Remove Elements Example
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);  // from index 1, remove 2 elements
console.log(arr); // [1, 4, 5]

//Add Elements Example'
const arr1 = [1, 4, 5];
arr1.splice(1, 0, 2, 3); // insert at index 1, remove 0
console.log(arr1); // [1, 2, 3, 4, 5]

//Replace Elements
const arr2 = [1, 2, 3];
arr2.splice(1, 1, 99); // replace index 1 with 99
console.log(arr2); // [1, 99, 3]

//Remove All from Index
const arr3 = [10, 20, 30, 40];
arr3.splice(2); // remove from index 2 till end
console.log(arr3); // [10, 20]

// Store Removed Elements
const arr4 = [1, 2, 3, 4];
const removed = arr4.splice(1, 2);
console.log(removed); // [2, 3]
console.log(arr4);     // [1, 4]


