'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', "battlepoint",Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
