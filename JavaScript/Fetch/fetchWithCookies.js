// fetchWithCookies.js
fetch('https://example.com/data', {
  method: 'GET',
  credentials: 'include'
})
.then(res => res.json())
.then(data => console.log("Data with cookies:", data))
.catch(console.error);
