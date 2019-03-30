'use strict';
const fileReader = require('../util/fileReader');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return new Promise((reject, resolve) => {
      fileReader('../../imdb/title.akas.tsv', ['titleId', 'ordering', 'title', 'region', 'language', 'types', 'attributes', 'isOriginalTitle'], 'Titles', queryInterface).then(({
        queryInterfaceResult
      }) => {
        resolve(queryInterfaceResult);
      }).catch((error) => {
        console.error(error);
        reject(error)
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Titles', null, {});
  }
};