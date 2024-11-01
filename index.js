const express = require("express");
const app = express();

const router = express.Router({ caseSensitive: true });
app.use(router);
router.get("/about", (req, res) => {
  res.send("This is Home Page ");
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is Home Page With Post Req");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
