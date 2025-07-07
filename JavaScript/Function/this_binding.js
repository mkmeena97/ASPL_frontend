/*
    - this refers to the object that is executing the current function.
    - .bind() creates a new function with this permanently bound.
    - .call() calls function with this + arguments directly
    - .apply() same but takes args as array
*/

//Example 1: Default this inside object method
const user = {
  name: "Tez",
  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Tez


//Problem: Losing this
const f = user.greet;
f(); // Hello undefined (global `this` is used)

// Solution 1: .bind(this)
const fBound = user.greet.bind(user);
fBound(); // Hello Tez 

//Solution 2: .call() and .apply()
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "Tez" };

greet.call(person, "Hi");   // Hi, Tez 
greet.apply(person, ["Hey"]); // Hey, Tez 


//Arrow functions don't have their own this — they inherit it from the parent scope:
const user1 = {
  name: "Tez",
  greet: () => {
    console.log("Hi " + this.name);
  }
};

user1.greet(); // Hi undefined
