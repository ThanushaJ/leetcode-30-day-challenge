/*
Maximal Square

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4

*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix.length) return 0;
    let dpMatrix = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
    let max = 0;
    for(let i = 1;i<=matrix.length;i++){
        for(let j=1;j<=matrix[0].length;j++){
            if(matrix[i-1][j-1]==='1'){
                dpMatrix[i][j]=Math.min(dpMatrix[i][j-1],dpMatrix[i-1][j],dpMatrix[i-1][j-1])+1;
                max=Math.max(dpMatrix[i][j],max)
            }
        }
    }
    return max**2;
};
