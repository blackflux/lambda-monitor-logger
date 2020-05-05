const { expect } = require('chai');
const { describe } = require('node-tdd');
const { logToS3 } = require('../../src/logic/s3');

describe('Testing s3.', { record: console }, () => {
  it('Testing logging to s3 bucket.', ({ recorder }) => {
    logToS3('path/to/data', { data: 'data' });
    expect(recorder.get()).to.deep.equal([
      'S3: {"key":"path/to/data","data":{"data":"data"}}'
    ]);
  });
});
