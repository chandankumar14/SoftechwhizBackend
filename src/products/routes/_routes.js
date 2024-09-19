const productController = require("../controllers/_product_controller");
const { upload } = require("../../middleware/_files_upload");
module.exports = (app) => {
  app.post("/api/v1/create_product", upload.single("files"), productController.createProduct);
  app.get("/api/v1/product_list", productController.getProductList);
  app.get("/api/v1/product_details", productController.getProductDetails);
};
