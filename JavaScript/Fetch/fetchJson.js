// fetchJson.js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => {
    console.log("Title:", data.title);
  })
  .catch(err => console.error("Error:", err));
