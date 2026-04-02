const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const Record = require("../models/Record");

router.post("/", auth, async (req, res) => {
  const record = await Record.create({
    ...req.body,
    userId: req.user.id
  });
  res.json(record);
});

router.get("/", auth, async (req, res) => {
  const records = await Record.find({ userId: req.user.id });
  res.json(records);
});

module.exports = router;