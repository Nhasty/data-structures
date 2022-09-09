var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create an instance with prototypal lookup to queueMethods
  var someInstance = Object.create(queueMethods);
  // add storage to instance
  someInstance.storage = {};
  //return instance
  return someInstance;
};

var queueMethods = {};
// add enqueue
queueMethods.enqueue = function(value) {
  // define current q
  var currentQ = this.storage;
  // define q position equal to 1
  var qPosition = 1;
  // if current q is not empty
  if (this.size()) {
  // adjust q position to be max q position plus one
    qPosition = Math.max.apply(Math, Object.keys(currentQ)) + 1;
  }
  // add value to current q at q position
  currentQ[qPosition] = value;
};
// add dequeue
queueMethods.dequeue = function() {
  // define current q
  var currentQ = this.storage;
  // define min q position
  var minKey = Math.min.apply(Math, Object.keys(currentQ));
  // capture value of current q at min q position
  var leaveQ = currentQ[minKey];
  // delete value of current q at min q position
  delete currentQ[minKey];
  // return captured value
  return leaveQ;
};
// add size
queueMethods.size = function() {
  // return length of keys array of current q
  return Object.keys(this.storage).length;
};
