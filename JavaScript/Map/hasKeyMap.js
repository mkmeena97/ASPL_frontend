// hasKeyMap.js

const product = new Map([
  ['id', 1],
  ['title', 'Pizza']
]);

console.log(product.has('title')); // Output: true
console.log(product.has('price')); // Output: false
console.log(product.has('id')); // Output: true
console.log(product.has('description')); // Output: false