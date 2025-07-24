const asyncHandler = require("express-async-handler");
const User = require("../../Model/userModel");
const Domain = require("../../Model/Admin/Domain");
const Payment = require("../../Model/Admin/PaymentLogsModel");

const getAnalyticsReport = asyncHandler(async (req, res) => {
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  // ✅ Total Revenue
  const totalRevenueResult = await Payment.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);
  const totalRevenue = totalRevenueResult[0]?.total || 0;

  // ✅ Active Users (Last 30 Days)
  const activeUsers = await User.countDocuments({
    lastLogin: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
  });

  // ✅ Total Domain Sales in last 6 months
  const domainSales = await Domain.countDocuments({ isSold: true });

  // ✅ Monthly Revenue Trend (last 6 months)
  const revenueTrend = await Payment.aggregate([
    {
      $match: {
        createdAt: { $gte: sixMonthsAgo }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" }
        },
        revenue: { $sum: "$amount" }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 }
    }
  ]);

  // ✅ Top 5 Performing Domains by saleAmount
  const topDomains = await Domain.aggregate([
    {
      $match: { isSold: true }
    },
    {
      $group: {
        _id: "$name",
        totalSales: { $sum: "$saleAmount" },
        count: { $sum: 1 },
        industry: { $first: "$industry" }
      }
    },
    {
      $sort: { totalSales: -1 }
    },
    {
      $limit: 5
    }
  ]);

  res.status(200).json({
    totalRevenue,
    activeUsers,
    domainSales,
    revenueTrend,
    topDomains
  });
});

module.exports = {
  getAnalyticsReport
};
