const productController = require("../controllers/_product_controller");
const categoryController = require("../controllers/_categories_controller")
const { upload } = require("../../middleware/_files_upload");
module.exports = (app) => {
  app.post("/api/v1/create_product", upload, productController.createProduct);
  app.get("/api/v1/product_list", productController.getProductList);
  app.get("/api/v1/product_details", productController.getProductDetails);
  app.post("/api/v1/create_category", categoryController.createProductCategory);
  app.get("/api/v1/category_list", categoryController.getProductCategoryList);
};
