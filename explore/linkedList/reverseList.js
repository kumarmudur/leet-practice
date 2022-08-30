// Topic: LinkedList, Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n) | space: O(1)
const reverseList = function(head) {
    let newHead = null;
    while (head !== null) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};