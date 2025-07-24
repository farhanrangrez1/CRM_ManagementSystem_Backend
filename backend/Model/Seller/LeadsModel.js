// models/Lead.js
const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    avatar: String,
    productInterest: String,
    inquiryDate: { type: Date, required: true },
    value: Number,
    source: String,
    status: {
        type: String,
        enum: [
            "New", "Contacted", "Qualified", "Proposal",
            "Negotiating", "ClosedWon", "ClosedLost"
        ],
        default: "New"
    }
}, { timestamps: true });

module.exports = mongoose.model("Lead", leadSchema);
