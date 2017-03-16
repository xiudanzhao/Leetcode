class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        #
        if len(s)<1 or len(p)<1:
            return False
        if s[0] == p[0] or p[0] == '.':
                if len(p) >= 2:
                    if p[1] != '*':
                        return self.isMatch(s[1:],p[1:])
                    #p[1]=='*'
                    if len(p) == 2:
                        if p[0] == '.':
                            return True
                        else:
                            for i in s:
                                if i != p[0]:
                                    return False
                            return True
                    else:
                        if p[0] == '.':
                            i=0
                            while(i<len(s)):
                                if self.isMatch(s[i:],p[2:]):
                                    return True
                                i += 1
                            return False
                        else:
                            index=0
                            while(index < len(s)):
                                if s[index]==p[0]:
                                    index += 1
                            a=0
                            while(a <= index):
                                if self.isMatch(s[a:],p[2:]):
                                    return True
                                a += 1
                            return False 
                        
           
                elif len(s) == 1:#len(s)=len(p)=1
                    return True
                else:#len(s)>len(p)=1
                    return False
           
        elif s[0] != p[0]:
            if len(p) >= 2:
                if p[1] == '*':
                    return self.isMatch(s,p[2:])
            return False   
        else:
                return False
if __name__ == '__main__':
    s=Solution()
    print(s.isMatch("aab","c*a*b"))