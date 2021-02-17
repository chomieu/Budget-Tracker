// Set up the Express app
const express = require("express");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Compression
const compression = require("compression");
app.use(compression());

// Database
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api.js"));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
});