const express = require("express");
const Extension = require("../models/Extension");

const router = express.Router();

// GET all extensions
router.get("/", async (req, res) => {
  try {
    const extensions = await Extension.find();
    res.status(200).json(extensions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch extensions" });
  }
});

// POST a new extension
router.post("/", async (req, res) => {
  const { extension } = req.body;

  try {
    const newExtension = new Extension({ extension });
    await newExtension.save();
    res.status(201).json(newExtension);
  } catch (error) {
    res.status(500).json({ error: "Failed to save extension" });
  }
});

module.exports = router;
