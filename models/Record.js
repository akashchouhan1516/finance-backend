const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  type: String,
  category: String,
  date: Date
});

module.exports = mongoose.model("Record", recordSchema);