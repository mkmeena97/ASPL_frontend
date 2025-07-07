// asyncApiRequest.js

async function fetchPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();
  console.log(post.title);
}

fetchPost();

