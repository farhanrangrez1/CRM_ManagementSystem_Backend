const Inquiry = require('../../Model/Buyer/DashboardModel');

// Create a new inquiry
exports.createInquiry = async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();
        res.status(201).json({ message: "Inquiry created", inquiry });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get dashboard data for a buyer
exports.getBuyerDashboard = async (req, res) => {
    const { buyerId } = req.params;
    try {
        const inquiries = await Inquiry.find({ buyerId }).sort({ inquiryDate: -1 }).limit(5);
        const totalInquiries = await Inquiry.countDocuments({ buyerId });
        const completed = await Inquiry.countDocuments({ buyerId, status: 'Completed' });

        const response = {
            totalInquiries,
            completed,
            activeSellers: 12, // Static or can be fetched from separate Seller model
            messages: 47,      // Can be linked to messages collection
            recentInquiries: inquiries
        };

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
