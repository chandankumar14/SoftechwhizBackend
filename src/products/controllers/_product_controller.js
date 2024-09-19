const productModel = require("../models/_product_model");
const productCategoriesModel = require("../models/_product_categories_model");
const productVariantModel = require("../models/_product_variant_model");

exports.createProduct = async (req, res) => {
  try {
    const product = req.body;
    const productPayload = new productModel({
      productName: product?.productName ? product.productName : null,
      productSize: product?.productSize ? product.productSize : null,
      skuCode: product?.skuCode ? product.skuCode : null,
      quantity: product?.quantity ? product.quantity : null,
      price: product?.price ? product.price : null,
      inStock: product?.inStock ? product.inStock : true,
      productImage: req?.file?.filename
      ? req.file.filename
      : req.body.files,
      productDescription: product?.productDescription
        ? product.productDescription
        : null,
      categoryId: product?.categoryId ? product.categoryId : null,
      isDeleted: product?.isDeleted ? product.isDeleted : false,
    });
    const response = await productPayload.save();
    if (response && response != undefined) {
      return res.status(200).send({
        code: 200,
        message: "your product  is added successfully..",
        data: response,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.getProductList = async (req, res) => {
  try {
    const response = await productModel.find({});
    if (response && response != undefined) {
      return res.status(200).send({
        code: 200,
        message: " product list is fetch successfully..",
        data: response,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const _id = req.query;
    const productDetails = await productModel.findById(_id);
    if (response && response != undefined) {
      return res.status(200).send({
        code: 200,
        message: " product list is fetch successfully..",
        data: productDetails,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};
