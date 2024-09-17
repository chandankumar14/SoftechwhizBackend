const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
 firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  secondaryContact: {
    type: String,
  },
  countryName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  landMark: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("users", userSchema);
