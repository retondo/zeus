'use strict';

const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = []
    let itens = 2
    const now = new Date()

    while (itens--) {
      data.push({
        id: itens === 1 ? '8f10d794-296b-46ef-b7cf-2603845478a4' : faker.random.uuid(),
        name: faker.company.companyName(),
        created_at: now,
        updated_at: now
      })
    }

    await queryInterface.bulkInsert('accounts', data, { underscored: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('accounts', null, { underscored: true });
  }
};
