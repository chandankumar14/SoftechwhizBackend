const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productCategoriesSchema = new Schema(
  {
    _id: {
      type: String,
    },
    categoryName: {
      type: String,
    },
    categoryBanner1: {
      type: String,
    },
    categoryLayout: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("productcategories", productCategoriesSchema);
