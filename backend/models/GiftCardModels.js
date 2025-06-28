const mongoose = require("mongoose");

const GiftcardSchema = new mongoose.Schema({
    GiftCard: {
        type: String,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    issuedDate: {
        type: Date,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    Status: {
        type: Boolean,
        required: true,
    }

});

module.exports = mongoose.model("GiftCard", GiftcardSchema);