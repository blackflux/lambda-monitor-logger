import Joi from 'joi-strict';

const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export default {
  notify: (obj) => {
    Joi.assert(obj, Joi.object().keys({
      from: Joi.string().pattern(emailFormat),
      to: Joi.string().pattern(emailFormat),
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
