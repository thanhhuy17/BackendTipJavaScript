const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression()); // Data Low when send
//morgan have 5 options
// (morgan("dev"))
// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")

// init db
require("./dbs/init.mongodb");
// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Huy Ben 99";
  return res.status(200).json({
    message: "Welcome HuyNguyen!",
    metadata: strCompress.repeat(10000),
  });
});
// handling error

module.exports = app;
