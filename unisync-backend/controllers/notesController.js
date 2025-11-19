const Note = require("../models/Note");

exports.uploadNote = async (req, res) => {
  try {
    const { title } = req.body;

    const note = await Note.create({
      title,
      filename: req.file.filename,
      uploadedBy: req.user.id,
    });

    res.json({ msg: "Note uploaded", note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find().populate("uploadedBy", "name");
  res.json(notes);
};
