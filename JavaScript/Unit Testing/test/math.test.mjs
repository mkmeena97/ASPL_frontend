// 📄 test/math.test.mjs
import { expect } from 'chai';
import { add, promiseAdd } from '../src/math.js';

describe('Math Module', function () {
  it('should add two numbers', function () {
    expect(add(2, 3)).to.equal(5);
  });

  it('should resolve promise result after 0.5s', async function () {
    const result = await promiseAdd(10, 5);
    expect(result).to.equal(15);
  });
});
