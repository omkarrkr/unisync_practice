require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create app FIRST
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// routes
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

// connect routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5000;

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
  .catch((err) => console.log(err));
