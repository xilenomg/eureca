'use strict';
module.exports = (sequelize, DataTypes) => {
  const TitleRating = sequelize.define('TitleRatings', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    titleId: DataTypes.STRING,
    averageRating: DataTypes.STRING,
    numVotes: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {});

  TitleRating.associate = function (models) {
    // associations can be defined here
  };
  return TitleRating;
};