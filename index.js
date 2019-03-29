'use strict';
const express = require('express');
const ConfigurationModule = require('./config/ConfigurationModule');


const app = express();
app.use('/', require('./server/src/router/api'))

app.listen(ConfigurationModule.PORT, ConfigurationModule.HOST);
console.log(`App rodando em http://${ConfigurationModule.HOST}:${ConfigurationModule.PORT}`);