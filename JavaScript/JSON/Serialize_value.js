/*
    Serialization means converting a JavaScript object into a JSON string so it can be:
     - Stored (e.g. in localStorage, a file, or database)
     - Transmitted (e.g. sent over HTTP to an API)
     - Logged/debugged easily
     - Syntax = JSON.stringify(value)
     - The Date object got converted into an ISO string. That's important! JSON doesn't support Date, Map, Set, functions, or undefined


 - Pitfalls of JSON.stringify():
    - `undefined`  = Skipped in objects, becomes `null` in arrays 
    - Function     = Skipped entirely                             
    - Symbol       = Skipped entirely                             
    - `Date`       = Converted to string                         
    - Circular Ref = Throws an error                              

*/

//Step 1: JavaScript object
const userSettings = {
  theme: "dark",
  language: "en",
  notificationsEnabled: true,
  lastLogin: new Date(), 
};

// Step 2: Serialize it
const serializedSettings = JSON.stringify(userSettings);
console.log(serializedSettings);

// output
// {
//   "theme": "dark",
//   "language": "en",
//   "notificationsEnabled": true,
//   "lastLogin": "2025-07-06T12:00:00.000Z"
// }

// Step 3: Store it in localStorage
localStorage.setItem("settings", serializedSettings);

//Step 4: Retrieve and Deserialize it Later
const retrieved = localStorage.getItem("settings");
const parsedSettings = JSON.parse(retrieved);
console.log(parsedSettings.lastLogin); // String, not Date

