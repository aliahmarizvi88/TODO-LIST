const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    date: { type: Date, required: true },
    priority: { type: String, require: true },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

const List = mongoose.model('lists', listSchema);

module.exports = List;
