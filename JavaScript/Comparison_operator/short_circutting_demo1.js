let user = { name: "Tez", age: 27 };

//  `&&` → if left is true, right executes
if (user && user.name) {
  console.log("User has a name:", user.name);
}

//  `||` → if left is falsy, right is evaluated
let nickname = user.nickname || "No nickname";
console.log("Nickname:", nickname);  // Output: "No nickname"
