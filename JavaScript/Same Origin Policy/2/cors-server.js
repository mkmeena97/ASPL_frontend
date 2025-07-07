// cors-server.js (Node.js with Express)
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow all origins
app.get("/data", (req, res) => {
  res.json({ message: "Cross-origin data fetched successfully!" });
});

app.listen(4000, () => console.log("CORS server running on port 4000"));
