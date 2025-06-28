function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const p1 = new Person("Tez", 27);
const p2 = new Person("Chattu", 900);

console.log(p1.name); // Tez
p2.sayHi();           // Hi, I'm Chattu
