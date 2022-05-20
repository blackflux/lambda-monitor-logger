import { expect } from 'chai';
import { describe } from 'node-tdd';
import json from '../../src/logic/json.js';

describe('Testing json.', { record: console }, () => {
  it('Testing logging as json.', ({ recorder }) => {
    json.log({ key: 'value' });
    expect(recorder.get()).to.deep.equal([
      'JSON: {"key":"value"}'
    ]);
  });
});
