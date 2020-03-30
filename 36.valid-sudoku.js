/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (46.72%)
 * Likes:    1337
 * Dislikes: 424
 * Total Accepted:    322.2K
 * Total Submissions: 685.4K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * 
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being 
 * ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 * 
 * 
 * Note:
 * 
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const isRepetition = (begin, end, map) => {
    const a = new Array(9)
    for (let i = begin[0]; i <= end[0]; i++) {
      for (let j = begin[1]; j <= end[1]; j++) {
        if (map[i][j] === '.') continue
        if (a[map[i][j]] === undefined) {
          a[map[i][j]] = true
        } else {
          return true
        }
      }
    }
    return false
  }

  for (let i = 0; i < 9; i++) {
    if (isRepetition([i, 0], [i, 8], board)) return false
  }
  for (let i = 0; i < 9; i++) {
    if (isRepetition([0, i], [8, i], board)) return false
  }

  for(let i = 0; i < 9;) {
    for (let j = 0; j < 9;) {
      if (isRepetition([i, j], [i+2, j+2], board)) return false
      j += 3
    }
    i += 3
  }
  return true    
};
// @lc code=end

