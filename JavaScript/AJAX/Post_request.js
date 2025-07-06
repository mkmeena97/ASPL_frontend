

//Using fetch() to POST JSON
fetch("https://api.example.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json(); //  Parse JSON response
  })
  .then(data => {
    console.log("Server says:", data.message);
  })
  .catch(err => {
    console.error("Request failed:", err);
  });


// Using async/await (Modern style)
async function login(user) {
  try {
    const res = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    console.log("Server:", data);
  } catch (err) {
    console.error(err.message);
  }
}
