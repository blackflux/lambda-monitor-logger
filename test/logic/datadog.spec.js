const { expect } = require('chai');
const { describe } = require('node-tdd');
const datadog = require('../../src/logic/datadog');

describe('Testing datadog.', { record: console, timestamp: 1583284374 }, () => {
  it('Testing logging as array.', ({ recorder }) => {
    datadog.logDistributionMetric('metric.name', [new Date() / 1]);
    expect(recorder.get()).to.deep.equal([
      'DATADOG: {"type":"distribution-metric","args":["metric.name",[1583284374000],{"tags":[]}]}'
    ]);
  });
  it('Testing logging as object.', ({ recorder }) => {
    datadog.logDistributionMetric('metric.name', { [new Date() / 1]: 10 });
    expect(recorder.get()).to.deep.equal([
      'DATADOG: {"type":"distribution-metric","args":["metric.name",{"1583284374000":10},{"tags":[]}]}'
    ]);
  });
});
