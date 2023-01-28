const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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
  date: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  adharNumber: {
    type: Number,
    required: false,
    default: null,
  },
  leavingCertificate: {
    type: String,
    required: false,
    default: null,
  },
  lastResult: {
    type: String,
    required: false,
    default: null,
  },
  lastResultPersentage: {
    type: String,
    required: false,
    default: null,
  },
  profilePhoto: {
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

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;