//  %s = Formats the value as a string
//  %i or %d = Formats the value as an integer
//  %f = Formats the value as a floating point value
//  %o = Formats the value as an expandable DOM element
//  %O = Formats the value as an expandable JavaScript object
//  %c =  Applies CSS style rules to the output string as specified by the second parameter



// String formatting
console.log("%s has %d points", "Sam", 100); // Sam has 100 points

// Float formatting
console.log("Pi approx is %f", Math.PI); // Pi approx is 3.141593

// Integer formatting
console.log("Your score is %i out of %i", 85.5, 100); // 85 out of 100

// Object formatting
const user = { name: "Tez", age: 27 };
console.log("User (object): %o", user);    // Expandable object
console.log("User (object full): %O", user); // Full object with prototype chain

// Styled logs using %c
console.log("%cStyled log message!", "color: red; font-size: 20px; font-weight: bold;");

// Multiple styles
console.log(
  "%cTez%c Bhai %crocks!",
  "color: green; font-size: 18px;",
  "color: black; font-weight: bold;",
  "color: orange; font-style: italic;"
);
