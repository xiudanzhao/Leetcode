class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = j =1
        size = len(nums)
        while j < size:
            if nums[j] == nums[i-1]:
                j += 1
            else:
                nums[i] = nums[j]
                j += 1
                i += 1
        return min(i,size)