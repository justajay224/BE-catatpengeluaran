const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./user');
const Category = require('./category');

const Expense = sequelize.define('Expense', {
    expense_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'category_id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    expense_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'expenses',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Associations
Expense.belongsTo(User, { foreignKey: 'user_id' });
Expense.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Expense;
