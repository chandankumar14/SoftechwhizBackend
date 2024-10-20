const mongoose = require("mongoose");
exports.DataBaseConnection = async () => {
  const HOST = process.env.HOST_URL;
  mongoose
    .connect(HOST)
    .then((res) => {
      console.log("database is connected successfully");
    })
    .catch((err) => {
      console.log(`something going wrong please check connect url ${err}`);
    });
};
