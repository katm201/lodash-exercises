const _ = require('../src/index');

describe('each', () => {
  it('iterates through an array in a specific order', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const values = [];
    const callback = (v) => values.push(v);

    _.each(array, callback);
    for (let i = 0; i < array.length - 1; i++) {
      expect(values[i]).toBeLessThan(values[i + 1]);
    }
  });

  it('performs the callback on each item in an array as the first parameter', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const values = [];
    const expected = [0, 2, 4, 6, 8, 10, 12];
    const callback = (v) => values.push(v * 2);

    _.each(array, callback);
    for (let i = 0; i < array.length; i++) {
      expect(values[i]).toEqual(expected[i]);
    }
  });

  it('performs the callback on each index in an array as the second parameter', () => {
    const array = ['a', 'b', 'c'];
    const object = {};
    const expected = { a: 0, b: 1, c: 2 };
    const callback = (v, i) => {
      object[v] = i;
    };

    _.each(array, callback);
    expect(expected.a).toEqual(object.a);
    expect(expected.b).toEqual(object.b);
    expect(expected.c).toEqual(object.c);
  })

  it('performs the callback on the whole collection at each indexin the array as the third parameter', () => {
    const array = ['a', 'b', 'c'];
    const object = {};
    const callback = (v, i, c) => {
      object[v] = c;
    };

    _.each(array, callback);
    expect(object.a).toEqual(array);
    expect(object.b).toEqual(array);
    expect(object.c).toEqual(array);
  });

  it('performs the callback on each value in an object as the first parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const values = [];
    const callback = (v) => values.push(v);

    _.each(object, callback);
    expect(values.indexOf(1)).toBeGreaterThan(-1);
    expect(values.indexOf(2)).toBeGreaterThan(-1);
    expect(values.indexOf(3)).toBeGreaterThan(-1);
  });

  it('performs the callback on each key in an object as the second parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const array = [];
    const callback = (v, k) => array.push(k);

    _.each(object, callback);
    expect(array.indexOf('a')).toBeGreaterThan(-1);
    expect(array.indexOf('b')).toBeGreaterThan(-1);
    expect(array.indexOf('c')).toBeGreaterThan(-1);
  });

  it('performs the callback on the whole collection at each indexin the array as the third parameter', () => {
    const object = { a: 1, b: 2, c: 3 };
    const array = [];
    const callback = (v, k, c) => array.push(c);

    _.each(object, callback);
    expect(array[0]).toEqual(object);
    expect(array[1]).toEqual(object);
    expect(array[2]).toEqual(object);
  })
});
