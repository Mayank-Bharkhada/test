const mongoose = require("mongoose");

const InstituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: 0,
  },
});

const InstituteModel = mongoose.model("Institute", InstituteSchema);

module.exports = InstituteModel;