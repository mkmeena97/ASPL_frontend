function Person(name) {
  let secret = "I'm private";

  this.getName = function () {
    return name;
  };

  this.getSecret = function () {
    return secret;
  };
}

const p1 = new Person("Alice");
const p2 = new Person("Bob");
