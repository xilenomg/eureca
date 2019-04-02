'use strict';
const express = require('express');
const ConfigurationModule = require('./server/src/config/ConfigurationModule');

const app = express();
// definindo /dist como pasta publica
app.use(express.static(`${__dirname}/dist`));

// rotas da api
app.use('/api', require('./server/src/router/api'));

// rotas ui pós-build
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});


app.listen(ConfigurationModule.server.PORT, ConfigurationModule.server.HOST, () => {
  console.log('App rodando em:');
  console.log(`http://${ConfigurationModule.server.HOST}:${ConfigurationModule.server.PORT}`);
});
