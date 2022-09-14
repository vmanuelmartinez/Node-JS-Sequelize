'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      description: 'Fazer as malas',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     description: 'Organizar os meus documentos de viagem',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     description: 'Verificar distancia entre casa e aeroporto',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     description: 'Ir para o para aeroporto',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     description: 'Fazer o checklist',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
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
  }
};
