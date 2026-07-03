const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, default: "Medium" },
  category: { type: String, default: "General" },
  dueDate: { type: String },
  status: { type: String, default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
