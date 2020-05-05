const Joi = require('joi-strict');

const log = (key, data) => {
  // eslint-disable-next-line no-console
  console.log(`S3: ${JSON.stringify({ key, data })}`);
};

module.exports.logToS3 = (key, data) => {
  Joi.assert(key, Joi.string());
  Joi.assert(data, Joi.object());
  log(key, data);
};
