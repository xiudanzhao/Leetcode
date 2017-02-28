class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """

        #最简单的方法，就是依次算出来，按照逻辑顺序
        longest = 0
        if s == '':
            return ''
        for left in range(len(s)):
            for right in range(len(s),left,-1):
                if s[left:right] in (s[left:right])[::-1]:
                    if (right-left)>longest:
                        longest=right-left
                        substring=s[left:right]
                        break
                    else:
                        break
        return substring


        #第二种方法那么我们可以初始化回文子字符串为s[0]，长度是1，从第一个字符开始往两边找，记录从这个字符为中间字符搜索的回文字符串的长度，如果大于当前记录的回文，那么替换当前的字符串及其长度。从中间找到了最后一位或者以最后一个字符为中间key字符的时候结束。这种方法最坏的情况是’ababababababababa……bac’，这种情况的时间复杂度是（0 + 1 + 2 +…+n - 1） = (O(n^2))，由于字符串长度为1000，所以（O（n^2））的时间复杂度是可以接受的
        size = len(s)
        if size == 1:
            return s
        if size == 2:
            if s[0] == s[1]:
                return s
            return s[0]
        maxp = 1
        ans = s[0]
        i = 0
        while i < size:
            j = i + 1
            while j < size:
                if s[i] == s[j]:
                    j += 1
                else:
                    break
            k = 0
            while i - k - 1 >= 0 and j + k<= size - 1:
                if s[i- k - 1] != s[j + k]:
                    break
                k += 1
            if j - i + 2*k > maxp:
                maxp = j- i + 2*k
                ans = s[i - k:j + k]
            if j + k == size - 1:
                break
            i = j
        return ans