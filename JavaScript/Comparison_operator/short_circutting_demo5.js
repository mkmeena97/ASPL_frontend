function logActivity(activity) {
  activity = activity || "Browsing";
  console.log("User is:", activity);
}

logActivity("Shopping");     // User is: Shopping
logActivity();               // User is: Browsing
