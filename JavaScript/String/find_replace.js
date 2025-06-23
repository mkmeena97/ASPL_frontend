// 1. indexOf(searchString): 
// Returns the index of the first match. If not found, returns -1.
var str = "Hello, World!";
console.log(str.indexOf("o"));   // 4
console.log(str.indexOf("foo")); // -1

// 2. lastIndexOf(searchString)
// Returns the index of the last match.
console.log(str.lastIndexOf("o"));   // 8
console.log(str.lastIndexOf("foo")); // -1

//3. includes(searchString[, start])
// Returns true if substring is found, otherwise false.
console.log(str.includes("Hello")); // true
console.log(str.includes("foo"));   // false

//4. replace(search, replacement)
//If search is a string: replaces first match only.
var str = "Hello, World!";
str = str.replace("Hello", "Bye");
console.log(str); // "Bye, World!"

//If search is a RegExp with /g, it replaces all matches.
str = str.replace(/W.{3}d/g, "Universe");
console.log(str); // "Bye, Universe!"

//5. replace with Function (Conditional Replacements)
var messyStr = "heLlo, woRlD!";
var result = messyStr.replace(
  /([a-zA-Z])([a-zA-Z]+)/g,
  function (match, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  }
);
console.log(result); // "Hello, World!"


