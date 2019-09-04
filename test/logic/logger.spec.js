/* eslint-disable no-console */
const { expect } = require('chai');
const { describe } = require('node-tdd');
const logger = require('../../src/logic/logger');

describe('Testing logger.', { record: console }, () => {
  it('Testing logger types.', () => {
    expect(Object.keys(logger)).to.deep.equal([
      'debug',
      'trace',
      'info',
      'log',
      'warning',
      'warn',
      'error',
      'err',
      'critical',
      'fatal'
    ]);
  });

  it('Testing message alias.', ({ recorder }) => {
    logger.warn('message');
    expect(recorder.get()).to.deep.equal(['WARNING: message']);
  });

  it('Testing single message.', ({ recorder }) => {
    logger.info('message');
    expect(recorder.get()).to.deep.equal(['INFO: message']);
  });

  it('Testing multiple messages.', ({ recorder }) => {
    logger.info('message1', 'message2');
    expect(recorder.get()).to.deep.equal(['INFO: message1', 'INFO: message2']);
  });
});
