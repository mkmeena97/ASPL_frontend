/**
 * What is a Map?
 * A Map is a built-in JavaScript object that holds key-value pairs, where
 * Keys can be any type (not just strings/symbols like in plain objects)
 * The order of insertion is preserved
 * It has powerful built-in methods (.set(), .get(), .has(), etc.)
 */

//1. Creating an Empty Map
const myMap = new Map();
console.log(myMap); // ➜ Map(0) {}


//2. Creating a Map with Initial Values
const cities = new Map([
  ["India", "New Delhi"],
  ["USA", "Washington"],
  ["UK", "London"]
]);

console.log(cities); // ➜ Map(3) { 'India' => 'New Delhi', ... }


// Real-Life Example: Tracking User Sessions
const sessions = new Map();

const user1 = { id: 101 };
const user2 = { id: 102 };

sessions.set(user1, "active");
sessions.set(user2, "inactive");

console.log(sessions.get(user1)); // "active"
