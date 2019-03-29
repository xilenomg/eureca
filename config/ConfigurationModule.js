const config = require('./config.json');

const ConfigurationModule = config[process.env.environment || 'development']

module.exports = ConfigurationModule