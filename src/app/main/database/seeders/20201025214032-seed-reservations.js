'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date()

    await queryInterface.bulkInsert('reservations', [{
      id: '1dc3fdc0-88ab-4290-b53f-c2889583f820',
      account_id: '8f10d794-296b-46ef-b7cf-2603845478a4',
      user_id: 'bc02d0b9-f177-4d4f-a0d1-114a3e8bff7c',
      event_id: '1dc3fdc0-88ab-4290-b53f-c2889583f820',
      created_at: now,
      updated_at: now
    }], { underscored: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reservations', null, { underscored: true });
  }
};
