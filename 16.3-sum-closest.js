/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.72%)
 * Likes:    1697
 * Dislikes: 120
 * Total Accepted:    430.9K
 * Total Submissions: 942.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = nums[0] + nums[1] + nums[nums.length - 1]
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
          let l = i + 1, r = nums.length - 1
          while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum < target) {
              while(nums[l] === nums[l+1]) l++
              l++
            } else if (sum > target) {
              while(nums[r] === nums[r-1]) r--
              r--
            } else {
              return target
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) {
              res = sum
            }
          }
        }
    }
    return res
};
// @lc code=end

