class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        if n == 0:
            return []
        elif n == 1:
            return ["()"]
        ans = []
        i = 0
        while i<n:
            temp1=self.generateParenthesis(i)
            temp2=self.generateParenthesis(n-1-i)
            if len(temp1) == 0:
                for k in temp2:
                    ans.append("()"+ k)
            elif len(temp2) == 0:
                for j in temp1:
                    ans.append("("+j+")") 
            else:
                for j in temp1:
                    for k in temp2:
                        ans.append("("+j+")"+k)
            i += 1
        return ans