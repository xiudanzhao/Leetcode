class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        a = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
        b = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
        d = {}
        i=0
        ans=0
        while i<len(a):
            d[b[i]]=a[i]
            i += 1
            while len(s)>0:
                if s[:2] in d:
                    ans += d[s[:2]]
                    s=s[2:]
                else:
                    ans += d[s[:1]]
                    s=s[1:]
                    return ans



        #anothor way to solve this problem
        class Solution(object):
            def romanToInt(self, s):
            """
            :type s: str
            :rtype: int
            """
            d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
            ans = 0
            size = len(s)
            i = 0
            while i < size:
                if i > 0 and d[s[i]] > d[s[i - 1]]:
                    ans += d[s[i]] - 2 * d[s[i - 1]]
                else:
                    ans += d[s[i]]
                i += 1
            return ans