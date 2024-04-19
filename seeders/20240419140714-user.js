'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("users", [
      {
        email: "mochnabiel.superadmin@gmail.com",
        password: bcrypt.hashSync("7863", 10),
        name: "Mochammad Nabiel_superadmin",
        photo: null,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "mochnabiel.admin@gmail.com",
        password: bcrypt.hashSync("7863", 10),
        name: "Mochammad Nabiel_admin",
        photo: null,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "mochnabiel.user@gmail.com",
        password: bcrypt.hashSync("7863", 10),
        name: "Mochammad Nabiel_admin",
        photo: null,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  }
};
