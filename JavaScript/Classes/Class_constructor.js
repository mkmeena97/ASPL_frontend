/*
    - constructor() is the special method that gets called automatically on object creation using new.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Tez", 27);
p1.greet(); // Hello, my name is Tez
