'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('Titles', ['titleId', 'region'])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Titles', ['titleId', 'region'])
  }
};