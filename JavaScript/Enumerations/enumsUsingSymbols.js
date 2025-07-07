// enumsUsingSymbols.js

const AccessLevel = {
  ADMIN: Symbol('ADMIN'),
  USER: Symbol('USER'),
  GUEST: Symbol('GUEST')
};

console.log(AccessLevel.ADMIN); // Output: Symbol(ADMIN)
console.log(AccessLevel.ADMIN === AccessLevel.USER); // false
console.log(Object.keys(AccessLevel)); // Output: []
console.log(Object.values(AccessLevel)); // Output: [Symbol(ADMIN), Symbol(USER), Symbol(GUEST)]

