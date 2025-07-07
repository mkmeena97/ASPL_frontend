function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Tez" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}

getUser(1)
  .then((user) => {
    console.log(" User found:", user);
    return getUser(-5); // simulate second call that fails
  })
  .then((user) => {
    console.log(" Second call:", user); // won’t run
  })
  .catch((err) => {
    console.error(" Caught error:", err.message); // handles both
  });
