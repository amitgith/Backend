const express = require("express");
const cors = require('cors')
const connectdb = require("./config/db");
const notesRoute = require("./routes/notes.route");
const app = express();
connectdb();
// Adds headers: Access-Control-Allow-Origin: *
app.use(cors({
  origin:"http://localhost:5173"
}))
// midelware
app.use(express.json());
app.get("/", (req, res) => {
  res.send("ok got it");
});
app.use("/notes", notesRoute);
module.exports = app;
