/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    let primary=0, secondary=0, c=mat.length-1
    for(let i=0; i<mat.length; i++) {
        primary += mat[i][i]
        secondary += mat[i][c--]
    }
        
    c = Math.floor(mat.length/2)
    if(mat.length%2==0)
        return primary+secondary
    return primary+secondary-mat[c][c]
    
};



// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

// Example 1:


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5
 

// Constraints:

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100