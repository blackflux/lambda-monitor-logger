const util = require('util');

const callback = (match, idx, str) => {
  const prevChar = str[idx - 1];
  return prevChar === ',' || prevChar === ':' ? '' : ' ';
};

module.exports = (value, {
  stripLineBreaks = true,
  maxLength = 512
} = {}) => {
  const r = util.inspect(value, {
    compact: true,
    maxArrayLength: 14,
    depth: 16,
    stylize: (str, type) => {
      if (type === 'string' && str.length > maxLength) {
        return `${str.slice(0, maxLength + 1)}...`;
      }
      return str;
    }
  });
  return stripLineBreaks ? r.replace(/\s*\n\s*/g, callback) : r;
};
