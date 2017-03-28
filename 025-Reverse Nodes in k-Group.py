# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseKGroup(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if head == None or k == 0 or k == 1:
            return head
        
        p1 = head
        p2 = p1
        l = []
        i = 0
        while p2:
            l.append(p2.val)
            i += 1
            if i == k:
                while i > 0:
                    p1.val = l.pop()
                    p1 =  p1.next
                    i -= 1
            p2 = p2.next
        return head