'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    battlepoint: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Robot)
  };

  User.beforeSave((user, options) => {
    // console.log('user=======>', user)
    // console.log('opton====>', options)

    var bcrypt = require('bcrypt');
    const saltRounds = 10;
    const myPlaintextPassword = user.password;
    // const someOtherPlaintextPassword = 'not_bacon';

    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);
 
    user.password = hash

  });


  return User;
};
