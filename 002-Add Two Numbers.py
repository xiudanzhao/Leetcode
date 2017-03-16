# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        #头指针
        ret=ListNode(0)
        #指向当前的指针
        cul=ret
        sum=0
        while True:
            if l1 !=None:
                sum +=  l1.val
                l1 = l1.next
            if l2 != None:
                sum += l2.val
                l2 = l2.next
            cul.val = sum %10
            sum /= 10
            #0不能是最高位
            if l1 !=None  or l2!=None or sum != 0:
                cul.next=ListNode(0)
                cul=cul.next
            else:
                break
        
        return ret