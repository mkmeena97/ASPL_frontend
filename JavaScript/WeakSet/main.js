const loggedInUsers = new WeakSet();

function addUser() {
  const user = { name: "Rajeshwari" };
  loggedInUsers.add(user);
  console.log("✅ User added to WeakSet:", user.name);

  // Save reference so we can check it
  window.currentUser = user;
}

function checkUser() {
  const user = window.currentUser;
  if (user && loggedInUsers.has(user)) {
    console.log("🟢 User is in WeakSet:", user.name);
  } else {
    console.log("🔴 User not found or garbage collected.");
  }
}
