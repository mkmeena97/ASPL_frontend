// getNoParams.js
fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(res => res.json())
  .then(data => {
    console.log("Post Data:", data);
  });
