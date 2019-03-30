'use strict';
const fileReader = require('../util/fileReader');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return new Promise((reject, resolve) => {
      fileReader('../../imdb/title.ratings.tsv', ['titleId', 'averageRating', 'numVotes'], 'TitleRatings', queryInterface).then(({
        queryInterfaceResult
      }) => {
        return resolve(queryInterfaceResult)
      }).catch((error) => {
        console.error(error);
        reject(error)
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TitleRatings', null, {});
  }
};