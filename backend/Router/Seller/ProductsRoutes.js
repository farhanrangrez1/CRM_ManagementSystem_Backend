const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');
const productController = require('../../Controller/Seller/ProductsController');

router.post(
    '/',
    upload.fields([
        { name: 'productImage', maxCount: 1 },
        { name: 'dimensionImage', maxCount: 1 },
    ]),
    productController.addProduct
);

module.exports = router;
