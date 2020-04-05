/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 *
 * https://leetcode.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (53.49%)
 * Likes:    2524
 * Dislikes: 206
 * Total Accepted:    361.3K
 * Total Submissions: 667.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * You are given an n x n 2D matrix representing an image.
 * 
 * Rotate the image by 90 degrees (clockwise).
 * 
 * Note:
 * 
 * You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the
 * rotation.
 * 
 * Example 1:
 * 
 * 
 * Given input matrix = 
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Given input matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ], 
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (matrix.length === 0 || matrix.length === 1) return matrix

  const getPositions = (i ,j, length) => {
    const next = (i, j) => [j, length - 1 - i]
    const res = [[i, j]]
    let nextPosition = next(i, j, length) 
    while (nextPosition[0]!== i || nextPosition[1]!== j) {
      res.push(nextPosition)
      nextPosition = next(nextPosition[0], nextPosition[1], length)
    }
    return res
  }
  
  let circles = Math.floor(matrix.length / 2)
  for (let i = 0; i < circles; i++) {
    for (let j = i; j < matrix.length - 1 - i; j++) {
      const positions = getPositions(i, j, matrix.length)
      const tempValue = matrix[positions[3][0]][positions[3][1]]
      for (let k = 3; k > 0 ; k--) {
        matrix[positions[k][0]][positions[k][1]] = matrix[positions[k - 1][0]][positions[k - 1][1]]
      }
      matrix[positions[0][0]][positions[0][1]] = tempValue
    }
  }
  return matrix 
};
// @lc code=end

