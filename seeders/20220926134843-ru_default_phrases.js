'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ru_phrases', [
            {
                phrase: 'Hello traveler',
                command: '/start',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
