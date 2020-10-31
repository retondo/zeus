'use strict';

const faker = require('faker')
const cpf = require('@fnando/cpf')
const authentication = require('../../../../authentication/')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = []
    let itens = 4
    const now = new Date()

    const knownRegister = {
      id: 'bc02d0b9-f177-4d4f-a0d1-114a3e8bff7c',
      account_id: '8f10d794-296b-46ef-b7cf-2603845478a4',
      name: 'Renan',
      cpf: '17117404035',
      birthdate: '2020-05-06',
      email: 'renan@email.com',
      phone: '16996054798',
      password: '$2b$10$YzS0bcG6wEeIjxIoMxgaJeran4qBsQDm8Fq1S84RH3gQZnl8GWzmS',
      admin: true,
      member: false,
      created_at: now,
      updated_at: now
    }
    data.push(knownRegister)

    while (itens--) {
      data.push({
        id: faker.random.uuid(),
        account_id: '8f10d794-296b-46ef-b7cf-2603845478a4',
        name: faker.name.firstName(),
        cpf: cpf.generate(false).toString(),
        birthdate: faker.date.past(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        password: authentication.encryptPassword(faker.internet.password()),
        admin: faker.random.boolean(),
        member: faker.random.boolean(),
        created_at: now,
        updated_at: now
      })
    }

    await queryInterface.bulkInsert('users', data, { underscored: true }, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { underscored: true });
  }
};
