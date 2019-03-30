'use strict';
const express = require('express');
const ConfigurationModule = require('./server/src/config/ConfigurationModule');

const app = express();
app.use('/', require('./server/src/router/api'))

app.listen(ConfigurationModule.server.PORT, ConfigurationModule.server.HOST);
console.log(`App rodando em http://${ConfigurationModule.server.HOST}:${ConfigurationModule.server.PORT}`);
