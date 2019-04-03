const ConfigurationModule = require('../config/ConfigurationModule');
const TitleController = require('../controllers/TitleController')
const ApiRequestController = {
  titles: (req, res) => {
    const page = req.query.page && req.query.page !== 0 ? req.query.page : 1;
    const qtyLimit = ConfigurationModule.titles.MAX_PER_PAGE;

    TitleController.titles(page, qtyLimit).then((titles) => {
      res.json({
        error: null,
        page,
        data: titles
      });
    }).catch((err) => {
      res.status(500).json({
        error: err.message,
        data: null
      });
    });
  },

  // usando async/await
  titleById: async (req, res) => {
    const id = req.params.id;
    try {
      const title = await TitleController.titleById(id);
      res.json({
        error: null,
        data: title
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
        data: null
      });
    }
  }
}

module.exports = ApiRequestController;