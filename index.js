const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/about", (req, res) => {
  res.set("Title", "Learn With Sumit");
  console.log(res.get("Title"));
  res.end();
});
app.get("/test", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
