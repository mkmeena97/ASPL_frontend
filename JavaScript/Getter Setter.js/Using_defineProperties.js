const person = { firstName: "Mahendra", lastName: "Meena" };

Object.defineProperty(person, "fullName", {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
});

console.log(person.fullName); // Mahendra Meena

person.fullName = "Tez Bhai";
console.log(person.firstName); // Tez
console.log(person.lastName);  // Bhai
