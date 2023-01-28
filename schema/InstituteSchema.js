const mongoose = require("mongoose");

const InstituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfEstablishment: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  instituteCertificate: {
    type: String,
    required: false,
    default: null,
  },
  institutePhoto: {
    type: String,
    required: false,
    default: null,
  },
  block: {
    type: Number,
    required: false,
    default: 0,
  },
  varified: {
    type: Number,
    required: false,
    default: 0,
  },
  varificationRequest: {
    type: Number,
    required: false,
    default: 1,
  },
});

const InstituteModel = mongoose.model("Institute", InstituteSchema);

module.exports = InstituteModel;