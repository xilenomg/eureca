const express = require('express');
const Router = new express.Router();
const ApiRequestController = require('../requestControllers/api')

Router.get('/titles', ApiRequestController.titles)
Router.get('/titles/:id', ApiRequestController.titleById)

module.exports = Router;