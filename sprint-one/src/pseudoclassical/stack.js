var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var currentStack = this.storage;
  var maxKey = 1;
  if (this.size()) {
    maxKey = Math.max.apply(Math, Object.keys(currentStack)) + 1;
  }
  currentStack[maxKey] = value;
};

Stack.prototype.pop = function() {
  var currentStack = this.storage;
  var maxKey = Math.max.apply(Math, Object.keys(currentStack));
  var leaveStack = currentStack[maxKey];
  delete currentStack[maxKey];
  return leaveStack;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
