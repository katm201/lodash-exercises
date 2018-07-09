const _ = require('../src/index');

describe('_.identity', () => {
  it('returns whatever argument is provided', () => {
    const array = [1, 2, 3];
    const object = { a: 1, b: 2, c: 3 };
    const value = 'value';
    expect(_.identity(array)).toEqual(array);
    expect(_.identity(object)).toEqual(object);
    expect(_.identity(value)).toEqual(value);
  })
})
