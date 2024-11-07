const express = require("express");
const app = express();
const fs = require("fs");

// Error handling for asynchronous code:

app.get("/", [
  (req, res, next) => {
    fs.readFile("/file-does-not-exit", "utf-8", (err, data) => {
      console.log(data);
      next(err);
    });
  },
  (req, res, next) => {
    console.log(data.property);
  },
]);

app.use((req, res, next) => {
  console.log("I am not called");
  next();
});
// custom error handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("There was a problem ");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was an error");
    }
  }
});

//Error Handling For Synchronous Code:

// app.get("/", (req, res) => {
//   for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//       next("There was an error");
//     } else {
//       res.write("a");
//     }
//   }
//   res.end();
// });
// //404 error handler
// app.use((req, res, next) => {
//   next("Requested url was not found");
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next("There was a problem ");
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send("There was an error");
//     }
//   }
// });

// //invisible default error handler

// app.use((err, req, res, next) => {
//   //  handle error here
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
