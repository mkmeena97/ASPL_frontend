// 1. localeCompare()

var a = "hello";
var b = "world";

console.log(a.localeCompare(b)); // -1

// Ye method language-sensitive bhi ho sakta hai
console.log("ä".localeCompare("z")); // can return -1 depending on locale

// 2. strcmp() Style Manual Comparison
function strcmp(a, b) {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
}

console.log(strcmp("hello", "world")); // -1
console.log(strcmp("hello", "hello")); //  0
console.log(strcmp("world", "hello")); //  1

// 3. Sorting with localeCompare():
var arr = ["bananas", "cranberries", "apples"];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr); // ["apples", "bananas", "cranberries"]
