const express = require("express");

const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am logging something!");
  next();
};
publicRouter
  .route("/user")
  .all((req, res, next) => {
    console.log("I am logging something");
    next();
  })
  .get((req, res) => {
    res.send("GET");
  })
  .put((req, res) => {
    res.send("PUT");
  })
  .post((req, res) => {
    res.send("POST");
  });

// publicRouter.get("/:user", (req, res) => {
//   res.send(`Hello User`);
// });

// publicRouter.get("/about", (req, res) => {
//   res.send("about");
// });

module.exports = publicRouter;
