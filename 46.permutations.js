/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (60.34%)
 * Likes:    3238
 * Dislikes: 95
 * Total Accepted:    536.3K
 * Total Submissions: 880.8K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) return [nums]  
  const res = []
  const permuteSub = (pre, last) => {
    if (last.length === 1) {
      res.push(pre.concat(last))
    } else {
      for (let i = 0; i < last.length; i++) {
        permuteSub(pre.concat(last[i]), last.slice(i+1).concat(last.slice(0, i)))
      }
    }
  }  
  permuteSub([], nums)
  return res
};
// @lc code=end

