var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // define instance object variable
  var someInstance = {};
  // add storage object to instance
  someInstance.storage = {};
  // add push to instance
  someInstance.push = stackMethods.push;
  // add pop to instance
  someInstance.pop = stackMethods.pop;
  // add size to insstance
  someInstance.size = stackMethods.size;
  // return instance
  return someInstance;
};

var stackMethods = {};
// define push
stackMethods.push = function(value) {
  // define max key variable equal to 1
  currentStack = this.storage;
  var maxKey = 1;
  // if storage is not empty
  if (Object.keys(currentStack).length) {
    // adjust max key
    maxKey = Math.max.apply(Math, Object.keys(currentStack)) + 1;
  }
  // add value to storage at maxkey
  currentStack[maxKey] = value;
};
// define pop
stackMethods.pop = function() {
  // define max key variable
  currentStack = this.storage;
  var maxKey = Math.max.apply(Math, Object.keys(currentStack));
  // capture value at max key
  var leaveStack = currentStack[maxKey];
  // delete max key property from storage
  delete currentStack[maxKey];
  // return captured value
  return leaveStack;
};
// define size
stackMethods.size = function() {
  //return length of storage keys array
  return Object.keys(this.storage).length;
}

