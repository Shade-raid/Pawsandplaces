const express = require("express");
const multer = require("multer");
const Dog = require("../models/Dog");

const router = express.Router();

// Setup multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/"),
  filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + ".jpg"),
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const { description, location } = req.body;
  const { path } = req.file;

  const dog = new Dog({
    imageUrl: path,
    description,
    location: JSON.parse(location),
  });

  try {
    await dog.save();
    res.status(201).json(dog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;