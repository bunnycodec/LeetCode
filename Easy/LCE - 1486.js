/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    
    let ans
    
    while(n--) {
        ans = ans^start
        start = start+2;
    }
    return ans
};