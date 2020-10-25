'use strict';

const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = []
    let itens = 15
    const now = new Date()

    while (itens--) {
      data.push({
        id: itens === 14 ? '1dc3fdc0-88ab-4290-b53f-c2889583f820' : faker.random.uuid(),
        account_id: '8f10d794-296b-46ef-b7cf-2603845478a4',
        name: faker.company.companyName(),
        active: faker.random.boolean(),
        date: faker.date.future(),
        created_at: now,
        updated_at: now
      })
    }

    await queryInterface.bulkInsert('events', data, { underscored: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, { underscored: true });
  }
};
