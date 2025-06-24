//Method 1: concat() method
const a = [1, 2];
const b = [3, 4];
const result = a.concat(b);
console.log(result); // [1, 2, 3, 4]

//Method 2: Spread Operator ...
const x = [1];
const y = [2];
const z = [3];
const all = [...x, ...y, ...z];
console.log(all); // [1, 2, 3]

// Add Individual Elements Also
const c = [1, 2];
const result2 = [...c, 99, 100];
console.log(result2); // [1, 2, 99, 100]

// Nested Array Concatenation
//Yeh "flat" nahi karega. Sirf outer level concatenate hote hain
const nested1 = [[1], [2]];
const nested2 = [[3], [4]];
const allNested = [...nested1, ...nested2];
console.log(allNested); // [[1], [2], [3], [4]]







