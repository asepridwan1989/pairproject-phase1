'use strict';

const { sequelize } = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Robots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Robots');
  }
};