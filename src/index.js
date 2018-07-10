module.exports = function() {
  const _ = {};

  // utility function used for other functions
  _.identity = (value) => value;

  _.each = (collection, callback = _.identity) => {
    // preserve order in arrays
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        const value = collection[i];
        callback(value, i, collection);
      }
    } else {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
    }
  }

  return _;
}();
