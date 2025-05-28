const mongoose = require("mongoose");

const Projects = require("./ProjectsModel");
const ClientManagement = require("./ClientManagementModel");

const ReceivablePurchaseSchema = new mongoose.Schema({
    projectId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        required: true,
    }],
    ClientId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientManagement',
        required: true
    }],
    Status: {
        type: String,
        required: true,
    },
    ReceivedDate: {
        type: Date,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    },
    image: [],
}, {
    timestamps: true,
});


module.exports = mongoose.model('ReceivablePurchase', ReceivablePurchaseSchema);

