// timestampInSeconds.js

const now = Date.now(); // milliseconds since Jan 1, 1970
const seconds = Math.floor(now / 1000);

console.log(`Current UNIX timestamp in seconds: ${seconds}`);
// Output: Current UNIX timestamp in seconds: <current_timestamp>
