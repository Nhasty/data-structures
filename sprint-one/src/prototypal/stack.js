var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create instance that uses prototypal lookup to stackMethods
  var someInstance = Object.create(stackMethods);
  // add storage to instance
  someInstance.storage = {};
  // return instance
  return someInstance;
};

var stackMethods = {};
// add push
stackMethods.push = function(value) {
  // define current stack
  var currentStack = this.storage;
  // define max key variable set equal to 1
  var maxKey = 1;
  // if current stack is not empty
  if (this.size()) {
    // set max key to current max key plus one
    maxKey = Math.max.apply(Math, Object.keys(currentStack)) + 1;
  }
  currentStack[maxKey] = value;
  // add value to current stack at max key
};

// add pop
stackMethods.pop = function() {
  //define current stack
  var currentStack = this.storage;
  // define max key variable
  var maxKey = Math.max.apply(Math, Object.keys(currentStack));
  // capture value of current stack at max key
  var leaveStack = currentStack[maxKey];
  // delete value current stack at max key
  delete currentStack[maxKey];
  // return captured value
  return leaveStack;
};
// add size
stackMethods.size = function() {
// return length of keys array of current stack
  return Object.keys(this.storage).length;
};
