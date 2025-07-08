// test/basic.test.mjs
import { expect, assert } from 'chai';

describe('🔍 Basic Assertions', () => {
  
  it('should check equality', () => {
    const sum = 2 + 3;
    expect(sum).to.equal(5);
  });

  it('should check object deep equality', () => {
    const obj1 = { name: 'Tez' };
    const obj2 = { name: 'Tez' };
    expect(obj1).to.deep.equal(obj2);
  });

  it('should check type of a variable', () => {
    const isCool = true;
    expect(isCool).to.be.a('boolean');
  });

  it('should check array includes value', () => {
    const fruits = ['apple', 'banana', 'mango'];
    expect(fruits).to.include('mango');
  });

  it('should throw an error', () => {
    function badFunc() {
      throw new Error('This is broken!');
    }
    expect(badFunc).to.throw('This is broken!');
  });

});
