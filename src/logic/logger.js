const logging = (type, msg) => {
  // eslint-disable-next-line no-console
  console.log(`${type.toUpperCase()}: ${msg}`);
};

module.exports = Object.entries({
  debug: ['debug', 'trace'],
  info: ['info'],
  warning: ['warning', 'warn'],
  error: ['error', 'err'],
  critical: ['critical', 'fatal']
}).reduce(
  (prev, [level, names]) => Object.assign(prev, names.reduce(
    (p, name) => Object.assign(p, {
      [name]: (...msgs) => msgs.forEach((msg) => logging(level, msg))
    }),
    {}
  )),
  {}
);
