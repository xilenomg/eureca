const models = require('../models/index');
const ConfigurationModule = require('../config/ConfigurationModule');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const TitleService = {
  getOriginalTitles: (page = 1, limit = ConfigurationModule.titles.MAX_PER_PAGE) => {
    const offset = page === 0 ? 0 : page * limit - limit;
    return models.Titles.findAll({
      where: {
        isOriginalTitle: 1
      },
      order: [[models.TitleRatings, 'averageRating', 'desc']],
      include: [{
        model: models.TitleRatings
      }],
      offset: offset,
      limit: limit
    }).then((result) => {
      return result;
    });
  },
  getTitle: async (id) => {
    let title;
    let titles;
    try {
      title = await models.Titles.findOne({
        where: {
          id: id
        },
        include: [{
          model: models.TitleRatings
        }]
      });
    } catch (err) {
      console.error(err);
      throw new Error('Title not found');
    }

    try {
      titles = await models.Titles.findAll({
        where: {
          titleId: title.titleId,
          id: {
            [Op.ne]: title.id
          }
        }
      });
    } catch (err) {}

    return {
      title,
      titles
    };
  }
}

module.exports = TitleService;