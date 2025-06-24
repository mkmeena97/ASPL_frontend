//Example 1: Simple reverse
// Important: reverse() mutates the original array
const original = [10, 20, 30];
const reversed = original.reverse();

console.log(original); // [30, 20, 10]
console.log(reversed); // [30, 20, 10] (same array)



//Want to keep original? Clone it first!
const arr = [1, 2, 3];
const reversed1 = [...arr].reverse();

console.log(arr);     // [1, 2, 3]
console.log(reversed1); // [3, 2, 1]


//Use Case: Show latest item first
const notifications = ["Msg1", "Msg2", "Msg3"];
const latestFirst = [...notifications].reverse();
console.log(latestFirst); // ['Msg3', 'Msg2', 'Msg1']

//Use Case: Reverse a string
const str = "tezbhai";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // 'iahbzte'



