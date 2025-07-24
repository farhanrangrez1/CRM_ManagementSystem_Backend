// models/Customer.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    company: String,
    status: { type: String, enum: ["Active", "Inactive", "Pending"], default: "Pending" },
    orders: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    lastOrderDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
