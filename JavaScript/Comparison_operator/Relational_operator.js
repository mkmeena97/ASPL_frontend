// === Relational Operators ===
console.log("== Relational Operators ==");

console.log(5 < 10);          // true
console.log(10 > 20);         // false
console.log(5 <= 5);          // true
console.log(10 >= 11);        // false

console.log("'5' < 10:", '5' < 10);  // true (string to number coercion)
console.log("'apple' > 'bat':", 'apple' > 'bat');  // false (lexical comparison)

// === Ternary Operator ===
console.log("\n== Ternary Operator ==");

let age = 17;
let access = age >= 18 ? "Access Granted" : "Access Denied";
console.log(`User status (age ${age}):`, access);  // Output: Access Denied

// Nested ternary
let score = 72;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
console.log(`Score ${score} → Grade:`, grade);  // Grade: C

// === Switch Statement ===
console.log("\n== Switch Statement ==");

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apples are ₹100/kg");
    break;
  case "banana":
    console.log("Bananas are ₹40/kg");
    break;
  case "mango":
    console.log("Mangoes are ₹120/kg");
    break;
  default:
    console.log("Fruit not available");
}

// Fallthrough example
console.log("\n== Switch with Fallthrough ==");

let x = 2;
switch (x) {
  case 1:
    console.log("One");
    break;
  case 2:
  case 3:
    console.log("Two or Three");  // Runs this
    break;
  default:
    console.log("Something else");
}
