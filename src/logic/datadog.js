const Joi = require('joi-strict');

const log = (payload) => {
  // eslint-disable-next-line no-console
  console.log(`DATADOG: ${JSON.stringify(payload)}`);
};

module.exports.logDistributionMetric = (metric, points, { tags = [] } = {}) => {
  Joi.assert(metric, Joi.string());
  Joi.assert(points, Joi.alternatives(
    Joi.array().items(Joi.number().integer().min(0)),
    Joi.object().pattern(Joi.number().integer().min(0), Joi.number().min(0))
  ));
  Joi.assert(tags, Joi.array().items(Joi.string()));
  log({ type: 'distribution-metric', args: [metric, points, { tags }] });
};
