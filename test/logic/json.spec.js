const { expect } = require('chai');
const { describe } = require('node-tdd');
const json = require('../../src/logic/json');

describe('Testing json.', { record: console }, () => {
  it('Testing logging as json.', ({ recorder }) => {
    json.log({ key: 'value' });
    expect(recorder.get()).to.deep.equal([
      'JSON: {"key":"value"}'
    ]);
  });
});
