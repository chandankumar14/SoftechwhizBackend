const usersController = require("../controllers/_users_controller");
module.exports = (app) => {
  app.post("/api/v1/signup", usersController.signup);
  app.post("/api/v1/signin", usersController.userSignInController);
  app.get("/api/v1/logout", usersController.userLogout);
  app.post("/api/v1/adminsignin", usersController.adminSignInController);
  app.post("/api/v1/adminsignup", usersController.adminSignup);
};
