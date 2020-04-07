/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (52.73%)
 * Likes:    2982
 * Dislikes: 166
 * Total Accepted:    593.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * Note:
 * 
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ans = {}
    for (let i = 0; i < strs.length; i++) {
      const tmp = strs[i].slice().split('')
      tmp.sort((a, b) => a.charCodeAt() - b.charCodeAt())
      const strTmp = tmp.join('')
      if (ans[strTmp]) {
        ans[strTmp].push(strs[i])
      } else {
        ans[strTmp] = [strs[i]]
      }
    }
    const res = []
    Object.keys(ans).map((key) => {
      res.push(ans[key])
    })
    return res
};
// @lc code=end

