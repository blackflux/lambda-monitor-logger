const util = require('util');

const callback = (match, idx, str) => {
  const prevChar = str[idx - 1];
  return prevChar === ',' || prevChar === ':' ? '' : ' ';
};

module.exports = (value, {
  stripLineBreaks = true,
  maxLength = 512,
  replace = []
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
  return replace
    .map(([k, v]) => [
      typeof k === 'string'
        ? new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
        : k,
      v
    ])
    .filter(([k, v]) => k instanceof RegExp && ['string', 'function'].includes(typeof v))
    .concat(stripLineBreaks ? [[/\s*\n\s*/g, callback]] : [])
    .reduce((p, [k, v]) => p.replace(k, v), r);
};
