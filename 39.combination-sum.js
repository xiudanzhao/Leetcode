/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (53.33%)
 * Likes:    3145
 * Dislikes: 100
 * Total Accepted:    481.1K
 * Total Submissions: 894.8K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
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
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    if (target < candidates[0]) return []
    for (let i = candidates.length - 1; i >= 0; i--) {
      if (candidates[i] > target) candidates.splice(i, 1)
      else break
    }
    if (candidates.length === 0) return []

    const res = []

    const subCombinationSum = (pre, list, sum) => {
      if (sum === 0) {
        res.push(pre)
        return
      }
      if (list.length === 0) return 
      if (sum < list[0]) return
      const cur = list[list.length - 1]
      let maxCount = Math.floor(sum/cur) 
      for (;maxCount>=0; maxCount--) {
        subCombinationSum(pre.concat((new Array(maxCount)).fill(cur)), list.slice(0, -1), sum - maxCount * cur)
      }
      return
    }

    subCombinationSum([], candidates, target)
    return res  
};
// @lc code=end

