//Object.defineProperty(obj, propName, descriptor);
// Descriptor ke options:
// value: actual value

// writable: can it be changed? (default: false)

// enumerable: will it show in loops? (default: false)

// configurable: can it be deleted or modified? (default: false)

const user = {};
Object.defineProperty(user, "name", {
  value: "Tez",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(user.name); // Tez
user.name = "Bhai";     // No effect
console.log(user.name); // Still "Tez"

//Hidden Properties
const obj = {};
Object.defineProperty(obj, "secret", {
  value: "nahi btaunga",
  enumerable: false
});

console.log(obj.secret);         // "nahi btaunga"
console.log(Object.keys(obj));   // []

//Make Property Read-Only
const config = {};
Object.defineProperty(config, "version", {
  value: "1.0.0",
  writable: false
});

config.version = "2.0.0"; // ignored
console.log(config.version); // "1.0.0"

// Real-Life Use Case
// Lock system config / constants
const settings = {};
Object.defineProperty(settings, "API_KEY", {
  value: "abc123",
  writable: false,
  configurable: false
});



//Define multiple properties
const user = {};

Object.defineProperties(user, {
  name: {
    value: "Tez",
    writable: false,
    enumerable: true
  },
  age: {
    value: 27,
    writable: true,
    enumerable: false
  }
});

console.log(user.name); // "Tez"
user.name = "Changed";  // ❌ won't change
console.log(user.name); // Still "Tez"

console.log(user.age);  // 27
user.age = 30;          // ✅ will change
console.log(user.age);  // 30

console.log(Object.keys(user)); // ["name"] (age is not enumerable)
