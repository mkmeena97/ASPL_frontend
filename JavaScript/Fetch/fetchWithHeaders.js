// fetchWithHeaders.js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Custom-Header': 'MahendraPower'
  }
})
.then(res => res.json())
.then(data => console.log("Fetched with headers:", data[0]))
.catch(err => console.error(err));
