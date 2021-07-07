'use strict';
module.exports = (sequelize, DataTypes) => {
  var Robot = sequelize.define('Robot', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Robot.associate = function(models) {
    // associations can be defined here
    Robot.belongsTo(models.User)
    Robot.hasMany(models.RobotMatch)
    Robot.belongsToMany(models.Match,{through : models.RobotMatch})
  };
  return Robot;
};

