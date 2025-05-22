const express = require('express');

const routerapi = express.Router()

// Projects
routerapi.use('/api/projects', require('./Router/ProjectsRouter'));
// Jobs
routerapi.use('/api/jobs', require('./Router/JobsRouter'));
// Client
routerapi.use('/api/client', require('./Router/ClientManagementRouter'));
// User
routerapi.use('/api/user', require('./Router/userRouter'));
// CostEstimates
routerapi.use('/api/costEstimates', require('./Router/CostEstimatesRouter'));

module.exports = routerapi
