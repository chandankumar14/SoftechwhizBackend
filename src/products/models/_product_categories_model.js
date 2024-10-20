const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productCategoriesSchema = new Schema(
  {
    categoryName: {
      type: String,
    },
    categoryBanner1: {
      type: String,
    },
    categoryLayout: {
      type: String,
    },
    categoryId:{
      type: String,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", productCategoriesSchema);
