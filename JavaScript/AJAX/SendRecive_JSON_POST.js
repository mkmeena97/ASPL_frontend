// postRequest.js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Fullstack Rocks',
    body: 'Internship mode: activated',
    userId: 99
  })
})
  .then(res => res.json())
  .then(data => console.log('Response from POST:', data))
  .catch(err => console.error('Error:', err));
