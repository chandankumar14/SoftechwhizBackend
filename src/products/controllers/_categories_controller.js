const productCategoriesModel = require("../models/_product_categories_model");

exports.createProductCategory = async (req, res) => {
    try {
        const category = req.body;
        const categoryPayload = new productCategoriesModel({
            categoryName: category?.categoryName ? category.categoryName : null,
            categoryBanner1: category?.categoryBanner1 ? category.categoryBanner1 : null,
            categoryLayout: category?.categoryLayout ? category.categoryLayout : null,
            categoryId: category?.categoryId ? category.categoryId : null,
            isDeleted: category?.isDeleted ? category.isDeleted : false,
        });
        const response = await categoryPayload.save();
        if (response && response != undefined) {
            return res.status(200).send({
                code: 200,
                message: "your new  product category  is added successfully..",
                data: response,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ code: 500, message: error.message || "Server Error" });
    }
};

exports.getProductCategoryList = async (req, res) => {
    try {
        const response = await productCategoriesModel.find({});
        if (response && response != undefined) {
            return res.status(200).send({
                code: 200,
                message: "All product  Category list is fetch successfully..",
                data: response,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ code: 500, message: error.message || "Server Error" });
    }
}