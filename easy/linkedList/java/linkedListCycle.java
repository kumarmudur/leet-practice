package easy.linkedList.java;

import java.util.HashSet;
import java.util.Set;

// Topic: Hash Table, Linked List, Two Pointers

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}

// time: O(n) | O(1)
public class linkedListCycle {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null)
            return false;

        ListNode fast = head;
        ListNode slow = head;

        while (fast.next != null && fast.next.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (slow == fast)
                return true;
        }
        return false;
    }
}

// time: O(n) | space: O(n)
public class linkedListCycle2 {
    public boolean hasCycle(ListNode head) {
        Set<ListNode> list = new HashSet<>();

        while (head != null) {
            if (list.contains(head))
                return true;

            list.add(head);
            head = head.next;
        }
        return false;
    }
}
