class Solution(object):
    def match(self,s,d,size):
        i = 0
        while i <= len(s) - size:
            tmp = s[i:i+size]
            print tmp
            if tmp in d and d[tmp]!=0:
                d[tmp] -= 1
            else:
                return False
            i += size
        return True
    def findSubstring(self,s,words):
        wordSize = len(words)
        if wordSize == 0:
            return []
        sizeWord = len(words[0])
        sizeS = len(s)
        ans = []
        d = {}
        for word in words:
            if word in d:
                d[word] += 1
            else:
                d[word] = 1
        i = 0
        while i <= sizeS - wordSize*sizeWord:
            tmpd = d.copy()
            t1 = self.match(s[i:i+wordSize*sizeWord],tmpd,sizeWord)
            if t1:
                ans.append(i)
            i += 1
        return ans
if __name__ == '__main__':
	a = Solution()
	print a.findSubstring("barfoothefoobarman",["foo", "bar"]

)