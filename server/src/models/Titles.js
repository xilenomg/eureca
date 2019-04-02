'use strict';
module.exports = (sequelize, DataTypes) => {
  const Titles = sequelize.define('Titles', {
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
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  });

  Titles.associate = function (models) {
    Titles.hasOne(models.TitleRatings, {
      as: 'rating',
      sourceKey: 'titleId',
      foreignKey: 'titleId',
    })
  };
  return Titles;
};