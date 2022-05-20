import { expect } from 'chai';
import { describe } from 'node-tdd';
import logger from '../../src/logic/logger.js';

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

  it('Testing message object.', ({ recorder }) => {
    logger.info({ msg: 'message' });
    expect(recorder.get()).to.deep.equal(["INFO: { msg: 'message' }"]);
  });

  it('Testing LOG_LEVEL.', ({ recorder }) => {
    logger.debug('message');
    logger.info('message');
    expect(recorder.get()).to.deep.equal(['DEBUG: message', 'INFO: message']);
    recorder.reset();
    process.env.LOG_LEVEL = 'INFO';
    logger.debug('message');
    logger.info('message');
    expect(recorder.get()).to.deep.equal(['INFO: message']);
    delete process.env.LOG_LEVEL;
  });
});
