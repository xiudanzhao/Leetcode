class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        size = len(nums)
        if size < 3:
            return 0
        ans = nums[0] + nums[1] + nums[2]
        i = 0
        nums.sort()
        while i < size - 2:
            j = i + 1
            k = size -1
            while j < k:
                temp = nums[i] + nums[j] + nums[k]
                if temp < target:
                    #优化，相当于提前进行前一步
                    if nums[i] + nums[j] + nums[j+1] >= target:
                        if nums[i] + nums[j] + nums[j+1] - target < abs(target - ans):
                            ans = nums[i] + nums[j] + nums[j+1] 
                            break
                        
                    j += 1
                    #比较这步
                    if abs(target - ans) > abs(target - temp):
                        ans = temp
                elif temp > target:
                    #优化
                    if nums[i] + nums[k] + nums[k-1] <= target:
                        if target - nums[i] - nums[k] - nums[k-1]   < abs(target - ans):
                            ans = nums[i] + nums[k] + nums[k+1] 
                            break
                    k -= 1
                    if abs(target - ans) > abs(target - temp):
                        ans = temp
                else:
                    ans = temp
                    break
            
            i += 1
        return ans