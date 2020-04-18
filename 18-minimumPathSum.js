/*
Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var rows = grid.length-1;
    var cols = grid[0].length-1;
    for(let i=0;i<=rows;i++){
        for(let j=0;j<=cols;j++){
            if(!i && !j) continue;
            else if(i && j) grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j]);
            else if(i===0) grid[i][j] += grid[i][j-1];
            else if(j===0) grid[i][j] += grid[i-1][j];

        }
    }
    return grid[rows][cols];
};
