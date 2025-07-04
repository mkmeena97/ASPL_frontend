const user = { name: "Tez", role: "Full Stack" };
localStorage.setItem("profile", JSON.stringify(user));

// Later...
const profile = JSON.parse(localStorage.getItem("profile"));
console.log(profile.name); // Tez
