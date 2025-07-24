const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    no: Number,
    modelNo: String,
    code: String,
    material: String,
    quantity: Number,
    price: Number,
    total: Number,
    productImageUrl: String,
    dimensionImageUrl: String,
});

module.exports = mongoose.model('Product', productSchema);
