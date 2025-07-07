const express = require('express');
const app = express();

app.get('/jsonp-endpoint', (req, res) => {
  const callback = req.query.callback;
  const data = { tech: "JavaScript", trick: "JSONP", status: "Working 😎" };
  res.send(`${callback}(${JSON.stringify(data)})`);
});

app.listen(3000, () => {
  console.log("🚀 JSONP Server running on http://localhost:3000");
});
