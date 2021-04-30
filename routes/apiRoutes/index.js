const { json } = require("body-parser");
const path = require("path");
const router = require("express").Router();
const savedNotes = require("../../db/db.json");

router.get("/savedNotes", (req, res) => {
  res.json(savedNotes);
});

module.exports = router;