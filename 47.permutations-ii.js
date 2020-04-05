/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (44.24%)
 * Likes:    1627
 * Dislikes: 57
 * Total Accepted:    320.4K
 * Total Submissions: 718.3K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length <= 1) return [nums]
  nums.sort((a, b) => a - b)
  const res = []
  const permutations = (left, size, list) => {
    if (left === size - 1) {
      res.push(list)
      return 
    }
    for (let i = left; i < size; i++) {
      if (i !== left && list[i] === list[left]) continue
      const tempList = list.slice(0, left).concat(list[i], list.slice(left, i), list.slice(i+1))
      permutations(left+1, size, tempList)
      // 去重是有顺序的
      while (i + 1 < size && list[i] === list[i + 1] ) i++
    }
  }
  permutations(0, nums.length, nums)
  return res
};
// @lc code=end

var permute = function(nums) {
  if (nums.length === 1) return [nums]  
  nums.sort((a, b) => a - b)
  const res = []
  const permuteSub = (pre, last) => {
    if (last.length === 1) {
      res.push(pre.concat(last))
    } else {
      for (let i = 0; i < last.length; i++) {
        permuteSub(pre.concat(last[i]), last.slice(i+1).concat(last.slice(0, i)))
        while ( i + 1 < last.length && last[i] === last[i+1]) i++
      }
    }
  }  
  permuteSub([], nums)
  return res
};

