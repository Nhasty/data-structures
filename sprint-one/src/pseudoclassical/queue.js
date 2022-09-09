var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {

  var currentQ = this.storage;
  var qPosition = 1;
  if (this.size()) {
    qPosition = Math.max.apply(Math, Object.keys(currentQ)) + 1;
  }
  currentQ[qPosition] = value;
};

Queue.prototype.dequeue = function() {
  var currentQ = this.storage;
  var minKey = Math.min.apply(Math, Object.keys(currentQ));
  var leaveQ = currentQ[minKey];
  delete currentQ[minKey];
  return leaveQ;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


