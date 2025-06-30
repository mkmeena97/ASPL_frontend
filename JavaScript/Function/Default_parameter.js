
//example 1
function demo(x = 10) {
  console.log(x);
}

demo();        // 10 (default)
demo(undefined); // 10 (default)
demo(null);    // null (no default used)

//Example 2
function createUser(name = "Anonymous", isAdmin = false) {
  return {
    name,
    isAdmin
  };
}

console.log(createUser()); 
// { name: "Anonymous", isAdmin: false }

console.log(createUser("Tez", true)); 
// { name: "Tez", isAdmin: true }
