const express = require("express");
const handle = require("./handle");
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const adminRoute = express.Router();
adminRoute.get("/dashboard", (req, res) => {
  console.log(req);
  res.send("Welcome admin DashBoard");
});
app.use("/admin", adminRoute);
app.get("/user/:id", handle);
app.post("/user/:id", (req, res) => {
  console.log(req.route);
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
