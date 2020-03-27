/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (59.84%)
 * Likes:    4284
 * Dislikes: 234
 * Total Accepted:    483.6K
 * Total Submissions: 803.7K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []
  const back = (prefix, front, end, n) => {
    if (prefix.length === n * 2) {
      res.push(prefix)
      return
    }
    else {
      if (front < n) {
        back(prefix + '(', front + 1, end, n)
      }
      if (end < front) {
        back(prefix + ')', front, end + 1, n)
      }
    }
  }
  back('', 0, 0, n)
  return res
};
// @lc code=end

