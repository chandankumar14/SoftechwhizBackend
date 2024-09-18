const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    _id: {
      type: String,
    },
    productName: {
      type: String,
    },
    productSize: {
      type: String,
    },
    skuCode: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    inStock: {
      type: Boolean,
    },
    productImage: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
    },
    categoryId: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("products", productSchema)