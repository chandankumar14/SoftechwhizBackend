const userModel = require("../models/_users_model");

exports.signup = async (req, res) => {
  try {
    const data = req.boday;
    const userModelObject = new userModel({
      firstName: data?.firstName ? data.firstName : "firstName",
      lastName: data?.lastName ? data.lastName : "lastName",
      email: data?.email ? data.email : "email",
      contactNo: data?.contactNo ? data.contactNo : "contactNo",
      secondaryContact: data?.secondaryContact
        ? data.secondaryContact
        : "secondaryContact",
      countryName: data?.countryName ? data.countryName : "countryName",
      state: data?.state ? data.state : "state",
      zipCode: data?.zipCode ? data.zipCode : "zipCode",
      landMark: data?.landMark ? data.landMark : "landMark",
      address: data?.address ? data.address : "address",
    });
    const result = await userModelObject.save();
    if (result && result != undefined) {
      return res.status(200).send({
        code: 200,
        message: "your account is created successfully..",
        data: result,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};
