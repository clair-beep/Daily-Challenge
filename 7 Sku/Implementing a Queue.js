//solution using classes

class Queue {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  enqueue(item) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

// alternative using  function constructor syntax

var Queue = function () {
  this._queue = [];
};

Queue.prototype.enqueue = function (item) {
  this._queue.push(item);
};

Queue.prototype.dequeue = function () {
  return this._queue.shift();
};

Queue.prototype.size = function () {
  return this._queue.length;
};
