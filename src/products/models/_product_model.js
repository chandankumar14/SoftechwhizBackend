const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {

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
    modelFrontShot: {
      type: String,

    },
    modelRightSideShot: {
      type: String,

    },
    modelLeftSideShot: {
      type: String,
    },
    modelBackSideShot: {
      type: String,
    },
    modelAngle45Shot: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    category: {
      type: String,
    },
    fabric:{
      type: String, 
    },
    dimensions:{
    type: String, 
    },
    distinguishingFeatures:{
      type: String,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("product", productSchema)