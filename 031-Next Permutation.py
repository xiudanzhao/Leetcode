class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        size = len(nums)
        if size == 0 and size == 1:
            return nums
        i = size - 2
        while i >= 0:
            if nums[i] < nums[i+1]:
                j = i + 1
                while j < size:
                    if nums[j] <= nums[i]:
                        break
                    j += 1
                j -= 1
                nums[i],nums[j] = nums[j],nums[i]
                nums[i + 1:] = sorted(nums[i + 1:])
                return
            i -= 1
        middle = size/2
        k = 0
        while k < middle:
            nums[k],nums[size - 1 - k] = nums[size - 1 - k],nums[k]
            k += 1
        return