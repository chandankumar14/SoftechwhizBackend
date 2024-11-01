const { query } = require("express");
const blogModel = require("../model/blog");
exports.createBlog = async (req, res) => {
  try {
    const blogRequest = req.body;
    const blogPayload = new blogModel({
      title: blogRequest?.title ? blogRequest.title : null,
      subTitle: blogRequest?.subTitle ? blogRequest.subTitle : null,
      image: blogRequest?.image ? blogRequest.image : null,
      content: blogRequest?.content ? blogRequest.content : null,
    });
    const response = await blogPayload.save();
    if (response && response != undefined) {
      return res.status(200).send({
        code: 200,
        message: "new blog is created successfully..",
        data: response,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.BlogList = async (req, res) => {
  try {
    const response = await blogModel.find({ status: "active" });
    if (response && response != undefined) {
      return res.status(200).send({
        code: 200,
        message: "all Blog list..",
        data: response,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.DeleteBlog = async (req, res) => {
  try {
    const _id = query._id;
    const response = await blogModel.findByIdAndUpdate(
      { _id: _id },
      { status: "Inactive" }
    );
    if (response && response != undefined) {
      return res.status(200).send({
        code: 200,
        message: "Blog is deleted successfully",
        data: response,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};
