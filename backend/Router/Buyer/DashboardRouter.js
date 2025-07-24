const express = require('express');
const router = express.Router();
const inquiryController = require('../../Controller/Buyer/DashboardController');

// Create Inquiry
router.post('/', inquiryController.createInquiry);

// Get Dashboard Stats + Recent Inquiries
router.get('/dashboard/:buyerId', inquiryController.getBuyerDashboard);

module.exports = router;
