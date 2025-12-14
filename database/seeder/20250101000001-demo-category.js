'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('categories', [
            {
                category_name: 'Gaji',
                category_type: 'income',
                description: 'Pemasukan bulanan',
                created_at: new Date()
            },
            {
                category_name: 'Bonus',
                category_type: 'income',
                description: 'Bonus/Rezeki',
                created_at: new Date()
            },
            {
                category_name: 'Pasif Income',
                category_type: 'income',
                description: 'Investasi atau bisnis lain',
                created_at: new Date()
            },
            {
                category_name: 'Makan',
                category_type: 'expense',
                description: 'Pengeluaran makan sehari-hari',
                created_at: new Date()
            },
            {
                category_name: 'Transportasi',
                category_type: 'expense',
                description: 'Bensin, Tol, Parkir',
                created_at: new Date()
            },
            {
                category_name: 'Hiburan',
                category_type: 'expense',
                description: 'Hiburan',
                created_at: new Date()
            },
            {
                category_name: 'Hadiah',
                category_type: 'expense',
                description: 'Untuk diri sendiri atau orang lain',
                created_at: new Date()
            },
            {
                category_name: 'Sewa',
                category_type: 'expense',
                description: 'Sewa Kost/Rumah',
                created_at: new Date()
            },
            {
                category_name: 'Kesehatan',
                category_type: 'expense',
                description: 'Kesehatan',
                created_at: new Date()
            },
            {
                category_name: 'Pendidikan',
                category_type: 'expense',
                description: 'Biaya Pendidikan',
                created_at: new Date()
            },
            {
                category_name: 'Pajak',
                category_type: 'expense',
                description: 'Pajak',
                created_at: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('categories', null, {});
    }
};
