const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hii you in app");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});

app.listen(PORT, (req, res) => {
  console.log(`server listening on port ${PORT}`);
});
