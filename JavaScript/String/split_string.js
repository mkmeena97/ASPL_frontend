// 1. Use .split(separator) to break a string into an array:
var s = "one, two, three, four, five";
var arr = s.split(", ");
console.log(arr); // ["one", "two", "three", "four", "five"]

// Joining Back into a String
var joined = arr.join("--");
console.log(joined); // "one--two--three--four--five"


//2. slice() for Strings
var s = "0123456789abcdefg";
console.log(s.slice(0, 5)); 
console.log(s.slice(10)); 
console.log(s.slice(5,6)); 

let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"
console.log(str.slice(4));    // "Script" (everything from index 4 to end)
console.log(str.slice(-6));     // "Script" (negative index counts from the end)
console.log(str.slice(-6, -3));     // "Scr"

// Negative indices count from the end of the string.

// slice() does not modify the original string (it's non-destructive).

// Works just like array .slice() but returns substrings.