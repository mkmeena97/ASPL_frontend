function loadStats() {
  return new Promise((res) => setTimeout(() => res(" Stats ready"), 1000));
}

function loadUser() {
  return new Promise((res) => setTimeout(() => res(" User data ready"), 500));
}

function loadMessages() {
  return new Promise((res) => setTimeout(() => res(" Messages ready"), 1200));
}

Promise.all([loadStats(), loadUser(), loadMessages()])
  .then(([stats, user, messages]) => {
    console.log(stats);     //  Stats ready
    console.log(user);      //  User data ready
    console.log(messages);  //  Messages ready
  })
  .catch(err => console.error("Something failed:", err));
