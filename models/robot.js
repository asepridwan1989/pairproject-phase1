'use strict';
module.exports = (sequelize, DataTypes) => {
  var Robot = sequelize.define('Robot', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Robot.associate = function(models) {
    // associations can be defined here
    Robot.belongsTo(models.User)
  };
  return Robot;
};