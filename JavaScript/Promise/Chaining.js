function login(user, pass) {
  return new Promise((resolve, reject) => {
    if (user === "tez" && pass === "123") {
      resolve("Login Success");
    } else {
      reject("Login Failed");
    }
  });
}

function fetchDashboard() {
  return Promise.resolve("Dashboard Loaded");
}

login("tez", "123")
  .then((msg) => {
    console.log(msg); // Login Success
    return fetchDashboard();
  })
  .then((dashboard) => {
    console.log(dashboard); // Dashboard Loaded
  })
  .catch((err) => {
    console.error("Error:", err);
  });
