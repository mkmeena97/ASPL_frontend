

// Basic Info and String Creation
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`;  // ES6 Template Literal

console.log(hello);    // "Hello"
console.log(world);    // "world"
console.log(helloW);   // "Hello World"

// Strings from other types
var intString = String(32);         // "32"
var booleanString = String(true);   // "true"
var nullString = String(null);      // "null"

console.log(intString, booleanString, nullString);

// Using toString()
var intStr2 = (5232).toString();        // "5232"
var boolStr2 = (false).toString();      // "false"
var objStr2 = ({}).toString();          // "[object Object]"

console.log(intStr2, boolStr2, objStr2);

// Using String.fromCharCode()
var fromChar = String.fromCharCode(104, 101, 108, 108, 111); // "hello"
console.log(fromChar);

// Creating a String object (not recommended)
var objectString = new String("Yes, I am a String object");
console.log(typeof objectString);         // "object"
console.log(typeof objectString.valueOf()); // "string"

// Concatenation
var foo = "Foo";
var bar = "Bar";

console.log(foo + bar);            // "FooBar"
console.log(foo + " " + bar);      // "Foo Bar"
console.log(foo.concat(bar));      // "FooBar"
console.log("a".concat("b", " ", "d")); // "ab d"

// Concatenation with other types
var str = "string";
var num = 32;
var bool = true;

console.log(str + num + bool);  // "string32true"

// ------------------------------
// Template Literals (ES6+)
// ------------------------------
var place = "World";
var greet = `Hello ${place}!`;
console.log(greet);  // "Hello World!"

// String.raw (prevents escape sequence interpretation)
console.log(`a\\b`);          // a\b
console.log(String.raw`a\\b`); // a\\b
