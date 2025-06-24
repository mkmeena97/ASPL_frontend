# Logical Operators with Non-Boolean Values in JavaScript

JavaScript allows logical operators (`||`, `&&`) to work not just with `true` or `false`, but with **any value**. These operators return one of the actual operands, not just a boolean result.

---

## 🔸 `||` (Logical OR)

### 📌 Behavior:

* Returns the **first truthy** operand
* If all are falsy, returns the **last** operand

### ✅ Examples:

```js
'a' || 'b'         // → 'a'
''  || 'b'         // → 'b'
null || 0 || 'x'   // → 'x'
undefined || '' || []  // → []
```

### ✅ Use-case:

* Set default values

```js
let name = userInput || 'Guest';
```

---

## 🔸 `&&` (Logical AND)

### 📌 Behavior:

* Returns the **first falsy** operand
* If all are truthy, returns the **last** operand

### ✅ Examples:

```js
'a' && 'b'        // → 'b'
''  && 'b'        // → ''
1 && true && 5    // → 5
true && 0         // → 0
```

### ✅ Use-case:

* Conditional execution

```js
isLoggedIn && showDashboard();
```

---

## 🔸 Truthy and Falsy Values

### ✅ Truthy values (treated as `true` in conditions):

* `'text'` (non-empty strings)
* `42` (non-zero numbers)
* `[]` (empty array)
* `{}` (empty object)
* `function() {}`
* `Infinity`, `-Infinity`

### ❌ Falsy values (treated as `false`):

* `false`
* `0`, `-0`
* `''` (empty string)
* `null`
* `undefined`
* `NaN`

---

## 🔸 Chained Example

```js
let result = 0 || '' || false || 'JS' || 'Backup';
console.log(result); // "JS"

let result2 = 'hello' && 123 && null && 'more';
console.log(result2); // null
```

---

## 🧠 Summary

| Operator | Returns               | Stops When  |                        |              |
| -------- | --------------------- | ----------- | ---------------------- | ------------ |
| \`       |                       | \`          | First **truthy** value | Found truthy |
| `&&`     | First **falsy** value | Found falsy |                        |              |

Logical operators in JS are more powerful than just `true`/`false` tools — they control flow, fallback, and even optional executions!
