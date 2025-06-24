# Equality Comparison Operators in JavaScript

JavaScript provides multiple types of equality comparison operations, each with different rules for how values are evaluated.

---

## 🔸 1. Strict Equality (`===`) and Strict Inequality (`!==`)

* **Does not perform type coercion**
* **Both value and type must match**

### ✅ Examples:

```js
1 === 1          // true
1 === '1'        // false
NaN === NaN      // false
[] === []        // false (different references)
+0 === -0        // true
```

---

## 🔸 2. Abstract Equality (`==`) and Inequality (`!=`)

* **Performs type coercion**
* Converts operands to a common type before comparison

### ✅ Coercion Rules:

* `null == undefined` → true
* `true == 1` → true
* `'5' == 5` → true
* `0 == false` → true

### ❌ Can lead to unexpected bugs:

```js
'' == 0          // true
[] == ''         // true
[] == 0          // true
```

---

## 🔸 3. `Object.is()` (SameValue)

* Introduced in ES6
* Like `===` but:

  * `Object.is(NaN, NaN)` → true
  * `Object.is(+0, -0)` → false

### ✅ Examples:

```js
Object.is(1, 1)           // true
Object.is(NaN, NaN)       // true
Object.is(+0, -0)         // false
Object.is([], [])         // false (different references)
```

---

## 🔸 4. SameValueZero (used by `Array.prototype.includes`)

* Similar to `Object.is()` but considers +0 and -0 equal
* Considers `NaN` equal to `NaN`

### ✅ Examples:

```js
[NaN].includes(NaN)       // true
[+0].includes(-0)         // true
```

---

## 🔸 Summary Comparison Table

| Operation     | NaN == NaN | +0 == -0 | Type Coercion | Syntax           |
| ------------- | ---------- | -------- | ------------- | ---------------- |
| `==`          | false      | true     | Yes           | `a == b`         |
| `===`         | false      | true     | No            | `a === b`        |
| `Object.is()` | true       | false    | No            | `Object.is(a,b)` |
| `includes()`  | true       | true     | No            | `arr.includes()` |

---

## 🧠 Best Practice

* Prefer `===` and `!==` over `==` and `!=`
* Use `Object.is()` when precision with `NaN` or `+0/-0` matters
* Avoid abstract equality unless absolutely necessary

---

## 🔸 Special Cases Recap

```js
null == undefined          // true
0 == false                 // true
1 == '1'                   // true
NaN == NaN                 // false
Object.is(NaN, NaN)        // true
Object.is(+0, -0)          // false
[1] == '1'                 // true
```

Always double-check comparisons when types may differ!
