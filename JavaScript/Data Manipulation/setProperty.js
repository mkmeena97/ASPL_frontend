// setProperty.js
const obj = {};
const key = 'username';

obj[key] = 'Tez';
console.log(obj); // { username: 'Tez' }

// Or more dynamic
function setProp(obj, propName, value) {
  obj[propName] = value;
}
setProp(obj, 'email', 'Tez@example.com');
console.log(obj); // { username: 'Tez', email: 'Tez@example.com' }
