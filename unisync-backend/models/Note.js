const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  filename: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Note", noteSchema);
