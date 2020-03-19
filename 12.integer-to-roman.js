/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = ''
  const roList = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  for (let i = 0; i < roList.length; i++) {
    while (num >= roList[i][0]) {
      res += roList[i][1]
      num -= roList[i][0]
    }
  }
  return res
    
};
// @lc code=end

