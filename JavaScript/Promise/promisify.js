//  Standard callback-style function
function getUserData(id, callback) {
  setTimeout(() => {
    if (id === 0) {
      callback(new Error("Invalid user ID"));
    } else {
      callback(null, { id, name: "Mahendra", role: "Coder" });
    }
  }, 1000);
}

//  Promisify utility
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

//  Promise-based version
const getUserDataAsync = promisify(getUserData);

//  Use it with .then / .catch or async/await
getUserDataAsync(1)
  .then(user => console.log("User data:", user))
  .catch(error => console.error("Error:", error.message));