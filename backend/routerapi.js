const express = require('express');

const routerapi = express.Router()

// CRM 
//////////////
// User
routerapi.use('/api/user', require('./Router/userRouter'));
// Role
routerapi.use('/api/user', require('./Router/Admin/RoleRouter'));




//Plan
routerapi.use('/api/admin/plans', require('./Router/Admin/PlanRouter'));
//Coupons
routerapi.use('/api/coupons', require('./Router/Admin/CouponsRouter'));
//Domain
routerapi.use('/api/domain', require('./Router/Admin/DomainRouter'));
// PaymentLogs
routerapi.use('/api/paymentLogs', require('./Router/Admin/PaymentLogsRouter'));





//Seller

//Leads
routerapi.use('/api/leads', require('./Router/Seller/LeadsRoutes'));
//Customers
routerapi.use('/api/customers', require('./Router/Seller/CustomersRoutes'));
//Products
routerapi.use('/api/products', require('./Router/Seller/ProductsRoutes'));





//buyer

// Dashboard
routerapi.use('/api/inquiries', require('./Router/Buyer/DashboardRouter'));









// ////////////
routerapi.use('/api/projects', require('./Router/Admin/ProjectsRouter'));
// Jobs
routerapi.use('/api/jobs', require('./Router/Admin/JobsRouter'));
// Client
routerapi.use('/api/client', require('./Router/Admin/ClientManagementRouter'));

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
// AssignmentJob
routerapi.use('/api/AssignmentJob', require('./Router/Admin/AssignmentJobControllerRouter'));
// ReportsAnalyticsController
routerapi.use('/api/ReportsAnalytics', require('./Router/Admin/ReportsAnalyticsrRouter'));
// Remove Assign Job
routerapi.use('/api/Remove', require('./Router/Admin/removeAssignRouter'));
// PDFCreate
routerapi.use('/api/pdf', require('./Router/Admin/PDF_EstimatesRouter'));


module.exports = routerapi