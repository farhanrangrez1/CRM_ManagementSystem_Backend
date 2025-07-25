const express = require('express');
const router = express.Router();
const {
    createPlan,
    getAllPlans,
    updatePlan,
    deletePlan,
    getDashboardSummary
} = require('../../Controller/Admin/PlanController');

router.post('/', createPlan);
router.get('/', getAllPlans);
router.put('/:id', updatePlan);
router.delete('/:id', deletePlan);
router.get('/summary', getDashboardSummary);

module.exports = router;
