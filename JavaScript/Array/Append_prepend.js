// Append = Add to End
//Prepend = Add to Start

//1. push() → Add to End
let messages = ['hi', 'hello'];
messages.push('kya haal hai?');  // append
console.log(messages);
// ['hi', 'hello', 'kya haal hai?']


//2. unshift() → Add to Start
let history = [];
history.unshift('google.com');
history.unshift('openai.com');
console.log(history);
// ['openai.com', 'google.com']


//3. Append Multiple Values
const arr2 = [1, 2];
arr2.push(3, 4, 5);
console.log(arr2); // [1, 2, 3, 4, 5]
