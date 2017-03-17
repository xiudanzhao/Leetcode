# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if l1 == None and l2 == None:
        	return None
    	#看成指针指向那个ListNode
    	tmp = ans = ListNode(0)

        while l2 or l1:        		
        	if l1 == None:
        		if l2 != None:
        			tmp.val = l2.val
        			tmp.next = l2.next
        		break
        	if l2 == None and l1:
        		tmp.val = l1.val
        		tmp.next = l1.next
        		break

        	if l1.val > l2.val:
        		tmp.val = l2.val
        		l2 = l2.next
        	else:
        		tmp.val = l1.val
        		l1 = l1.next

        	tmp.next = ListNode(0)
        	tmp = tmp.next
        return ans
        	