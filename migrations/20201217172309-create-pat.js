'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER

      },
      uuid: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,

        
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      sexe: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      maladiechr: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pats');
  }
};