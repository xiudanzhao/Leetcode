class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if len(nums)<3:
            return []
        ans=[]
        i=0
        size=len(nums)
        nums.sort()
        while i<size -2:
            j = i + 1
            k = size - 1
            while j<k:
                tmp = 0 - nums[i]
                if nums[j] + nums[k] < tmp:
                    j += 1
                elif nums[j] + nums[k] > tmp:
                    k -= 1
                else:
                    ans.append([nums[i],nums[j],nums[k]])
                    while j < size-1:
                        if nums[j] != nums[j+1]:
                            break
                        j += 1
                    while k > j:
                        if nums[k] != nums[k-1]:
                            break
                        k -= 1
                    j += 1
                    k -= 1
            i += 1
            while i < size-1:
                if nums[i] != nums[i-1]:
                    break
                i += 1
        return ans