/*
    - Used for iterating object keys (enumerable properties).
    - Also picks up inherited properties if not filtered with hasOwnProperty.
*/

const user = { name: "Tez", age: 27 };

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// name: Tez
// age: 27
