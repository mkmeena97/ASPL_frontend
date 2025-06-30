/*
    - JS also supports inheritance via extends.
    - super() calls the parent class constructor.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Sheru");
dog.speak(); // Sheru barks.
