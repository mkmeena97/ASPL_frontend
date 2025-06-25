
/*
Ye default settings hain jab tum normal assignment se property banate ho.
*/
const user = { name: "Tez" };

const descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor);
/*
{
  value: 'Tez',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

const settings = {};
Object.defineProperty(settings, "theme", {
  value: "dark",
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(settings, "theme"));
/*
{
  value: 'dark',
  writable: false,
  enumerable: false,
  configurable: false
}
*/
