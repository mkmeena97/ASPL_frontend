//1. split() method – Based on delimiter
const sentence = "Tez bhai is unstoppable";
const words = sentence.split(" ");
console.log(words); // ['Tez', 'bhai', 'is', 'unstoppable']

//Split by comma
const csv = "HTML,CSS,JavaScript";
const techArray = csv.split(",");
console.log(techArray); // ['HTML', 'CSS', 'JavaScript']

//Split by empty string = characters
const name = "Tez";
const chars = name.split('');
console.log(chars); // ['T', 'e', 'z']


// 2. Spread Operator — Split into characters
 const str = "Hello";
const arr = [...str];
console.log(arr); // ['H', 'e', 'l', 'l', 'o']

//3. Array.from() — Same as spread
const str1 = "🔥Tez";
const arr1 = Array.from(str1);
console.log(arr1); // ['🔥', 'T', 'e', 'z']
