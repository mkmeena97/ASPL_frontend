/* 
What are Accessors?
 get: Ek function jo value ko read karta hai
 set: Ek function jo value ko assign karta hai

syntax

 const obj = {
   get propName() { ... },
  set propName(value) { ... }
};

or via Object.defineProperty:

Object.defineProperty(obj, 'propName', {
  get: function() { ... },
  set: function(value) { ... }
}); 
*/

//Example: Full Name Generator
const person = {
  firstName: "Tez",
  lastName: "Bhai",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [first, last] = value.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(person.fullName); // "Tez Bhai"

person.fullName = "Mahendra Meena";
console.log(person.firstName); // "Mahendra"
console.log(person.lastName);  // "Meena"


