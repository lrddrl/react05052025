Array.prototype.myMap = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    result.push(callback.call(thisArg, this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]


Array.prototype.myFilter = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    if (callback.call(thisArg, this[i], i, this)) result.push(this[i]);
  }
  return result;
};


console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0)); // [2, 4]


Array.prototype.myForEach = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    callback.call(thisArg, this[i], i, this);
  }
};

[1, 2, 3].myForEach(x => console.log(x)); // 1 2 3





