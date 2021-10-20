const Joi = require('joi-strict');

module.exports = {
  notify: (obj) => {
    Joi.assert(obj, Joi.object().keys({
      from: Joi.string().email(),
      to: Joi.string().email(),
      title: Joi.string(),
      body: Joi.string()
    }));
    // eslint-disable-next-line no-console
    console.log(`EMAIL: ${JSON.stringify({
      from: obj.from,
      to: obj.to,
      title: obj.title,
      body: obj.body
    })}`);
  }
};
