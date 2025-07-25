const User = require('../../Model/userModel');
const Subscription = require('../../Model/Admin/Plans');

exports.getDashboardSummary = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const activeSellers = await User.countDocuments({ role: 'seller' });
        const totalRevenue = await Subscription.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$revenue" } // ✅ Correct field
                }
            }
        ]);

        const totalRevenueValue = totalRevenue[0]?.total || 0;
        const activeSubscriptions = await Subscription.countDocuments({ status: 'Active' });

        res.json({
            totalUsers,
            activeSellers,
            totalRevenue: totalRevenueValue,
            activeSubscriptions,
        });
    } catch (err) {
        res.status(500).json({ message: 'Dashboard summary failed', error: err });
    }
};


