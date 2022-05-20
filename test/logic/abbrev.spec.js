import { expect } from 'chai';
import abbrev from '../../src/logic/abbrev.js';

// eslint-disable-next-line prefer-spread
const createAscArray = (count, asString = false) => Array
  .apply(null, { length: count }).map((_, idx) => (asString ? String(idx) : idx));

describe('Testing abbrev', () => {
  it('Testing custom replace', () => {
    const input = 'abcabc';
    expect(abbrev(input, { replace: [['a', 'X']] })).to.equal("'XbcXbc'");
  });

  it('Testing line stripping', () => {
    const input = new Error();
    expect(abbrev(input, { stripLineBreaks: true })).to.not.contain('\n');
    expect(abbrev(input, { stripLineBreaks: false })).to.contain('\n');
  });

  it('Testing truncating int array', () => {
    expect(abbrev({
      one: createAscArray(1000)
    })).to.be.oneOf([
      '{ one: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ... 986 more items ] }',
      '{ one:[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ... 986 more items ] }'
    ]);
  });

  it('Testing truncating array of int array', () => {
    expect(abbrev({
      one: createAscArray(1000).map((e) => [e])
    })).to.be.oneOf([
      '{ one: [ [ 0 ],[ 1 ],[ 2 ],[ 3 ],[ 4 ],[ 5 ],[ 6 ],[ 7 ],[ 8 ],'
      + '[ 9 ],[ 10 ],[ 11 ],[ 12 ],[ 13 ],... 986 more items ] }',
      '{ one:[ [ 0 ],[ 1 ],[ 2 ],[ 3 ],[ 4 ],[ 5 ],[ 6 ],[ 7 ],[ 8 ],'
      + '[ 9 ],[ 10 ],[ 11 ],[ 12 ],[ 13 ],... 986 more items ] }'
    ]);
  });

  it('Testing truncating double nested int array', () => {
    expect(abbrev({
      one: createAscArray(1000).map((e) => {
        if (e === 1) {
          return createAscArray(1000);
        }
        return e;
      })
    })).to.be.oneOf([
      '{ one: [ 0,[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ... 986 more items ]'
      + ',2,3,4,5,6,7,8,9,10,11,12,13,... 986 more items ] }',
      '{ one:[ 0,[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ... 986 more items ]'
      + ',2,3,4,5,6,7,8,9,10,11,12,13,... 986 more items ] }'
    ]);
  });

  it('Testing truncating string array', () => {
    expect(abbrev({
      one: createAscArray(1000, true)
    })).to.be.oneOf([
      "{ one:[ '0','1','2','3','4','5','6','7','8','9','10','11','12','13',... 986 more items ] }",
      "{ one:[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', ... 986 more items ] }"
    ]);
  });

  it('Testing truncating array of string array', () => {
    expect(abbrev({
      one: createAscArray(1000, true).map((e) => [e])
    })).to.be.oneOf([
      "{ one:[ [ '0' ],[ '1' ],[ '2' ],[ '3' ],[ '4' ],[ '5' ],[ '6' ],[ '7' ],"
      + "[ '8' ],[ '9' ],[ '10' ],[ '11' ],[ '12' ],[ '13' ],... 986 more items ] }"
    ]);
  });

  it('Testing truncating double nested string array', () => {
    expect(abbrev({
      one: createAscArray(1000, true).map((e) => {
        if (e === '1') {
          return createAscArray(1000, true);
        }
        return e;
      })
    })).to.be.oneOf([
      "{ one:[ '0',[ '0','1','2','3','4','5','6','7','8','9','10','11','12','13',... 986 more items ]"
      + ",'2','3','4','5','6','7','8','9','10','11','12','13',... 986 more items ] }",
      "{ one:[ '0',[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', ... 986 more items ]"
      + ",'2','3','4','5','6','7','8','9','10','11','12','13',... 986 more items ] }"
    ]);
  });

  it('Testing truncating long string', () => {
    expect(abbrev({
      one: 'a'.repeat(1000)
    })).to.be.oneOf([
      `{ one: '${'a'.repeat(512)}... }`,
      `{ one:'${'a'.repeat(512)}... }`
    ]);
  });
});
