const orderController = require("../controller/_order_controller");
module.exports = (app) => {
    app.post("/api/v1/create_order", orderController.createProductOrder);
    app.get("/api/v1/active_order", orderController.activeOrderList);
    app.get("/api/v1/completed_order", orderController.completedOrderList);
    app.get("/api/v1/cancelled_order", orderController.cancelledOrderList);
};
