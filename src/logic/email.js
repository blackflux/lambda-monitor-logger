const Joi = require('joi-strict');

module.exports = {
  notify: (obj) => {
    Joi.assert(obj, Joi.object().keys({
      from: Joi.string().email(),
      to: Joi.string().email(),
      subject: Joi.string(),
      body: Joi.string()
    }));
    // eslint-disable-next-line no-console
    console.log(`EMAIL: ${JSON.stringify({
      from: obj.from,
      to: obj.to,
      subject: obj.subject,
      body: obj.body
    })}`);
  }
};
