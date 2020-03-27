/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (33.62%)
 * Likes:    3948
 * Dislikes: 409
 * Total Accepted:    597.5K
 * Total Submissions: 1.8M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (target === nums[0]) {
    return 0
  } else if (target > nums[0]) {
    for(let i = 1; i < nums.length; i++) {
      if (nums[i] === target) return i
      if (nums[i] < nums[i-1]) break
    }
  } else {
    for(let i = nums.length - 1; i > 0; i--) {
      if (nums[i] === target) return i
      if (nums[i] > nums[(i+1) % nums.length]) break
    }
  }
  return -1
    
};
// @lc code=end

