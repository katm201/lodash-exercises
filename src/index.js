module.exports = (() => {
  const _ = {};

  // utility function used for other functions
  _.identity = value => value;

  _.each = (collection, callback = _.identity) => {
    const isObject = !Array.isArray(collection);
    const toIterate = isObject ? Object.keys(collection) : collection;

    for (let i = 0; i < toIterate.length; i += 1) {
      const key = isObject ? toIterate[i] : i;
      const value = collection[key];
      callback(value, key, collection);
    }
  };

  _.map = (collection, callback = _.identity) => {
    const array = [];
    _.each(collection, (v, i, c) => {
      array.push(callback(v, i, c));
    });
    return array;
  };

  _.reduce = (collection, callback = _.identity, initialValue) => {
    let accum = initialValue;
    _.each(collection, (v, i, c) => {
      if (accum === undefined) {
        accum = v;
      } else {
        accum = callback(accum, v, i, c);
      }
    });
    return accum;
  };

  _.filter = (collection, callback = _.identity) => {
    return collection;
  };

  return _;
})();
