class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var currentQ = this.storage;
    var qPosition = 1;
    if (this.size()) {
      qPosition = Math.max.apply(Math, Object.keys(currentQ)) + 1;
    }
    currentQ[qPosition] = value;
  }

  dequeue() {
    var currentQ = this.storage;
    var minKey = Math.min.apply(Math, Object.keys(currentQ));
    var leaveQ = currentQ[minKey];
    delete currentQ[minKey];
    return leaveQ;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
