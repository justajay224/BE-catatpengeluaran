'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('incomes', {
            income_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'user_id'
                },
                onDelete: 'CASCADE'
            },
            category_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'categories',
                    key: 'category_id'
                },
                onDelete: 'SET NULL'
            },
            amount: {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false
            },
            income_date: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            notes: {
                type: Sequelize.TEXT
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('incomes');
    }
};
