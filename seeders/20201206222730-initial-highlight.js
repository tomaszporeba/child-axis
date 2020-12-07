'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Highlights", [
      {
        name: "Lorem",
        description: "Lorem",
        createdAt: new Date(),
        updatedAt: new Date(),
        eventId: 1
      },
      {
        name: "Ipsum",
        description: "Ipsum",
        createdAt: new Date(),
        updatedAt: new Date(),
        eventId:1
      },
      {
        name: "Dolores",
        description: "Dolores",
        createdAt: new Date(),
        updatedAt: new Date(),
        eventId:1
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
