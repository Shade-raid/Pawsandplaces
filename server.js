const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dogRoutes = require("./routes/dogRoutes");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/dogspotter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/dogs", dogRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));