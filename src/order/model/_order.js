const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productVariantSchema = new Schema(
    {
        product: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'
            },
        ],
        status: {
            type: String,
            enum: ['active', 'completed', 'canceled'],
            default: 'active',
        },
        paymentMode: {
            type: String,
            enum: ['UPI', 'NetBanking', 'Card', 'PayPal'],
            default: 'UPI',
        },
        paymentStatus: {
            type: String,
            enum: ['pending', 'completed', 'cancelled'],
            default: 'completed',
        },
        transId: {
            type: String,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        totalAmount: {
            type: String,
            default: '0.00',
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("variant", productVariantSchema)