'use strict';
module.exports = (sequelize, DataTypes) => {
  var RobotMatch = sequelize.define('RobotMatch', {
    RobotId: DataTypes.INTEGER,
    MatchId: DataTypes.INTEGER
  }, {});
  RobotMatch.associate = function(models) {
    // associations can be defined here
    RobotMatch.belongsTo(models.Robot)
  };
  return RobotMatch;
};
