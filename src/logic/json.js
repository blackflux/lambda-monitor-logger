import Joi from 'joi-strict';

export default {
  log: (obj) => {
    Joi.assert(obj, Joi.object());
    // eslint-disable-next-line no-console
    console.log(`JSON: ${JSON.stringify(obj)}`);
  }
};
