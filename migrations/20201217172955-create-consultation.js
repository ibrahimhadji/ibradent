'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('consultations', {
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
      userid:{
        type:Sequelize.INTEGER
        
      },
      type: {
        type: Sequelize.STRING
      },
      rdv: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.DOUBLE
      },
      vers: {
        type: Sequelize.DOUBLE
      },
      rest: {
        type: Sequelize.DOUBLE
      },
      obs: {
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
    await queryInterface.dropTable('consultations');
  }
};