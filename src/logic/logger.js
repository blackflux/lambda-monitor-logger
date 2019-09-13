const abbrev = require('./abbrev');

const logging = (type, msg) => {
  // eslint-disable-next-line no-console
  console.log(`${type.toUpperCase()}: ${typeof msg === 'string' ? msg : abbrev(msg)}`);
};

const levelMap = {
  debug: ['debug', 'trace'],
  info: ['info', 'log'],
  warning: ['warning', 'warn'],
  error: ['error', 'err'],
  critical: ['critical', 'fatal']
};

const levels = Object.keys(levelMap);

module.exports = Object.entries(levelMap).reduce(
  (prev, [level, names], idx) => Object.assign(prev, names.reduce(
    (p, name) => Object.assign(p, {
      [name]: (...msgs) => {
        if (levels.indexOf((process.env.LOG_LEVEL || 'debug').toLowerCase()) <= idx) {
          msgs.forEach((msg) => logging(level, msg));
        }
      }
    }),
    {}
  )),
  {}
);
