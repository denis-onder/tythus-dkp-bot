const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("user", userSchema);
