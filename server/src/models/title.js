'use strict';
module.exports = (sequelize, DataTypes) => {
  const Title = sequelize.define('Titles', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    titleId: DataTypes.STRING,
    ordering: DataTypes.INTEGER,
    title: DataTypes.STRING,
    region: DataTypes.STRING,
    language: DataTypes.STRING,
    attributes: DataTypes.STRING,
    types: DataTypes.ENUM(['alternative', 'dvd', 'festival', 'tv', 'video', 'working', 'original', 'imdbDisplay']),
    isOriginalTitle: DataTypes.BOOLEAN
  }, {});

  Title.associate = function (models) {
    // associations can be defined here
  };
  return Title;
};