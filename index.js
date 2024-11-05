const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const adminRouter = express.Router();

const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}`
      );
      next();
    } else {
      throw new Error("Failed Log");
    }
  };
};

adminRouter.use(loggerWrapper({ log: false }));
adminRouter.get("/dashboard", (req, res) => {
  res.send("DashBoard");
});
app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  console.log("About");
  res.send("About");
});

const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("There Was An server side error");
};
adminRouter.use(errorMiddleware);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
