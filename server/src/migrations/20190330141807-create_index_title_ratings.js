'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('TitleRatings', ['titleId']);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('TitleRatings', ['titleId']);
  }
};