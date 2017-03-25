# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergelist(self,l1,l2):
    	head = temp = ListNode(0)
    	if l1 == None and l2 == None:
    	    return None
    	while l1 or l2:
    		if l1 == None:
    			if l2 != None:
    				temp.val = l2.val
    				temp.next = l2.next
    			break
    		if l2 == None:
    			if l1 != None:
    				temp.val = l1.val
    				temp.next= l1.next
    			break
    		if l1.val > l2.val:
    			temp.val = l2.val
        		l2 = l2.next
        	else:
        		temp.val = l1.val
        		l1 = l1.next
        	temp.next = ListNode(0)
        	temp = temp.next
        return head
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        size = len (lists)
        if size == 0:
            return None
        if size == 1:
            return lists[0]
        n = size//2
        tmp1 = self.mergeKLists(lists[:n])
        tmp2 = self.mergeKLists(lists[n:])
        return self.mergelist(tmp1,tmp2)

    
  		# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergelist(self,l1,l2):
    	head = temp = ListNode(0)
    	if l1 == None and l2 == None:
    	    return None
    	while l1 or l2:
    		if l1 == None:
    			if l2 != None:
    				temp.val = l2.val
    				temp.next = l2.next
    			break
    		if l2 == None:
    			if l1 != None:
    				temp.val = l1.val
    				temp.next= l1.next
    			break
    		if l1.val > l2.val:
    			temp.val = l2.val
        		l2 = l2.next
        	else:
        		temp.val = l1.val
        		l1 = l1.next
        	temp.next = ListNode(0)
        	temp = temp.next
        return head
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        size = len (lists)
        if size == 0:
            return None
        if size == 1:
            return lists[0]
        n = size//2
        tmp1 = self.mergeKLists(lists[:n])
        tmp2 = self.mergeKLists(lists[n:])
        return self.mergelist(tmp1,tmp2)

    
  		