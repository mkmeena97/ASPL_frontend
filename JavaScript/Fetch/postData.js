// postData.js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'POC Masterpiece',
    body: 'Rajeshwari is unstoppable!',
    userId: 99
  })
})
.then(res => res.json())
.then(data => console.log("Posted:", data))
.catch(console.error);
