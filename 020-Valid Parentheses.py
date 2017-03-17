class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        i = None
        l = []
        d = {'(':')','[':']','{':'}'}
        for sub in s:
        	if sub in d:
        		l.append(sub)
        	elif sub in [')','}',']']:
        		if len(l)<1:
        			return False
        		if d[l.pop()] != sub:
        			return False
        if len(l)>0:
        	return False
        return True