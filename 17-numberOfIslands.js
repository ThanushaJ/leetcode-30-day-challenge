/*
Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var func_dfs = function(grid,i,j){
    if(i<0 || i>=grid.length) return 0;

    if (j<0 || j>=grid[i].length) return 0;

    if(grid[i][j]=='0') return 0;

    grid[i][j]='0';
    func_dfs(grid,i+1,j); //bottom
    func_dfs(grid,i-1,j); //up
    func_dfs(grid,i,j+1); //right
    func_dfs(grid,i,j-1); //left

    return 1;
}
var numIslands = function(grid) {
    if(grid==null || grid.length ==0)
        return 0;
    let Islands = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]=='0')
                continue;
            Islands += func_dfs(grid,i,j);
        }
    }
    return Islands;
};
