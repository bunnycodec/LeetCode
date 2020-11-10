/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let ans = [], count=1
    
    if(n%2)
        ans.push(0)
    n--
    
    while(n>0) {
        n -= 2
        ans = [count*-1, ...ans, count*1]
        count++
    }
    
    return ans
    
};