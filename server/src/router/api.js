const express = require('express');
const Router = new express.Router();
const ApiRequestController = require('../requestControllers/api')

Router.get('/titles', ApiRequestController.title)

module.exports = Router;