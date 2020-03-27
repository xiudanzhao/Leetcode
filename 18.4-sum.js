/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (32.54%)
 * Likes:    1575
 * Dislikes: 295
 * Total Accepted:    302.5K
 * Total Submissions: 926.1K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = []
  nums.sort((a, b) => a - b)
  const twoSum = (list, sum, preList) => {
    let l = 0, r = list.length - 1
    const res = []
    while (l < r) {
      if (list[l] + list[r] < sum) {
        while(list[l] === list[l+1]) l++
        l++
      } else if (list[l] + list[r] > sum) {
        while(list[r] === list[r-1]) r--
        r--
      } else {
        res.push(preList.concat([list[l], list[r]]))
        while(list[l] === list[l+1]) l++
        while(list[r] === list[r-1]) r--
        r--
        l++
      }
    }
    return res
  }

  for(let i = 0; i < nums.length - 3; i++) {
    if (i ===0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          res = res.concat(twoSum(nums.slice(j + 1, nums.length), target - nums[i] - nums[j], [nums[i], nums[j]]))
        }
      }
    }
  }
  return res 
};
// @lc code=end

