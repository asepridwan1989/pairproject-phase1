'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Robots', [{
    name: 'unicorn',
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'zeta',
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Tryon',
    UserId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Z',
    createdAt: new Date(),
    UserId: 2,
    updatedAt: new Date()
  },{
    name: 'Gaia',
    UserId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Aegis',
    UserId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Trooper',
    UserId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Robots', [{
     name: 'unicorn',
     UserId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     name: 'zeta',
     UserId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     name: 'Tryon',
     UserId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     name: 'Z',
     createdAt: new Date(),
     UserId: 2,
     updatedAt: new Date()
   },{
     name: 'Gaia',
     UserId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     name: 'Aegis',
     UserId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     name: 'Trooper',
     UserId: 4,
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});
  }
};
