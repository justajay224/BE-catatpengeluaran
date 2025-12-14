const pencatatanService = require('../service/pencatatan.service');
const res = require('../../utility/resFormat');

const inputExpense = async (req, reply) => {
    try {
        const { user_id, category_id, amount, expense_date, notes } = req.body;

        // Validation
        if (!user_id || !amount || !expense_date) {
            return res.badRequest(reply, 'user_id, amount, and expense_date are required');
        }

        const expense = await pencatatanService.createExpense({
            user_id,
            category_id,
            amount,
            expense_date,
            notes
        });

        return res.created(reply, expense, 'Expense recorded successfully');
    } catch (err) {
        console.error('Input expense error:', err);
        return res.error(reply, 'Internal server error');
    }
};

const inputIncome = async (req, reply) => {
    try {
        const { user_id, category_id, amount, income_date, notes } = req.body;

        // Validation
        if (!user_id || !amount || !income_date) {
            return res.badRequest(reply, 'user_id, amount, and income_date are required');
        }

        const income = await pencatatanService.createIncome({
            user_id,
            category_id,
            amount,
            income_date,
            notes
        });

        return res.created(reply, income, 'Income recorded successfully');
    } catch (err) {
        console.error('Input income error:', err);
        return res.error(reply, 'Internal server error');
    }
};

const getExpenses = async (req, reply) => {
    try {
        const { user_id } = req.params;

        if (!user_id) {
            return res.badRequest(reply, 'user_id is required');
        }

        const expenses = await pencatatanService.getExpensesByUser(user_id);
        return res.success(reply, expenses, 'Expenses retrieved successfully');
    } catch (err) {
        console.error('Get expenses error:', err);
        return res.error(reply, 'Internal server error');
    }
};

const getIncomes = async (req, reply) => {
    try {
        const { user_id } = req.params;

        if (!user_id) {
            return res.badRequest(reply, 'user_id is required');
        }

        const incomes = await pencatatanService.getIncomesByUser(user_id);
        return res.success(reply, incomes, 'Incomes retrieved successfully');
    } catch (err) {
        console.error('Get incomes error:', err);
        return res.error(reply, 'Internal server error');
    }
};

const getCategoriesIncome = async (req, reply) => {
    try {
        const categories = await pencatatanService.getIncomeCategories();
        return res.success(reply, categories, 'Income categories retrieved successfully');
    } catch (err) {
        console.error('Get income categories error:', err);
        return res.error(reply, 'Internal server error');
    }
};

const getCategoriesExpense = async (req, reply) => {
    try {
        const categories = await pencatatanService.getExpenseCategories();
        return res.success(reply, categories, 'Expense categories retrieved successfully');
    } catch (err) {
        console.error('Get expense categories error:', err);
        return res.error(reply, 'Internal server error');
    }
};

module.exports = {
    inputExpense,
    inputIncome,
    getExpenses,
    getIncomes,
    getCategoriesIncome,
    getCategoriesExpense
};
