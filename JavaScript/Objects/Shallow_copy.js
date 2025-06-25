//Example: Object.assign() – Shallow Copy
const original = { a: 1, b: { nested: 2 } };
const clone = Object.assign({}, original);

clone.a = 100;
clone.b.nested = 999;

console.log(original.a);      // 1 → original safe
console.log(original.b.nested); // ❗ 999 → nested got changed (shared reference)

//Example: Spread Operator – Also Shallow
const obj = { x: 1, y: { z: 2 } };
const copy = { ...obj };

copy.x = 42;          // ok
copy.y.z = 99;        // affects original

console.log(obj.y.z); // ❗ 99
