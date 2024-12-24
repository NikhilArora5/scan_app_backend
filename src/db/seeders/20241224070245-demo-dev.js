'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Devs', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob.johnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Devs', null, {});
  }
};
