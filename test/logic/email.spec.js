const { expect } = require('chai');
const { describe } = require('node-tdd');
const email = require('../../src/logic/email');

describe('Testing email.', { record: console }, () => {
  it('Testing logging as email.', ({ recorder }) => {
    email.notify({
      from: 'source@test.com',
      to: 'target@test.com',
      subject: 'subject text',
      body: 'body text'
    });
    expect(recorder.get()).to.deep.equal([
      'EMAIL: {"from":"source@test.com","to":"target@test.com","subject":"subject text","body":"body text"}'
    ]);
  });
});
