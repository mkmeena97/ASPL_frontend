/*
crypto.getRandomValues()
Ye actual secure random bytes deta hai, OS ke entropy source se (like /dev/urandom).
*/
//Example: Generate secure random integer (0 to 255)
const array = new Uint8Array(1);
crypto.getRandomValues(array);
console.log(array[0]); // Random secure number between 0 and 255
