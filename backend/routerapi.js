const express = require('express');

const routerapi = express.Router()

// Projects
routerapi.use('/api/projects', require('./Router/Admin/ProjectsRouter'));
// Jobs
routerapi.use('/api/jobs', require('./Router/Admin/JobsRouter'));
// Client
routerapi.use('/api/client', require('./Router/Admin/ClientManagementRouter'));
// User
routerapi.use('/api/user', require('./Router/userRouter'));
// CostEstimates
routerapi.use('/api/costEstimates', require('./Router/Admin/CostEstimatesRouter'));
// TimeLogs
routerapi.use('/api/timeLogs', require('./Router/Admin/TimeLogsRouter'));
// ReceivablePurchase
routerapi.use('/api/receivablePurchase', require('./Router/Admin/ReceivablePurchaseRouter'));
// TimesheetWorklog
routerapi.use('/api/timesheetWorklog', require('./Router/Admin/TimesheetWorklogRouter'));
// InvoicingBilling
routerapi.use('/api/invoicingBilling', require('./Router/Admin/InvoicingBillingRouter'));

module.exports = routerapi