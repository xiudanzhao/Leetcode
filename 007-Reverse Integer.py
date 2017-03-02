class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        #python没有溢出现象，所以用0x7FFFFFFF
        if x ==0:
            return 0
        digits=[]
        sign=1啊
        if x < 0:
            sign=-1
        
        x=abs(x)
        while(1):
            res = x % 10
            x /= 10
            digits.append(res)
            if x == 0:
                break
        #翻转过来
        ret=0
        for i in digits:
            ret *= 10
            ret += i
        
        if ret > 0x7FFFFFFF:
            return 0
        
        return ret*sign