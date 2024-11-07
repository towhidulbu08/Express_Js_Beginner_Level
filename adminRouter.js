const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", (req, res, next) => {
  res.send("DashBoard");
});
adminRouter.get("/login", (req, res, next) => {
  res.send("login");
});
module.exports = adminRouter;
