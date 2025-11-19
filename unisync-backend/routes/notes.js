const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const auth = require("../middlewares/auth");
const { uploadNote, getNotes } = require("../controllers/notesController");

router.post("/", auth, upload.single("file"), uploadNote);
router.get("/", getNotes);

module.exports = router;
