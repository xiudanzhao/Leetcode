class Solution(object):
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        size=len(nums)
        if size < 4:
        	return []
        nums.sort()
        ans=[]
       	i=0
       	#最外层循环
       	while i<size - 3:
       		j = i + 1
       		while j < size -2:
       			m = j + 1
       			n = size - 1
       			while m<n:
       				if nums[i] + nums[j] + nums[m] + nums[m+1] > target or nums[i] + nums[j] + nums[n-1] + nums[n] < target:
       					break
       				tmp = nums[i] + nums[j] + nums[m] + nums[n]
       				if tmp == target:
       					ans.append([nums[i], nums[j], nums[m], nums[n]])
       					m += 1
       					while m < size -1:
       						if nums[m] != nums[m-1]:
       							break
       						m += 1

       					n -= 1
       					while n > m:
       						if nums[n] != nums[n+1]:
       							break
       						n -= 1

       				elif tmp < target:
       					m += 1
       					
       				else:
       					n -= 1
       					
	       		j += 1
	       		while j < size - 2:
	       			if nums[j] != nums[j-1]:
	       				break
	       			j += 1
       		i += 1
       		while i < size -3:
       			if nums[i] != nums[i-1]:
       				break
       			i += 1
      	return ans