const Expense = require('../model/expense');
const Income = require('../model/income');
const Category = require('../model/category');

const createExpense = async (data) => {
    const expense = await Expense.create({
        user_id: data.user_id,
        category_id: data.category_id,
        amount: data.amount,
        expense_date: data.expense_date,
        notes: data.notes
    });
    return expense;
};

const createIncome = async (data) => {
    const income = await Income.create({
        user_id: data.user_id,
        category_id: data.category_id,
        amount: data.amount,
        income_date: data.income_date,
        notes: data.notes
    });
    return income;
};

const getExpensesByUser = async (user_id) => {
    const expenses = await Expense.findAll({
        where: { user_id },
        order: [['expense_date', 'DESC']]
    });
    return expenses;
};

const getIncomesByUser = async (user_id) => {
    const incomes = await Income.findAll({
        where: { user_id },
        order: [['income_date', 'DESC']]
    });
    return incomes;
};

const getIncomeCategories = async () => {
    const categories = await Category.findAll({
        where: { category_type: 'income' },
        order: [['category_name', 'ASC']]
    });
    return categories;
};

const getExpenseCategories = async () => {
    const categories = await Category.findAll({
        where: { category_type: 'expense' },
        order: [['category_name', 'ASC']]
    });
    return categories;
};

module.exports = {
    createExpense,
    createIncome,
    getExpensesByUser,
    getIncomesByUser,
    getIncomeCategories,
    getExpenseCategories
};
