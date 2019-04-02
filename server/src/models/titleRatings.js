'use strict';
module.exports = (sequelize, DataTypes) => {
  const TitleRatings = sequelize.define('TitleRatings', {
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
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  });

  TitleRatings.associate = function (models) {
    TitleRatings.belongsTo(models.Titles, {
      foreignKey: 'titleId',
      targetKey: 'titleId'
    })
  };
  return TitleRatings;
};