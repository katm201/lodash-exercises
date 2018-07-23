const _ = require('../src/index');

describe('every', () => {
  it('uses the identity function when no callback is provided', () => {
    const array = [0, 1, 2, 3];

    const actual = _.every(array);
    expect(actual).toEqual(false);
  });

  it('returns a boolean', () => {
    const array = [0, 1, 2, 3];

    const actual = _.every(array);
    expect(typeof actual).toEqual('boolean');
  });

  it('iterates through an array in a specific order', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const values = [];
    _.every(array, (v, i) => {
      values.push(i);
      return true;
    });
    for (let i = 0; i < array.length; i += 1) {
      expect(values[i]).toEqual(array[i]);
    }
  });

  it('returns true if the callback evaluates to true for every element in the collection', () => {
    const array = [1, 2, 3];
    const callback = () => true;

    const actual = _.every(array, callback);
    expect(actual).toEqual(true);
  });

  it('returns false if the callback does not evaluate to true for every element in the collection', () => {
    const array = [0, 1, 2, 3];
    const callback = v => v;

    const actual = _.every(array, callback);
    expect(actual).toEqual(false);
  });

  it('performs the callback on each value in an array as the first parameter', () => {
    const array = [1, 2, 3];
    const callback = v => v !== 2;

    const actual = _.every(array, callback);
    expect(actual).toEqual(false);
  });

  it('performs the callback on each index in an array as the second parameter', () => {
    const array = [1, 2, 1];
    const callback = (v, i) => i < 3;

    const actual = _.every(array, callback);
    expect(actual).toEqual(true);
  });

  it('performs the callback on the whole collection at each index in the array as the third parameter', () => {
    const array = [0, 1, 2];
    const callback = (v, i, c) => c.length - v > 0;

    const actual = _.every(array, callback);
    expect(actual).toEqual(true);
  });

  it('performs the callback on each value in an object as the first parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const callback = v => v > 1;

    const actual = _.every(object, callback);
    expect(actual).toEqual(false);
  });

  it('performs the callback on each key in an object as the second parameter', () => {
    const object = { 5: 'a', 6: 'b', 7: 'c' };
    const callback = (v, k) => k > 4;

    const actual = _.every(object, callback);
    expect(actual).toEqual(true);
  });

  it('performs the callback on the whole collection at each key/value pair in the object as the third parameter', () => {
    const object = { a: 'b', b: 2, c: 'a' };
    const callback = (v, k, c) => !!c[v];

    const actual = _.every(object, callback);
    expect(actual).toEqual(false);
  });

  it('is implemented using reduce', () => {
    const array = [1, 2, 3];
    const callback = v => v !== 2;
    const spy = jest.spyOn(_, 'reduce');

    _.every(array, callback);
    expect(spy).toHaveBeenCalled();
  });
});
