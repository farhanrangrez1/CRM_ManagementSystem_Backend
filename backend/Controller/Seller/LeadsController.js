const Lead = require("../../Model/Seller/LeadsModel");

// GET all leads
exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

// POST create new lead
exports.createLead = async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        await newLead.save();
        res.status(201).json(newLead);
    } catch (error) {
        res.status(400).json({ msg: "Invalid Data", error });
    }
};

// GET single lead by ID
exports.getLeadById = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ msg: "Lead not found" });
        res.json(lead);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

// PUT update lead
exports.updateLead = async (req, res) => {
    try {
        const updated = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: "Lead not found" });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ msg: "Update failed", error });
    }
};

// DELETE lead
exports.deleteLead = async (req, res) => {
    try {
        const deleted = await Lead.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: "Lead not found" });
        res.json({ msg: "Lead deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};
