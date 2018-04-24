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
   return queryInterface.bulkInsert('Robots', [{
    name: 'unicorn',
    UserId: 1
  },{
    name: 'zeta',
    UserId: 1
  },{
    name: 'Tryon',
    UserId: 2
  },{
    name: 'Z',
    UserId: 2
  },{
    name: 'Gaia',
    UserId: 2
  },{
    name: 'Aegis',
    UserId: 3
  },{
    name: 'Trooper',
    UserId: 4
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Robots', [{
    name: 'unicorn',
    UserId: 1
  },{
    name: 'zeta',
    UserId: 1
  },{
    name: 'Tryon',
    UserId: 2
  },{
    name: 'Z',
    UserId: 2
  },{
    name: 'Gaia',
    UserId: 2
  },{
    name: 'Aegis',
    UserId: 3
  },{
    name: 'Trooper',
    UserId: 4
  }], {});
  }
};
