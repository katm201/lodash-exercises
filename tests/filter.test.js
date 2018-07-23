const _ = require('../src/index');

describe('filter', () => {
  it('uses the identity function when no callback is provided', () => {
    const array = [0, 1, 2, 3];

    const actual = _.filter(array);
    expect(actual).toEqual([1, 2, 3]);
  });

  it('returns an array when the collection is an array', () => {
    const array = [0, 1, 2, 3];

    const actual = _.filter(array);
    expect(Array.isArray(actual)).toEqual(true);
  });

  it('returns an array when the collection is an object', () => {
    const object = { a: 1, b: 2, c: 3 };

    const actual = _.filter(object);
    expect(Array.isArray(actual)).toEqual(true);
  });

  it('iterates through an array in a specific order', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const values = [];
    _.filter(array, (v, i) => {
      values.push(i);
      return true;
    });
    for (let i = 0; i < array.length; i += 1) {
      expect(values[i]).toEqual(array[i]);
    }
  });

  it('includes values from the array when the callback evaluates to true', () => {
    const array = [1, 2, 3];
    const callback = () => true;

    const actual = _.filter(array, callback);
    expect(actual).toEqual(array);
  });

  it('does not include values from the array when the callback evaluates to false', () => {
    const array = [1, 2, 3];
    const callback = () => false;

    const actual = _.filter(array, callback);
    expect(actual).toEqual([]);
  });

  it('performs the callback on each value in an array as the first parameter', () => {
    const array = [1, 2, 3];
    const callback = v => v !== 2;

    const actual = _.filter(array, callback);
    expect(actual).toEqual([1, 3]);
  });

  it('performs the callback on each index in an array as the second parameter', () => {
    const array = [1, 2, 1];
    const callback = (v, i) => i !== 1;

    const actual = _.filter(array, callback);
    expect(actual).toEqual([1, 1]);
  });

  it('performs the callback on the whole collection at each index in the array as the third parameter', () => {
    const array = [1, 2, 3];
    const callback = (v, i, c) => c.length - v > 0;

    const actual = _.filter(array, callback);
    expect(actual).toEqual([1, 2]);
  });

  it('performs the callback on each value in an object as the first parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = v => v > 1;

    const actual = _.filter(object, callback);
    expect(actual).toEqual([2, 3]);
  });

  it('performs the callback on each key in an object as the second parameter', () => {
    const object = { 5: 'a', 6: 'b', 7: 'c' };
    const callback = (v, k) => k > 5;

    const actual = _.filter(object, callback);
    expect(actual).toEqual(['b', 'c']);
  });

  it('performs the callback on the whole collection at each key/value pair in the object as the third parameter', () => {
    const object = { a: 'b', b: 2, c: 'a' };
    const callback = (v, k, c) => !!c[v];

    const actual = _.filter(object, callback);
    expect(actual).toEqual(['b', 'a']);
  });

  it('is implemented using reduce', () => {
    const array = [1, 2, 3];
    const callback = v => v !== 2;
    const spy = jest.spyOn(_, 'reduce');

    _.filter(array, callback);
    expect(spy).toHaveBeenCalled();
  });
});
