class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        #超时
        height.sort()
        m=0
        i=0
        while(i<len(height)-1):
            temp=(len(height)-i-1)*height[i]
            if temp>m:
                m=temp
        return m


        #自己见识短了，还能这样
        maxm=0
        i=0
        k=len(height)-1
        while(i<k):
            if height[i] < height[k]:
                maxm=max(maxm,(k - i)*height[i])
                i += 1
            else:
                maxm=max(maxm,(k - i)*height[k])
                k -= 1
        return maxm
                   
                    
                
            