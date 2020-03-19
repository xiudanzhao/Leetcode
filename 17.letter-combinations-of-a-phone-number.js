/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (44.87%)
 * Likes:    3267
 * Dislikes: 372
 * Total Accepted:    539K
 * Total Submissions: 1.2M
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const numToLetterMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  
  let res = []

  const comb = (l1, l2) => {
    if (l1.length === 0) return l2
    if (l2.length === 0) return l1
    const res = []
    for (let i = 0; i < l1.length; i++) {
      for (let j = 0; j < l2.length; j++) {
        res.push(l1[i] + l2[j])
      }
    }
    return res
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i]) {
      res = comb(res, numToLetterMap[digits[i]].split(''))
    }
  }

  return res
    
};
// @lc code=end

