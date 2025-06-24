// === Logical Operators with Non-Boolean Values ===

// 1 Default fallback with ||
let userInput = '';          // Empty string = falsy
let username = userInput || 'Guest';
console.log("Username:", username); // Output: Guest

// 2 Lazy fallback for config values
let envValue = null;
let configValue = 0;
let defaultValue = "Default Config";

let finalConfig = envValue || configValue || defaultValue;
console.log("Final Config:", finalConfig); // Output: Default Config

// 3 Safe access to nested object
let user = null;
let city = user && user.address && user.address.city;
console.log("City:", city); // Output: undefined (no crash)

// 4 Conditional function execution using &&
let notify = true;
let sendNotification = () => console.log(" Notification sent!");

notify && sendNotification(); // Output:  Notification sent!

// 5 Falsy-truthy test chain
let result = 0 || '' || null || undefined || 'found';
console.log("Truthy fallback:", result); // Output: found

// 6 Logical AND chain — returns last truthy if all truthy
let a = 'hello' && 123 && [1, 2, 3];
console.log("All truthy:", a); // Output: [1, 2, 3]

// 7 Logical AND short-circuits on first falsy
let b = 'yes' && 0 && 'never-reached';
console.log("Short-circuited AND:", b); // Output: 0

// 8 Complex truthy chaining for UI logic
let displayText = '' || null || false || 'Hello User!';
console.log("Display Text:", displayText); // Output: Hello User!

// 9 Falsy values test
const falsyList = [false, 0, '', null, undefined, NaN];
falsyList.forEach((val, i) => {
  console.log(`Value ${i + 1}:`, val, '→ is falsy:', !val);
});

// 10 Truthy values test
const truthyList = ['0', [], {}, 42, 'false', true];
truthyList.forEach((val, i) => {
  console.log(`Truthy ${i + 1}:`, val, '→ is truthy:', !!val);
});
