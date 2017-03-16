class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s
        result=""
        for i in range(numRows):
            step1=(numRows-i-1)*2
            step2=i*2
            pos=i
            if pos < len(s):
                result += s[pos]
            while(1):
                pos += step1
                if pos >= len(s):
                    break
                if step1:
                    result += s[pos]
                pos += step2
                if pos >= len(s):
                    break
                if step2:
                    result += s[pos]
        return result