# JavaScript Short-Circuiting

Short-circuiting is a behavior in JavaScript's logical operators (`||`, `&&`) where expressions are **not fully evaluated** if the final result is already known. 
Short-circuiting means JavaScript stops evaluating an expression as soon as the result is known.

---

##  Logical OR (`||`)

###  Behavior:

* Returns the **first truthy** value it finds
* If all are falsy, returns the **last** value

###  Syntax:

```js
let result = a || b;
```

###  Examples:

```js
console.log('hello' || '');       // "hello"
console.log('' || []);            // []
console.log(null || 'default');   // "default"
console.log(0 || false || 5);     // 5
```

###  Use-case: Default Fallback

```js
let username = inputName || "Guest";
```

---

## 🔸 Logical AND (`&&`)

###  Behavior:

* Returns the **first falsy** value it finds
* If all are truthy, returns the **last** value

###  Syntax:

```js
let result = a && b;
```

###  Examples:

```js
console.log('hello' && 'world');     // "world"
console.log(0 && 'value');           // 0
console.log(true && false && 'x');   // false
```

###  Use-case: Conditional Execution

```js
isLoggedIn && showDashboard();
```

---

##  Short-circuiting with Functions

```js
function T() {
  console.log("T");
  return true;
}
function F() {
  console.log("F");
  return false;
}

T() && F();   // Output: T, F
F() && T();   // Output: F
T() || F();   // Output: T
F() || T();   // Output: F, T
```

---

##  Short-circuiting for Optional Execution

```js
function myFunction(cb) {
  cb && cb();
}
```

---

##  Safe Property Access (Pre-Optional Chaining)

```js
let obj;

// ❌ Throws error
// if (obj.property) {}

// ✅ Safe access
if (obj && obj.property) {}
```

Or even better:

```js
if (typeof obj === 'object' && obj.property) {}
```

---

##  Combining Fallbacks with OR

```js
let config = envValue || userValue || defaultValue;
```

---

##  Summary

| Operator | Returns               | Stops when      |                        |                  |
| -------- | --------------------- | --------------- | ---------------------- | ---------------- |
| \`       |                       | \`              | First **truthy** value | Found one truthy |
| `&&`     | First **falsy** value | Found one falsy |                        |                  |

Use short-circuiting to simplify code, set defaults, and avoid runtime errors — but don’t overdo it. Maintain readability! 
