const express = require("express");
const app = express();
app.set("view engine", "ejs");

app
  .route("/user/admin")
  .get((req, res) => {
    res.render("pages/about");
  })
  .post((req, res) => {
    res.send("welcome to page post");
  })
  .put((req, res) => {
    res.send("welcome to page put");
  });
app.listen(3000, () => {
  console.log("listening on port 3000");
});
