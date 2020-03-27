/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.18%)
 * Likes:    972
 * Dislikes: 4669
 * Total Accepted:    250.8K
 * Total Submissions: 1.6M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero, which means losing its
 * fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) =
 * -2.
 * 
 * Example 1:
 * 
 * 
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * Explanation: 10/3 = truncate(3.33333..) = 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * Explanation: 7/-3 = truncate(-2.33333..) = -2.
 * 
 * 
 * Note:
 * 
 * 
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 2^31 − 1 when the
 * division result overflows.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;
  if (divisor === 0) return isPositive ? Infinity : -Infinity;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  
  let res = 0
  let d1 = Math.abs(dividend)
  let d2 = Math.abs(divisor) 

  let count = 1
  let base = d2
  while (d1 >= d2) {
    count = 1
    base = d2
    while (base <= (d1 >> 1)) {
      base << 1
      count << 1
    }
    res += count
    d1 -= base
  }

  return isPositive ? res : -res
    
};
// @lc code=end

