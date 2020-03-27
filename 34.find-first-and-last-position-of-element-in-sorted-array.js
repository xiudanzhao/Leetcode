/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (35.09%)
 * Likes:    2767
 * Dislikes: 125
 * Total Accepted:    438.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const res = [-1, -1]
  let l = 0, r = nums.length - 1
  while (l <= r) {
    if (nums[l] > target) break
    if (nums[r] < target) break
    if (nums[l] < target) l++
    if (nums[r] > target) r--
    if (nums[l] === target) res[0] = l
    if (nums[r] === target) res[1] = r
    if (nums[l] === nums[r]) break
  }
  return res
};
// @lc code=end

