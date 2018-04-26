'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('RobotMatches', [{
    RobotId: 1,
    MatchId: 1,
    status: 'win'
  },{
    RobotId: 4,
    MatchId: 2,
    status: 'win'
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('RobotMatches', [{
    RobotId: 1,
    MatchId: 1,
    status: 'win'
  },{
    RobotId: 4,
    MatchId: 2,
    status: 'win'
  }], {});
  }
};
