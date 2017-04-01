class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if len(needle) == 0:
            return 0
        if len(needle) > len(haystack) :
            return -1
        ans = -1
        i = 0
        size = len(haystack)
        s_needle = len(needle)
        while i < size:
            if size - i < len(needle):
                return  -1
            if haystack[i] == needle[0]:
                j = 1
                k = i + 1
                while j < s_needle:
                    if haystack[k] != needle[j]:
                        break
                    j += 1
                    k += 1
                if j == s_needle:
                    ans = i
                    break
            i += 1
        return ans