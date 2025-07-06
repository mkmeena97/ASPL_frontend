

const fruits = new Map([
  ["apple", 10],
  ["banana", 20],
  ["mango", 30]
]);

console.log(fruits.size); //  3

fruits.clear();

console.log(fruits.size); //  0
console.log(fruits);      //  Map(0) {}
