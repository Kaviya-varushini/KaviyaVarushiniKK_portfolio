const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are required." });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    const contact = await Contact.create({ name, email, message });

    return res.status(201).json({
      message: "Message received successfully.",
      id: contact._id
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
