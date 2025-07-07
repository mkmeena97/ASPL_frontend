// lowResTimestamp.js

const date = new Date();
console.log(`Current time: ${date.toString()}`);
// Example Output: Current time: Fri Jun 20 2025 17:46:28 GMT+0530 (India Standard Time)
const lowResTimestamp = date.getTime() / 1000; // Convert milliseconds to seconds
console.log(`Low-resolution timestamp: ${lowResTimestamp}`);    
// Example Output: Low-resolution timestamp: 1718881588.123 
const roundedTimestamp = Math.floor(lowResTimestamp);
console.log(`Rounded low-resolution timestamp: ${roundedTimestamp}`);
// Example Output: Rounded low-resolution timestamp: 1718881588 