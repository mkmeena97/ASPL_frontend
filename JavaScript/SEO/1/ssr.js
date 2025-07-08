const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Tez's SEO Page" });
});

app.listen(3000, () => console.log("🚀 Server on http://localhost:3000"));
