const productOrderModel = require("../model/_order");
exports.createProductOrder = async (req, res) => {
    try {
        const orderRequrest = req.body;
        const orderPayload = new productOrderModel({
            product: orderRequrest?.product ? orderRequrest.product : null,
            status: orderRequrest?.status ? orderRequrest.status : "active",
            paymentMode: orderRequrest?.paymentMode ? orderRequrest.paymentMode : "UPI",
            paymentStatus: orderRequrest?.paymentStatus ? orderRequrest.paymentStatus : "Pending",
            transId: orderRequrest?.transId ? orderRequrest.transId : null,
            userId: orderRequrest?.userId ? orderRequrest.userId : null,
            totalAmount: orderRequrest?.totalAmount ? orderRequrest.totalAmount : "0.00"
        });
        const response = await orderPayload.save();
        if (response && response != undefined) {
            return res.status(200).send({
                code: 200,
                message: "your order is placed successfully..",
                data: response,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ code: 500, message: error.message || "Server Error" });
    }
};

exports.activeOrder = async (req, res) => {
    try {
        const response = await productOrderModel.find({ status: "active" })
        if (response && response != undefined) {
            return res.status(200).send({
                code: 200,
                message: "All active order list..",
                data: response,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ code: 500, message: error.message || "Server Error" });
    }
}

exports.cancelledOrder = async (req, res) => {
    try {
        const response = await productOrderModel.find({ status: "canceled" })
        if (response && response != undefined) {
            return res.status(200).send({
                code: 200,
                message: "All canceled order list..",
                data: response,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ code: 500, message: error.message || "Server Error" });
    }
}

exports.completedOrder = async (req, res) => {
    try {
        const response = await productOrderModel.find({ status: "completed" })
        if (response && response != undefined) {
            return res.status(200).send({
                code: 200,
                message: "All completed order list..",
                data: response,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ code: 500, message: error.message || "Server Error" });
    }
}


