const express = require("express");
const morgan = require("morgan");
const app = express();

// Condense compiler info
app.use(morgan("tiny"));
app.use(express.json());
console.log('test1')

app.get("/", async (req, res, next) => {
    res.status(200).json({ ping: "pong" });
  });

module.exports = app;