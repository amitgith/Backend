const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();
//middleware
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Ok get it");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;
  //mongodb send data logic
  const newNote = await NotesModel.create({
    title,
    description,
  });
  res.send({
    sucess: true,
    message: "Note created successfully",
    data: newNote,
  });
});

module.exports = app;
