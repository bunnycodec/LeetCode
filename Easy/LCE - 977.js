/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    
    return A.map(val => {
        return val*val
    }).sort(function(a, b) {return a-b})
    
};