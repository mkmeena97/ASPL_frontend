// Spread (...) in Objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }

//Rest (...) in Destructuring
const user = { name: "Tez", age: 27, role: "dev" };
const { name, ...rest } = user;

console.log(name); // "Tez"
console.log(rest); // { age: 27, role: "dev" }

//Real-Life Example: Sanitizing Object
const requestBody = {
  username: "Tez",
  password: "secret",
  isAdmin: true
};

const { password, ...safeData } = requestBody;

console.log(safeData);
// { username: "Tez", isAdmin: true }


// Combine Rest + Spread
function updateUser(user, updates) {
  return { ...user, ...updates };
}

const user1 = { name: "Tez", age: 27 };
console.log(updateUser(user1, { age: 30 }));
// { name: "Tez", age: 30 }
