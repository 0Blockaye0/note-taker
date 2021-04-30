const { json, text } = require("body-parser");
const path = require("path");
const router = require("express").Router();
const savedNotes = require("../../db/db.json");
const fs = require("fs");

function createNewNote(body, notesArr) {
  const newNote = body;
  notesArr.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notesArr)
  );
  return newNote
};

// ROUTE FOR GETTING SAVED NOTES
router.get("/notes", (req, res) => {
  res.json(savedNotes);
});

// i want to take an incoming new note and add it to the db json obj (and giving it a unique id), then return the new note
router.post("/notes", (req, res) => {
  let newNote = req.body;
  console.log(savedNotes)
  const savedNote = createNewNote(newNote, savedNotes);
  res.json(savedNote); 
});

module.exports = router;