// promiseErrorHandling.js

Promise.reject("💥 Something went wrong")
  .then(() => {
    console.log("✅ Success"); // Skipped
  })
  .catch(err => {
    console.error("Caught:", err);
  });
