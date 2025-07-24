// models/Inquiry.js
const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
    inquiryTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    inquiryDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ["Pending", "Responded", "In Progress", "Completed"],
        default: "Pending"
    },
    description: String,
    contactEmail: String,
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", inquirySchema);
