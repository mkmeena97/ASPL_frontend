const loginStatus = new WeakMap();

function simulateLogin() {
  const user = { name: "Tez" };
  loginStatus.set(user, true);
  console.log("✅ User logged in:", user.name);

  // Save reference for later
  window.currentUser = user;
}

function checkLogin() {
  const user = window.currentUser;
  if (user && loginStatus.get(user)) {
    console.log("🟢 User is still logged in:", user.name);
  } else {
    console.log("🔴 User is not logged in or no user found.");
  }
}
