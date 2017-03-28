# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head == None:
        	return head
        p1 = head
        p2 = head.next
       	temp = 0
       	while p1 != None and p2 != None:
       		temp = p1.val
       		p1.val = p2.val
       		p2.val = temp
       		#重点在这个判断，如果第三个就是None，之后这个肯定没有next属性了。
       		if p2.next == None:
       		    break
       		p1 = p2.next
       		p2 = p1.next
       	return head 