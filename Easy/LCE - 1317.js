/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
    let i=1
    while(true) {
        if(check(n-i) && check(i))
            return [i, n-i]
        i++
    }
    
    function check(n) {
        return Array.from(n.toString()).indexOf('0') < 0
    }
    
};