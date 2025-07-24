const express = require('express');
const router = express.Router();
const transactionController = require('../../Controller/Admin/PaymentLogsController');

// 👇 summary route first
router.get('/summary', transactionController.getDashboardSummary);

router.post('/', transactionController.createTransaction);
router.get('/', transactionController.getAllTransactions);
router.get('/:id', transactionController.getTransactionById);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
