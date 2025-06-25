const user = {
  name: "Tez",
  age: 27,
  role: "Developer"
};

// 1. for...in loop — Traditional way
//  Iterates over all enumerable properties (including inherited)
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//  Use hasOwnProperty if you want to skip inherited ones
for (let key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key, user[key]);
  }
}

// 2. Object.keys() + forEach
// Returns only own enumerable property names.
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

//3. Object.entries() — Best for both key & value
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// 4. Object.values() — Only values
Object.values(user).forEach(value => {
  console.log(value);
});


// Real-Life Use Case
// Display user profile dynamically
function displayProfile(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key.toUpperCase()}: ${value}`);
  }
}

displayProfile(user);
/*
NAME: Tez  
AGE: 27  
ROLE: Developer  
*/
