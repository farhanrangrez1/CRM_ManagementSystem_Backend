const Customer = require("../../Model/Seller/CustomersModel");

// ➕ Add Customer
exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json(customer);
    } catch (err) {
        res.status(400).json({ msg: "Invalid data", err });
    }
};

// 📄 Get All Customers
exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().sort({ createdAt: -1 });
        res.json(customers);
    } catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
};

// 🔍 Get Customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ msg: "Not found" });
        res.json(customer);
    } catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
};

// 🖊️ Update
exports.updateCustomer = async (req, res) => {
    try {
        const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: "Not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ msg: "Update failed", err });
    }
};

// ❌ Delete
exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customer.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: "Not found" });
        res.json({ msg: "Customer deleted" });
    } catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
};

// 📊 Summary
exports.getSummary = async (req, res) => {
    try {
        const totalCustomers = await Customer.countDocuments();
        const activeCustomers = await Customer.countDocuments({ status: "Active" });

        const newThisMonth = await Customer.countDocuments({
            createdAt: {
                $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
        });

        const revenue = await Customer.aggregate([
            { $group: { _id: null, totalRevenue: { $sum: "$totalSpent" } } },
        ]);

        res.json({
            totalCustomers,
            activeCustomers,
            newThisMonth,
            totalRevenue: revenue[0]?.totalRevenue || 0
        });

    } catch (err) {
        res.status(500).json({ msg: "Summary error", err });
    }
};
