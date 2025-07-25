const Plan = require("../../Model/Admin/Plans")

exports.createPlan = async (req, res) => {
    try {
        const { name, price, type, features, subscribers, revenue, status } = req.body;

        const newPlan = new Plan({
            name,
            price,
            type,
            features: features.split(',').map(f => f.trim()),
            subscribers,
            revenue,
            status
        });

        await newPlan.save();
        res.status(201).json({ message: "Plan created successfully", plan: newPlan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find().sort({ createdAt: -1 });
        res.json(plans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePlan = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, type, features, subscribers, revenue, status } = req.body;

        const updatedPlan = await Plan.findByIdAndUpdate(
            id,
            {
                name,
                price,
                type,
                features: features ? features.split(',').map(f => f.trim()) : [], // ✅ Safe fallback
                subscribers,
                revenue,
                status
            },
            { new: true }
        );

        res.json({ message: "Plan updated", plan: updatedPlan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePlan = async (req, res) => {
    try {
        const { id } = req.params;
        await Plan.findByIdAndDelete(id);
        res.json({ message: "Plan deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




exports.getDashboardSummary = async (req, res) => {
    try {
        const totalPlans = await Plan.countDocuments();
        const activePlans = await Plan.countDocuments({ status: "Active" });

        const totalSubscribers = await Plan.countDocuments();

        const revenueAgg = await Plan.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$revenue" } // ✅ Correct field
                }
            }
        ]);
        const totalRevenue = revenueAgg[0]?.total || 0;

        res.status(200).json({
            msg: 'Success',
            totalPlans,
            activePlans,
            totalSubscribers,
            totalRevenue
        });

    } catch (error) {
        console.error('Summary API Error:', error);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

