console.group("Login Attempts");

function login(username) {
    console.count(`Login attempt for ${username}`);
}

login("tez");
login("tez");
login("admin");

console.groupEnd();
