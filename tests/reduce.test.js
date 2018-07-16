const _ = require('../src/index');

describe('reduce', () => {
  it('uses the first item in the collection as the initial value if no initial value is passed', () => {
    const array = [1, 2];
    const callback = (a, v) => {
      const sum = a + v;
      return sum;
    };

    const actual = _.reduce(array, callback);
    expect(actual).toEqual(3);
  });

  it('returns the first item in the collection when no callback or initial value are provided', () => {
    const array = [3, 4, 5, 6];

    const actual = _.reduce(array);
    expect(actual).toEqual(3);
  });

  it('iterates through an array in a specific order', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const values = [];
    const value = _.reduce(array, (a, v, i) => {
      values.push(i);
      return a + v;
    }, 0);
    for (let i = 0; i < array.length; i++) {
      expect(values[i]).toEqual(array[i]);
    }
  });

  it('performs the callback on the accumulator as the first parameter', () => {
    const array = [1, 1, 1, 1, 1, 1, 1];
    const callback = (a) => a * 2;

    const value = _.reduce(array, callback, 2);
    expect(value).toEqual(256);
  });

  it('performs the callback on each value in an array as the second parameter', () => {
    const array = [1, 2, 3];
    const callback = (a, v) => a + v;

    const actual = _.reduce(array, callback, 0);
    expect(actual).toEqual(6);
  });

  it('performs the callback on each index in an array as the third parameter', () => {
    const array = [1, 1, 1];
    const callback = (a, v, i) => a + v + i;

    const actual = _.reduce(array, callback, 0);
    expect(actual).toEqual(6);
  });

  it('performs the callback on the whole collection at each index in the array as the fourth parameter', () => {
    const array = ['a', 'b', 'c'];
    const callback = (a, v, i, c) => a + c.join('');

    const actual = _.reduce(array, callback, '');
    expect(actual).toEqual('abcabcabc');
  });

  it('performs the callback on each value in an object as the second parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = (a, v) => a + v;

    const actual = _.reduce(object, callback, 0);
    expect(actual).toEqual(6);
  });

  it('performs the callback on each key in an object as the third parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = (a, v, k) => a + k;

    const actual = _.reduce(object, callback, '');
    expect(actual).toEqual('abc');
  });

  it('performs the callback on the whole collection at each key/value pair in the object as the fourth parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = (a, v, k, c) => {
      const accum = { ...a };
      accum[v] = c;
      return accum;
    };

    const actual = _.reduce(object, callback, {});
    expect(actual[1]).toEqual(object);
    expect(actual[2]).toEqual(object);
    expect(actual[3]).toEqual(object);
  });

  it('is implemented using each', () => {
    const object = { a: 1, b: 2, c: 3 };
    const spy = jest.spyOn(_, 'each');
    const callback = (a, v) => a + v;
    _.reduce(object, callback, 0);
    expect(spy).toHaveBeenCalled();
  });
});
