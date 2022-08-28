// Topic: LinkedList, Recursion

const ListNode = function(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const arrToList = (arr) => arr.reduceRight((last, val)=> last = last === null ? new ListNode(val) : new ListNode(val, last),null);

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    let currentNode = head;
    let prevNode = head;
    while (currentNode !== null) {
        if (currentNode.val === val) {
            const next = currentNode.next;
            prevNode.next = next;
            currentNode = next;
        } else {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    if (head?.val === val) return head.next;
    return head;
};

removeElements([1,2,6,3,4,5,6], 6);