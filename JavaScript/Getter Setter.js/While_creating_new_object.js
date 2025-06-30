const user = {
  firstName: "Tez",
  lastName: "Bro",
  
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName); // Tez Bro

user.fullName = "Code King";
console.log(user.firstName); // Code
console.log(user.lastName);  // King
