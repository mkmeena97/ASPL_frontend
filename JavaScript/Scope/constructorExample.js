// constructorExample.js
function Person(name) {
  this.name = name;
}
const r = new Person("Tez");
console.log(r.name);
console.log(r instanceof Person); // true
console.log(r instanceof Object); // true


console.log(r.constructor === Person); // true
console.log(r.constructor === Object); // false
console.log(r.__proto__ === Person.prototype); // true
console.log(r.__proto__ === Object.prototype); // false
