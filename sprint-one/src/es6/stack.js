class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var currentStack = this.storage;
    var maxKey = 1;
    if (this.size()) {
      maxKey = Math.max.apply(Math, Object.keys(currentStack)) + 1;
    }
    currentStack[maxKey] = value;
  }

  pop() {
    var currentStack = this.storage;
    var maxKey = Math.max.apply(Math, Object.keys(currentStack));
    var leaveStack = currentStack[maxKey];
    delete currentStack[maxKey];
    return leaveStack;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}