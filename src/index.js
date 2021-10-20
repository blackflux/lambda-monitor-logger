const logger = require('./logic/logger');
const abbrev = require('./logic/abbrev');
const email = require('./logic/email');
const json = require('./logic/json');
const datadog = require('./logic/datadog');
const s3 = require('./logic/s3');

module.exports.logger = logger;
module.exports.abbrev = abbrev;
module.exports.email = email;
module.exports.json = json;
module.exports.datadog = datadog;
module.exports.s3 = s3;
