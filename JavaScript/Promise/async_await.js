function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Tez" }), 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
  });
}

async function showDashboard() {
  try {
    const user = await getUser(1);
    console.log(" User:", user);

    const posts = await getPosts(user.id);
    console.log(" Posts:", posts);
  } catch (err) {
    console.error(" Failed:", err);
  }
}

showDashboard();
