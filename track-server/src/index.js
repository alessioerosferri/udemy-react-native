const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri = "mongodb+srv://admin:admin@cluster0-iq8l6.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.get("/", (req, res) => {
  res.send("Hi there!")
});

app.listen(3000, () => {
  console.log("Listening on port 3000")
})