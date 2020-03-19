/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1, k = nums.length - 1, sum = 0 - nums[i]
      while (j < k) {
        if (nums[j] + nums[k] === sum) {
          res.push([nums[i], nums[j], nums[k]])
          while (nums[j+1] === nums[j]) j++
          while (nums[k-1] === nums[k]) k--
          k--
          j++
        } else if (nums[j] + nums[k] < sum) {
          while (nums[j+1] === nums[j]) j++
          j++
        } else {
          while (nums[k-1] === nums[k]) k--
          k--
        }
      }
      while (nums[i] === nums[i+1]) i++
    }
    return res
};
// @lc code=end

