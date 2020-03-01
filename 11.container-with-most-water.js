/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length === 2) {
      return Math.min(height[0], height[1])
    }

    let res = 0 
    for(let i = 0; i < height.length - 1; i++) {
      for (let j = height.length - 1; j > i; j--) {
        const min = Math.min(height[i], height[j])
        res = Math.max(res, min * (j - i))
      }
    }
    return res 
};
// @lc code=end

