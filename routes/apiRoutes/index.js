const path = require("path");
const router = require("express").Router();
let savedNotes = require("../../db/db.json");
const fs = require("fs");
const cuid = require("cuid");
// const renderNoteList = require("../../public/assets/js/index");

// MAKES NEW NOTE FROM REQ BODY AND WRITES IT TO DB/ RETURNS NEW NOTE
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

// ROUTE TO SAVE A NOTE AND ASSIGN ID
router.post("/notes", (req, res) => {
  let newNote = req.body;
  newNote.id = cuid();

  const savedNote = createNewNote(newNote, savedNotes);
    console.log(savedNotes)
  res.json(savedNote); 
});

// DELETES A NOTE BY ID
router.delete("/notes/:id", (req, res) => {
  // console.log(savedNotes);
    let peram = req.params;
    let newSavedNotes = savedNotes.filter(note => note.id != peram.id)
    // someArray = someArray.filter(person => person.name != 'John');
    // console.log(newSavedNotes);
    savedNotes = newSavedNotes;
    // renderNoteList();
    return savedNotes;
  // delete savedNotes;
});

module.exports = router;