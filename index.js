const express = require("express");
const app = express();
const path = require("path");

const multer = require("multer");

//file upload folder

const Uploads_Folder = "./uploads/";

// define the storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, Uploads_Folder);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const filename =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, filename + fileExt);
  },
});

//prepare the final multer upload object

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000, //1Mb
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"
      ) {
        cb(null, true);
      } else {
        cb(new Error("only .jpg,.jpeg,.png format are allowed"));
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("only .pdf file is allowed"));
      }
    } else {
      cb(new Error("There was an error"));
    }
  },
});

//application route
app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "doc", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send("Hello World");
  }
);

//default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
