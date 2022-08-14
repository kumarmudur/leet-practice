// Topic: Queue

var LinkedList = function(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = null;
    this.tail = null;
    this.maxSize = k;
    this.length = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.length === this.maxSize) return false;
    let list = new LinkedList(value);
    if (!this.head) {
        this.head = list;
        this.tail = list;
    } else {
        this.tail.next = list;
        this.tail = list;
    }
    this.length++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.length) return false;
    this.head = this.head.next;
    this.length--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.length ? this.head.val : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.length ? this.tail.val : -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return !this.length;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */