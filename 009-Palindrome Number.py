class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        #竟然答对了，没有判断是否出界
        if x < 0:
            return False
        s=str(x)
        size=len(s)
        if size == 1:
            return True
        if size%2 == 1:
            middle=size/2
            i=0
            while (i <= middle):
                l=middle-i
                r=middle+i
                if s[l] != s[r]:
                    return False
                i += 1
            return True
        else:

            right = int(size/2)
            
            left = int(right -1)

            i=0
            while (i <= left):
                l=left-i
                r=right+i
                if s[l] != s[r]:
                    return False
                i += 1
            return True

        #再来一种算法吧，很简单
        if x < 0:
            return False
        #替代    
        b=x
        ans=0
        while(x>0):
            ans = ans * 10 + x % 10
            if ans > 2147483647:
                return False
            x //= 10
        if ans == b:
            return True
        return False 
if __name__ == '__main__':
    s=Solution()
    print(s.isPalindrome(567765))