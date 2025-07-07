// highResTimestamp.js

const start = performance.now();

// Some time-consuming task
for (let i = 0; i < 1e6; i++) { Math.sqrt(i); }

const end = performance.now();
console.log(`Execution took ${end - start} ms`);
console.log(`High-resolution timestamp: ${performance.now()} ms`);
// Note: The performance.now() method returns a timestamp measured in milliseconds,
// with sub-millisecond precision, which is useful for measuring performance in web applications.
// However, it is not a high-resolution timestamp in the sense that it does not provide sub-millisecond accuracy.
// For true high-resolution timestamps, you would typically use the `process.hrtime()` method in Node.js,
// which provides a high-resolution real-time clock. Here's an example:
if (typeof process !== 'undefined' && process.hrtime) {
    const hrStart = process.hrtime();
    // Some time-consuming task
    for (let i = 0; i < 1e6; i++) { Math.sqrt(i); }
    const hrEnd = process.hrtime(hrStart);
    console.log(`High-resolution time: ${hrEnd[0]} seconds and ${hrEnd[1]} nanoseconds`);
}   
else {
    console.log("High-resolution timing is not available in this environment.");
}
// This code checks if the `process.hrtime` method is available, which is typically the case in Node.js environments.
// It then measures the time taken for a task using high-resolution timing and logs the result in seconds and nanoseconds.
// Note: In a browser environment, you would typically use `performance.now()` for high-resolution timing,
// as `process.hrtime` is not available. The example above is primarily for Node.js environments.
// In a browser, you can use `performance.now()` for high-resolution timestamps.    
// Example of using performance.now() in a browser environment
if (typeof performance !== 'undefined' && performance.now) {
    const perfStart = performance.now();
    // Some time-consuming task
    for (let i = 0; i < 1e6; i++) { Math.sqrt(i); }
    const perfEnd = performance.now();
    console.log(`High-resolution timestamp: ${perfEnd - perfStart} ms`);
}   
else {
    console.log("High-resolution timing is not available in this environment.");
}
// This code checks if the `performance.now` method is available, which is typically the case in browser environments.
// It then measures the time taken for a task using high-resolution timing and logs the result in milliseconds.
// Note: In a Node.js environment, you would typically use `process.hrtime()` for high-resolution timing,
// as `performance.now` is not available. The example above is primarily for browser environments.

// In conclusion, both `performance.now()` and `process.hrtime()` provide high-resolution timing capabilities,
// but they are used in different environments. `performance.now()` is designed for web applications and provides sub-millisecond accuracy,
// while `process.hrtime()` is used in Node.js for high-resolution real-time clock measurements.
// In summary, `performance.now()` is used for high-resolution timing in web applications, while `process.hrtime()` is used for high-resolution timing in Node.js environments.
