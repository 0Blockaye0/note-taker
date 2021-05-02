const path = require("path");
const router = require("express").Router();

// ROUTES TO LANDING PAGE
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/assets/index.html"));
});

// ROUTES TO NOTES PAGE
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;
