const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema({
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
 password: {
    type: String,
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("admins", adminSchema);
