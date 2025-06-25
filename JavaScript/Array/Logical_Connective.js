//Example 1: First Truthy Value from Array
const values = [null, '', 0, false, 'Tez', 'OP'];
const result = values.find(v => v); // or:
const fallback = values[0] || values[1] || values[2] || 'default';

console.log(fallback); // 'default'

//Example 2: Short-circuit with Array Check
const data = [1, 2, 3];

data.length && console.log("Array is not empty");
// prints: Array is not empty

//Example 3: Use reduce() to simulate OR behavior
const vals = [null, undefined, '', 0, 'active'];
const firstTruthy = vals.reduce((acc, val) => acc || val);
console.log(firstTruthy); // 'active'

//Example 4: Logical AND with every() or reduce()
const bools = [true, true, true];
const allTrue = bools.reduce((acc, val) => acc && val);
console.log(allTrue); // true


// Example 5: Chain of Checks
const user = {
  name: 'Tez',
  settings: {
    theme: 'dark'
  }
};

const theme = user && user.settings && user.settings.theme;
console.log(theme); // 'dark'

//Real-Life Example: Get First Available Config
const env = undefined;
const config = null;
const defaultConfig = { port: 3000 };

const activeConfig = env || config || defaultConfig;
console.log(activeConfig); // { port: 3000 }
