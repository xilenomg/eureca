const ConfigurationModule = require('../config/ConfigurationModule');
const TitleService = require('../services/TitleService')

const TitleController = {
  titles: (page = 0, qtyLimit = ConfigurationModule.MAX_PER_PAGE) => {
    return new Promise((resolve, reject) => {
      TitleService.getOriginalTitles(page, qtyLimit).then((titles) => {
        resolve(titles);
      }).catch((err) => {
        console.log('ERR: ', err);
        reject(err);
      });
    });
  },
  titleById: async (id) => {
    try {
      const titles = await TitleService.getTitle(id);
      return titles;
    } catch(err) {
      throw err;
    }
  }
}

module.exports = TitleController;