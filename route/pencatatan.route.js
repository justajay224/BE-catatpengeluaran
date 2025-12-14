const express = require('express');
const router = express.Router();
const pencatatanController = require('../src/controller/pencatatan.controller');
// const { verifyToken } = require('../middleware/auth.middleware');

// Input expense
// router.post('/expense', verifyToken, pencatatanController.inputExpense);
router.post('/expense', pencatatanController.inputExpense);

// Input income
// router.post('/income', verifyToken, pencatatanController.inputIncome);
router.post('/income', pencatatanController.inputIncome);

// Get expenses by user
// router.get('/expense/:user_id', verifyToken, pencatatanController.getExpenses);
router.get('/expense/:user_id', pencatatanController.getExpenses);

// Get incomes by user
// router.get('/income/:user_id', verifyToken, pencatatanController.getIncomes);
router.get('/income/:user_id', pencatatanController.getIncomes);

// Get income categories
router.get('/categories/income', pencatatanController.getCategoriesIncome);

// Get expense categories
router.get('/categories/expense', pencatatanController.getCategoriesExpense);

module.exports = router;
