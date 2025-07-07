function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance
      if (success) {
        resolve({ user: "Tez", score: 99 });
      } else {
        reject("Server error occurred!");
      }
    }, 1000);
  });
}

fetchDataFromServer()
  .then(data => console.log(" Got data:", data))
  .catch(err => console.error(" Failed:", err));
