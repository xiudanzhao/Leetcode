/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (48.33%)
 * Likes:    1848
 * Dislikes: 156
 * Total Accepted:    421.4K
 * Total Submissions: 867.4K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let start = new ListNode()
  start.next = head
  let l = start, r = start
  while (r.next && r.next.next) {
    l = r
    r = r.next.next
    // copy一个新的
    const temp = l.next
    temp.next = r.next

    l.next = r
    r.next = temp
    r = temp

  }
  return start.next
};
// @lc code=end

