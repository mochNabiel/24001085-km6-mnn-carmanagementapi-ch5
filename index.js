const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(
  fileUpload({
      useTempFiles: true,
      tempFileDir: process.env.NODE_ENV == "development" ? "./tmp" : "/tmp", // if you're using GCP App Engine please don't comment this, because the ./tmp directory is read only and we need write too so we use /tmp
  })
); // body -> form-data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
