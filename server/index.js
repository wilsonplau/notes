const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");

const apiRouter = require("./routers/api.js");
app.use(morgan("dev"));
app.use(
  "/api",
  express.json(),
  express.urlencoded({ extended: true }),
  apiRouter
);
app.use(express.static(path.join(__dirname, "../client/public")));

module.exports = app;