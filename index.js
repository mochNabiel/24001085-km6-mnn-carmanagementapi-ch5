const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
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
