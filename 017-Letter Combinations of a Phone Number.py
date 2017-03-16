class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        d = {0:'',1:'*',2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}
        ans=[]
        tmp=[]
        for i in digits:
        	for s in d[int(i)]:
        		#对于第一个数字,这样确定有几个字符串
        		if len(ans) == 0:
        			tmp.append(s)
        		#对已有的字符串，每个都添加一个字母
        		for sub in ans:
        			tmp.append(sub+s)
        	ans = tmp
        	#每次完成后，都需要清空
        	tmp=[]
      	return ans