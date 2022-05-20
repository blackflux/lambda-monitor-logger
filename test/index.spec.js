import { expect } from 'chai';
import * as index from '../src/index.js';

describe('Testing Library', () => {
  it('Testing index exports', () => {
    expect(Object.keys(index)).to.deep.equal([
      'abbrev',
      'datadog',
      'email',
      'json',
      'logger',
      's3'
    ]);
  });
});
