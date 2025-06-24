# JavaScript: Relational Operators, Ternary Operator, and Switch Statement

---

## 🔸 Relational Operators

Used to compare two values. Return `true` or `false`.

| Operator | Description      | Example    | Result  |
| -------- | ---------------- | ---------- | ------- |
| `<`      | Less than        | `5 < 10`   | `true`  |
| `>`      | Greater than     | `5 > 10`   | `false` |
| `<=`     | Less or equal    | `5 <= 5`   | `true`  |
| `>=`     | Greater or equal | `10 >= 11` | `false` |

### 🔹 Notes:

* Comparison is **numeric** or **lexicographic** depending on types.

```js
console.log('5' < 10);      // true (string coerced to number)
console.log('apple' > 'bat'); // false (lexical comparison)
```

---

## 🔸 Ternary Operator (`?:`)

Compact form of `if/else`. Syntax:

```js
condition ? valueIfTrue : valueIfFalse
```

### ✅ Example:

```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
```

### ⚡ Nested Ternary:

```js
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade); // B
```

---

## 🔸 Switch Statement

Used for multiple condition checks.

### ✅ Syntax:

```js
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

### ✅ Example:

```js
let fruit = "apple";

switch(fruit) {
  case "apple":
    console.log("Apples are ₹100/kg");
    break;
  case "banana":
    console.log("Bananas are ₹40/kg");
    break;
  default:
    console.log("Fruit not available");
}
```

### ⚠ Without `break`

Switch continues to next case (fallthrough):

```js
let x = 2;
switch(x) {
  case 1:
  case 2:
  case 3:
    console.log("1-3 range");
    break;
}
```

---

## 🧠 Best Practices

* Use ternary for simple conditionals only.
* Use `switch` when many discrete cases exist.
* Always include `default` in switch.
* Use relational operators with care when types might differ.

---

## 🔚 Summary Table

| Feature        | Use Case                  | Preferred When                     |
| -------------- | ------------------------- | ---------------------------------- |
| `<`, `>`, etc. | Value comparisons         | Numeric or string comparisons      |
| `?:`           | Short if/else             | Quick assignments or returns       |
| `switch`       | Multi-condition branching | Many clear discrete constant cases |
