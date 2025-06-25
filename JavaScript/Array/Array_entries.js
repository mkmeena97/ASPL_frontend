//It returns an iterator of [index, value] pairs for every element in the array.
//Example 1: Using for...of with entries()
const fruits = ['apple', 'banana', 'mango'];

for (const [index, value] of fruits.entries()) {
  console.log(index, value);
}


//Example 2: Convert to Array of Pairs
const colors = ['red', 'green', 'blue'];
const pairs = Array.from(colors.entries());
console.log(pairs); 
// [[0, 'red'], [1, 'green'], [2, 'blue']]
