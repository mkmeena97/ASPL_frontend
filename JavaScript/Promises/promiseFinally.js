// promiseFinally.js

Promise.resolve(" Useful result")
  .then(data => {
    console.log(data);
  })
  .finally(() => {
    console.log("🧹 Cleaned up");
  });

Promise.reject(" Something went wrong")
  .then(() => {
    console.log("✅ Success"); // Skipped
  })
  .catch(err => {
    console.error("Caught:", err);
  })
  .finally(() => {
    console.log("🧹 Cleaned up");
  });

  