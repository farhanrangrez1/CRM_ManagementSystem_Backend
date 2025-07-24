const Transaction = require('../../Model/Admin/PaymentLogsModel');

// Create
exports.createTransaction = async (req, res) => {
    try {
        const txn = new Transaction(req.body);
        await txn.save();
        res.status(201).json(txn);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All
exports.getAllTransactions = async (req, res) => {
    try {
        const txns = await Transaction.find().sort({ createdAt: -1 });
        res.json(txns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get by ID
exports.getTransactionById = async (req, res) => {
    try {
        const txn = await Transaction.findById(req.params.id);
        if (!txn) return res.status(404).json({ message: 'Transaction not found' });
        res.json(txn);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update
exports.updateTransaction = async (req, res) => {
    try {
        const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete
exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Summary Dashboard
exports.getDashboardSummary = async (req, res) => {
    try {
        const [total, completed, pending, failed, totalRevenue, totalFees, totalRefunds] = await Promise.all([
            Transaction.countDocuments(),
            Transaction.countDocuments({ status: 'Completed' }),
            Transaction.countDocuments({ status: 'Pending' }),
            Transaction.countDocuments({ status: 'Failed' }),
            Transaction.aggregate([
                { $match: { status: 'Completed' } },
                { $group: { _id: null, total: { $sum: '$netAmount' } } }
            ]),
            Transaction.aggregate([
                { $group: { _id: null, total: { $sum: '$fee' } } }
            ]),
            Transaction.aggregate([
                { $match: { type: 'Refund' } },
                { $group: { _id: null, total: { $sum: '$amount' } } }
            ])
        ]);

        res.json({
            totalTransactions: total,
            completed,
            pending,
            failed,
            totalRevenue: totalRevenue[0]?.total || 0,
            totalRefunds: totalRefunds[0]?.total || 0,
            processingFees: totalFees[0]?.total || 0
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
