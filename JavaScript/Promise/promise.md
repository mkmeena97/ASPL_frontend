# Chapter 42: JavaScript Promises - Theory Overview

## What is a Promise?

A **Promise** is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation. It's like a placeholder for a future value.

Promises simplify asynchronous logic and help avoid deeply nested callbacks, known as "callback hell."

## States of a Promise

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: Operation completed successfully.
3. **Rejected**: Operation failed.

## Creating a Promise

```js
new Promise((resolve, reject) => {
  // async task
});
```

## Key Promise Methods

### 1. `.then()`

Used to handle a fulfilled promise. It returns another promise, enabling **chaining** of multiple `.then()` calls.

### 2. `.catch()`

Handles errors or rejections from the promise chain.

### 3. `.finally()`

Executes code after the promise settles, regardless of outcome. Ideal for cleanup tasks.

---

## Promise Chaining

Chaining allows you to run multiple asynchronous tasks **in sequence**, with each `.then()` passing results to the next.

---

## Handling Multiple Promises

### `Promise.all()`

Waits for **all** promises to resolve. If any reject, the whole thing rejects. Useful when you want all results before proceeding.

### `Promise.race()`

Returns the result of the **first settled** promise. Useful for timeouts or fallback servers.

### `Promise.allSettled()`

Waits for all promises to settle (either fulfilled or rejected), and returns an array with their results.

---

## Sequential Execution with Array.reduce()

Sometimes you want to run promises **one-by-one**, in sequence. This is typically done using `Array.prototype.reduce()` to chain promises manually.

---

## Promisifying Callback-Based Functions

Legacy functions that use the `(err, result)` pattern can be "promisified" by wrapping them in a `Promise` constructor.

---

## `async` / `await`

Syntactic sugar introduced in ES2017 to work with Promises in a more readable way.

### `async` Functions:

Declared with the `async` keyword, these always return a Promise.

### `await`:

Pauses the `async` function until the promise settles. Makes async code look synchronous.

---

## `finally()`

Used to run logic **after** a promise settles — whether it resolves or rejects. Often used to hide loaders, reset UI states, or close connections.

---

## Common Pitfall: Using `forEach` with Async Functions

`forEach` doesn’t work well with `await`. It does not wait for the inner async function. Use `for...of` or `map` + `Promise.all()` instead.

---

## Real-Life Use Case: Fetching Dashboard Data

Imagine you’re building a user dashboard that needs:

* User info
* Recent activity
* Notifications

Using `Promise.all()`, you can load all these pieces in parallel:

```js
Promise.all([getUser(), getActivity(), getNotifications()])
  .then(([user, activity, notifications]) => {
    // Update UI with all data at once
  })
  .catch((err) => {
    // Show error screen
  })
  .finally(() => {
    // Hide loader
  });
```

This pattern ensures performance, error handling, and proper cleanup.

---

## Summary Table

| Concept             | Use Case                       |
| ------------------- | ------------------------------ |
| `.then()`           | Handle fulfilled values        |
| `.catch()`          | Handle errors/rejections       |
| `.finally()`        | Always run cleanup code        |
| `Promise.all()`     | Wait for all promises          |
| `Promise.race()`    | Use the fastest promise result |
| `async/await`       | Cleaner syntax for async flows |
| `reduce()` chaining | Sequential execution           |
| `promisify()`       | Convert callback to promise    |

Promises are the foundation of modern async JavaScript — they power everything from HTTP requests to animations to background workers.

---
