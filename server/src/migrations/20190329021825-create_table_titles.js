'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Titles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titleId: Sequelize.STRING,
      ordering: Sequelize.INTEGER,
      title: Sequelize.STRING,
      region: Sequelize.STRING,
      language: Sequelize.STRING,
      attributes: Sequelize.STRING,
      types: Sequelize.ENUM(['alternative', 'dvd', 'festival', 'tv', 'video', 'working', 'original', 'imdbDisplay']),
      isOriginalTitle: Sequelize.BOOLEAN,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deletedAt: {
        type: Sequelize.DATE
      }

    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Titles')
  }
};
