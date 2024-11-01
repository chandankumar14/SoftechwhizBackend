const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    status: {
        type: String,
        enum: ['active', 'Inactive'],
        default: 'active',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogs", BlogSchema);
