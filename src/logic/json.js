const Joi = require('joi-strict');

module.exports = {
  log: (obj) => {
    Joi.assert(obj, Joi.object());
    // eslint-disable-next-line no-console
    console.log(`JSON: ${JSON.stringify(obj)}`);
  }
};
