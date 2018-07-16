const _ = require('../src/index');

describe('map', () => {
  it('returns an array', () => {
    const array = [0, 1];
    const callback = v => v + 1;

    const actual = _.map(array, callback);
    expect(Array.isArray(actual)).toEqual(true);
  });

  it('returns itself when passed an array and no callback is provided', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];

    const actual = _.map(array);
    expect(actual).toEqual(array);
  });

  it('returns an array of only its values when passed an object and no callback is provided', () => {
    const array = { a: 'b', c: 'd' };

    const actual = _.map(array);
    expect(actual.indexOf('b')).toBeGreaterThan(-1);
    expect(actual.indexOf('d')).toBeGreaterThan(-1);
    expect(actual.indexOf('a')).toEqual(-1);
    expect(actual.indexOf('c')).toEqual(-1);
  });

  it('iterates through an array in a specific order', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];

    const values = _.map(array);
    for (let i = 0; i < array.length - 1; i += 1) {
      expect(values[i]).toBeLessThan(values[i + 1]);
    }
  });

  it('performs the callback on each item in an array as the first parameter', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const expected = [0, 2, 4, 6, 8, 10, 12];
    const callback = v => v * 2;

    const actual = _.map(array, callback);
    for (let i = 0; i < array.length; i += 1) {
      expect(actual[i]).toEqual(expected[i]);
    }
  });

  it('performs the callback on each index in an array as the second parameter', () => {
    const array = ['a', 'b', 'c'];
    const expected = [0, 1, 2];
    const callback = (v, i) => i;

    const actual = _.map(array, callback);
    expect(expected[0]).toEqual(actual[0]);
    expect(expected[1]).toEqual(actual[1]);
    expect(expected[2]).toEqual(actual[2]);
  });

  it('performs the callback on the whole collection at each index in the array as the third parameter', () => {
    const array = ['a', 'b', 'c'];
    const callback = (v, i, c) => c;

    const actual = _.map(array, callback);
    expect(actual[0]).toEqual(array);
    expect(actual[1]).toEqual(array);
    expect(actual[2]).toEqual(array);
  });

  it('performs the callback on each value in an object as the first parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = v => v;

    const actual = _.map(object, callback);
    expect(actual.indexOf(1)).toBeGreaterThan(-1);
    expect(actual.indexOf(2)).toBeGreaterThan(-1);
    expect(actual.indexOf(3)).toBeGreaterThan(-1);
    expect(actual.indexOf('a')).toEqual(-1);
    expect(actual.indexOf('b')).toEqual(-1);
    expect(actual.indexOf('c')).toEqual(-1);
  });

  it('performs the callback on each key in an object as the second parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = (v, k) => k;

    const actual = _.map(object, callback);
    expect(actual.indexOf(1)).toEqual(-1);
    expect(actual.indexOf(2)).toEqual(-1);
    expect(actual.indexOf(3)).toEqual(-1);
    expect(actual.indexOf('a')).toBeGreaterThan(-1);
    expect(actual.indexOf('b')).toBeGreaterThan(-1);
    expect(actual.indexOf('c')).toBeGreaterThan(-1);
  });

  it('performs the callback on the whole collection at each key/value pair in the object as the third parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = (v, i, c) => c;

    const actual = _.map(object, callback);
    expect(actual[0]).toEqual(object);
    expect(actual[1]).toEqual(object);
    expect(actual[2]).toEqual(object);
  });

  it('is implemented using each', () => {
    const object = { a: 1, b: 2, c: 3 };
    const spy = jest.spyOn(_, 'each');
    _.map(object);
    expect(spy).toHaveBeenCalled();
  });
});
