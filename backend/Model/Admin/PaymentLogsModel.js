const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionId: { type: String, required: true, unique: true },
    title: String,
    reference: String,
    customerName: String,
    customerEmail: String,
    amount: Number,
    fee: Number,
    netAmount: Number,
    currency: { type: String, default: 'USD' },
    paymentMethod: String,
    gateway: String,
    status: { type: String, enum: ['Completed', 'Pending', 'Failed'], default: 'Pending' },
    type: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
