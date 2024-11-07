const express = require("express");
const app = express();
const adminRouter = require("./adminRouter");
const publicRouter = require("./publicRouter");

app.use("/admin", adminRouter);
app.use("/", publicRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
