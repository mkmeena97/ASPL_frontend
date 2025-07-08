// deleteOperator.js

const obj = { name: "Tez", role: "Dev" };

console.log(obj.name); // Tez

delete obj.name;

console.log(obj.name); // undefined
console.log(obj.role); // Dev
console.log("Keys after deletion:", Object.keys(obj)); // Keys after deletion: [ 'role' ]
console.log("Object after deletion:", obj); // Object after deletion: { role: 'Dev' }
console.log("Is 'name' property deleted?", !obj.hasOwnProperty('name')); // true
console.log("Is 'role' property still present?", obj.hasOwnProperty('role')); // true
console.log("Object length after deletion:", Object.keys(obj).length); // 1         
console.log("Object values after deletion:", Object.values(obj)); // [ 'Dev' ]
console.log("Object entries after deletion:", Object.entries(obj)); // [ [ 'role', '    Dev' ] ]