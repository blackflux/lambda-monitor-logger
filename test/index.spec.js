const expect = require('chai').expect;
const index = require('../src/index');

describe('Testing Library', () => {
  it('Testing index exports', () => {
    expect(Object.keys(index)).to.deep.equal([
      'logger',
      'abbrev',
      'email',
      'json',
      'datadog',
      's3'
    ]);
  });
});
