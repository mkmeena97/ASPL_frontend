// checkFileHead.js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'HEAD',
  headers: {
    'Accept-Encoding': 'identity'
  }
})
  .then(res => {
    if (res.ok) {
      console.log("✅ File exists.");
    } else {
      console.log("❌ File does not exist.");
    }
  })
  .catch(console.error);
