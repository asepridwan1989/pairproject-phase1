'use strict';
module.exports = (sequelize, DataTypes) => {
  var RobotMatch = sequelize.define('RobotMatch', {
    RobotId: DataTypes.INTEGER,
    MatchId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  RobotMatch.associate = function(models) {
    // associations can be defined here
    RobotMatch.belongsTo(models.Match)
    RobotMatch.belongsTo(models.Robot)
  };
  return RobotMatch;
};
