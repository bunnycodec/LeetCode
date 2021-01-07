/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    if(rowIndex==0) {
        return [1]
    } else if(rowIndex==1) {
        return [1,1]
    } else {
        let ans = [1,1], temp
        rowIndex--
        while(rowIndex--) {
            temp = ans
            ans = []
            for(let i=0; i<temp.length-1; i++) {
                ans[i] = temp[i] + temp[i+1] 
            }
            ans = [1, ...ans, 1]
        }
        return ans
    }
    
};


// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?

 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33