const userModel = require("../models/_users_model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
  try {
    const data = req.body;
    const { email, firstName, lastName } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
      throw new Error("Already user exits.")
    }
    if (!email) {
      throw new Error("Please provide email")
    }
    if (!firstName) {
      throw new Error("Please provide firstName")
    }
    if (!lastName) {
      throw new Error("Please provide lastName")
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(lastName, salt);

    if (!hashPassword) {
      throw new Error("Something is wrong")
    }

    const userModelObj = new userModel({
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
      password: hashPassword
    });
    const result = await userModelObj.save();

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


exports.userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email) {
      throw new Error("Please provide email")
    }
    if (!password) {
      throw new Error("Please provide password")
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      throw new Error("User not found")
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    console.log("checkPassoword", checkPassword)
    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      }
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
      const tokenOption = {
        httpOnly: true,
        secure: true
      }
      res.cookie("token", token, tokenOption).status(200).json({
        code: 200,
        data: token,
        message: "Login successfully",
      })
    } else {
      throw new Error("Please check Password")
    }
  } catch (err) {
    res.json({
      code: 500,
      message: err.message || err,
      success: false,
    })
  }
}

exports.userLogout = async (req, res) => {
  try {
    res.clearCookie("token")
    res.json({
      message: "Logged out successfully",
      error: false,
      success: true,
    })
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    })
  }
}



