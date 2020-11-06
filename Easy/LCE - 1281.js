/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    let add = 0
    let prod = 1
    while(n!=0) {
        let temp = n%10
        add += temp
        prod *= temp
        n = Math.floor(n/10)
    }
    
    return prod-add
    
};