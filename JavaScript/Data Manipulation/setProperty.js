// setProperty.js
const obj = {};
const key = 'username';

obj[key] = 'rajeshwari';
console.log(obj); // { username: 'rajeshwari' }

// Or more dynamic
function setProp(obj, propName, value) {
  obj[propName] = value;
}
setProp(obj, 'email', 'rajeshwari@example.com');
console.log(obj); // { username: 'rajeshwari', email: 'rajeshwari@example.com' }
