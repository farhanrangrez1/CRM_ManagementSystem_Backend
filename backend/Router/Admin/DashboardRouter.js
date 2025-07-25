// route/dashboardRoutes.js
const express = require('express');
const { getDashboardSummary } = require('../../Controller/Admin/DashboardController');
const router = express.Router();

router.get('/summary', getDashboardSummary); // e.g., /api/dashboard/summary

module.exports = router;
