import { expect } from 'chai';
import { describe } from 'node-tdd';
import s3 from '../../src/logic/s3.js';

describe('Testing s3.', { record: console }, () => {
  it('Testing logging to s3 bucket.', ({ recorder }) => {
    s3.logToS3('path/to/data', { data: 'data' });
    expect(recorder.get()).to.deep.equal([
      'S3: {"key":"path/to/data","data":{"data":"data"}}'
    ]);
  });
});
