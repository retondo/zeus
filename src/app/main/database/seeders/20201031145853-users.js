'use strict';

const faker = require('faker')
const cpf = require('@fnando/cpf')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = []
    let itens = 5
    const now = new Date()

    while (itens--) {
      data.push({
        id: itens === 4 ? 'bc02d0b9-f177-4d4f-a0d1-114a3e8bff7c' : faker.random.uuid(),
        account_id: '8f10d794-296b-46ef-b7cf-2603845478a4',
        name: faker.name.firstName(),
        cpf: cpf.generate(false).toString(),
        birthdate: faker.date.past(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        password: faker.internet.password(),
        admin: faker.random.boolean(),
        member: faker.random.boolean(),
        created_at: now,
        updated_at: now
      })
    }

    await queryInterface.bulkInsert('users', data, { underscored: true }, {  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { underscored: true });
  }
};
