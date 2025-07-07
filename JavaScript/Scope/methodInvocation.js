// methodInvocation.js
const dog = {
  name: "Bruno",
  bark() {
    console.log(`${this.name} says woof!`);
  }
};

dog.bark(); // Bruno says woof!
const cat = {
  name: "Whiskers",
  meow() {
    console.log(`${this.name} says meow!`);
  }
};

cat.meow(); // Whiskers says meow!  
const animal = {
  name: "Charlie",
  speak() {
    console.log(`${this.name} makes a sound!`);
  }
};

animal.speak(); // Charlie makes a sound!   