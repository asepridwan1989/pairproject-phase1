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
   return queryInterface.bulkInsert('Matches', [{
    name: 'Pro',
    location: 'hacktiv8',
    dateBattle: '2018/05/26',
    betPoint: 5000,
    status: 'done'
  },{
    name: 'Super Pro',
    location: 'hacktiv9',
    dateBattle: '2018/05/26',
    betPoint: 50000,
    status: 'done'
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Matches', [{
    name: 'Pro',
    location: 'hacktiv8',
    dateBattle: '2018/05/26',
    betPoint: 5000,
    status: 'done'
  },{
    name: 'Super Pro',
    location: 'hacktiv9',
    dateBattle: '2018/05/26',
    betPoint: 50000,
    status: 'done'
  }], {});
  }
};
