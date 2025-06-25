const target = { a: 1 };
const source = { b: 2, c: 3 };

const result = Object.assign(target, source);

console.log(result); // { a: 1, b: 2, c: 3 }

// target: jisme properties copy hongi
// sources: jinke properties copy honge

//Merge Multiple Objects
// Agar same key hui, last one wins
const a = { x: 1 };
const b = { y: 2 };
const c = { z: 3 };

const merged = Object.assign({}, a, b, c);
console.log(merged); // { x: 1, y: 2, z: 3 }


//Use Case: Apply Default Config
const defaultSettings = {
  theme: "light",
  layout: "grid"
};

const userSettings = {
  theme: "dark"
};

const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log(finalSettings);
// { theme: "dark", layout: "grid" }

