'use strict';
module.exports = (sequelize, DataTypes) => {
  var Commenter = sequelize.define('Commenter', {
    poster: DataTypes.STRING,
    MatchId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Commenter.associate = function(models) {
    // associations can be defined here
  };
  return Commenter;
};