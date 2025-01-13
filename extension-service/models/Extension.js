const mongoose = require("mongoose");

const ExtensionSchema = new mongoose.Schema({
  extension: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Extension", ExtensionSchema);
