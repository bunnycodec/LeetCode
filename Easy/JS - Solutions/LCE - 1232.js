/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(arr) {
    
    if(arr.length===2) return true
    let [x1, y1] = arr[0]
    let [x2, y2] = arr[1]
    
    if(x2-x1 === 0) return arr.every(([x]) => x === x1)
    const slope = (y2-y1) / (x2-x1)
    const b = y1 - slope * x1
    return arr.every(([x, y]) => y === slope * x + b)
    
}

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.