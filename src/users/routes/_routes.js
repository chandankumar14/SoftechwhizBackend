const usersController = require("../controllers/_users_controller");
module.exports = (app) => {
  app.post("/api/v1/signup", usersController.signup);
};
