/*
 What does Object.seal() do?
 - New properties can't be added
 - Existing properties can't be deleted
 - Values of existing properties can still be changed
 - Object.seal() is shallow — nested objects are still free
*/

const user = {
  name: "Tez",
  age: 27
};

Object.seal(user);

user.age = 28;            //  Allowed
user.city = "Jaipur";     //  Not added
delete user.name;         //  Not deleted

console.log(user);
// { name: "Tez", age: 28 }


//Check if object is sealed:
console.log("Is object Sealed? ",Object.isSealed(user)); // true 


// Use Case 
const config = {
  port: 3000,
  env: "dev"
};

Object.seal(config);

// You can change existing values
config.port = 5000;       // allowed

config.db = "mongo";      //  Not added
delete config.env;        //  Not deleted

console.log(config);
// { port: 5000, env: "dev" }
