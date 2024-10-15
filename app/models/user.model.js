const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "fullname not provided."],
  },
  balance: {
    type: Number,
    default: 10000
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);