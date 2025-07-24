const Product = require("../../Model/Seller/ProductsModel");
const cloudinary = require("../../Config/cloudinary");
const streamifier = require("streamifier");

// ✅ Add Product
exports.addProduct = async (req, res) => {
    try {
        const {
            no,
            modelNo,
            code,
            material,
            quantity,
            price,
        } = req.body;

        // Defensive checks for file uploads
        if (!req.files || !req.files.productImage || !req.files.dimensionImage) {
            return res.status(400).json({ message: "Both productImage and dimensionImage files are required." });
        }
        const productImage = req.files.productImage[0];
        const dimensionImage = req.files.dimensionImage[0];

        if (!productImage || !dimensionImage) {
            return res.status(400).json({ message: "Both images must be attached and not empty." });
        }

        // Upload productImage
        const productImg = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "products" },
                (error, result) => (error ? reject(error) : resolve(result))
            );
            streamifier.createReadStream(productImage.buffer).pipe(uploadStream);
        });

        // Upload dimensionImage
        const dimensionImg = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "dimensions" },
                (error, result) => (error ? reject(error) : resolve(result))
            );
            streamifier.createReadStream(dimensionImage.buffer).pipe(uploadStream);
        });

        // Save to MongoDB
        const newProduct = new Product({
            no,
            modelNo,
            code,
            material,
            quantity,
            price,
            total: quantity * price,
            productImageUrl: productImg.secure_url,
            dimensionImageUrl: dimensionImg.secure_url,
        });

        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", newProduct });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// 📦 Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ _id: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 🔍 Get by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✏️ Update Product
exports.updateProduct = async (req, res) => {
    try {
        const data = req.body;
        data.total = data.price * data.quantity;
        const updated = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
        if (!updated) return res.status(404).json({ msg: "Product not found" });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ❌ Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: "Product not found" });
        res.json({ msg: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
