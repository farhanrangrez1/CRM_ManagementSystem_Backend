const express = require("express");
const router = express.Router();
const { getAnalyticsReport } = require("../../Controller/Admin/ReportsAnalyticsController");

router.get("/report", getAnalyticsReport);

module.exports = router;
