const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const Record = require("../models/Record");

// 🔥 IMPORTANT: route path must be "/summary"
router.get("/summary", auth, async (req, res) => {
  try {
    const records = await Record.find({ userId: req.user.id });

    let income = 0;
    let expense = 0;

    records.forEach(r => {
      if (r.type === "income") income += r.amount;
      else expense += r.amount;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;