# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        #同时进行两个指针，相隔n个
        #必须加上一个指针指向头部，因为删除，中间必须间隔的node，如果在原来的链上，n=1且head只有一个，就没办法了
        ans = ListNode(0)
        ans.next = head
        i=0
        pre = ans
        end = ans
        while i < n:
        	pre = pre.next
        	i += 1
        while pre.next:
        	end = end.next
        	pre = pre.next
        end.next = end.next.next
        return ans.next