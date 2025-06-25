// Basic Example 
const arr = ['Tez', 'bhai', 'op'];
console.log(arr.join(' ')); // "Tez bhai op"

//Default Separator is ,
const nums = [1, 2, 3];
console.log(nums.join()); // "1,2,3"

//  Join Without Any Separator
const chars = ['J', 'S'];
console.log(chars.join('')); // "JS"

//  Join with Custom Separator
const words = ['HTML', 'CSS', 'JS'];
console.log(words.join(' -> ')); // "HTML -> CSS -> JS"

// Real-World Example: CSV from Array
const row = ['Mahendra', 'JavaScript', 'OP'];
const csvLine = row.join(',');
console.log(csvLine); // "Mahendra,JavaScript,Op"

//Joining Nested Arrays with flat()
const nested = [[1, 2], [3, 4]];
const flatString = nested.flat().join('-');
console.log(flatString); // "1-2-3-4"
