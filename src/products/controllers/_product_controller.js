const productModel = require("../models/_product_model");

exports.createProduct = async (req, res) => {
  try {
    const product = req.body;
    const productPayload = new productModel({
      productName: product?.productName ? product.productName : null,
      fabric:product?.fabric ? product.fabric : null,
      dimensions:product?.dimensions ? product.dimensions : null,
      distinguishingFeatures:product?.distinguishingFeatures ? product.distinguishingFeatures : null,
      productSize: product?.productSize ? product.productSize : null,
      skuCode: product?.skuCode ? product.skuCode : null,
      quantity: product?.quantity ? product.quantity : null,
      price: product?.price ? product.price : null,
      inStock: product?.inStock ? product.inStock : true,
      modelFrontShot: req?.files?.modelFrontShot
        ? req?.files.modelFrontShot[0].filename
        : null,
      modelRightSideShot: req?.files?.modelRightSideShot
        ? req?.files?.modelRightSideShot[0].filename
        : null,

      modelLeftSideShot: req?.files?.modelLeftSideShot
        ? req?.files?.modelLeftSideShot[0].filename
        : null,
      modelBackSideShot: req?.files?.modelBackSideShot
        ? req?.files?.modelBackSideShot[0].filename
        : null,
      modelAngle45Shot: req?.files?.modelAngle45Shot
        ? req?.files?.modelAngle45Shot[0].filename
        : null,
      productDescription: product?.productDescription
        ? product.productDescription
        : null,
        category: product?.category ? product.category : null,
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
