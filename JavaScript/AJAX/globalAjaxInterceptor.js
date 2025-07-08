// globalAjaxInterceptor.js
function globalFetchInterceptor(url, options) {
  console.log("🌐 AJAX Request Sent:", url);

  return fetch(url, options)
    .then(response => {
      console.log("AJAX Response Received");
      return response;
    })
    .catch(error => {
      console.log(" AJAX Error Occurred");
      throw error;
    });
}

// Usage
globalFetchInterceptor('https://jsonplaceholder.typicode.com/posts/3')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
