const util = require('util');

const maxStringLength = 512;

module.exports = (value, { stripLineBreaks = true } = {}) => {
  const r = util.inspect(value, {
    compact: true,
    maxArrayLength: 14,
    depth: 16,
    stylize: (str, type) => {
      if (type === 'string' && str.length > maxStringLength) {
        return `${str.slice(0, maxStringLength + 1)}...`;
      }
      return str;
    }
  });
  return stripLineBreaks ? r.replace(/\s*\n\s*/g, '') : r;
};
