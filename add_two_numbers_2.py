# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        stack1,stack2=[],[]
        while l1:
            stack1.append(l1.val)
            l1=l1.next
        while l2:
            stack2.append(l2.val)
            l2=l2.next
        head=ListNode(0)
        var=carry=0
        #商不是0,也必须要继续循环
        while len(stack1)>0 or len(stack2)>0 or carry:
            var=carry
            if len(stack1)>0:
                var += stack1.pop()
            if len(stack2)>0:
                var += stack2.pop()
                
            carry,var=divmod(var,10)
            pre=ListNode(var)gitgggg
            pre.next=head.next
            head.next=pre
        return head.next