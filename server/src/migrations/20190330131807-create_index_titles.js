'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('Titles', ['titleId']);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Titles', ['titleId']);
  }
};