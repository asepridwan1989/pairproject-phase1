'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    dateBattle: DataTypes.DATE,
    betPoint: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Match.associate = function(models) {
    // associations can be defined here
    Match.belongsToMany(models.Robot,{through : models.RobotMatch})
  };
  return Match;
};
