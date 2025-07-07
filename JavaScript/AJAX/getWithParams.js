// getWithParams.js
const params = new URLSearchParams({ userId: 1 });
fetch(`https://jsonplaceholder.typicode.com/posts?${params}`)
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => {
      console.log(`Title: ${post.title}`);
    });
  });
