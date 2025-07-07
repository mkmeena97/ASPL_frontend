function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");
