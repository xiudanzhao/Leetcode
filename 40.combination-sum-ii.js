/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (45.65%)
 * Likes:    1409
 * Dislikes: 55
 * Total Accepted:    294.6K
 * Total Submissions: 640.2K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  
  if (target < candidates[0]) return []
  for (let i = candidates.length - 1; i >= 0; i--) {
    if (candidates[i] > target) candidates.splice(i, 1)
    else break
  }
  if (candidates.length === 0) return []

  const res = []
  const combination = (pre, list, sum) => {
    if (sum === 0) {
      res.push(pre)
      return 
    }
    if (list.length === 0) return 
    if (sum < list[0]) return
    let i = 1
    while (list[i] === list[0]) i++
    const maxLen = Math.min(Math.floor(sum / list[0]), i) 
    for (let j = 0; j <= maxLen; j++) {
      combination(pre.concat((new Array(j)).fill(list[0])), list.slice(i), sum - j * list[0])
    }
  }
  combination([], candidates, target)
  return res
};
// @lc code=end

