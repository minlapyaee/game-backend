const mongoose = require("mongoose");

const { Schema } = mongoose;

const auditSchema = new Schema({
  info: {
    type: String,
  },
  created_by: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Audit", auditSchema);