const express = require('express');
const Router = new express.Router();

Router.get('/', (req, res) => {
  res.json('oi')
})

module.exports = Router;