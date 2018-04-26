'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
   name: 'yasir',
   userName: 'yasir',
   password: '123',
   createdAt: new Date(),
   updatedAt: new Date()
 },{
   name: 'asep',
   userName: 'asep',
   password: '123',
   createdAt: new Date(),
   updatedAt: new Date()
 },{
   name: 'udin',
   userName: 'abraham',
   password: '123',
   createdAt: new Date(),
   updatedAt: new Date()
 }], {});
 },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
