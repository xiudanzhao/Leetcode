class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if len(strs) == 0:
            return ""
        s=strs[0]
        i=0
        for st in strs:
            if st == s:
                continue
            while i< min(len(s),len(st)):
                if st[i] != s[i]:
                    break
                i += 1
            s = s[:i]
            i=0
        return s