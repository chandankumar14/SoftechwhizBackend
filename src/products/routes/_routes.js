const productController = require("../controllers/_product_controller");
module.exports = (app) => {
  app.post("/api/v1/create_product", productController.createProduct);
  app.get("/api/v1/product_list", productController.getProductList);
  app.get("/api/v1/product_details", productController.getProductDetails);
};
