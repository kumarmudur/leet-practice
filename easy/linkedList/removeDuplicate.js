// Topic: LinkedList
// Input: head = [1,1,2] => [1, 2];
// Input: head = [1,1,2,3,3] => [1, 2, 3];

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const ListNode = function(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const arrToList = (arr) => arr.reduceRight((last, val)=> last = last === null ? new ListNode(val) : new ListNode(val, last),null);

// Solution
// time: O(n) | space: O(1)
const deleteDuplicates = function(head) {
    head = arrToList(head);
    let current = head;
    while(current && current.next){
       if(current.val === current.next.val){
           let place = current.next;
           current.next = place.next;
       }else{
        current = current.next;
       }
    }
    return head;
};

console.log(deleteDuplicates([1, 1, 2, 3, 3, 4]));