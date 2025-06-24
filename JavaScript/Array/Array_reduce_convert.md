# JavaScript Arrays: Converting and Reducing

---

## 🔹 Section 12.1: Converting Array-like Objects to Arrays

In JavaScript, some structures like `arguments`, `NodeList`, etc., look like arrays but are not real arrays. To use array methods like `.map()` or `.filter()`, we need to convert them.

### ✅ Methods to Convert:

#### 1. Using `Array.prototype.slice.call()` (classic way)

```js
function example() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args); // [1, 2, 3]
}
example(1, 2, 3);
```

#### 2. Using `Array.from()` (modern)

```js
function example() {
  const args = Array.from(arguments);
  console.log(args); // [1, 2, 3]
}
```

#### 3. Using Spread Operator `...`

```js
function example() {
  const args = [...arguments];
  console.log(args); // [1, 2, 3]
}
```

#### 4. Browser DOM NodeList Example:

```js
const divs = document.querySelectorAll('div');
const realArray = Array.from(divs);
```

---

## 🔹 Section 12.2: Reducing Values

`.reduce()` is used to transform an array into a single output (e.g., sum, object, group, etc).

### ✅ Syntax:

```js
array.reduce((acc, current) => { return acc; }, initialValue);
```

---

### ✅ Common Examples

#### 1. Sum of All Numbers

```js
const nums = [1, 2, 3];
const sum = nums.reduce((acc, val) => acc + val, 0); // 6
```

#### 2. Flatten a Nested Array

```js
const nested = [[1, 2], [3, 4]];
const flat = nested.reduce((acc, val) => acc.concat(val), []);
```

#### 3. Count Element Occurrences

```js
const items = ['a', 'b', 'a'];
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
```

#### 4. Group By Property

```js
const people = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
  { name: 'C', age: 20 }
];
const grouped = people.reduce((acc, p) => {
  (acc[p.age] = acc[p.age] || []).push(p);
  return acc;
}, {});
```

---

### ✅ Advanced Use Cases

#### 🔁 Remove Duplicates

```js
const unique = [1, 2, 2, 3].reduce((acc, val) => {
  if (!acc.includes(val)) acc.push(val);
  return acc;
}, []);
```

#### 📊 Statistics (sum, count, pass/fail)

```js
const scores = [80, 40, 90];
const stats = scores.reduce((acc, score) => {
  acc.total += score;
  acc.count++;
  if (score >= 50) acc.pass++;
  else acc.fail++;
  return acc;
}, { total: 0, count: 0, pass: 0, fail: 0 });
```

#### 🧭 Nested Path Structure

```js
const path = ['home', 'user', 'docs'];
const nested = path.reduceRight((acc, cur) => ({ [cur]: acc }), 'file.txt');
```

---

## 🧠 Tips

* Use `.reduce()` when chaining `.map() + .filter() + .sum()` feels bulky.
* Always provide an `initialValue`.
* Use `Array.from()` or spread `...` for readability in conversion.

---

## ✅ Summary

| Topic            | Use Case                    | Example Function          |
| ---------------- | --------------------------- | ------------------------- |
| Array Conversion | Convert arguments/NodeList  | `Array.from()` / `[...x]` |
| Reduce           | Sum, transform, group, nest | `.reduce()`               |
