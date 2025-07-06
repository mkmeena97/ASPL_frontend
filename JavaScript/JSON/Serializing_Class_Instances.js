/*
- When you JSON.stringify() a class instance, you lose the class info. What you get back after JSON.parse() is just a plain object, not an instance of the class.
  That means:
    - Methods are gone
    - instanceof checks fail
    - Prototypes are wiped
*/

//Step 1: Add toJSON() method to include a type marker
class User {
  constructor(username, isAdmin) {
    this.username = username;
    this.isAdmin = isAdmin;
  }

  greet() {
    return `Welcome back, ${this.username}!`;
  }

  toJSON() {
    return {
      __type: "User", // custom marker
      username: this.username,
      isAdmin: this.isAdmin,
    };
  }
}

// Step 2: Serialize the instance
const user = new User("Tez", true);
const json = JSON.stringify(user);
console.log(json);
// {"__type":"User","username":"Tez","isAdmin":true}

//Step 3: Use a reviver function to restore class during parsing
const revived = JSON.parse(json, (key, value) => {
  if (value && value.__type === "User") {
    return new User(value.username, value.isAdmin);
  }
  return value;
});

console.log(revived instanceof User); // true 
console.log(revived.greet());         // Welcome back, Tez!


//Real Use Case: Saving/Loading Sessions in Local Storage
const session = {
  user: new User("Tez", true),
  token: "abc123",
};

localStorage.setItem("session", JSON.stringify(session));

const raw = localStorage.getItem("session");
const restored = JSON.parse(raw, (key, value) => {
  if (value?.__type === "User") {
    return new User(value.username, value.isAdmin);
  }
  return value;
});
